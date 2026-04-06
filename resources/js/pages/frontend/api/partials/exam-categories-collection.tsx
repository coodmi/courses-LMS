import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2 } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { useState } from 'react';
import { APIParams } from '..';
import ApiCopy from './api-copy';

interface ExamCategoriesCollectionProps {
   data: { best: any | null; top: any[]; new: any[] };
   removing: string | null;
   inserting: string | null;
   categories: Pagination<any>;
   onRemove: (type: string, category: APIParams, itemId: number | string) => void;
   onInsert: (type: string, category: APIParams, itemId: number | string) => void;
}

const ExamCategoriesCollection = ({ data, removing, inserting, categories, onRemove, onInsert }: ExamCategoriesCollectionProps) => {
   const [value, setValue] = useState('best');

   const renderCategoryRow = (category_item: any, category: APIParams) => (
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
         <TableCell>{category_item.exams_count || 0} exams</TableCell>
         <TableCell>
            <Button
               variant="ghost"
               size="icon"
               onClick={() => onRemove('exam_categories', category, category_item.id)}
               disabled={removing === `exam_categories-${category}-${category_item.id}`}
            >
               <Trash2 className="text-destructive h-4 w-4" />
            </Button>
         </TableCell>
      </TableRow>
   );

   return (
      <Card>
         <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3">
            <div>
               <CardTitle className="text-xl font-bold">Exam Categories</CardTitle>
               <ApiCopy value={`api/collections/exam_categories/${value}`} />
            </div>
         </CardHeader>
         <CardContent>
            <Tabs defaultValue="best" className="w-full" value={value} onValueChange={setValue}>
               <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="best">Best</TabsTrigger>
                  <TabsTrigger value="top">Top</TabsTrigger>
                  <TabsTrigger value="new">New</TabsTrigger>
               </TabsList>

               <TabsContent value="best">
                  <Table>
                     <TableHeader>
                        <TableRow>
                           <TableHead>Icon</TableHead>
                           <TableHead>Title</TableHead>
                           <TableHead>Slug</TableHead>
                           <TableHead>Exams</TableHead>
                           <TableHead>Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {data.best ? (
                           renderCategoryRow(data.best, 'best')
                        ) : (
                           <TableRow>
                              <TableCell colSpan={5} className="text-muted-foreground text-center">
                                 No best exam category selected
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
                           <TableHead>Exams</TableHead>
                           <TableHead>Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {data.top && data.top.length > 0 ? (
                           data.top.map((category_item) => renderCategoryRow(category_item, 'top'))
                        ) : (
                           <TableRow>
                              <TableCell colSpan={5} className="text-muted-foreground text-center">
                                 No top exam categories selected
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
                           <TableHead>Exams</TableHead>
                           <TableHead>Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {data.new && data.new.length > 0 ? (
                           data.new.map((category_item) => renderCategoryRow(category_item, 'new'))
                        ) : (
                           <TableRow>
                              <TableCell colSpan={5} className="text-muted-foreground text-center">
                                 No new exam categories selected
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

export default ExamCategoriesCollection;
