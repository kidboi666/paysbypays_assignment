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
