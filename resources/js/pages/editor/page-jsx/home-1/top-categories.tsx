import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const TopCategories = () => {
   return (
      <EditorSection className="z-10 py-20">
         <EditorContainer>
            <EditorDiv className="bg-secondary/10 mx-auto mb-10 text-center md:max-w-2xl">
               <EditorParagraph className="text-secondary-foreground mb-1 font-medium">Top Categories</EditorParagraph>
               <EditorHeading className="mb-4 text-3xl font-bold sm:text-4xl">Featured category</EditorHeading>
               <EditorParagraph className="text-muted-foreground">
                  These are the most popular courses among listen courses learners worldwide
               </EditorParagraph>
            </EditorDiv>

            <EditorDynamicWrapper api="api/collections/course_categories/top" apiMethod="GET" componentRef="top-course-categories-1" />
         </EditorContainer>
      </EditorSection>
   );
};

export default TopCategories;
