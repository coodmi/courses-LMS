import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const NewCourses = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer className="relative z-10">
            <EditorDiv className="mx-auto text-center md:max-w-2xl">
               <EditorParagraph className="text-secondary-foreground mb-1 font-medium">Courses</EditorParagraph>
               <EditorHeading className="mb-4 text-3xl font-bold sm:text-4xl">Latest Courses</EditorHeading>
               <EditorParagraph className="text-muted-foreground">
                  Your professional development is supported by Mentor covering everything from technical subjects to essential abilities
               </EditorParagraph>
            </EditorDiv>

            <EditorDynamicWrapper api="api/collections/courses/new" apiMethod="GET" componentRef="new-courses-carousel" />

            <EditorDiv className="pointer-events-none absolute top-20 -left-10 h-[240px] w-[240px] rounded-full bg-[rgba(97,95,255,1))] blur-[290px] content-['']"></EditorDiv>

            <EditorDiv className="pointer-events-none absolute -right-10 bottom-0 h-[240px] w-[240px] rounded-full bg-[rgba(0,167,111,1)] blur-[290px] content-['']"></EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default NewCourses;
