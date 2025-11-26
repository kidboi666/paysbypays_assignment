export type PaymentType = "ONLINE" | "DEVICE" | "MOBILE" | "VACT" | "BILLING";

export type PaymentStatus = "PENDING" | "SUCCESS" | "FAILED" | "CANCELLED";

export interface Payment {
  paymentCode: string;
  mchtCode: string;
  amount: string;
  currency: string;
  payType: PaymentType;
  status: PaymentStatus;
  paymentAt: string;
}
