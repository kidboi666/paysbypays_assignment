"use client";

import { useMerchants } from "@/entities/merchant/api/use-merchants";
import { merchantTableColumn } from "@/entities/merchant/ui/merchant-table-columns";
import { PageBreadcrumb } from "@/widgets/breadcrumb/page-breadcrumb";
import { DataTable } from "@/widgets/table/data-table";

const breadcrumbItems = [{ label: "홈", href: "/" }, { label: "가맹점 관리" }];

export default function MerchantsPage() {
  const { data } = useMerchants();

  return (
    <main className="p-4 space-y-4 flex flex-1 flex-col">
      <PageBreadcrumb items={breadcrumbItems} />
      <DataTable columns={merchantTableColumn} data={data} />
    </main>
  );
}
