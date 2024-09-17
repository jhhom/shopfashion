import {
  createLazyRoute,
  useNavigate,
  useParams,
  useSearch,
} from "@tanstack/react-router";
import { ProductListingItem } from "~/routes/pages/common/ProductListingItem";
import { useSet } from "@uidotdev/usehooks";
import { useState } from "react";
import { LoadingSpinner } from "~/routes/pages/Checkout/components/LoadingSpinner";
import {
  useBreadcrumbs,
  useProductListings,
  useTaxonTree,
} from "~/routes/pages/ProductListingByTaxon/api";
import { MobileFilterSidebar } from "~/routes/pages/ProductListingByTaxon/components/MobileFilterSidebar";
import { DesktopPriceRangeFilter } from "~/routes/pages/ProductListingByTaxon/components/PriceFilter";
import { PriceSortby } from "~/routes/pages/ProductListingByTaxon/components/PriceSortby";
import { TaxonTree } from "~/routes/pages/ProductListingByTaxon/components/TaxonTree";
import {
  PageDoesNotExist,
  UnexpectedError,
} from "~/routes/pages/common/ErrorContents";
import {
  IconClose,
  IconOpenBox,
  IconSliders,
} from "~/routes/pages/common/Icons";
import { Breadcrumb } from "~/routes/pages/common/components/Breadcrumb";
import { parseApiError } from "~/utils/api-error";

const prices = [
  "RM 20 - 40",
  "RM 40 - 70",
  "RM 70 - 100",
  "RM 100 - 150",
  "RM 150 - 200",
  "RM 200+",
];

export const productListingByTaxonRoute = createLazyRoute("/products/*")({
  component: ProductListingByTaxonPage,
});

function ProductListingByTaxonPage() {
  const taxonSlug = (
    useParams({ from: "/products/*" }) as {
      "*": string;
    }
  )["*"];

  const [openSidebar, setOpenSidebar] = useState(false);

  const search = useSearch({ from: "/products/*" });
  const searchSortPrice = search.sort_price ? search.sort_price : "asc";

  const navigate = useNavigate();

  const productListingQuery = useProductListings({
    taxonSlug,
    minPrice: search.price_min,
    maxPrice: search.price_max,
    sortPriceOrder: searchSortPrice,
  });

  const breadcrumbsQuery = useBreadcrumbs(taxonSlug);

  const taxonTreeQuery = useTaxonTree(taxonSlug);

  const priceFilters = useSet<string>();

  if (productListingQuery.error) {
    const err = parseApiError(productListingQuery.error);
    if (
      err.type === "application" &&
      err.error.details.code === "RESOURCE_NOT_FOUND"
    ) {
      return <PageDoesNotExist />;
    } else {
      return <UnexpectedError />;
    }
  }

  if (productListingQuery.data === undefined) {
    return <LoadingSpinner />;
  }

  return (
    <div className="h-full w-full px-4 pb-12 sm:px-12 md:pb-0">
      <Breadcrumb
        crumbs={
          breadcrumbsQuery.data
            ? breadcrumbsQuery.data.precedingSlugs.map((c) => ({
                id: c.id,
                name: c.name,
                link: `/products/${c.slug}`,
              }))
            : []
        }
        lastCrumb={breadcrumbsQuery.data?.lastSlug ?? null}
      />

      <div className="hidden py-4 md:block">
        <p className="text-xl font-medium">
          {breadcrumbsQuery.data?.lastSlug?.name ?? ""}
        </p>
      </div>

      <div className="md:flex md:pb-16">
        <div className="hidden basis-64 pr-12 pt-16 text-base md:block">
          <TaxonTree taxons={taxonTreeQuery.data ?? []} />
          <DesktopPriceRangeFilter
            className="mt-8"
            onSubmit={(v) => {
              navigate({
                // @ts-ignore
                to: `/products/${taxonSlug}`,
                search: {
                  ...search,
                  price_min: v.min,
                  price_max: v.max,
                },
              });
            }}
            defaultValues={{
              min: search.price_min,
              max: search.price_max,
            }}
          />
        </div>

        <div className="flex-grow basis-[calc(100%-16rem)]">
          <FilterBar
            priceSortBy={
              <PriceSortby
                order={searchSortPrice}
                onSetOrder={(order) => {
                  navigate({
                    // @ts-ignore
                    to: `/products/${taxonSlug}`,
                    search: {
                      ...search,
                      sort_price: order,
                    },
                  });
                }}
              />
            }
            onOpenFilterSidebar={() => setOpenSidebar(true)}
          />
          <FilterAndPageDisplay
            priceFilters={priceFilters}
            numberOfItems={productListingQuery.data.products.length}
          />
          <div className="h-full w-full pb-20">
            {productListingQuery.data ? (
              productListingQuery.data.products.length === 0 ? (
                <div className="w-full text-center h-full flex items-center justify-center">
                  <div>
                    <IconOpenBox className="w-16 h-16 text-gray-300 mx-auto" />
                    <div className="mt-2">
                      No product matches the specified filter or categories
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-8 h-full w-full grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-10 md:gap-x-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {productListingQuery.data.products.map((pr) => (
                    <ProductListingItem
                      key={pr.id}
                      id={pr.id}
                      imgUrl={pr.imgUrl}
                      name={pr.name}
                      price={pr.pricing}
                      rating={pr.rating}
                      reviews={pr.numberOfReviews}
                      taxonSlug={taxonSlug}
                    />
                  ))}
                </div>
              )
            ) : (
              <LoadingSpinner />
            )}
          </div>
        </div>
      </div>

      <MobileFilterSidebar
        open={openSidebar}
        setOpen={setOpenSidebar}
        defaultValues={{
          min: search.price_min,
          max: search.price_max,
        }}
        onPriceRangeSubmit={(v) => {
          navigate({
            // @ts-expect-error
            to: `/products/${taxonSlug}`,
            search: {
              ...search,
              price_min: v.min,
              price_max: v.max,
            },
          });
        }}
      />
    </div>
  );
}

function FilterAndPageDisplay({
  priceFilters,
  numberOfItems,
}: {
  priceFilters: Set<string>;
  numberOfItems: number;
}) {
  return (
    <div className="flex min-h-16 justify-between pb-2 pt-4">
      <div className="flex h-full flex-wrap items-center gap-x-2 gap-y-2 text-sm">
        {Array.from(priceFilters.values()).map((f) => (
          <div
            key={f}
            className="flex items-center rounded-md border border-teal-500 bg-teal-100 py-0.5 pl-1.5 text-sm"
          >
            <span>{f}</span>
            <button
              onClick={() => priceFilters.delete(f)}
              className="ml-1 flex h-6 w-6 items-center justify-center"
            >
              <IconClose className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        ))}
      </div>
      <div className="whitespace-nowrap text-sm">
        Showing {numberOfItems} item{numberOfItems === 1 ? "" : "s"}
      </div>
    </div>
  );
}

function FilterBar(props: {
  priceSortBy: JSX.Element;
  onOpenFilterSidebar: () => void;
}) {
  return (
    <div className="flex items-center justify-between text-sm md:justify-end md:border-y md:border-gray-200 md:py-2">
      <div className="flex items-center">
        <p>Sort by:</p>
        {props.priceSortBy}
      </div>
      <div className="md:hidden">
        <button
          onClick={props.onOpenFilterSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-100"
        >
          <IconSliders className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
}
