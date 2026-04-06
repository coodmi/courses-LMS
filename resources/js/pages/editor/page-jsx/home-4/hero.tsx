import {
   EditorButton,
   EditorContainer,
   EditorDiv,
   EditorDynamicWrapper,
   EditorHeading,
   EditorIcon,
   EditorImage,
   EditorLink,
   EditorParagraph,
   EditorSection,
} from '@/pages/editor/lib/components';

const Hero = () => {
   return (
      <EditorDiv>
         <EditorDiv className="relative mx-auto max-w-[1440px]">
            <EditorSection className="relative pt-20">
               <EditorDiv className="relative z-10 grid grid-cols-1 items-center gap-x-20">
                  <EditorDiv className="mx-auto mb-16 max-w-[712px] text-center">
                     <EditorHeading className="mb-4 text-4xl font-bold md:text-5xl md:leading-14 md:font-extrabold">
                        Mastering Figma A Beginner's Guide to Digital Design
                     </EditorHeading>
                     <EditorParagraph className="text-muted-foreground mb-6 text-lg md:px-8">
                        Learn with a dedicated instructor guiding you every step of the way. Gain hands-on experience, develop real-world design
                        skills, And achieve your creative goals with confidence.
                     </EditorParagraph>

                     <EditorDiv className="mb-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                        <EditorLink href="/courses/all" className="cursor-pointer">
                           <EditorButton className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white shadow-lg">
                              Browse Courses
                           </EditorButton>
                        </EditorLink>

                        <EditorLink href="/about">
                           <EditorButton className="w-auto cursor-pointer px-6 py-3">Learn More</EditorButton>
                        </EditorLink>
                     </EditorDiv>

                     <EditorDiv>
                        <EditorDiv className="flex items-center justify-center gap-2">
                           <EditorDiv className="flex items-center justify-center">
                              <EditorIcon name="star" className="h-4 w-4 p-0 text-yellow-500" />
                              <EditorIcon name="star" className="h-4 w-4 p-0 text-yellow-500" />
                              <EditorIcon name="star" className="h-4 w-4 p-0 text-yellow-500" />
                              <EditorIcon name="star" className="h-4 w-4 p-0 text-yellow-500" />
                              <EditorIcon name="star" className="h-4 w-4 p-0 text-yellow-500" />
                           </EditorDiv>
                           <EditorParagraph className="font-medium">5.0</EditorParagraph>
                        </EditorDiv>
                        <EditorParagraph className="text-muted-foreground text-sm">+2000 readers worldwide</EditorParagraph>
                     </EditorDiv>
                  </EditorDiv>
               </EditorDiv>

               <EditorDiv className="shadow-card-hover relative z-10 mx-auto max-w-[780px] overflow-hidden rounded-3xl md:rounded-4xl">
                  <EditorImage src="/assets/images/intro/home-4/hero-image.png" alt="" className="mx-auto w-full" />
               </EditorDiv>

               <EditorDiv className="pointer-events-none absolute top-0 left-0 h-[334px] w-[334px] rounded-full bg-[rgba(89,85,220,1)] blur-[320px] content-['']"></EditorDiv>
               <EditorDiv className="pointer-events-none absolute top-[220px] right-0 h-[300px] w-[300px] rounded-full bg-[rgba(255,190,0,1)] blur-[310px] content-['']"></EditorDiv>
            </EditorSection>

            <EditorImage src="/assets/images/intro/home-4/hero-bg.png" alt="" className="absolute bottom-0 w-full object-cover" />
         </EditorDiv>

         <EditorContainer className="pt-10">
            <EditorDynamicWrapper api="api/collections/sponsors/top" apiMethod="GET" componentRef="top-sponsors-carousel-1" />
         </EditorContainer>
      </EditorDiv>
   );
};

export default Hero;
