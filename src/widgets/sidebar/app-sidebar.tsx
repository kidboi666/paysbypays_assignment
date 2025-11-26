import {
  BadgeCentIcon,
  HomeIcon,
  SettingsIcon,
  ShoppingBagIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar";
import { AppSidebarNavMain } from "@/widgets/sidebar/app-sidebar-nav-main";
import { AppSidebarNavSub } from "@/widgets/sidebar/app-sidebar-nav-sub";

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
        <AppSidebarNavMain items={NAV_MENU_ITEMS.navMain} pathname={pathname} />
      </SidebarContent>
      <SidebarFooter>
        <AppSidebarNavSub items={NAV_MENU_ITEMS.navSub} pathname={pathname} />
      </SidebarFooter>
    </Sidebar>
  );
}
