import type { ColumnDef } from "@tanstack/react-table";
import {
  MERCHANT_BIZ_TYPE_CONFIG,
  MERCHANT_STATUS_CONFIG,
} from "@/entities/merchant/model/config";
import type {
  BizType,
  Merchant,
  MerchantStatus,
} from "@/entities/merchant/model/types";
import { cn } from "@/shared/lib/utils";

export const merchantTableColumn: ColumnDef<Merchant>[] = [
  {
    accessorKey: "mchtCode",
    header: "가맹점 코드",
    minSize: 80,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "bizType",
    header: "업종",
    minSize: 80,
    cell: ({ row }) => {
      const bizType =
        MERCHANT_BIZ_TYPE_CONFIG[row.getValue<BizType>("bizType")];
      return <div>{bizType.label}</div>;
    },
  },
  {
    accessorKey: "mchtName",
    header: "가맹점명",
    minSize: 600,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "status",
    header: "영업 상태",
    minSize: 80,
    cell: ({ row }) => {
      const status =
        MERCHANT_STATUS_CONFIG[row.getValue<MerchantStatus>("status")];
      return (
        <div className={cn("lowercase", status.className)}>{status.label}</div>
      );
    },
  },
];
