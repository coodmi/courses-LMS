import { EditorContainer, EditorDiv, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const Statistics = () => {
   return (
      <EditorSection className="py-10">
         <EditorContainer>
            <EditorDiv className="grid grid-cols-2 gap-7 md:grid-cols-4">
               <EditorDiv className="text-center">
                  <EditorHeading className="text-4xl font-bold md:text-5xl">68k+</EditorHeading>
                  <EditorParagraph className="text-muted-foreground mt-2">Students</EditorParagraph>
               </EditorDiv>
               <EditorDiv className="text-center">
                  <EditorHeading className="text-4xl font-bold md:text-5xl">1.2k+</EditorHeading>
                  <EditorParagraph className="text-muted-foreground mt-2">Courses</EditorParagraph>
               </EditorDiv>
               <EditorDiv className="text-center">
                  <EditorHeading className="text-4xl font-bold md:text-5xl">850+</EditorHeading>
                  <EditorParagraph className="text-muted-foreground mt-2">Instructors</EditorParagraph>
               </EditorDiv>
               <EditorDiv className="text-center">
                  <EditorHeading className="text-4xl font-bold md:text-5xl">45k+</EditorHeading>
                  <EditorParagraph className="text-muted-foreground mt-2">Reviews</EditorParagraph>
               </EditorDiv>
            </EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default Statistics;
