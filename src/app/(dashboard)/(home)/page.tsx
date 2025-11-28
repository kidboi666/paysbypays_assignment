"use client";

import { useMerchants } from "@/entities/merchant/api/use-merchants";
import {
  MERCHANT_COLUMN_MAP,
  MERCHANT_STATUS_MAP,
} from "@/entities/merchant/model/constants";
import { merchantTableColumn } from "@/entities/merchant/ui/merchant-table-columns";
import { usePayments } from "@/entities/payment/api/use-payments";
import {
  PAYMENT_COLUMN_MAP,
  PAYMENT_STATUS_MAP,
} from "@/entities/payment/model/constants";
import { paymentTableColumns } from "@/entities/payment/ui/payment-table-columns";
import { TypographyH3 } from "@/shared/components/ui/typography-h3";
import { PageBreadcrumb } from "@/widgets/breadcrumb/page-breadcrumb";
import { DataTable } from "@/widgets/table/data-table";

const breadcrumbItems = [{ label: "홈" }];
const SUMMARY_PAGE_SIZE = 6;

export default function HomePage() {
  const { data: payments } = usePayments();
  const { data: merchants } = useMerchants();
  return (
    <main className="p-4 space-y-4 flex flex-1 flex-col">
      <PageBreadcrumb items={breadcrumbItems} />
      <div className="flex flex-col gap-4">
        <TypographyH3>거래 내역</TypographyH3>
        <DataTable
          tableName="payments-summary"
          columns={paymentTableColumns}
          data={payments}
          columnLabels={PAYMENT_COLUMN_MAP}
          filterLabels={PAYMENT_STATUS_MAP}
          pageSize={SUMMARY_PAGE_SIZE}
        />
        <TypographyH3>가맹점 리스트</TypographyH3>
        <DataTable
          tableName="merchants-summary"
          columns={merchantTableColumn}
          data={merchants}
          columnLabels={MERCHANT_COLUMN_MAP}
          filterLabels={MERCHANT_STATUS_MAP}
          pageSize={SUMMARY_PAGE_SIZE}
        />
      </div>
    </main>
  );
}
