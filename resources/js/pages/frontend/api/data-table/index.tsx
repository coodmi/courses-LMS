import TableHeader from '@/components/table/table-header';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ColumnDef, SortingState, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import * as React from 'react';
import BlogsTableColumns from './blogs-table-columns';
import CategoriesTableColumns from './categories-table-columns';
import CourseTableColumns from './courses-table-columns';
import InstructorTableColumns from './instructors-table-columns';
import TableFilter from './table-filter';
import TableFooter from './table-footer';

type TableData = Course | Exam | Blog | Instructor | CourseCategory | ExamCategory | BlogCategory;

interface CoursesProps {
   type: 'courses' | 'exams' | 'blogs' | 'instructors' | 'course_categories' | 'exam_categories' | 'blog_categories';
   title: string;
   data: Pagination<TableData>;
   selectedIds?: number[];
   onCourseSelect?: (id: number) => void;
}

const DataTable = ({ type, title, data, selectedIds = [], onCourseSelect }: CoursesProps) => {
   const routeName = 'frontend.api';

   const tableColumns = (): ColumnDef<TableData, any>[] => {
      switch (type) {
         case 'courses':
            return CourseTableColumns() as ColumnDef<TableData, any>[];

         case 'instructors':
            return InstructorTableColumns() as ColumnDef<TableData, any>[];

         case 'blogs':
            return BlogsTableColumns() as ColumnDef<TableData, any>[];

         default:
            return CategoriesTableColumns() as ColumnDef<TableData, any>[];
      }
   };

   const [sorting, setSorting] = React.useState<SortingState>([]);
   const table = useReactTable({
      data: data.data,
      columns: tableColumns(),
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      state: { sorting },
   });

   return (
      <div>
         <TableFilter
            data={data}
            title={title}
            searchKey={type}
            globalSearch={true}
            tablePageSizes={[10, 15, 20, 25]}
            routeName={routeName}
            // Icon={<Users className="h-6 w-6 text-primary" />}
            // exportPath={route('users.export')}
         />

         <Table className="border-border border-y">
            <TableHeader table={table} />

            <TableBody>
               {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                     <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && 'selected'}
                        className={cn('hover:bg-muted cursor-pointer', selectedIds?.includes(Number(row.original.id)) && 'bg-secondary-light')}
                        onClick={() => onCourseSelect && onCourseSelect(Number(row.original.id))}
                     >
                        {row.getVisibleCells().map((cell) => (
                           <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                        ))}
                     </TableRow>
                  ))
               ) : (
                  <TableRow>
                     <TableCell className="h-24 text-center">No results.</TableCell>
                  </TableRow>
               )}
            </TableBody>
         </Table>

         <TableFooter className="p-4" routeName={routeName} paginationInfo={data} />
      </div>
   );
};

export default DataTable;
