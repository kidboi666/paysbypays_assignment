import {
  BanIcon,
  CheckIcon,
  ClockIcon,
  type LucideIcon,
  XIcon,
} from "lucide-react";
import type {
  PaymentStatus,
  PaymentType,
} from "@/entities/payment/model/types";

export const PAYMENT_STATUS_CONFIG: Record<
  PaymentStatus,
  { label: string; className: string; icon: LucideIcon }
> = {
  PENDING: {
    label: "대기 중",
    className: "",
    icon: ClockIcon,
  },
  SUCCESS: {
    label: "성공",
    className: "text-green-500",
    icon: CheckIcon,
  },
  FAILED: {
    label: "실패",
    className: "text-red-500",
    icon: XIcon,
  },
  CANCELLED: {
    label: "취소",
    className: "text-gray-500",
    icon: BanIcon,
  },
};

export const PAYMENT_TYPE_CONFIG: Record<PaymentType, { label: string }> = {
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
};
