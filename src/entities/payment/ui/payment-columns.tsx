import type { ColumnDef } from "@tanstack/react-table";
import type { Payment } from "@/entities/payment/model/types";

const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "UTC",
});

export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "paymentAt",
    header: "결제 일시",
    cell: ({ row }) => {
      const date = new Date(row.getValue("paymentAt"));
      return <div>{dateFormatter.format(date)}</div>;
    },
  },
  {
    accessorKey: "paymentCode",
    header: "결제 코드",
    cell: ({ row }) => <span>{row.getValue("paymentCode")}</span>,
  },
  {
    accessorKey: "mchtCode",
    header: "가맹점 코드",
    cell: ({ row }) => <span>{row.getValue("mchtCode")}</span>,
  },
  {
    accessorKey: "payType",
    header: "결제 유형/수단",
    cell: ({ row }) => <div>{row.getValue("payType")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">결제 금액</div>,
    accessorFn: (row) => {
      const amount = parseFloat(row.amount);
      const formattedAmount = new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
      }).format(amount);
      return `${formattedAmount} ${row.currency}`;
    },
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.getValue("amount")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "결제 상태",
    cell: ({ row }) => (
      <span className="lowercase">{row.getValue("status")}</span>
    ),
  },
];
