"use client";

import { usePayments } from "@/entities/payment/api/use-payments";
import { paymentColumns } from "@/entities/payment/ui/payment-columns";
import { DataTable } from "@/widgets/table/data-table";

export function PaymentsPageView() {
  const { data } = usePayments();

  return (
    <main className="p-4 space-y-4 flex flex-1">
      <DataTable columns={paymentColumns} data={data} />
    </main>
  );
}
