import type { ColumnDef } from "@tanstack/react-table";
import {
  PAYMENT_STATUS_CONFIG,
  PAYMENT_TYPE_CONFIG,
} from "@/entities/payment/model/config";
import type { Payment, PaymentStatus } from "@/entities/payment/model/types";
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "UTC",
});

export const paymentTableColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "paymentAt",
    header: "결제 일시",
    cell: ({ row }) => {
      const date = new Date(row.getValue("paymentAt"));
      return <span>{dateFormatter.format(date)}</span>;
    },
  },
  {
    accessorKey: "paymentCode",
    header: "결제 코드",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "mchtCode",
    header: "가맹점 코드",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "payType",
    accessorFn: (row) => PAYMENT_TYPE_CONFIG[row.payType].label,
    header: "결제 유형/수단",
    cell: ({ row }) => (
      <Badge variant="outline">{row.getValue("payType")}</Badge>
    ),
  },
  {
    accessorKey: "amount",
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
        <span>결제 금액</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.getValue("amount")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-right">결제 상태</div>,
    cell: ({ row }) => {
      const status =
        PAYMENT_STATUS_CONFIG[row.getValue<PaymentStatus>("status")];
      const Icon = status.icon;
      return (
        <Badge
          variant="outline"
          className={cn("lowercase text-right", status.className)}
        >
          <Icon />
          {status.label}
        </Badge>
      );
    },
  },
];
