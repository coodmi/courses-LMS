import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const TopCategories = () => {
   const categories = [
      {
         title: 'Web Development',
         count: '235 Courses',
         icon: 'code',
         bgColor: 'rgba(79,57,246,0.04)',
         borderColor: 'rgba(79,57,246,0.15)',
         color: 'rgba(79,57,246,1)',
      },
      {
         title: 'Data Science',
         count: '189 Courses',
         icon: 'database',
         bgColor: 'rgba(0,122,85,0.04)',
         borderColor: 'rgba(0,122,85,0.15)',
         color: 'rgba(0,122,85,1)',
      },
      {
         title: 'UI/UX Design',
         count: '156 Courses',
         icon: 'palette',
         bgColor: 'rgba(255,171,0,0.04)',
         borderColor: 'rgba(255,171,0,0.15)',
         color: 'rgba(255,171,0,1)',
      },
      {
         title: 'Digital Marketing',
         count: '142 Courses',
         icon: 'megaphone',
         bgColor: 'rgba(236,0,63,0.04)',
         borderColor: 'rgba(236,0,63,0.15)',
         color: 'rgba(236,0,63,1)',
      },
      {
         title: 'Mobile Development',
         count: '128 Courses',
         icon: 'smartphone',
         bgColor: 'rgba(255,171,0,0.04)',
         borderColor: 'rgba(255,171,0,0.15)',
         color: 'rgba(255,171,0,1)',
      },
   ];

   return (
      <EditorSection className="mt-20 py-20">
         <EditorContainer className="relative">
            <EditorDiv className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
               <EditorDiv className="w-full md:max-w-[306px]">
                  <EditorHeading className="mb-2 text-3xl font-bold sm:text-4xl">Top Categories</EditorHeading>
                  <EditorParagraph className="text-muted-foreground">Explore our most popular course categories</EditorParagraph>
               </EditorDiv>

               <EditorDynamicWrapper
                  className="w-full"
                  api="api/collections/course_categories/new"
                  apiMethod="GET"
                  componentRef="top-course-categories-5"
               />
            </EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default TopCategories;
