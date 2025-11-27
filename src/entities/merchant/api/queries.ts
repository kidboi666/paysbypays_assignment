import { queryOptions } from "@tanstack/react-query";
import { getMerchants } from "@/entities/merchant/api/fetchers";
import { MERCHANT_QUERY_KEYS } from "@/entities/merchant/model/constants";

export const merchantQueries = {
  getMerchants: () =>
    queryOptions({
      queryKey: MERCHANT_QUERY_KEYS.all,
      queryFn: getMerchants,
      select: (data) => data.data,
    }),
};
