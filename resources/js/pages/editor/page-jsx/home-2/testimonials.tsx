import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const Testimonials = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer className="relative z-10">
            <EditorDiv className="mx-auto text-center md:max-w-[480px]">
               <EditorParagraph className="text-secondary-foreground mb-1 font-medium">Testimonials</EditorParagraph>
               <EditorHeading className="mb-4 text-3xl font-bold sm:text-4xl">What Our Students Say</EditorHeading>
               <EditorParagraph className="text-muted-foreground">They efficiently serve large number of students on our platform</EditorParagraph>
            </EditorDiv>

            <EditorDynamicWrapper api="api/collections/testimonials/top" apiMethod="GET" componentRef="top-testimonials-carousel-1" />

            <EditorDiv className="pointer-events-none absolute bottom-0 left-0 h-[240px] w-[240px] rounded-full bg-[rgba(0,167,111,1)] blur-[290px] content-['']"></EditorDiv>
            <EditorDiv className="pointer-events-none absolute top-0 right-0 h-[240px] w-[240px] rounded-full bg-[rgba(97,95,255,1))] blur-[290px] content-['']"></EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default Testimonials;
