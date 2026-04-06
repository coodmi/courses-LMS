import InputError from '@/components/input-error';
import LoadingButton from '@/components/loading-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { EditorProps } from '@/pages/editor';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

const SettingsTab = () => {
   const { props } = usePage<EditorProps>();
   const { page } = props;

   const [bannerUrl, setBannerUrl] = useState(page.banner || '/assets/images/blank-image.jpg');

   const { data, setData, post, processing, errors, reset } = useForm({
      type: page.type,
      title: page.title || '',
      description: page.description || '',
      banner: null as File | null,
   });

   const submit: FormEventHandler = (e) => {
      e.preventDefault();

      post(route('pages.update', page.id), {
         onSuccess: () => {
            // Don't reset the form on success to keep the values
         },
      });
   };

   const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
         setData('banner', file);
         setBannerUrl(URL.createObjectURL(file));
      }
   };

   return (
      <form className="space-y-5 p-5" onSubmit={submit}>
         <div className="grid gap-2">
            <Label htmlFor="title">
               Page Title <span className="text-red-500">*</span>
            </Label>

            <Input id="title" type="text" required value={data.title} onChange={(e) => setData('title', e.target.value)} placeholder="Page Title" />

            <InputError message={errors.title} />
         </div>

         <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>

            <Textarea
               id="description"
               rows={6}
               value={data.description}
               onChange={(e) => setData('description', e.target.value)}
               placeholder="Page Description"
               className="min-h-[100px]"
            />

            <InputError message={errors.description} />
         </div>

         <div className="grid gap-2">
            <Label>Banner Image</Label>

            <div className="relative">
               <img className="w-full rounded-md border border-gray-200" src={bannerUrl} alt="Page banner" />

               <label
                  htmlFor="banner"
                  className="bg-secondary hover:bg-secondary/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-nowrap transition-colors"
               >
                  Upload Banner
               </label>
               <input hidden id="banner" name="banner" type="file" accept="image/*" onChange={handleBannerChange} />
            </div>

            <InputError message={errors.banner} />
         </div>

         <div className="pt-3">
            <LoadingButton loading={processing} type="submit" className="w-full">
               Save Changes
            </LoadingButton>
         </div>
      </form>
   );
};

export default SettingsTab;
