import { queryOptions } from "@tanstack/react-query";
import { getPayments } from "@/entities/payment/api/fetchers";
import { PAYMENT_QUERY_KEYS } from "@/entities/payment/model/constants";

export const paymentQueries = {
  getPayments: () =>
    queryOptions({
      queryKey: PAYMENT_QUERY_KEYS.all,
      queryFn: getPayments,
      select: (data) => data.data,
    }),
};
