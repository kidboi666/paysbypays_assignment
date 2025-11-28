import type { Table } from "@tanstack/table-core";
import type React from "react";
import { Input } from "@/shared/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNextButton,
  PaginationPreviousButton,
} from "@/shared/components/ui/pagination";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  pageInput: string;
  setPageInput: React.Dispatch<React.SetStateAction<string>>;
}

export function DataTablePagination<TData>({
  table,
  pageInput,
  setPageInput,
}: DataTablePaginationProps<TData>) {
  return (
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
  );
}
