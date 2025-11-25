import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar";

interface NavSubProps {
  items: {
    label: string;
    icon: LucideIcon;
    url: string;
  }[];
  pathname: string;
}

export function NavSub({ items, pathname }: NavSubProps) {
  return (
    <SidebarMenu>
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.url;
        return (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton asChild isActive={isActive}>
              <Link href={item.url}>
                <Icon /> <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
