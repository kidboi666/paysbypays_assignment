import type { Merchant, MerchantDetail } from "@/entities/merchant/model/types";
import { axios } from "@/shared/lib/axios/axios";
import type { BaseResponse } from "@/shared/model/types";

export async function getMerchants(): Promise<BaseResponse<Merchant[]>> {
  try {
    const response = await axios.get("/merchants/list");

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMerchantsDetails(): Promise<
  BaseResponse<MerchantDetail[]>
> {
  try {
    const response = await axios.get("/merchants/details");

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
