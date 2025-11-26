import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { paymentQueries } from "@/entities/payment/api/queries";
import { getQueryClient } from "@/shared/lib/query-client/get-query-client";
import { HomePageView } from "@/views/home/home-page-view";

export default async function HomePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(paymentQueries.getPayments());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePageView />
    </HydrationBoundary>
  );
}
