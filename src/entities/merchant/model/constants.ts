import {
  Ban,
  DoorClosedIcon,
  HourglassIcon,
  type LucideIcon,
  StoreIcon,
} from "lucide-react";
import type { BizType, MerchantStatus } from "@/entities/merchant/model/types";

export const MERCHANT_COLUMN_MAP = {
  mchtCode: "가맹점 코드",
  mchtName: "가맹점명",
  status: "영업 상태",
  bizType: "업종",
} as const;

export const MERCHANT_STATUS_MAP: Record<
  MerchantStatus,
  { label: string; className: string; icon: LucideIcon }
> = {
  READY: {
    label: "준비 중",
    className: "",
    icon: HourglassIcon,
  },
  ACTIVE: {
    label: "영업 중",
    className: "text-green-500",
    icon: StoreIcon,
  },
  INACTIVE: {
    label: "마감",
    className: "text-red-500",
    icon: DoorClosedIcon,
  },
  CLOSED: {
    label: "폐업",
    className: "text-gray-500",
    icon: Ban,
  },
};

export const MERCHANT_BIZ_TYPE_MAP: Record<
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
