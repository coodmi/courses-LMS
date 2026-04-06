import {
   EditorButton,
   EditorContainer,
   EditorDiv,
   EditorHeading,
   EditorImage,
   EditorLink,
   EditorParagraph,
   EditorSection,
} from '@/pages/editor/lib/components';

const TopCourse = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer>
            <EditorDiv className="grid grid-cols-1 items-end gap-20 md:grid-cols-2 md:gap-28">
               <EditorDiv className="relative">
                  <EditorDiv className="relative z-10 mb-10">
                     <EditorParagraph className="text-secondary-foreground mb-1 font-medium">FEATURED COURSE</EditorParagraph>
                     <EditorHeading className="mb-4 text-2xl font-bold sm:text-3xl">
                        HTML5 & CSS3: Complete Guide for Modern Web Development
                     </EditorHeading>
                  </EditorDiv>

                  <EditorImage
                     alt="Featured Course"
                     src="/assets/images/courses/html-css-development.jpg"
                     className="relative z-10 w-full rounded-xl object-cover object-center"
                  />

                  <EditorDiv className="pointer-events-none absolute top-1/2 left-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(0,167,111,1)] blur-[290px] content-['']"></EditorDiv>
               </EditorDiv>

               <EditorDiv className="relative">
                  <EditorDiv className="relative z-10 grid grid-cols-1 gap-7 pt-12 pb-7 sm:grid-cols-2">
                     <EditorDiv className="rounded-lg border bg-white px-6 py-7 shadow-sm">
                        <EditorHeading className="mb-2 font-bold sm:text-3xl">12h 30m</EditorHeading>
                        <EditorParagraph className="text-muted-foreground">Course Duration</EditorParagraph>
                     </EditorDiv>
                     <EditorDiv className="rounded-lg border bg-white px-6 py-7 shadow-sm">
                        <EditorHeading className="mb-2 font-bold sm:text-3xl">24</EditorHeading>
                        <EditorParagraph className="text-muted-foreground">Course Lessons</EditorParagraph>
                     </EditorDiv>
                     <EditorDiv className="rounded-lg border bg-white px-6 py-7 shadow-sm">
                        <EditorHeading className="mb-2 font-bold sm:text-3xl">8</EditorHeading>
                        <EditorParagraph className="text-muted-foreground">Total Quizzes</EditorParagraph>
                     </EditorDiv>
                     <EditorDiv className="rounded-lg border bg-white px-6 py-7 shadow-sm">
                        <EditorHeading className="mb-2 font-bold sm:text-3xl">2.4k</EditorHeading>
                        <EditorParagraph className="text-muted-foreground">Enrolled Students</EditorParagraph>
                     </EditorDiv>
                  </EditorDiv>

                  <EditorLink href="/courses/all" className="relative z-10 mt-10 cursor-pointer md:mt-14">
                     <EditorButton className="bg-linear-to-r from-[#00A67F] to-[#0077B6]">Enroll Now</EditorButton>
                  </EditorLink>

                  <EditorDiv className="pointer-events-none absolute right-[120px] bottom-10 h-[200px] w-[200px] rounded-full bg-[rgba(97,95,255,1)] blur-[290px] content-['']"></EditorDiv>
               </EditorDiv>
            </EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default TopCourse;
