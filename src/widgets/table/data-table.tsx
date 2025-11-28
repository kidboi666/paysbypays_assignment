"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import type { LucideIcon } from "lucide-react";
import React from "react";
import { useLocalStorage } from "usehooks-ts";
import { LOCAL_STORAGE_KEY } from "@/shared/model/constants";
import { DataTableContent } from "@/widgets/table/data-table-content";
import { DataTablePagination } from "@/widgets/table/data-table-pagination";
import { DataTableStatusFilter } from "@/widgets/table/data-table-status-filter";
import { DataTableViewOptions } from "@/widgets/table/data-table-view-options";

const PAGE_SIZE = 16;

interface DataTableProps<TData, TFilter extends string> {
  tableName: string;
  columns: ColumnDef<TData, TData>[];
  data: TData[];
  columnLabels: Record<string, string>;
  filterLabels: Record<
    TFilter,
    { label: string; className: string; icon: LucideIcon }
  >;
}

export function DataTable<TData, TFilter extends string>({
  tableName,
  columns,
  data,
  columnLabels,
  filterLabels,
}: DataTableProps<TData, TFilter>) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const [columnVisibility, setColumnVisibility] =
    useLocalStorage<VisibilityState>(
      LOCAL_STORAGE_KEY.columnVisibility(tableName),
      {},
    );
  const [columnFilters, setColumnFilters] = useLocalStorage<ColumnFiltersState>(
    LOCAL_STORAGE_KEY.columnFilters(tableName),
    [],
  );
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: PAGE_SIZE,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      columnFilters: isMounted ? columnFilters : [],
      columnVisibility: isMounted ? columnVisibility : {},
    },
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex: false,
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: Reset pagination when filters change
  React.useEffect(() => {
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  }, [columnFilters]);

  const [pageInput, setPageInput] = React.useState(
    `${table.getState().pagination.pageIndex + 1}`,
  );

  const handleChangeFilterValue = (value?: string) => {
    table.getColumn("status")?.setFilterValue(value);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    setPageInput(`${table.getState().pagination.pageIndex + 1}`);
  }, [table.getState().pagination.pageIndex]);

  return (
    <div className="w-full flex flex-col gap-4">
      <header className="flex justify-between">
        <DataTableStatusFilter
          value={table.getColumn("status")?.getFilterValue() as string}
          table={table}
          labels={filterLabels}
          onChange={handleChangeFilterValue}
          filterKey="status"
          columnLabels={columnLabels}
        />
        <DataTableViewOptions table={table} labels={columnLabels} />
      </header>
      <div className="overflow-hidden rounded-md border">
        <DataTableContent columns={columns} data={data} table={table} />
      </div>
      <DataTablePagination
        table={table}
        pageInput={pageInput}
        setPageInput={setPageInput}
      />
    </div>
  );
}
