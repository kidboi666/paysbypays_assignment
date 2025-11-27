import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import type * as React from "react";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationButtonProps = {
  className?: string;
  isActive?: boolean;
} & React.ComponentProps<typeof Button>;

function PaginationButton({
  className,
  isActive,
  size = "icon-sm",
  variant = "outline",
  ...props
}: PaginationButtonProps) {
  return (
    <Button
      variant={isActive ? "default" : variant}
      size={size}
      className={className}
      {...props}
    />
  );
}

function PaginationPreviousButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <PaginationButton
      aria-label="Go to previous page"
      className={className}
      {...props}
    >
      <ChevronLeftIcon />
    </PaginationButton>
  );
}

function PaginationNextButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <PaginationButton
      aria-label="Go to next page"
      className={className}
      {...props}
    >
      <ChevronRightIcon />
    </PaginationButton>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationButton,
  PaginationItem,
  PaginationPreviousButton,
  PaginationNextButton,
  PaginationEllipsis,
};
