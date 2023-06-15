import * as React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {cn} from '../twable-classnames';
import {Button} from './button';
import Loading from '../base/loading';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({className, ...props}, ref) => (
  <div className="w-full overflow-auto">
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
  <tfoot
    ref={ref}
    className={cn('bg-primary font-medium text-primary-foreground', className)}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({className, ...props}, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
  <td
    ref={ref}
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({className, ...props}, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

type DeskaAntdToReactTableColumnDev<TData> = {
  title: string;
  dataIndex: string;
  key: string;
  render?: (value: any, record: TData, index: number) => React.ReactNode;
  shouldCellUpdate?: (record: TData, prevRecord: TData) => boolean;
  // rowSpan?: number;
  // width?: number | string;
  // onCell?: GetComponentProps<RecordType>;
};

interface DataTableProps<TData> {
  columns: DeskaAntdToReactTableColumnDev<TData>[];
  dataSource: TData[];
  loading?: boolean;
  pagination?: {
    // className: string;
    // selectPrefixCls: string;
    // prefixCls: string;
    // pageSizeOptions: string[] | number[];

    // current: number;
    // defaultCurrent: number;
    total?: number;
    // pageSize: number;
    // defaultPageSize: number;

    // hideOnSinglePage: boolean;
    // showSizeChanger: boolean;
    // showLessItems: boolean;
    // showPrevNextJumpers: boolean;
    // showQuickJumper: boolean | object;
    // showTitle: boolean;
    // simple: boolean;
    // disabled: boolean;
    onChange?: (page: number, pageSize: number) => void;
  };
  enableRowSelection?: boolean;
}

const LegacyDefaultTable = <TData, TValue>({
  columns,
  dataSource,
  loading,
  pagination,
  enableRowSelection = false,
}: DataTableProps<TData>) => {
  const compatColumns = columns.map((column) => {
    const columnDef: ColumnDef<TData, TValue> = {
      id: column.key,
      accessorKey: column.key,
      header: column.title,
      cell: column.render
        ? (tableRow) => {
            return column.render!(
              tableRow.row.getValue(column.key),
              tableRow.row.original,
              tableRow.row.index
            );
          }
        : undefined,
    };
    return columnDef;
  });
  const table = useReactTable({
    data: dataSource,
    columns: compatColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection,
  });

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
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
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  <Loading />
                </TableCell>
              </TableRow>
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

      {pagination && (
        <div className="flex items-center justify-end space-x-2 py-4">
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
      )}
    </div>
  );
};

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  LegacyDefaultTable,
};
