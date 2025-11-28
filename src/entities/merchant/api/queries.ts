import { queryOptions } from "@tanstack/react-query";
import {
  getMerchants,
  getMerchantsDetails,
} from "@/entities/merchant/api/fetchers";
import { MERCHANT_QUERY_KEYS } from "@/entities/merchant/model/constants";

export const merchantQueries = {
  getMerchants: () =>
    queryOptions({
      queryKey: MERCHANT_QUERY_KEYS.all,
      queryFn: getMerchants,
      select: (data) => data.data,
    }),
  getMerchantsDetails: () =>
    queryOptions({
      queryKey: MERCHANT_QUERY_KEYS.details,
      queryFn: getMerchantsDetails,
      select: (data) => data.data,
    }),
};
