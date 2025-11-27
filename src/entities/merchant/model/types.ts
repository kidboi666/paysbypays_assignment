export type BizType =
  | "TEST"
  | "EDU"
  | "CAFE"
  | "TRAVEL"
  | "MART"
  | "APP"
  | "SHOP";

export type MerchantStatus = "READY" | "INACTIVE" | "ACTIVE" | "CLOSED";

export interface Merchant {
  mchtCode: string;
  mchtName: string;
  status: MerchantStatus;
  bizType: BizType;
}

export interface MerchantDetail {
  mchtCode: string;
  mchtName: string;
  status: MerchantStatus;
  bizType: BizType;
  bizNo: string;
  address: string;
  phone: string;
  email: string;
  registeredAt: Date;
  updatedAt: Date;
}
