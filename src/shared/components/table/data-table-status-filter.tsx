import type { Table } from "@tanstack/table-core";
import { ChevronDown, type LucideIcon } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { useIsMobile } from "@/shared/hooks/use-mobile";
import { cn } from "@/shared/lib/utils";

type LabelType = {
  label: string;
  className: string;
  icon: LucideIcon;
};

interface DataTableStatusFilterProps<TData, TFilter extends string> {
  value: string;
  table?: Table<TData>;
  labels: Record<TFilter, LabelType>;
  onChange: (value?: string) => void;
  filterKey: string;
  columnLabels: Record<string, string>;
}

export function DataTableStatusFilter<TData, TFilter extends string>({
  table,
  labels,
  value,
  onChange,
  filterKey,
  columnLabels,
}: DataTableStatusFilterProps<TData, TFilter>) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline" onClick={() => onChange()}>
            {value ? labels[value as TFilter].label : columnLabels[filterKey]}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={value}>
            <DropdownMenuRadioItem
              value={""}
              onClick={() => onChange()}
              className={cn(
                value === "" || value === undefined
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              전체
              <Badge>{table?.getCoreRowModel()?.rows.length}</Badge>
            </DropdownMenuRadioItem>
            {(Object.entries(labels) as [TFilter, LabelType][]).map(
              ([key, val]) => {
                const count = table
                  ?.getCoreRowModel()
                  .flatRows.filter(
                    (row) => row.getValue(filterKey) === key,
                  ).length;
                return (
                  <DropdownMenuRadioItem
                    key={key}
                    value={key}
                    className={cn(
                      value === key ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => onChange(key)}
                  >
                    {val.label}
                    <Badge className={val.className}>{count}</Badge>
                  </DropdownMenuRadioItem>
                );
              },
            )}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex">
      <Button
        size="sm"
        variant="ghost"
        className={cn(
          "text-muted-foreground py-1 px-2",
          value === undefined ? "text-primary" : "text-muted-foreground",
        )}
        onClick={() => onChange()}
      >
        전체
        <Badge variant="secondary">
          {table?.getCoreRowModel()?.rows.length}
        </Badge>
      </Button>
      {/* FIXME: 상용 서비스일 경우 이 부분은 서버측  로직에서 개선 필요, 과제 특성상 임시 구현 */}
      {(Object.entries(labels) as [TFilter, LabelType][]).map(([key, val]) => {
        const count = table
          ?.getCoreRowModel()
          .flatRows.filter((row) => row.getValue(filterKey) === key).length;
        return (
          <Button
            key={key}
            variant="ghost"
            size="sm"
            className={cn(
              "py-1 px-2",
              value === key ? "text-primary" : "text-muted-foreground",
            )}
            onClick={() => onChange(key)}
          >
            {val.label}
            <Badge className={val.className}>{count}</Badge>
          </Button>
        );
      })}
    </div>
  );
}
