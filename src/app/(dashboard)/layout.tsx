"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/app/(dashboard)/_components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <SidebarProvider>
      <AppSidebar pathname={pathname} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
