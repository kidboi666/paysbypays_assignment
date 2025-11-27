import { useSuspenseQuery } from "@tanstack/react-query";
import { merchantQueries } from "@/entities/merchant/api/queries";

export function useMerchantsDetails() {
  const { data, isPending, error, isError } = useSuspenseQuery(
    merchantQueries.getMerchantsDetails(),
  );

  return {
    data,
    isPending,
    error,
    isError,
  };
}
