import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { paymentQueries } from "@/entities/payment/api/queries";
import { getQueryClient } from "@/shared/lib/query-client/get-query-client";
import { PaymentsPageView } from "@/views/payments/payments-page-view";

export default async function PaymentsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(paymentQueries.getPayments());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PaymentsPageView />
    </HydrationBoundary>
  );
}
