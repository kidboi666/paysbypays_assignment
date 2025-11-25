"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/app/(dashboard)/_components/app-sidebar";
import { SidebarProvider } from "@/shared/components/ui/sidebar";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <SidebarProvider>
      <AppSidebar pathname={pathname} />
      {children}
    </SidebarProvider>
  );
}
