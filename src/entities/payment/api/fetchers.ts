import type { Payment } from "@/entities/payment/model/types";
import { axios } from "@/shared/lib/axios/axios";
import type { BaseResponse } from "@/shared/model/types";

export async function getPayments(): Promise<BaseResponse<Payment[]>> {
  const response = await axios.get("/payments/list");

  return response.data;
}
