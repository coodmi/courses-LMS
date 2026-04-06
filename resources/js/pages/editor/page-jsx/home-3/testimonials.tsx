import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const Testimonials = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer>
            <EditorDiv className="mx-auto text-center md:max-w-[480px]">
               <EditorHeading className="mb-4 text-3xl font-bold sm:text-4xl">What Our Students Say</EditorHeading>
               <EditorParagraph className="text-muted-foreground">Real stories from real students who achieved their goals</EditorParagraph>
            </EditorDiv>

            <EditorDiv className="relative mt-10">
               <EditorDynamicWrapper api="api/collections/testimonials/top" apiMethod="GET" componentRef="top-testimonials-carousel-2" />

               <EditorDiv className="pointer-events-none absolute top-10 left-20 h-[240px] w-[240px] rounded-full bg-[rgba(97,95,255,1))] blur-[290px] content-['']" />

               <EditorDiv className="pointer-events-none absolute right-20 bottom-10 h-[240px] w-[240px] rounded-full bg-[rgba(0,167,111,1)] blur-[290px] content-['']" />
            </EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default Testimonials;
