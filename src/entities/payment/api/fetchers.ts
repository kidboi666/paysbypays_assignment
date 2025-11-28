import type { Payment } from "@/entities/payment/model/types";
import { axios } from "@/shared/lib/axios/axios";
import type { BaseResponse } from "@/shared/model/types";

export async function getPayments(): Promise<BaseResponse<Payment[]>> {
  try {
    const response = await axios.get("/payments/list");

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
