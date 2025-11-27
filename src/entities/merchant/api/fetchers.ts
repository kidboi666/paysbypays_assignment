import type { Merchant, MerchantDetail } from "@/entities/merchant/model/types";
import { axios } from "@/shared/lib/axios/axios";
import type { BaseResponse } from "@/shared/model/types";

export async function getMerchants(): Promise<BaseResponse<Merchant[]>> {
  const response = await axios.get("/merchants/list");

  return response.data;
}

export async function getMerchantsDetails(): Promise<
  BaseResponse<MerchantDetail[]>
> {
  const response = await axios.get("/merchants/details");

  return response.data;
}
