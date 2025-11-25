import { useQuery } from "@tanstack/react-query";
import { paymentQueries } from "@/entities/payment/api/queries";

export function usePayments() {
  const { data, isPending, isError, error } = useQuery(
    paymentQueries.getPayments(),
  );

  return {
    data,
    isPending,
    isError,
    error,
  };
}
