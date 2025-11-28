import { ArrowUpRightIcon } from "lucide-react";
import type { Merchant } from "@/entities/merchant/model/types";
import { Button } from "@/shared/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/components/ui/drawer";
import { useIsMobile } from "@/shared/hooks/use-mobile";

interface DataTableCellViewerProps {
  item: Merchant;
}

export function MerchantTableCellViewer({ item }: DataTableCellViewerProps) {
  const isMobile = useIsMobile();

  return (
    <Drawer direction={isMobile ? "bottom" : "right"}>
      <DrawerTrigger asChild>
        <Button variant="link" className="!p-0 h-fit">
          {item.mchtName}
          <ArrowUpRightIcon className="text-primary/50" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{item.mchtName}</DrawerTitle>
          {/*  TODO: 가맹점 상세 정보를 담은 드로어 구현 필요 */}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
