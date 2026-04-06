import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2 } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { useState } from 'react';
import { APIParams } from '..';
import DataTable from '../data-table';
import ApiCopy from './api-copy';

interface CourseCategoriesCollectionProps {
   data: { best: CourseCategory | null; top: CourseCategory[]; new: CourseCategory[]; featured: CourseCategory[] };
   removing: string | null;
   inserting: string | null;
   categories: Pagination<CourseCategory>;
   onRemove: (type: string, category: APIParams, itemId: number | string) => void;
   onInsert: (type: string, category: APIParams, itemId: number | string) => void;
}

const CourseCategoriesCollection = ({ data, removing, inserting, categories, onRemove, onInsert }: CourseCategoriesCollectionProps) => {
   const [value, setValue] = useState('best');

   const renderCategoryRow = (category_item: CourseCategory, category: APIParams) => (
      <TableRow key={category_item.id}>
         <TableCell>
            {category_item.icon ? (
               <DynamicIcon name={category_item.icon as any} className="text-primary h-8 w-8" />
            ) : (
               <div className="bg-muted h-12 w-12 rounded" />
            )}
         </TableCell>
         <TableCell className="font-medium">{category_item.title}</TableCell>
         <TableCell>{category_item.slug || 'N/A'}</TableCell>
         <TableCell>{category_item.courses_count || 0} courses</TableCell>
         <TableCell>
            <Button
               variant="ghost"
               size="icon"
               onClick={() => onRemove('course_categories', category, category_item.id)}
               disabled={removing === `course_categories-${category}-${category_item.id}`}
            >
               <Trash2 className="text-destructive h-4 w-4" />
            </Button>
         </TableCell>
      </TableRow>
   );

   return (
      <Card className="relative">
         <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3">
            <div>
               <CardTitle className="text-xl font-bold">Course Categories</CardTitle>
               <ApiCopy value={`api/collections/course_categories/${value}`} />
            </div>

            <Dialog>
               <DialogTrigger>
                  <Button className="capitalize">Select {value} Category</Button>
               </DialogTrigger>
               <DialogContent className="p-0">
                  <ScrollArea className="max-h-[90vh] p-2">
                     <DataTable
                        type="course_categories"
                        title="Course Categories"
                        data={categories}
                        selectedIds={
                           value === 'best'
                              ? ([data.best?.id] as number[])
                              : value === 'top'
                                ? (data.top.map((cat) => cat.id) as number[])
                                : value === 'new'
                                  ? (data.new.map((cat) => cat.id) as number[])
                                  : (data.featured.map((cat) => cat.id) as number[])
                        }
                        onCourseSelect={(id) => onInsert('course_categories', value as APIParams, id)}
                     />
                  </ScrollArea>
               </DialogContent>
            </Dialog>
         </CardHeader>

         <CardContent>
            <Tabs defaultValue="best" className="w-full" value={value} onValueChange={setValue}>
               <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="best" className="cursor-pointer">
                     Best Course Category
                  </TabsTrigger>
                  <TabsTrigger value="top" className="cursor-pointer">
                     Top Course Categories
                  </TabsTrigger>
                  <TabsTrigger value="new" className="cursor-pointer">
                     New Course Categories
                  </TabsTrigger>
                  <TabsTrigger value="featured" className="cursor-pointer">
                     Featured Course Categories
                  </TabsTrigger>
               </TabsList>

               <TabsContent value="best">
                  <Table>
                     <TableHeader>
                        <TableRow>
                           <TableHead>Icon</TableHead>
                           <TableHead>Title</TableHead>
                           <TableHead>Slug</TableHead>
                           <TableHead>Courses</TableHead>
                           <TableHead>Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {data.best ? (
                           renderCategoryRow(data.best, 'best')
                        ) : (
                           <TableRow>
                              <TableCell colSpan={5} className="text-muted-foreground text-center">
                                 No best course category selected
                              </TableCell>
                           </TableRow>
                        )}
                     </TableBody>
                  </Table>
               </TabsContent>

               <TabsContent value="top">
                  <Table>
                     <TableHeader>
                        <TableRow>
                           <TableHead>Icon</TableHead>
                           <TableHead>Title</TableHead>
                           <TableHead>Slug</TableHead>
                           <TableHead>Courses</TableHead>
                           <TableHead>Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {data.top && data.top.length > 0 ? (
                           data.top.map((category_item) => renderCategoryRow(category_item, 'top'))
                        ) : (
                           <TableRow>
                              <TableCell colSpan={5} className="text-muted-foreground text-center">
                                 No top course categories selected
                              </TableCell>
                           </TableRow>
                        )}
                     </TableBody>
                  </Table>
               </TabsContent>

               <TabsContent value="new">
                  <Table>
                     <TableHeader>
                        <TableRow>
                           <TableHead>Icon</TableHead>
                           <TableHead>Title</TableHead>
                           <TableHead>Slug</TableHead>
                           <TableHead>Courses</TableHead>
                           <TableHead>Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {data.new && data.new.length > 0 ? (
                           data.new.map((category_item) => renderCategoryRow(category_item, 'new'))
                        ) : (
                           <TableRow>
                              <TableCell colSpan={5} className="text-muted-foreground text-center">
                                 No new course categories selected
                              </TableCell>
                           </TableRow>
                        )}
                     </TableBody>
                  </Table>
               </TabsContent>

               <TabsContent value="featured">
                  <Table>
                     <TableHeader>
                        <TableRow>
                           <TableHead>Icon</TableHead>
                           <TableHead>Title</TableHead>
                           <TableHead>Slug</TableHead>
                           <TableHead>Courses</TableHead>
                           <TableHead>Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {data.featured && data.featured.length > 0 ? (
                           data.featured.map((category_item) => renderCategoryRow(category_item, 'featured'))
                        ) : (
                           <TableRow>
                              <TableCell colSpan={5} className="text-muted-foreground text-center">
                                 No featured course categories selected
                              </TableCell>
                           </TableRow>
                        )}
                     </TableBody>
                  </Table>
               </TabsContent>
            </Tabs>
         </CardContent>
      </Card>
   );
};

export default CourseCategoriesCollection;
