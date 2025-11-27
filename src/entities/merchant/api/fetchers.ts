import type { Merchant } from "@/entities/merchant/model/types";
import { axios } from "@/shared/lib/axios/axios";
import type { BaseResponse } from "@/shared/model/types";

export async function getMerchants(): Promise<BaseResponse<Merchant[]>> {
  const response = await axios.get("/merchants/list");

  return response.data;
}
