export enum PayType {
  ONLINE,
  DEVICE,
  MOBILE,
  VACT,
  BILLING,
}

export enum Status {
  PENDING,
  SUCCESS,
  FAILED,
  CANCELLED,
}

export type Payment = {
  paymentCode: string;
  mchtCode: string;
  amount: string;
  currency: string;
  payType: PayType;
  status: Status;
  paymentAt: string;
};
