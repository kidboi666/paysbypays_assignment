"use client";

import { useMerchants } from "@/entities/merchant/api/use-merchants";
import { merchantTableColumn } from "@/entities/merchant/ui/merchant-table-columns";
import { DataTable } from "@/widgets/table/data-table";

export default function MerchantsPage() {
  const { data } = useMerchants();

  return (
    <main className="p-4 space-y-4 flex flex-1 flex-col">
      <h1>Merchants Page</h1>
      <DataTable columns={merchantTableColumn} data={data} />
    </main>
  );
}
