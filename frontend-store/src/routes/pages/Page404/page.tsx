import { Navbar } from "~/routes/pages/Home/components/Navbar";

import { Outlet } from "@tanstack/react-router";
import { PageDoesNotExist } from "~/routes/pages/common/ErrorContents";
import { ECommerceRootLayout } from "~/routes/pages/layouts/ECommerce.layout";

export function Page404Page() {
  return (
    <div className="relative">
      <div className="flex h-[calc(100vh-4rem-12rem)] items-center justify-center">
        <PageDoesNotExist />
      </div>
    </div>
  );
}

export function Page404WithLayoutPage() {
  return (
    <ECommerceRootLayout>
      <PageDoesNotExist />
    </ECommerceRootLayout>
  );
}
