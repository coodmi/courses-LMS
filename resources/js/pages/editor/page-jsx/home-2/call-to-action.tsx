import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const CallToAction = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer className="relative z-10">
            <EditorDiv className="mx-auto w-full max-w-[820px] rounded-2xl bg-[#007867] px-6 py-20 md:rounded-3xl md:px-10">
               <EditorDiv className="mx-auto w-full max-w-[420px] text-center text-white">
                  <EditorHeading className="text-2xl leading-tight font-bold text-white md:text-3xl md:leading-9">
                     Subscribe Our Newsletter
                  </EditorHeading>
                  <EditorParagraph className="mt-3 mb-6">
                     Subscribe to our newsletter to get the latest news and updates. We will not spam you.
                  </EditorParagraph>

                  {/* Subscribe Input Placeholder */}
                  <EditorDynamicWrapper componentRef="email-subscribe-input" />
               </EditorDiv>
            </EditorDiv>

            <EditorDiv className="pointer-events-none absolute top-0 left-16 h-[240px] w-[240px] rounded-full bg-[rgba(97,95,255,1))] blur-[290px] content-['']"></EditorDiv>

            <EditorDiv className="pointer-events-none absolute right-16 bottom-0 h-[240px] w-[240px] rounded-full bg-[rgba(0,167,111,1)] blur-[290px] content-['']"></EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default CallToAction;
