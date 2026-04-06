import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const Testimonials = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer>
            <EditorDiv className="relative z-10 mx-auto max-w-lg text-center">
               <EditorParagraph className="text-secondary-foreground mb-1 font-medium">Testimonials</EditorParagraph>
               <EditorHeading className="mb-4 text-2xl font-bold sm:text-3xl">What Our Students Say</EditorHeading>
               <EditorParagraph className="text-muted-foreground">They efficiently serve large number of students on our platform</EditorParagraph>
            </EditorDiv>

            <EditorDiv className="relative">
               <EditorDynamicWrapper
                  className="relative z-10"
                  api="api/collections/testimonials/top"
                  apiMethod="GET"
                  componentRef="top-testimonials-carousel-1"
               />

               <EditorDiv className="pointer-events-none absolute top-0 left-0 h-[200px] w-[200px] rounded-full bg-[rgba(97,95,255,1)] blur-[290px] content-['']"></EditorDiv>

               <EditorDiv className="pointer-events-none absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full bg-[rgba(0,167,111,1)] blur-[290px] content-['']"></EditorDiv>
            </EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default Testimonials;
