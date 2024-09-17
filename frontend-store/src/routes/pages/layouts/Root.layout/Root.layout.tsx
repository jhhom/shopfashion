import { useRouterState } from "@tanstack/react-router";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useLocalStorageAuth } from "~/external/browser/local-storage/use-auth.hook";
import { useAutoLoginWithToken } from "~/routes/pages/layouts/Root.layout/use-auto-login.hook/use-auto-login-token.hook";
import { useAppStore } from "~/stores/stores";

// Create a root route
export function RootLayout(props: React.PropsWithChildren) {
  const store = useAppStore();
  const authStorage = useLocalStorageAuth();

  const router = useRouterState();

  useAutoLoginWithToken();
  // useAutoLoginDebug();

  useEffect(() => {
    if (
      !(
        router.location.href === "/login" ||
        router.location.href === "/register"
      ) &&
      store.attemptToCheckoutWhileLoggedOut
    ) {
      store.setAttemptToCheckoutWhileLoggedOut(false);
    }
  }, [router.location, store.attemptToCheckoutWhileLoggedOut]);

  return (
    <>
      {props.children}
      <Toaster />
    </>
  );
}
