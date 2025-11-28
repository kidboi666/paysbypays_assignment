import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import type { Merchant } from "@/entities/merchant/model/types";
import type { Payment } from "@/entities/payment/model/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

interface DashboardStatsProps {
  payments: Payment[];
  merchants: Merchant[];
}

export function DashboardStats({ payments, merchants }: DashboardStatsProps) {
  const totalVolume = payments.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0,
  );
  const totalTransactions = payments.length;
  const activeMerchants = merchants.filter(
    (m) => m.status === "ACTIVE",
  ).length;
  const totalMerchants = merchants.length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">총 거래액</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ₩{totalVolume.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">누적 거래 총액</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">총 거래 건수</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalTransactions.toLocaleString()}건
          </div>
          <p className="text-xs text-muted-foreground">누적 결제 시도</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">활성 가맹점</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {activeMerchants.toLocaleString()}개
          </div>
          <p className="text-xs text-muted-foreground">현재 영업 중인 가맹점</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">전체 가맹점</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalMerchants.toLocaleString()}개
          </div>
          <p className="text-xs text-muted-foreground">등록된 모든 가맹점</p>
        </CardContent>
      </Card>
    </div>
  );
}
