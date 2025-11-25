"use server";

import type { Payment } from "@/entities/payment/model/types";
import { axios } from "@/shared/lib/axios/axios";

export async function getPayments(): Promise<Payment[]> {
  const response = await axios.get("/payments/list");
  return response.data;
}
