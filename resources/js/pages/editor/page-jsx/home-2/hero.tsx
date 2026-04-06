import {
   EditorContainer,
   EditorDiv,
   EditorDynamicWrapper,
   EditorHeading,
   EditorImage,
   EditorParagraph,
   EditorSection,
} from '@/pages/editor/lib/components';

const Hero = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-3">
            <EditorDiv className="space-y-8 lg:space-y-10">
               <EditorDiv>
                  <EditorParagraph className="text-secondary-foreground mb-2 text-lg font-medium">YOUR JOURNEY BEGINS HERE</EditorParagraph>
                  <EditorHeading className="text-3xl leading-tight font-bold md:text-4xl lg:text-[42px] lg:leading-14">
                     Unlock 5,500+ Expert-Led Courses Powered by 400+ Trusted Instructors
                  </EditorHeading>
                  <EditorParagraph className="text-muted-foreground mt-5 text-lg">
                     Start learning today with top-rated courses and instructors.
                  </EditorParagraph>
               </EditorDiv>

               <EditorDynamicWrapper componentRef="course-search-input" />
            </EditorDiv>

            {/* Right Image */}
            <EditorDiv className="animate-fade-in relative flex items-center justify-center lg:justify-end">
               <EditorImage
                  src="/assets/images/intro/home-2/hero-image.png"
                  alt="Student learning online"
                  className="relative z-10 h-full max-h-[460px]"
               />

               <EditorDiv className="pointer-events-none absolute top-0 right-0 h-[240px] w-[240px] rounded-full bg-[rgba(97,95,255,1))] blur-[290px] content-['']"></EditorDiv>
            </EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default Hero;
