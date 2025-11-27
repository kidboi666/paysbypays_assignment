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
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

export const merchantTableColumn: ColumnDef<Merchant>[] = [
  {
    accessorKey: "mchtCode",
    header: "가맹점 코드",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "bizType",
    header: "업종",
    cell: ({ row }) => {
      const bizType =
        MERCHANT_BIZ_TYPE_CONFIG[row.getValue<BizType>("bizType")];
      return <Badge variant="outline">{bizType.label}</Badge>;
    },
  },
  {
    accessorKey: "mchtName",
    header: "가맹점명",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "status",
    header: "영업 상태",
    cell: ({ row }) => {
      const status =
        MERCHANT_STATUS_CONFIG[row.getValue<MerchantStatus>("status")];
      const Icon = status.icon;
      return (
        <Badge variant="outline" className={cn("lowercase", status.className)}>
          <Icon />
          {status.label}
        </Badge>
      );
    },
  },
];
