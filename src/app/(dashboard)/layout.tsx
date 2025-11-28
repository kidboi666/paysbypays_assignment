"use client";

import { usePathname } from "next/navigation";
import type React from "react";
import { SidebarProvider } from "@/shared/components/ui/sidebar";
import { AppSidebar } from "@/widgets/sidebar/app-sidebar";

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
