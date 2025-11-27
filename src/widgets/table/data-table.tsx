"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import React from "react";
import { Input } from "@/shared/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNextButton,
  PaginationPreviousButton,
} from "@/shared/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { DataTableViewOptions } from "@/widgets/table/data-table-view-options";

const PAGE_SIZE = 16;

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  labels: Record<string, string>;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  labels,
}: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
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
      columnVisibility,
      columnFilters,
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
        <Table>
          <TableHeader className="bg-muted/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination>
        <PaginationContent className="gap-2">
          <PaginationItem>
            <PaginationPreviousButton
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />
          </PaginationItem>
          <PaginationItem className="flex gap-2 items-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                table.setPageIndex(parseInt(pageInput, 10) - 1);
              }}
            >
              <Input
                value={pageInput}
                onChange={(e) => setPageInput(e.target.value)}
                className="w-8 text-center h-7 px-1"
              />
            </form>
            <span className="text-muted-foreground text-sm">
              / {table.getPageCount()}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNextButton
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
