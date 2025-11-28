import type { ColumnDef } from "@tanstack/react-table";
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

export const merchantDetailTableColumns: ColumnDef<MerchantDetail>[] = [
  {
    accessorKey: "status",
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
  },
  {
    accessorKey: "mchtName",
    header: MERCHANT_DETAIL_COLUMN_MAP.mchtName,
    cell: (info) => <MerchantTableCellViewer item={info.row.original} />,
    enableHiding: false,
  },
  {
    accessorKey: "bizType",
    header: MERCHANT_DETAIL_COLUMN_MAP.bizType,
    cell: ({ row }) => {
      const bizType = MERCHANT_BIZ_TYPE_MAP[row.original.bizType];
      return <Badge variant="outline">{bizType.label}</Badge>;
    },
  },
  {
    accessorKey: "bizNo",
    header: MERCHANT_DETAIL_COLUMN_MAP.bizNo,
    cell: ({ row }) => (
      <CopyableCell cellText={row.getValue("bizNo")} showIcon />
    ),
  },
  {
    accessorKey: "address",
    header: MERCHANT_DETAIL_COLUMN_MAP.address,
    cell: ({ row }) => (
      <CopyableCell cellText={row.getValue("address")} showIcon />
    ),
  },
  {
    accessorKey: "phone",
    header: MERCHANT_DETAIL_COLUMN_MAP.phone,
    cell: ({ row }) => (
      <CopyableCell cellText={row.getValue("phone")} showIcon />
    ),
  },
  {
    accessorKey: "email",
    header: MERCHANT_DETAIL_COLUMN_MAP.email,
    cell: ({ row }) => (
      <CopyableCell cellText={row.getValue("email")} showIcon />
    ),
  },
  {
    accessorKey: "mchtCode",
    header: MERCHANT_DETAIL_COLUMN_MAP.mchtCode,
    cell: ({ row }) => (
      <CopyableCell
        cellText={row.getValue("mchtCode")}
        showIcon
        className="opacity-50"
      />
    ),
  },
];
