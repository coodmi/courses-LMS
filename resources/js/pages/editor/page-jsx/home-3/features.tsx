import { EditorContainer, EditorDiv, EditorHeading, EditorImage, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const Features = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer className="relative z-10 grid gap-7 md:grid-cols-3">
            <EditorDiv className="relative overflow-hidden rounded-2xl">
               <EditorDiv className="relative z-10 p-8">
                  <EditorDiv className="pointer-events-none absolute -top-6 left-0 h-[98px] w-[98px] rounded-full bg-[#E4CBA866] blur-[72px] content-['']"></EditorDiv>
                  <EditorDiv className="pointer-events-none absolute -bottom-9 -left-8 h-[116px] w-[116px] rounded-full bg-[#00A76F1A] blur-[72px] content-['']"></EditorDiv>

                  <EditorDiv className="space-y-3">
                     <EditorImage src="/assets/icons/globe-earth.png" alt="" className="!h-[60px] w-auto" />
                     <EditorHeading level="h3" className="text-xl font-bold">
                        Learn Anything Anywhere
                     </EditorHeading>
                     <EditorParagraph className="text-muted-foreground leading-relaxed">
                        Where ever you are you can learn using our online education platform. Where ever you are you can learn.
                     </EditorParagraph>
                  </EditorDiv>
               </EditorDiv>

               <EditorDiv className="pointer-events-none absolute top-0 left-0 h-20 w-20 rounded-full bg-[rgba(97,95,255,1))] blur-[140px] content-['']"></EditorDiv>
               <EditorDiv className="pointer-events-none absolute right-0 bottom-0 h-20 w-20 rounded-full bg-[rgba(0,167,111,1)] blur-[140px] content-['']"></EditorDiv>
            </EditorDiv>

            <EditorDiv className="relative overflow-hidden rounded-2xl">
               <EditorDiv className="relative z-10 p-8">
                  <EditorDiv className="pointer-events-none absolute -top-6 left-0 h-[98px] w-[98px] rounded-full bg-[#E4CBA866] blur-[72px] content-['']"></EditorDiv>
                  <EditorDiv className="pointer-events-none absolute -bottom-9 -left-8 h-[116px] w-[116px] rounded-full bg-[#00A76F1A] blur-[72px] content-['']"></EditorDiv>

                  <EditorDiv className="space-y-3">
                     <EditorImage src="/assets/icons/student.png" alt="" className="!h-[60px] w-auto" />
                     <EditorHeading level="h3" className="text-xl font-bold">
                        World Class Instructors
                     </EditorHeading>
                     <EditorParagraph className="text-muted-foreground leading-relaxed">
                        Where ever you are you can learn using our online education platform. Where ever you are you can learn.
                     </EditorParagraph>
                  </EditorDiv>
               </EditorDiv>

               <EditorDiv className="pointer-events-none absolute top-0 left-0 h-20 w-20 rounded-full bg-[rgba(97,95,255,1))] blur-[140px] content-['']"></EditorDiv>
               <EditorDiv className="pointer-events-none absolute right-0 bottom-0 h-20 w-20 rounded-full bg-[rgba(0,167,111,1)] blur-[140px] content-['']"></EditorDiv>
            </EditorDiv>

            <EditorDiv className="relative overflow-hidden rounded-2xl">
               <EditorDiv className="relative z-10 p-8">
                  <EditorDiv className="pointer-events-none absolute -top-6 left-0 h-[98px] w-[98px] rounded-full bg-[#E4CBA866] blur-[72px] content-['']"></EditorDiv>
                  <EditorDiv className="pointer-events-none absolute -bottom-9 -left-8 h-[116px] w-[116px] rounded-full bg-[#00A76F1A] blur-[72px] content-['']"></EditorDiv>

                  <EditorDiv className="space-y-3">
                     <EditorImage src="/assets/icons/laptop.png" alt="" className="!h-[60px] w-auto" />
                     <EditorHeading level="h3" className="text-xl font-bold">
                        Lifetime Access
                     </EditorHeading>
                     <EditorParagraph className="text-muted-foreground leading-relaxed">
                        Where ever you are you can learn using our online education platform. Where ever you are you can learn.
                     </EditorParagraph>
                  </EditorDiv>
               </EditorDiv>

               <EditorDiv className="pointer-events-none absolute top-0 left-0 h-20 w-20 rounded-full bg-[rgba(97,95,255,1))] blur-[140px] content-['']"></EditorDiv>
               <EditorDiv className="pointer-events-none absolute right-0 bottom-0 h-20 w-20 rounded-full bg-[rgba(0,167,111,1)] blur-[140px] content-['']"></EditorDiv>
            </EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default Features;
