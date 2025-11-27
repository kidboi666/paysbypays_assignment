import type { ColumnDef } from "@tanstack/react-table";
import {
  PAYMENT_COLUMN_MAP,
  PAYMENT_STATUS_MAP,
  PAYMENT_TYPE_MAP,
} from "@/entities/payment/model/constants";
import type {
  Payment,
  PaymentStatus,
  PaymentType,
} from "@/entities/payment/model/types";
import { Badge } from "@/shared/components/ui/badge";

export const paymentTableColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "paymentAt",
    header: PAYMENT_COLUMN_MAP.paymentAt,
    cell: ({ row }) => {
      const date = new Date(row.getValue("paymentAt"));
      const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "UTC",
      });
      return <span>{dateFormatter.format(date)}</span>;
    },
  },
  {
    accessorKey: "paymentCode",
    header: PAYMENT_COLUMN_MAP.paymentCode,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "mchtCode",
    header: PAYMENT_COLUMN_MAP.mchtCode,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "payType",
    header: PAYMENT_COLUMN_MAP.payType,
    cell: ({ row }) => {
      const payType = PAYMENT_TYPE_MAP[row.getValue<PaymentType>("payType")];
      return <Badge variant="outline">{payType.label}</Badge>;
    },
  },
  {
    id: "amount",
    accessorFn: (row) => {
      const amount = parseFloat(row.amount);
      const formattedAmount = new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: row.currency,
      }).format(amount);
      return `${formattedAmount} ${row.currency}`;
    },
    header: () => (
      <div className="text-right">
        <span>{PAYMENT_COLUMN_MAP.amount}</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.getValue("amount")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-right">{PAYMENT_COLUMN_MAP.status}</div>,
    cell: ({ row }) => {
      const status = PAYMENT_STATUS_MAP[row.getValue<PaymentStatus>("status")];
      const Icon = status.icon;
      return (
        <div className="text-right">
          <Badge variant="outline" className={status.className}>
            <Icon />
            {status.label}
          </Badge>
        </div>
      );
    },
  },
];
