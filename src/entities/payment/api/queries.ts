import { queryOptions } from "@tanstack/react-query";
import { getPayments } from "@/entities/payment/api/server";

export const paymentQueries = {
  getPayments: () =>
    queryOptions({
      queryKey: ["payments"],
      queryFn: getPayments,
      select: (data) => data.data,
    }),
};
