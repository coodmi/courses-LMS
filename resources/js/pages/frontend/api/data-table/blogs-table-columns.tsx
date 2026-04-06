import { Button } from '@/components/ui/button';
import { SharedData } from '@/types/global';
import { usePage } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

const BlogsTableColumns = (): ColumnDef<Blog>[] => {
   const { table } = usePage<SharedData>().props.translate;

   return [
      {
         accessorKey: 'creator',
         header: ({ column }) => {
            return (
               <div className="flex items-center pl-4">
                  <Button variant="ghost" className="p-0 hover:bg-transparent" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                     {table.creator}
                     <ArrowUpDown />
                  </Button>
               </div>
            );
         },
         cell: ({ row }) => (
            <div className="pl-4">
               <p className="mb-0.5 text-base font-medium">{row.original.user.name}</p>
               <p className="text-muted-foreground text-xs">{row.original.user.email}</p>
            </div>
         ),
         sortingFn: (a, b) => a.original.user.name.localeCompare(b.original.user.name),
      },
      {
         accessorKey: 'title',
         header: table.title,
         cell: ({ row }) => <div className="py-1 capitalize">{row.getValue('title')}</div>,
      },
      {
         accessorKey: 'status',
         header: ({ column }) => (
            <div className="flex items-center justify-center">
               <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                  {table.status}
                  <ArrowUpDown />
               </Button>
            </div>
         ),
         cell: ({ row }) => <div className="py-1 text-center capitalize">{row.getValue('status')}</div>,
      },
   ];
};

export default BlogsTableColumns;
