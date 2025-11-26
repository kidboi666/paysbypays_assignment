import { queryOptions } from "@tanstack/react-query";
import { getMerchants } from "@/entities/merchant/api/server";

export const merchantQueries = {
  getMerchants: () =>
    queryOptions({
      queryKey: ["merchants"],
      queryFn: getMerchants,
      select: (data) => data.data,
    }),
};
