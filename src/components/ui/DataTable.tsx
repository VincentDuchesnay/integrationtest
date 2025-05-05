import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/DropdownMenu";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import * as React from "react";
import clsx from "clsx";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 9,
      },
    },
  });

  const sortBy = (columnId: string) => {
    setSorting([{ id: columnId, desc: false }]);
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex gap-2 items-center text-[18px] font-jura bg-transparent max-w-[151px] px-[16px] py-[6px] border-[1px] border-[#252525]"
          >
            {sorting.length > 0 ? sorting[0].id : "Event Type"} <Settings2 className="text-white w-full h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196.5px] text-black rounded-[4px]">
        {table.getAllColumns()
  .filter((col) =>
    typeof window !== "undefined" && window.innerWidth < 640
      ? ["event", "time"].includes(col.id!)
      : true
  )
  .map((column) => (
    <DropdownMenuItem
      className="hover:border-b-[3px] hover:border-t-[3px] border-[#2525254D]/50 rounded-none"
      key={column.id}
      onClick={() => sortBy(column.id || "")}
    >
      {column.id}
    </DropdownMenuItem>
))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="text-white">
        <Table className="max-w-[1002px]">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="px-[12px] py-[8px] border-[2px] border-[#2525254D]/30">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className={clsx("text-[15px] lg:w-[300px] h-[24px]", {
                    "hidden sm:table-cell": header.column.id !== "event" && header.column.id !== "time"
                  })}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className={clsx("px-[12px] py-[10px] border-b-[1px] border-[#2525254D]/30", {
                    "hidden sm:table-cell": cell.column.id !== "event" && cell.column.id !== "time"
                  })}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between pt-4">
        <span className="text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
