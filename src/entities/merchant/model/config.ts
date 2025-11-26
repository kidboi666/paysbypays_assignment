import type { BizType, MerchantStatus } from "@/entities/merchant/model/types";

export const MERCHANT_STATUS_CONFIG: Record<
  MerchantStatus,
  { label: string; className: string }
> = {
  READY: {
    label: "준비 중",
    className: "",
  },
  ACTIVE: {
    label: "영업 중",
    className: "text-green-500",
  },
  INACTIVE: {
    label: "마감",
    className: "text-red-500",
  },
  CLOSED: {
    label: "폐업",
    className: "text-gray-500",
  },
};

export const MERCHANT_BIZ_TYPE_CONFIG: Record<
  BizType,
  { label: string; className: string }
> = {
  TEST: {
    label: "테스트",
    className: "",
  },
  CAFE: {
    label: "카페",
    className: "",
  },
  EDU: {
    label: "교육",
    className: "",
  },
  MART: {
    label: "마트",
    className: "",
  },
  APP: {
    label: "앱",
    className: "",
  },
  SHOP: {
    label: "쇼핑몰",
    className: "",
  },
  TRAVEL: {
    label: "여행",
    className: "",
  },
};
