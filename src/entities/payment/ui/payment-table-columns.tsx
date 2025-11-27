import { createColumnHelper } from "@tanstack/react-table";
import {
  PAYMENT_COLUMN_MAP,
  PAYMENT_STATUS_MAP,
  PAYMENT_TYPE_MAP,
} from "@/entities/payment/model/constants";
import type { Payment } from "@/entities/payment/model/types";
import { CopyableCell } from "@/shared/components/copyable-cell";
import { Badge } from "@/shared/components/ui/badge";

const columnHelper = createColumnHelper<Payment>();

export const paymentTableColumns = [
  columnHelper.accessor("paymentAt", {
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
  }),

  columnHelper.accessor("payType", {
    header: PAYMENT_COLUMN_MAP.payType,
    cell: ({ row }) => {
      const payType = PAYMENT_TYPE_MAP[row.original.payType];
      return <Badge variant="outline">{payType.label}</Badge>;
    },
  }),
  columnHelper.accessor("status", {
    header: PAYMENT_COLUMN_MAP.status,
    cell: ({ row }) => {
      const status = PAYMENT_STATUS_MAP[row.original.status];
      const Icon = status.icon;
      return (
        <Badge variant="outline" className={status.className}>
          <Icon />
          {status.label}
        </Badge>
      );
    },
  }),
  columnHelper.accessor(
    (row) => {
      const amount = parseFloat(row.amount);
      const currency = row.currency;
      const formattedAmount = new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: currency,
      }).format(amount);
      return `${formattedAmount} ${currency}`;
    },
    {
      id: "amount",
      header: () => (
        <div className="text-right">
          <span>{PAYMENT_COLUMN_MAP.amount}</span>
        </div>
      ),
      cell: (info) => {
        return <div className="text-right font-medium">{info.getValue()}</div>;
      },
    },
  ),
  columnHelper.accessor("paymentCode", {
    header: PAYMENT_COLUMN_MAP.paymentCode,
    cell: (info) => <CopyableCell cellText={info.getValue()} showIcon />,
  }),
  columnHelper.accessor("mchtCode", {
    header: PAYMENT_COLUMN_MAP.mchtCode,
    cell: (info) => <CopyableCell cellText={info.getValue()} showIcon />,
  }),
];
