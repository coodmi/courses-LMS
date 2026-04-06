import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const TopInstructors = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer>
            <EditorDiv className="mx-auto mb-10 text-center md:max-w-[480px]">
               <EditorParagraph className="text-secondary-foreground mb-1 font-medium">Top Instructors</EditorParagraph>
               <EditorHeading className="mb-4 text-3xl font-bold sm:text-4xl">Meet Our Experts</EditorHeading>
               <EditorParagraph className="text-muted-foreground">They efficiently serve large number of students on our platform</EditorParagraph>
            </EditorDiv>

            <EditorDynamicWrapper api="api/collections/instructors/top" apiMethod="GET" componentRef="top-instructors-carousel" />
         </EditorContainer>
      </EditorSection>
   );
};

export default TopInstructors;
