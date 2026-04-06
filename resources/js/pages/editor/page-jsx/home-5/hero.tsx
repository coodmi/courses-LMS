import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorSection } from '@/pages/editor/lib/components';

const Hero = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer className="relative">
            <EditorDynamicWrapper api="api/collections/courses/top" apiMethod="GET" componentRef="top-courses-1" />

            <EditorDiv className="pointer-events-none absolute bottom-10 left-0 h-[240px] w-[240px] rounded-full bg-[rgba(0,167,111,1)] blur-[290px] content-['']"></EditorDiv>

            <EditorDiv className="pointer-events-none absolute top-10 right-0 h-[240px] w-[240px] rounded-full bg-[rgba(97,95,255,1)] blur-[290px] content-['']"></EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default Hero;
