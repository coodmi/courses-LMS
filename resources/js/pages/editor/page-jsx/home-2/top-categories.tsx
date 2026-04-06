import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const TopCategories = () => {
   return (
      <EditorSection className="relative z-10 py-20">
         <EditorContainer>
            <EditorDiv className="mx-auto mb-10 text-center md:max-w-2xl">
               <EditorParagraph className="text-secondary-foreground mb-1 font-medium">Top Categories</EditorParagraph>
               <EditorHeading className="mb-4 text-3xl font-bold sm:text-4xl">Explore by Category</EditorHeading>
               <EditorParagraph className="text-muted-foreground">
                  These are the most popular courses among listen courses learners worldwide
               </EditorParagraph>
            </EditorDiv>

            <EditorDynamicWrapper
               api="api/collections/course_categories/top"
               apiMethod="GET"
               componentRef="top-course-categories-2"
               className="relative z-10 my-12"
            />

            <EditorDiv className="pointer-events-none absolute right-5 -bottom-10 h-[200px] w-[200px] rounded-full bg-[#FFF5CC] blur-[250px] content-[''] md:h-[310px] md:w-[310px]"></EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default TopCategories;
