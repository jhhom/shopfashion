import {
  LazyRoute,
  AnyRoute,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { z } from "zod";

import { HomePage } from "~/routes/pages/Home/page";

import { AppRootLayout } from "~/routes/pages/layouts/ECommerce.layout";

import {
  Page404Page,
  Page404WithLayoutPage,
} from "~/routes/pages/Page404/page";

const rootRoute = createRootRoute({
  component: AppRootLayout,
  notFoundComponent: Page404WithLayoutPage,
});

const productListingFilterSchema = z.object({
  price_min: z.number().optional().catch(undefined),
  price_max: z.number().optional().catch(undefined),
  sort_price: z.enum(["asc", "desc"]).optional().catch(undefined),
});

const productDetailsSearchSchema = z.object({
  from_taxon: z.string().optional().catch(""),
});

type LazyLoadingRoute = Promise<LazyRoute<AnyRoute>>;

type ProductListingFilter = z.infer<typeof productListingFilterSchema>;

const routes = {
  site: {
    home: createRoute({
      getParentRoute: () => rootRoute,
      path: "/",
      component: HomePage,
    }),
    productReviews: createRoute({
      getParentRoute: () => rootRoute,
      path: "/product/$productId/reviews",
    }).lazy(
      (): LazyLoadingRoute =>
        import("./pages/ProductReviews/page").then((d) => d.productReviewsRoute)
    ),
    productDetails: createRoute({
      getParentRoute: () => rootRoute,
      path: "/product/$productId",
      validateSearch: (search: Record<string, unknown>) => {
        return productDetailsSearchSchema.parse(search);
      },
    }).lazy(
      (): LazyLoadingRoute =>
        import("./pages/ProductDetails/page").then((d) => d.productDetailsRoute)
    ),
    productListingByTaxon: createRoute({
      getParentRoute: () => rootRoute,
      path: "/products/*",
      validateSearch: (
        search: Record<string, unknown>
      ): ProductListingFilter => {
        return productListingFilterSchema.parse(search);
      },
    }).lazy(
      (): LazyLoadingRoute =>
        import("./pages/ProductListingByTaxon/page").then(
          (d) => d.productListingByTaxonRoute
        )
    ),
    search: createRoute({
      getParentRoute: () => rootRoute,
      path: "/search",
      validateSearch: (search: Record<string, unknown>): ProductSearch => {
        return productSearchSchema.parse(search);
      },
    }).lazy(
      (): LazyLoadingRoute =>
        import("./pages/Search/page").then((d) => d.searchRoute)
    ),
    shoppingCart: createRoute({
      getParentRoute: () => rootRoute,
      path: "/cart",
    }).lazy(
      (): LazyLoadingRoute =>
        import("./pages/ShoppingCart/page").then((d) => d.shoppingCartRoute)
    ),
    membership: createRoute({
      getParentRoute: () => rootRoute,
      path: "/member",
    }).lazy(
      (): LazyLoadingRoute =>
        import("./pages/Membership/page").then((d) => d.membershipRoute)
    ),
    checkout: createRoute({
      getParentRoute: () => rootRoute,
      path: "/checkout",
    }).lazy(
      (): LazyLoadingRoute =>
        import("./pages/Checkout/page").then((d) => d.checkoutRoute)
    ),
    thankyou: createRoute({
      getParentRoute: () => rootRoute,
      path: "/thank-you",
    }).lazy(
      (): LazyLoadingRoute =>
        import("./pages/ThankYou/page").then((d) => d.thankYouRoute)
    ),
  },
  userLogin: {
    login: createRoute({
      getParentRoute: () => rootRoute,
      path: "/login",
    }).lazy(
      (): LazyLoadingRoute =>
        import("./pages/Login/page").then((d) => d.loginRoute)
    ),
    register: createRoute({
      getParentRoute: () => rootRoute,
      path: "/register",
    }).lazy(
      (): LazyLoadingRoute =>
        import("./pages/Registration/page").then((d) => d.registrationRoute)
    ),
  },
};

const productSearchSchema = z.object({
  search: z.string().catch(""),
});

type ProductSearch = z.infer<typeof productSearchSchema>;

const purchaseHistoryFilterSchema = z.object({
  status: z.enum(["TO_RECEIVE", "COMPLETED", "CANCELLED"]).catch("TO_RECEIVE"),
});

type PurchaseHistoryFilter = z.infer<typeof purchaseHistoryFilterSchema>;

export const membershipSubroutes = {
  profile: createRoute({
    getParentRoute: () => routes.site.membership,
    path: "/",
  }).lazy(
    (): LazyLoadingRoute =>
      import("./pages/Membership/Profile/page").then((d) => d.profileRoute)
  ),
  purchaseHistory: createRoute({
    getParentRoute: () => routes.site.membership,
    path: "/purchases",
    validateSearch: (
      search: Record<string, unknown>
    ): PurchaseHistoryFilter => {
      return purchaseHistoryFilterSchema.parse(search);
    },
  }).lazy(
    (): LazyLoadingRoute =>
      import("./pages/Membership/PurchaseHistory/page").then(
        (d) => d.purchaseHistoryRoute
      )
  ),
};

export const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: Page404Page,
});

// Create the route tree using your routes
export const routeTree = rootRoute.addChildren([
  routes.site.home,
  routes.site.productReviews,
  routes.site.productListingByTaxon,
  routes.site.productDetails,
  routes.site.shoppingCart,
  routes.site.search,
  routes.site.membership.addChildren([
    membershipSubroutes.profile,
    membershipSubroutes.purchaseHistory,
  ]),
  routes.site.checkout,
  routes.site.thankyou,
  routes.userLogin.login,
  routes.userLogin.register,
  catchAllRoute,
]);

export const router = createRouter({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
