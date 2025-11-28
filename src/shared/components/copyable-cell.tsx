import { ClipboardCopyIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { useCopyToClipboard, useHover } from "usehooks-ts";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

interface CopyableCellProps {
  cellText: string;
  showIcon?: boolean;
}

export function CopyableCell({
  cellText,
  showIcon = false,
  className,
}: React.ComponentProps<"button"> & CopyableCellProps) {
  const [, copy] = useCopyToClipboard();
  const hoverRef = React.useRef<HTMLButtonElement | null>(null);
  const isHover = useHover(hoverRef as React.RefObject<HTMLButtonElement>);

  const handleCopy = () => {
    copy(cellText).then(() => {
      toast.success("클립보드에 복사되었습니다.");
    });
  };

  return (
    <Button
      ref={hoverRef}
      variant="link"
      size="sm"
      onClick={handleCopy}
      className={cn("relative !p-0 h-fit", className)}
    >
      {cellText}
      {showIcon && (
        <ClipboardCopyIcon
          className={cn(
            "absolute -right-4 transition-opacity ",
            isHover ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </Button>
  );
}
