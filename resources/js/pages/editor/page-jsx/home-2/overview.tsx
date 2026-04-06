import { EditorContainer, EditorDiv, EditorHeading, EditorIcon, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const Overview = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer className="text-center">
            <EditorDiv className="relative z-10 mx-auto mb-10 text-center md:max-w-2xl">
               <EditorParagraph className="text-secondary-foreground mb-1 font-medium">We Provide</EditorParagraph>
               <EditorHeading className="mb-4 text-3xl font-bold sm:text-4xl">Take Your Skills to the Next Level</EditorHeading>
               <EditorParagraph className="text-muted-foreground">
                  These are the most popular courses among listen courses learners worldwide.
               </EditorParagraph>
            </EditorDiv>

            <EditorDiv className="relative mx-auto grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-3">
               <EditorDiv className="bg-background/20 relative z-10 rounded-3xl border-2 border-white px-6 py-16 backdrop-blur-lg md:py-20">
                  <EditorDiv className="shadow-card-md mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-white/5">
                     <EditorDiv className="bg-secondary-foreground flex h-10 w-10 items-center justify-center rounded-full">
                        <EditorIcon name="clock" className="h-6 w-6 text-white" />
                     </EditorDiv>
                  </EditorDiv>

                  <EditorDiv className="mt-5 space-y-2">
                     <EditorHeading className="text-4xl font-semibold md:text-[44px]">212+</EditorHeading>
                     <EditorParagraph className="mt-2">Hours Course Time</EditorParagraph>
                  </EditorDiv>
               </EditorDiv>

               <EditorDiv className="bg-background/20 relative z-10 rounded-3xl border-2 border-white px-6 py-16 backdrop-blur-lg md:py-20">
                  <EditorDiv className="shadow-card-md mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-white/5">
                     <EditorDiv className="bg-secondary-foreground flex h-10 w-10 items-center justify-center rounded-full">
                        <EditorIcon name="monitor" className="h-6 w-6 text-white" />
                     </EditorDiv>
                  </EditorDiv>

                  <EditorDiv className="mt-5 space-y-2">
                     <EditorHeading className="text-4xl font-semibold md:text-[44px]">15+</EditorHeading>
                     <EditorParagraph className="mt-2">Creative Courses</EditorParagraph>
                  </EditorDiv>
               </EditorDiv>

               <EditorDiv className="bg-background/20 relative z-10 rounded-3xl border-2 border-white px-6 py-16 backdrop-blur-lg md:py-20">
                  <EditorDiv className="shadow-card-md mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-white/5">
                     <EditorDiv className="bg-secondary-foreground flex h-10 w-10 items-center justify-center rounded-full">
                        <EditorIcon name="users" className="h-6 w-6 text-white" />
                     </EditorDiv>
                  </EditorDiv>

                  <EditorDiv className="mt-5 space-y-2">
                     <EditorHeading className="text-4xl font-semibold md:text-[44px]">6+</EditorHeading>
                     <EditorParagraph className="mt-2">Number of Students</EditorParagraph>
                  </EditorDiv>
               </EditorDiv>

               <EditorDiv className="pointer-events-none absolute top-[72px] left-1/2 h-[120px] w-[600px] -translate-x-1/2 -rotate-[15deg] bg-[rgba(97,95,255,1)] blur-[300px] content-['']"></EditorDiv>
            </EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default Overview;
