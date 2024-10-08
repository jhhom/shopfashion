import { NavbarLayout as DesktopNavbarLayout } from "~/routes/pages/layouts/Root.layout/Desktop/NavbarLayout.layout";
import { NavbarLayout as MobileNavbarLayout } from "~/routes/pages/layouts/Root.layout/Mobile/NavbarLayout.layout";
import { LoadingSpinner } from "~/routes/pages/Checkout/components/LoadingSpinner";
import { useTaxonTree } from "~/routes/pages/layouts/api";
import { RootLayout } from "~/routes/pages/layouts/Root.layout/Root.layout";
import { Outlet } from "@tanstack/react-router";
import React, { useEffect } from "react";

export function AppRootLayout() {
  useEffect(() => {
    // @ts-ignore
    var _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = "https://matomo.joohom.dev/js/container_XhcViD21.js";
    // @ts-ignore
    s.parentNode.insertBefore(g, s);
  }, []);

  return (
    <ECommerceRootLayout>
      <Outlet />
    </ECommerceRootLayout>
  );
}

export function ECommerceRootLayout(props: React.PropsWithChildren) {
  const taxonTreeQuery = useTaxonTree();

  if (taxonTreeQuery.isError) {
    return undefined;
  }

  if (taxonTreeQuery.data === undefined) {
    return <LoadingSpinner />;
  }

  return (
    <RootLayout>
      <div className="hidden md:block">
        <DesktopNavbarLayout taxonTree={taxonTreeQuery.data}>
          {props.children}
        </DesktopNavbarLayout>
      </div>
      <div className="md:hidden">
        <MobileNavbarLayout taxonTree={taxonTreeQuery.data}>
          {props.children}
        </MobileNavbarLayout>
      </div>
    </RootLayout>
  );
}
