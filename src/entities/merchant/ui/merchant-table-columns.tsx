import type { ColumnDef } from "@tanstack/react-table";
import {
  MERCHANT_BIZ_TYPE_MAP,
  MERCHANT_COLUMN_MAP,
  MERCHANT_STATUS_MAP,
} from "@/entities/merchant/model/constants";
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
    header: MERCHANT_COLUMN_MAP.mchtCode,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "bizType",
    header: MERCHANT_COLUMN_MAP.bizType,
    cell: ({ row }) => {
      const bizType = MERCHANT_BIZ_TYPE_MAP[row.getValue<BizType>("bizType")];
      return <Badge variant="outline">{bizType.label}</Badge>;
    },
  },
  {
    accessorKey: "mchtName",
    header: MERCHANT_COLUMN_MAP.mchtName,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "status",
    header: MERCHANT_COLUMN_MAP.status,
    cell: ({ row }) => {
      const status =
        MERCHANT_STATUS_MAP[row.getValue<MerchantStatus>("status")];
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
