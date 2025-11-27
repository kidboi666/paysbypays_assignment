import { createColumnHelper } from "@tanstack/react-table";
import {
  MERCHANT_BIZ_TYPE_MAP,
  MERCHANT_COLUMN_MAP,
  MERCHANT_STATUS_MAP,
} from "@/entities/merchant/model/constants";
import type { Merchant } from "@/entities/merchant/model/types";
import { MerchantTableCellViewer } from "@/entities/merchant/ui/merchant-table-cell-viewer";
import { CopyableCell } from "@/shared/components/copyable-cell";
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

const columnHelper = createColumnHelper<Merchant>();

export const merchantTableColumn = [
  columnHelper.accessor("mchtName", {
    header: MERCHANT_COLUMN_MAP.mchtName,
    cell: (info) => <MerchantTableCellViewer item={info.row.original} />,
    enableHiding: false,
  }),
  columnHelper.accessor("bizType", {
    header: MERCHANT_COLUMN_MAP.bizType,
    cell: ({ row }) => {
      const bizType = MERCHANT_BIZ_TYPE_MAP[row.original.bizType];
      return <Badge variant="outline">{bizType.label}</Badge>;
    },
  }),
  columnHelper.accessor("status", {
    header: MERCHANT_COLUMN_MAP.status,
    cell: ({ row }) => {
      const status = MERCHANT_STATUS_MAP[row.original.status];
      const Icon = status.icon;
      return (
        <Badge variant="outline" className={cn("lowercase", status.className)}>
          <Icon />
          {status.label}
        </Badge>
      );
    },
  }),
  columnHelper.accessor("mchtCode", {
    header: MERCHANT_COLUMN_MAP.mchtCode,
    cell: (info) => <CopyableCell cellText={info.getValue()} showIcon />,
  }),
];
