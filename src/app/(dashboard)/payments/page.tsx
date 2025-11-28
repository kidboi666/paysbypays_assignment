"use client";

import { usePayments } from "@/entities/payment/api/use-payments";
import {
  PAYMENT_COLUMN_MAP,
  PAYMENT_STATUS_MAP,
} from "@/entities/payment/model/constants";
import { paymentTableColumns } from "@/entities/payment/ui/payment-table-columns";
import { PageBreadcrumb } from "@/shared/components/page-breadcrumb";
import { DataTable } from "@/shared/components/table/data-table";

const breadcrumbItems = [
  { label: "홈", href: "/" },
  { label: "거래 내역 관리" },
];

export default function PaymentsPage() {
  const { data } = usePayments();

  return (
    <main className="p-4 space-y-4 flex flex-1 flex-col overflow-auto">
      <PageBreadcrumb items={breadcrumbItems} />
      <DataTable
        tableName="payments"
        columns={paymentTableColumns}
        data={data}
        columnLabels={PAYMENT_COLUMN_MAP}
        filterLabels={PAYMENT_STATUS_MAP}
      />
    </main>
  );
}
