import {
  BanIcon,
  CheckIcon,
  ClockIcon,
  type LucideIcon,
  XIcon,
} from "lucide-react";
import type {
  Payment,
  PaymentStatus,
  PaymentType,
} from "@/entities/payment/model/types";

export const PAYMENT_COLUMN_MAP: Partial<Record<keyof Payment, string>> = {
  paymentAt: "결제 일시",
  paymentCode: "결제 코드",
  mchtCode: "가맹점 코드",
  payType: "결제 유형/수단",
  amount: "결제 금액",
  status: "결제 상태",
} as const;

export const PAYMENT_STATUS_MAP: Record<
  PaymentStatus,
  { label: string; className: string; icon: LucideIcon }
> = {
  PENDING: {
    label: "결제대기",
    className: "bg-yellow-50 text-yellow-500",
    icon: ClockIcon,
  },
  SUCCESS: {
    label: "결제완료",
    className: "bg-green-50 text-green-500",
    icon: CheckIcon,
  },
  FAILED: {
    label: "결제실패",
    className: "bg-red-50 text-red-500",
    icon: XIcon,
  },
  CANCELLED: {
    label: "결제취소",
    className: "bg-gray-50 text-gray-500",
    icon: BanIcon,
  },
} as const;

export const PAYMENT_TYPE_MAP: Record<PaymentType, { label: string }> = {
  ONLINE: {
    label: "온라인",
  },
  DEVICE: {
    label: "현장 단말기",
  },
  MOBILE: {
    label: "휴대폰",
  },
  VACT: {
    label: "가상계좌",
  },
  BILLING: {
    label: "정기 결제",
  },
} as const;

export const PAYMENT_QUERY_KEYS = {
  all: ["payments"],
};
