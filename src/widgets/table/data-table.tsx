"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import React from "react";
import { useIsMounted, useLocalStorage } from "usehooks-ts";
import { LOCAL_STORAGE_KEY } from "@/shared/model/constants";
import { DataTableContent } from "@/widgets/table/data-table-content";
import { DataTablePagination } from "@/widgets/table/data-table-pagination";
import { DataTableViewOptions } from "@/widgets/table/data-table-view-options";

const PAGE_SIZE = 16;

interface DataTableProps<TData> {
  tableName: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  columns: ColumnDef<TData, any>[];
  data: TData[];
  labels: Record<string, string>;
}

export function DataTable<TData>({
  tableName,
  columns,
  data,
  labels,
}: DataTableProps<TData>) {
  const isMounted = useIsMounted();
  const [columnVisibility, setColumnVisibility] =
    useLocalStorage<VisibilityState>(
      LOCAL_STORAGE_KEY.columnVisibility(tableName),
      {},
    );
  const [columnFilters, setColumnFilters] = useLocalStorage<ColumnFiltersState>(
    LOCAL_STORAGE_KEY.columnFilters(tableName),
    [],
  );
  const [pagination, setPagination] = useLocalStorage(
    LOCAL_STORAGE_KEY.pagination,
    {
      pageIndex: 0,
      pageSize: PAGE_SIZE,
    },
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: isMounted()
        ? pagination
        : { pageIndex: 0, pageSize: PAGE_SIZE },
      columnVisibility: isMounted() ? columnVisibility : {},
      columnFilters: isMounted() ? columnFilters : [],
    },
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const [pageInput, setPageInput] = React.useState(
    `${table.getState().pagination.pageIndex + 1}`,
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    setPageInput(`${table.getState().pagination.pageIndex + 1}`);
  }, [table.getState().pagination.pageIndex]);

  return (
    <div className="w-full flex flex-col gap-4">
      <header className="flex justify-between">
        <div />
        <DataTableViewOptions table={table} labels={labels} />
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
