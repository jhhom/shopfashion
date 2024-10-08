import { Breadcrumb } from "~/routes/pages/common/components/Breadcrumb";
import {
  createLazyRoute,
  Link,
  useParams,
  useSearch,
} from "@tanstack/react-router";
import { useLocalStorageShoppingCart } from "~/external/browser/local-storage/use-shopping-cart.hook";
import { useLocalStorageAuth } from "~/external/browser/local-storage/use-auth.hook";
import { LoadingSpinner } from "~/routes/pages/Checkout/components/LoadingSpinner";
import { ProductDetails } from "~/routes/pages/ProductDetails/components/ProductDetails";
import toast from "react-hot-toast";
import { ProductReviews } from "~/routes/pages/ProductDetails/components/ProductReviews";
import { AssociatedProducts } from "~/routes/pages/ProductDetails/components/AssociatedProducts";
import {
  PageDoesNotExist,
  UnexpectedError,
} from "~/routes/pages/common/ErrorContents";
import {
  useAddtoCart,
  useBreadcrumbs,
  useProductDetails,
} from "~/routes/pages/ProductDetails/api";
import { parseApiError } from "~/utils/api-error";
import { useEffect } from "react";

export const productDetailsRoute = createLazyRoute("/product/$productId")({
  component: ProductDetailsPage,
});

function ProductDetailsPage() {
  const productId = Number.parseInt(
    useParams({
      from: "/product/$productId",
    }).productId
  );

  const shoppingCart = useLocalStorageShoppingCart();

  const search = useSearch({ from: "/product/$productId" });

  const { token } = useLocalStorageAuth();

  const productDetailsQuery = useProductDetails(productId);
  const breadcrumbsQuery = useBreadcrumbs(productId, search.from_taxon);
  const addToCartMutation = useAddtoCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (productDetailsQuery.error) {
    const err = parseApiError(productDetailsQuery.error);
    if (
      err.type === "application" &&
      err.error.details.code === "RESOURCE_NOT_FOUND"
    ) {
      return <PageDoesNotExist />;
    } else {
      return <UnexpectedError />;
    }
  }

  return (
    <div className="pb-8">
      <div className="px-4 md:px-12">
        <Breadcrumb
          crumbs={
            breadcrumbsQuery.data
              ? breadcrumbsQuery.data.crumbs.map((c) => ({
                  id: c.id,
                  name: c.name,
                  link: `/products/${c.slug}`,
                }))
              : []
          }
          lastCrumb={
            breadcrumbsQuery.data
              ? { name: breadcrumbsQuery.data.productName }
              : null
          }
        />
      </div>

      <div className="md:px-12">
        {productDetailsQuery.data ? (
          <ProductDetails
            product={productDetailsQuery.data}
            onAddToCart={async (product) => {
              if (!(token === null || token === undefined)) {
                addToCartMutation.mutate({
                  productId: product.id,
                  quantity: product.quantity,
                  type: product.type,
                });
              } else {
                if (product.type === "CONFIGURABLE") {
                  shoppingCart.addConfigurableProduct({
                    productVariantId: product.id,
                    quantity: product.quantity,
                    addedAt: new Date(),
                  });
                } else {
                  shoppingCart.addSimpleProduct({
                    productId: product.id,
                    quantity: product.quantity,
                    addedAt: new Date(),
                  });
                }
                toast.success("Item added to cart", {
                  position: "top-center",
                  duration: 2000,
                });
              }
            }}
          />
        ) : (
          <LoadingSpinner />
        )}

        <div className="px-5 md:px-0">
          {productDetailsQuery.data ? (
            <ProductReviews
              marginTop="mt-8"
              productId={productId}
              reviews={productDetailsQuery.data.first3Reviews}
              numberOfReviews={productDetailsQuery.data.numberOfReviews}
            />
          ) : (
            <LoadingSpinner />
          )}

          {productDetailsQuery.data ? (
            <AssociatedProducts
              associations={productDetailsQuery.data.associations}
            />
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </div>
  );
}
