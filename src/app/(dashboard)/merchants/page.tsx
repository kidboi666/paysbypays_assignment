import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { merchantQueries } from "@/entities/merchant/api/queries";
import { getQueryClient } from "@/shared/lib/query-client/get-query-client";
import { MerchantsPageView } from "@/views/merchants/merchants-page-view";

export default async function MerchantsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(merchantQueries.getMerchants());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MerchantsPageView />
    </HydrationBoundary>
  );
}
