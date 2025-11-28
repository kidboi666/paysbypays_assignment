import type { ColumnDef } from "@tanstack/react-table";
import {
  PAYMENT_COLUMN_MAP,
  PAYMENT_STATUS_MAP,
  PAYMENT_TYPE_MAP,
} from "@/entities/payment/model/constants";
import type { Payment } from "@/entities/payment/model/types";
import { CopyableCell } from "@/shared/components/copyable-cell";
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

export const paymentTableColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: PAYMENT_COLUMN_MAP.status,
    cell: ({ row }) => {
      const status = PAYMENT_STATUS_MAP[row.original.status];
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
    accessorKey: "paymentAt",
    header: PAYMENT_COLUMN_MAP.paymentAt,
    cell: ({ row }) => {
      const date = new Date(row.original.paymentAt);
      const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "UTC",
      });
      return <CopyableCell cellText={dateFormatter.format(date)} showIcon />;
    },
    enableHiding: false,
  },
  {
    accessorKey: "payType",
    header: PAYMENT_COLUMN_MAP.payType,
    cell: ({ row }) => {
      const payType = PAYMENT_TYPE_MAP[row.original.payType];
      return <Badge variant="outline">{payType.label}</Badge>;
    },
  },
  {
    id: "amount",
    accessorFn: (row) => {
      const amount = parseFloat(row.amount);
      const currency = row.currency;
      return new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: currency,
      }).format(amount);
    },
    header: () => (
      <div className="text-right">
        <span>{PAYMENT_COLUMN_MAP.amount}</span>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          <span>{row.getValue("amount")} </span>
          <span className="opacity-50">{row.original.currency}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "paymentCode",
    header: PAYMENT_COLUMN_MAP.paymentCode,
    cell: ({ row }) => (
      <CopyableCell
        cellText={row.getValue("paymentCode")}
        showIcon
        className="opacity-50"
      />
    ),
  },
  {
    accessorKey: "mchtCode",
    header: PAYMENT_COLUMN_MAP.mchtCode,
    cell: ({ row }) => (
      <CopyableCell
        cellText={row.getValue("mchtCode")}
        showIcon
        className="opacity-50"
      />
    ),
  },
];
