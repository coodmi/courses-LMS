import InputError from '@/components/input-error';
import LoadingButton from '@/components/loading-button';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, ReactNode, useState } from 'react';

interface Props {
   projectId: number;
   triggerHandler: ReactNode;
}

const PageCreate = ({ projectId, triggerHandler }: Props) => {
   const [modal, setModal] = useState<boolean>(false);
   const { data, setData, post, processing, errors, reset } = useForm({
      title: '',
      url: '',
      type: 'inner',
      description: '',
      project_id: projectId,
   });

   const submit: FormEventHandler = (e) => {
      e.preventDefault();

      post(route('pages.store'), {
         onSuccess: () => {
            reset();
            setModal(false);
         },
      });
   };

   return (
      <Dialog open={modal} onOpenChange={setModal}>
         <DialogTrigger asChild>{triggerHandler}</DialogTrigger>

         <DialogContent className="max-w-xl p-4 md:p-6">
            <DialogTitle>Create New Page</DialogTitle>
            <DialogDescription>Add a new page to your project</DialogDescription>

            <form className="space-y-5" onSubmit={submit}>
               <div className="grid gap-2">
                  <Label htmlFor="title">Page Title</Label>

                  <Input
                     id="title"
                     type="text"
                     required
                     autoFocus
                     value={data.title}
                     onChange={(e) => setData('title', e.target.value)}
                     placeholder="Enter page title (e.g., Home, About, Contact)"
                  />

                  <InputError message={errors.title} />
               </div>

               <div className="grid gap-2">
                  <Label htmlFor="description">Description (Optional)</Label>

                  <Textarea
                     id="description"
                     rows={4}
                     value={data.description}
                     onChange={(e) => setData('description', e.target.value)}
                     placeholder="Brief description of this page"
                     className="min-h-[100px]"
                  />

                  <InputError message={errors.description} />
               </div>

               <div className="grid gap-2">
                  <Label>URL</Label>

                  <Input required type="text" value={data.url} onChange={(e) => setData('url', e.target.value)} placeholder="Enter page URL" />

                  <InputError message={errors.url} />
               </div>

               <div className="grid gap-2">
                  <Label>Page Type</Label>

                  <Select value={data.type} onValueChange={(value) => setData('type', value)} disabled={processing}>
                     <SelectTrigger>
                        <SelectValue placeholder="Select page type" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="inner">Inner</SelectItem>
                     </SelectContent>
                  </Select>

                  <InputError message={errors.type} />
               </div>

               <div className="flex items-center justify-end gap-4 pt-4">
                  <Button type="button" variant="outline" disabled={processing} onClick={() => setModal(false)}>
                     Cancel
                  </Button>

                  <LoadingButton loading={processing} type="submit">
                     Create Page
                  </LoadingButton>
               </div>
            </form>
         </DialogContent>
      </Dialog>
   );
};

export default PageCreate;
