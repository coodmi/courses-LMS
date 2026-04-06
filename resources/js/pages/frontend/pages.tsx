import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import DashboardLayout from '@/layouts/dashboard/layout';
import { cn } from '@/lib/utils';
import { Link, router } from '@inertiajs/react';
import { Eye, FileText, Pencil, Plus } from 'lucide-react';
import { ReactNode } from 'react';
import FrontendSystem from './partials/frontend-system';
import PageCreate from './partials/page-create';
import ThemeConfig from './partials/theme-config';

const Pages = ({ project }: { project: Project }) => {
   const homePages = project.pages.filter((page) => page.type === 'home');
   const innerPages = project.pages.filter((page) => page.type === 'inner');

   return (
      <div className="md:px-4">
         {/* Project Header */}
         <div className="mb-8">
            <div className="flex items-center justify-between">
               <ThemeConfig project={project} />

               <FrontendSystem />
            </div>
         </div>

         {/* Pages Section */}
         <div>
            <div className="mb-4 flex items-center justify-between">
               <div>
                  <h2 className="text-xl font-semibold">Pages</h2>
                  <p className="text-muted-foreground text-sm">Manage your project pages</p>
               </div>
               <PageCreate
                  projectId={project.id as number}
                  triggerHandler={
                     <Button className="px-3">
                        <Plus className="h-4 w-4" />
                        <span>Create Page</span>
                     </Button>
                  }
               />
            </div>

            {/* Home Pages */}
            <div>
               <h2 className="mb-3 text-base font-semibold">Home Pages</h2>

               {homePages.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                     {homePages.map((page) => (
                        <Card
                           key={page.id}
                           className={cn(
                              'hover:outline-primary relative cursor-pointer p-5 transition-all hover:outline',
                              page.status ? 'outline-primary outline' : '',
                           )}
                           onClick={() => {
                              router.post(route('pages.update', page.id), {
                                 title: page.title,
                                 type: 'home',
                                 status: true,
                              });
                           }}
                        >
                           {page.status && (
                              <Badge
                                 onClick={(e) => e.stopPropagation()}
                                 className="absolute -top-[22px] left-1/2 -translate-x-1/2 cursor-auto rounded-b-none"
                              >
                                 Activated
                              </Badge>
                           )}
                           <h3 className="group-hover:text-primary mb-1 text-lg font-semibold transition-colors">{page.title}</h3>

                           <div className="absolute top-4 right-4 flex items-center justify-end gap-2">
                              <Link onClick={(e) => e.stopPropagation()} href={route('page.editor', { project: project.id, page: page.id })}>
                                 <Button size="icon" variant="secondary" className="h-8 w-8">
                                    <Pencil />
                                 </Button>
                              </Link>

                              <a onClick={(e) => e.stopPropagation()} href={route('page.show', page.id)} target="_blank">
                                 <Button size="icon" variant="secondary" className="h-8 w-8">
                                    <Eye />
                                 </Button>
                              </a>

                              {/* <DeleteModal
                              routePath={route('page.destroy', page.id)}
                              actionComponent={
                                 <Button variant="ghost" className="bg-destructive/8 hover:bg-destructive/6 h-8 w-8">
                                    <Trash2 className="text-destructive h-3 w-3" />
                                 </Button>
                              }
                           /> */}
                           </div>
                        </Card>
                     ))}
                  </div>
               ) : (
                  <Card className="border-dashed">
                     <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="bg-muted mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                           <FileText className="text-muted-foreground h-8 w-8" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">No pages yet</h3>
                        <p className="text-muted-foreground mb-6 max-w-sm text-sm">Get started by creating your first page for this project.</p>
                        <PageCreate
                           projectId={project.id as number}
                           triggerHandler={
                              <Button>
                                 <Plus className="mr-2 h-4 w-4" />
                                 Create Your First Page
                              </Button>
                           }
                        />
                     </div>
                  </Card>
               )}
            </div>

            {/* Inner Pages */}
            <div className="mt-6">
               <h2 className="mb-3 text-base font-semibold">Inner Pages</h2>
               {innerPages.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                     {innerPages.map((page) => (
                        <Card key={page.id} className="relative p-5 transition-all">
                           <h3 className="group-hover:text-primary mb-1 text-lg font-semibold transition-colors">{page.title}</h3>

                           <div className="absolute top-4 right-4 flex items-center justify-end gap-2">
                              <Link onClick={(e) => e.stopPropagation()} href={route('page.editor', { project: project.id, page: page.id })}>
                                 <Button size="icon" variant="secondary" className="h-8 w-8">
                                    <Pencil />
                                 </Button>
                              </Link>

                              <a onClick={(e) => e.stopPropagation()} href={route('page.show', page.id)} target="_blank">
                                 <Button size="icon" variant="secondary" className="h-8 w-8">
                                    <Eye />
                                 </Button>
                              </a>

                              {/* <DeleteModal
                              routePath={route('page.destroy', page.id)}
                              actionComponent={
                                 <Button variant="ghost" className="bg-destructive/8 hover:bg-destructive/6 h-8 w-8">
                                    <Trash2 className="text-destructive h-3 w-3" />
                                 </Button>
                              }
                           /> */}
                           </div>
                        </Card>
                     ))}
                  </div>
               ) : (
                  <Card className="border-dashed">
                     <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="bg-muted mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                           <FileText className="text-muted-foreground h-8 w-8" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">No pages yet</h3>
                        <p className="text-muted-foreground mb-6 max-w-sm text-sm">Get started by creating your first page for this project.</p>
                        <PageCreate
                           projectId={project.id as number}
                           triggerHandler={
                              <Button>
                                 <Plus className="mr-2 h-4 w-4" />
                                 Create Your First Page
                              </Button>
                           }
                        />
                     </div>
                  </Card>
               )}
            </div>
         </div>
      </div>
   );
};

Pages.layout = (page: ReactNode) => <DashboardLayout children={page} />;

export default Pages;
