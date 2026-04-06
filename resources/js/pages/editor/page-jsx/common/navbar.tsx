import {
   EditorButton,
   EditorContainer,
   EditorDiv,
   EditorDrawer,
   EditorDrawerContent,
   EditorDrawerTrigger,
   EditorHeader,
   EditorIcon,
   EditorImage,
   EditorLink,
   EditorNav,
} from '@/pages/editor/lib/components';
import { SharedData } from '@/types/global';
import { usePage } from '@inertiajs/react';

const Navbar = () => {
   const { props } = usePage<SharedData>();
   const { auth } = props;

   const navigation = [
      { label: 'Courses', href: '/courses/all' },
      { label: 'Exams', href: '/exams/all' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blogs', href: '/blogs/all' },
   ];

   return (
      <EditorHeader className="fixed top-0 z-50 bg-white shadow-sm">
         <EditorContainer className="py-3">
            <EditorNav className="flex w-full items-center justify-between">
               <EditorLink href="/" className="flex items-center justify-center">
                  <EditorImage className="block !h-6 w-auto dark:hidden" src="/assets/icons/logo-dark.png" alt="" />
                  <EditorImage className="hidden !h-6 w-auto dark:block" src="/assets/icons/logo-light.png" alt="" />
               </EditorLink>

               <EditorDiv className="hidden gap-4 md:flex">
                  {navigation.map((item) => (
                     <EditorLink key={item.label} href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                        {item.label}
                     </EditorLink>
                  ))}
               </EditorDiv>

               <EditorDiv className="flex items-center justify-end">
                  <EditorDiv className="hidden items-center gap-3 md:flex">
                     <EditorLink href="/login" className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
                        Log in
                     </EditorLink>
                     <EditorLink href="/register">
                        <EditorButton buttonType="button" className="cursor-pointer">
                           Sign Up
                        </EditorButton>
                     </EditorLink>
                  </EditorDiv>

                  <EditorDrawer className="md:hidden">
                     <EditorDrawerTrigger className="text-primary-foreground flex items-center justify-center p-2">
                        <EditorIcon name="menu" className="text-primary-foreground -mb-1 p-0" />
                     </EditorDrawerTrigger>
                     <EditorDrawerContent className="space-y-4">
                        <EditorLink href="/" className="flex items-center justify-center">
                           <EditorImage className="block !h-6 w-auto dark:hidden" src="/assets/icons/logo-dark.png" alt="" />
                           <EditorImage className="hidden !h-6 w-auto dark:block" src="/assets/icons/logo-light.png" alt="" />
                        </EditorLink>

                        <EditorLink href="/courses/all" className="w-full rounded-md bg-gray-100 px-3 py-2 text-gray-600 hover:text-gray-900">
                           Courses
                        </EditorLink>
                        <EditorLink href="/exams/all" className="w-full rounded-md bg-gray-100 px-3 py-2 text-gray-600 hover:text-gray-900">
                           Exams
                        </EditorLink>
                        <EditorLink href="/about-us" className="w-full rounded-md bg-gray-100 px-3 py-2 text-gray-600 hover:text-gray-900">
                           About Us
                        </EditorLink>
                        <EditorLink href="/our-team" className="w-full rounded-md bg-gray-100 px-3 py-2 text-gray-600 hover:text-gray-900">
                           Our Team
                        </EditorLink>
                        <EditorLink href="/careers" className="w-full rounded-md bg-gray-100 px-3 py-2 text-gray-600 hover:text-gray-900">
                           Careers
                        </EditorLink>
                        <EditorLink href="/blogs/all" className="w-full rounded-md bg-gray-100 px-3 py-2 text-gray-600 hover:text-gray-900">
                           Blogs
                        </EditorLink>

                        <EditorLink href="/login" className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
                           Log in
                        </EditorLink>
                        <EditorLink href="/register">
                           <EditorButton buttonType="button" className="cursor-pointer">
                              Sign Up
                           </EditorButton>
                        </EditorLink>
                     </EditorDrawerContent>
                  </EditorDrawer>
               </EditorDiv>
            </EditorNav>
         </EditorContainer>
      </EditorHeader>
   );
};

export default Navbar;
