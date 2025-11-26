import { useSuspenseQuery } from "@tanstack/react-query";
import { paymentQueries } from "@/entities/payment/api/queries";

export function usePayments() {
  const { data, isPending, isError, error } = useSuspenseQuery(
    paymentQueries.getPayments(),
  );

  return {
    data,
    isPending,
    isError,
    error,
  };
}
