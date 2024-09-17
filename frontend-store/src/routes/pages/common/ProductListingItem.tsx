import {
  createLazyRoute,
  Link,
  useNavigate,
  useParams,
  useSearch,
} from "@tanstack/react-router";
import { useSet } from "@uidotdev/usehooks";
import { useState } from "react";
import { match } from "ts-pattern";
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
import { Rating } from "~/routes/pages/common/Rating";
import { Breadcrumb } from "~/routes/pages/common/components/Breadcrumb";
import { parseApiError } from "~/utils/api-error";
import { ImgWithLoader } from "~/routes/pages/common/ImgWithLoader";

import { formatPrice } from "~/utils/utils";

export function ProductListingItem(props: {
  id: number;
  imgUrl: string | null;
  name: string;
  price:
    | {
        type: "SIMPLE";
        price: number;
      }
    | {
        type: "CONFIGURABLE";
        minPrice: number;
        maxPrice: number;
      }
    | {
        type: "UNAVAILABLE";
      };
  rating: number;
  reviews: number;
  taxonSlug?: string;
}) {
  return (
    <Link
      to="/product/$productId"
      params={{ productId: props.id.toString() }}
      search={props.taxonSlug ? { from_taxon: props.taxonSlug } : undefined}
      mask={{
        to: "/product/$productId",
        params: { productId: props.id.toString() },
      }}
      className="block"
    >
      <div className="h-56 w-full">
        {props.imgUrl ? (
          <ImgWithLoader
            src={props.imgUrl}
            className="h-full w-full rounded-md object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100">
            <p>No image</p>
          </div>
        )}
      </div>
      <div className="justify-between pt-2">
        <p className="text-sm font-semibold">{props.name}</p>
        <div className="mt-4 text-base font-semibold">
          {props.price.type !== "UNAVAILABLE" && (
            <span className="self-start pt-1 text-xs">RM&nbsp;</span>
          )}
          {match(props.price)
            .with({ type: "SIMPLE" }, (p) => formatPrice(p.price))
            .with({ type: "CONFIGURABLE" }, (p) => {
              if (p.minPrice.toFixed(2) === p.maxPrice.toFixed(2)) {
                return formatPrice(p.minPrice);
              } else {
                return (
                  formatPrice(p.minPrice) + " - " + formatPrice(p.maxPrice)
                );
              }
            })
            .with({ type: "UNAVAILABLE" }, (p) => (
              <div>
                <span className="text-sm text-gray-500">Unavailable</span>
              </div>
            ))
            .exhaustive()}
        </div>
      </div>
      <div className="flex items-center py-1">
        <Rating
          value={props.rating}
          className="max-w-[80px]"
          onChange={undefined}
        />
        <span className="pl-2 text-sm text-gray-500">({props.reviews})</span>
      </div>
    </Link>
  );
}
