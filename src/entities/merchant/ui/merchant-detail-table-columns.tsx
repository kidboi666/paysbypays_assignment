import { createColumnHelper } from "@tanstack/react-table";
import {
  MERCHANT_BIZ_TYPE_MAP,
  MERCHANT_DETAIL_COLUMN_MAP,
  MERCHANT_STATUS_MAP,
} from "@/entities/merchant/model/constants";
import type { MerchantDetail } from "@/entities/merchant/model/types";
import { MerchantTableCellViewer } from "@/entities/merchant/ui/merchant-table-cell-viewer";
import { CopyableCell } from "@/shared/components/copyable-cell";
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

const columnHelper = createColumnHelper<MerchantDetail>();

export const merchantDetailTableColumns = [
  columnHelper.accessor("status", {
    header: MERCHANT_DETAIL_COLUMN_MAP.status,
    cell: ({ row }) => {
      const status = MERCHANT_STATUS_MAP[row.original.status];
      const Icon = status.icon;
      return (
        <Badge
          variant="secondary"
          className={cn("font-semibold", status.className)}
        >
          <Icon />
          {status.label}
        </Badge>
      );
    },
  }),
  columnHelper.accessor("mchtName", {
    header: MERCHANT_DETAIL_COLUMN_MAP.mchtName,
    cell: (info) => <MerchantTableCellViewer item={info.row.original} />,
    enableHiding: false,
  }),
  columnHelper.accessor("bizType", {
    header: MERCHANT_DETAIL_COLUMN_MAP.bizType,
    cell: ({ row }) => {
      const bizType = MERCHANT_BIZ_TYPE_MAP[row.original.bizType];
      return <Badge variant="outline">{bizType.label}</Badge>;
    },
  }),
  columnHelper.accessor("bizNo", {
    header: MERCHANT_DETAIL_COLUMN_MAP.bizNo,
    cell: (info) => <CopyableCell cellText={info.getValue()} showIcon />,
  }),
  columnHelper.accessor("address", {
    header: MERCHANT_DETAIL_COLUMN_MAP.address,
    cell: (info) => <CopyableCell cellText={info.getValue()} showIcon />,
  }),
  columnHelper.accessor("phone", {
    header: MERCHANT_DETAIL_COLUMN_MAP.phone,
    cell: (info) => <CopyableCell cellText={info.getValue()} showIcon />,
  }),
  columnHelper.accessor("email", {
    header: MERCHANT_DETAIL_COLUMN_MAP.email,
    cell: (info) => <CopyableCell cellText={info.getValue()} showIcon />,
  }),
  columnHelper.accessor("mchtCode", {
    header: MERCHANT_DETAIL_COLUMN_MAP.mchtCode,
    cell: (info) => (
      <CopyableCell
        cellText={info.getValue()}
        showIcon
        className="opacity-50"
      />
    ),
  }),
];
