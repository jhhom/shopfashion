import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "~/external/api-client/client";
import { DeliveryFormSchema } from "~/routes/pages/Checkout/components/delivery-form";

export function useCheckoutInfo() {
  return useQuery({
    queryKey: ["checkout_info"],
    queryFn: async () => {
      const r = await client.customers.getCheckoutInfo();
      if (r.status !== 200) {
        throw r.body;
      }
      return r.body;
    },
    staleTime: 0,
  });
}

export function useCheckoutSession({
  onSuccess,
}: {
  onSuccess: (args: { deliveryAddress: DeliveryFormSchema }) => void;
}) {
  return useMutation({
    mutationFn: async (deliveryAddress: DeliveryFormSchema) => {
      const r = await client.customers.requestCheckoutSession({
        body: {
          deliveryAddress,
        },
      });
      if (r.status !== 200) {
        throw r.body;
      }
      return {
        ...r.body,
        deliveryAddress,
      };
    },
    onSuccess(data, variables, context) {
      onSuccess({ deliveryAddress: data.deliveryAddress });
    },
  });
}
