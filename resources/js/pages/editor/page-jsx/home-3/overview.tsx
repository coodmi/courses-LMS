import {
   EditorContainer,
   EditorDiv,
   EditorHeading,
   EditorHr,
   EditorIcon,
   EditorImage,
   EditorParagraph,
   EditorSection,
} from '@/pages/editor/lib/components';

const Overview = () => {
   return (
      <EditorSection className="relative">
         <EditorContainer className="py-20">
            <EditorDiv className="mb-10 flex flex-col items-center justify-between gap-12 md:flex-row">
               {/* Left side - Content */}
               <EditorDiv className="relative z-10 w-full space-y-4 md:max-w-[420px]">
                  <EditorHeading className="w-full text-3xl font-semibold md:text-4xl">Take Your Skills To the Next Level</EditorHeading>
                  <EditorParagraph className="text-muted-foreground">
                     We provide the best learning experience with expert instructors, comprehensive courses, and a supportive community.
                  </EditorParagraph>
               </EditorDiv>

               {/* Right side - Stats Grid */}
               <EditorDiv className="relative md:max-w-[640px]">
                  <EditorDiv className="relative z-10 grid w-full grid-cols-1 gap-7 sm:grid-cols-2">
                     {/* First Stat - Vertical Card */}
                     <EditorDiv className="bg-background/20 dark:border-border rounded-2xl border-2 border-white px-6 py-16 shadow-none backdrop-blur-lg md:py-[72px]">
                        <EditorDiv className="shadow-card-md bg-background mx-auto mt-3 flex h-[60px] w-[60px] items-center justify-center rounded-2xl">
                           <EditorDiv className="bg-secondary-foreground flex h-10 w-10 items-center justify-center rounded-full">
                              <EditorIcon name="users" className="h-6 w-6 text-white" />
                           </EditorDiv>
                        </EditorDiv>

                        <EditorDiv className="mt-5 space-y-2 text-center">
                           <EditorHeading level="h3" className="text-4xl font-semibold md:text-[44px]">
                              68k+
                           </EditorHeading>
                           <EditorParagraph className="mt-2">Active Students</EditorParagraph>
                        </EditorDiv>
                     </EditorDiv>

                     <EditorDiv className="space-y-7">
                        {/* Second Stat - Horizontal Card */}
                        <EditorDiv className="bg-background/20 dark:border-border flex items-center justify-center gap-4 rounded-2xl border-2 border-white px-6 py-8 shadow-none backdrop-blur-lg md:py-8">
                           <EditorDiv className="shadow-card-md bg-background flex h-[60px] w-[60px] items-center justify-center rounded-2xl">
                              <EditorDiv className="bg-secondary-foreground flex h-10 w-10 items-center justify-center rounded-full">
                                 <EditorIcon name="book-open" className="h-6 w-6 text-white" />
                              </EditorDiv>
                           </EditorDiv>

                           <EditorDiv className="space-y-1">
                              <EditorHeading level="h3" className="text-4xl font-semibold md:text-[44px]">
                                 1.2k+
                              </EditorHeading>
                              <EditorParagraph className="mt-2">Quality Courses</EditorParagraph>
                           </EditorDiv>
                        </EditorDiv>

                        {/* Third Stat - Horizontal Card */}
                        <EditorDiv className="bg-background/20 dark:border-border flex items-center justify-center gap-4 rounded-2xl border-2 border-white px-6 py-8 shadow-none backdrop-blur-lg md:py-8">
                           <EditorDiv className="shadow-card-md bg-background flex h-[60px] w-[60px] items-center justify-center rounded-2xl">
                              <EditorDiv className="bg-secondary-foreground flex h-10 w-10 items-center justify-center rounded-full">
                                 <EditorIcon name="award" className="h-6 w-6 text-white" />
                              </EditorDiv>
                           </EditorDiv>

                           <EditorDiv className="space-y-1">
                              <EditorHeading level="h3" className="text-4xl font-semibold md:text-[44px]">
                                 850+
                              </EditorHeading>
                              <EditorParagraph className="mt-2">Certifications</EditorParagraph>
                           </EditorDiv>
                        </EditorDiv>
                     </EditorDiv>
                  </EditorDiv>

                  <EditorDiv className="pointer-events-none absolute top-1/2 left-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 bg-[rgba(97,95,255,1)] blur-[290px] content-['']"></EditorDiv>
               </EditorDiv>
            </EditorDiv>

            <EditorDiv className="!px-1 pb-6">
               <EditorDiv className="flex items-center justify-between gap-10 py-8 text-center sm:gap-20">
                  <EditorHr className="border-border w-full border-t" />
                  <EditorParagraph className="text-muted-foreground text-nowrap">Adopted by renowned enterprises such as</EditorParagraph>
                  <EditorHr className="border-border w-full border-t" />
               </EditorDiv>

               <EditorDiv className="p-y-12 md:p-y-16 grid grid-cols-2 justify-center gap-12 md:grid-cols-3 lg:grid-cols-6">
                  <EditorImage className="w-full" src="/assets/logos/logo-1.png" alt="" />
                  <EditorImage className="w-full" src="/assets/logos/logo-2.png" alt="" />
                  <EditorImage className="w-full" src="/assets/logos/logo-3.png" alt="" />
                  <EditorImage className="w-full" src="/assets/logos/logo-4.png" alt="" />
                  <EditorImage className="w-full" src="/assets/logos/logo-5.png" alt="" />
                  <EditorImage className="w-full" src="/assets/logos/logo-6.png" alt="" />
               </EditorDiv>
            </EditorDiv>

            <EditorDiv className="pointer-events-none absolute -top-14 -left-[180px] h-[240px] w-[240px] rounded-full bg-[rgba(0,167,111,1)] blur-[290px] content-['']"></EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default Overview;
