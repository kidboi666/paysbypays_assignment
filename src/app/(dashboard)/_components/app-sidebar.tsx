import {
  BadgeCentIcon,
  HomeIcon,
  SettingsIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { NavMain } from "@/app/(dashboard)/_components/nav-main";
import { NavSub } from "@/app/(dashboard)/_components/nav-sub";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar";

const NAV_MENU_ITEMS = {
  navMain: [
    { label: "홈", icon: HomeIcon, url: "/" },
    { label: "거래 내역 관리", icon: BadgeCentIcon, url: "/payments" },
    { label: "가맹점 관리", icon: ShoppingBagIcon, url: "/merchants" },
  ],
  navSub: [{ label: "설정", icon: SettingsIcon, url: "/settings" }],
};

interface AppSidebarProps {
  pathname: string;
}

export function AppSidebar({ pathname }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarTrigger size="lg" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={NAV_MENU_ITEMS.navMain} pathname={pathname} />
      </SidebarContent>
      <SidebarFooter>
        <NavSub items={NAV_MENU_ITEMS.navSub} pathname={pathname} />
      </SidebarFooter>
    </Sidebar>
  );
}
