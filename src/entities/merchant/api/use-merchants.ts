import { useSuspenseQuery } from "@tanstack/react-query";
import { merchantQueries } from "@/entities/merchant/api/queries";

export function useMerchants() {
  const { data, isPending, error, isError } = useSuspenseQuery(
    merchantQueries.getMerchants(),
  );

  return {
    data,
    isPending,
    error,
    isError,
  };
}
