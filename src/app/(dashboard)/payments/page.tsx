"use client";

import { usePayments } from "@/entities/payment/api/use-payments";
import { paymentTableColumns } from "@/entities/payment/ui/payment-table-columns";
import { PageBreadcrumb } from "@/widgets/breadcrumb/page-breadcrumb";
import { DataTable } from "@/widgets/table/data-table";

const breadcrumbItems = [
  { label: "홈", href: "/" },
  { label: "거래 내역 관리" },
];

export default function PaymentsPage() {
  const { data } = usePayments();

  return (
    <main className="p-4 space-y-4 flex flex-1 flex-col">
      <PageBreadcrumb items={breadcrumbItems} />
      <DataTable columns={paymentTableColumns} data={data} />
    </main>
  );
}
