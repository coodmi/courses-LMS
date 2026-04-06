import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const NewCourses = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer>
            <EditorDiv className="relative z-10 mx-auto mb-10 max-w-lg text-center">
               <EditorParagraph className="text-secondary-foreground mb-1 font-medium">Courses</EditorParagraph>
               <EditorHeading className="mb-4 text-2xl font-bold sm:text-3xl">Latest Courses</EditorHeading>
               <EditorParagraph className="text-muted-foreground">
                  These are the most popular courses among listen courses learners worldwide these are the most popular courses among courses
               </EditorParagraph>
            </EditorDiv>

            <EditorDiv className="relative">
               <EditorDynamicWrapper api="api/collections/courses/new" apiMethod="GET" componentRef="new-courses-1" />

               <EditorDiv className="pointer-events-none absolute bottom-1 left-0 h-[260px] w-[260px] rounded-full bg-[rgba(0,167,111,1)] blur-[290px] content-['']"></EditorDiv>

               <EditorDiv className="pointer-events-none absolute top-0 right-0 h-[200px] w-[200px] rounded-full bg-[rgba(97,95,255,1)] blur-[290px] content-['']"></EditorDiv>
            </EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default NewCourses;
