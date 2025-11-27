import type { Table } from "@tanstack/table-core";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
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
}

export function DataTableStatusFilter<TData, TFilter extends string>({
  table,
  labels,
  value,
  onChange,
  filterKey,
}: DataTableStatusFilterProps<TData, TFilter>) {
  return (
    <div className="flex">
      <Button
        size="sm"
        variant="ghost"
        className={cn(
          "text-muted-foreground",
          value === undefined ? "text-primary" : "text-muted-foreground",
        )}
        onClick={() => onChange()}
      >
        전체
        <Badge>{table?.getCoreRowModel()?.rows.length}</Badge>
      </Button>
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
