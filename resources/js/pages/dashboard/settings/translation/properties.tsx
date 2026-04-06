import InputError from '@/components/input-error';
import JsonEditorModal from '@/components/json-editor-modal';
import LoadingButton from '@/components/loading-button';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import DashboardLayout from '@/layouts/dashboard/layout';
import { onHandleChange } from '@/lib/inertia';
import { SharedData } from '@/types/global';
import { LanguagesProperty } from '@/types/lang';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FileJson, MoveLeft, X } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface Props extends SharedData {
   property: LanguagesProperty;
}

const Properties = ({ property }: Props) => {
   const { props } = usePage<SharedData>();
   const { translate } = props;
   const { button, settings } = translate;
   const { data, setData, put, errors, processing } = useForm(property.properties);
   const [tab, setTab] = useState('form');

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      put(route('language.property.update', property.id));
   };

   const handleJsonSave = () => {
      put(route('language.property.update', property.id));
   };

   return (
      <div className="md:px-3">
         <Tabs value={tab} onValueChange={setTab}>
            <Card className="p-4 sm:p-6">
               <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold">{property.name}</h2>
                  <div className="flex gap-2">
                     <Button type="button" variant="outline" onClick={() => (tab === 'form' ? setTab('json') : setTab('form'))}>
                        {tab === 'form' ? <FileJson /> : <X />}
                        {tab === 'form' ? 'Update From JSON' : 'Update From Form'}
                     </Button>

                     <Link href={route('language.edit', property.language.code)}>
                        <Button>
                           <MoveLeft />
                           {button.back}
                        </Button>
                     </Link>
                  </div>
               </div>

               <Separator className="my-5" />

               <TabsContent value="form">
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {Object.entries(data).map(([key, value]) => (
                           <div key={key}>
                              <Label>{key}</Label>
                              <Input
                                 name={key}
                                 value={data[key as keyof typeof data] as any}
                                 placeholder="Enter value"
                                 onChange={(e) => onHandleChange(e, setData)}
                              />
                              <InputError message={errors[key as keyof typeof errors]} />
                           </div>
                        ))}
                     </div>

                     <div className="flex items-center justify-end">
                        <LoadingButton loading={processing}>{button.save_changes}</LoadingButton>
                     </div>
                  </form>
               </TabsContent>

               <TabsContent value="json">
                  <JsonEditorModal
                     tab={tab}
                     setTab={setTab}
                     data={data as any}
                     onChange={(changedData) => setData(changedData as any)}
                     onSave={handleJsonSave}
                  />
               </TabsContent>
            </Card>
         </Tabs>
      </div>
   );
};

Properties.layout = (page: ReactNode) => <DashboardLayout children={page} />;

export default Properties;
