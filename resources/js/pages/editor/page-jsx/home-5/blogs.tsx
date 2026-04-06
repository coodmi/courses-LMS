import { EditorContainer, EditorDiv, EditorDynamicWrapper, EditorHeading, EditorParagraph, EditorSection } from '@/pages/editor/lib/components';

const Blogs = () => {
   return (
      <EditorSection className="py-20">
         <EditorContainer className="relative">
            <EditorDiv className="relative z-10 mx-auto text-center">
               <EditorParagraph className="text-secondary-foreground mb-1 font-medium">Latest Insights</EditorParagraph>
               <EditorHeading className="mb-4 text-2xl font-bold sm:text-3xl">Explore Our Blog</EditorHeading>
               <EditorParagraph className="text-muted-foreground">
                  Stay updated with the latest tips, trends, and insights from industry experts
               </EditorParagraph>
            </EditorDiv>

            <EditorDiv className="relative">
               <EditorDynamicWrapper className="relative z-10" api="api/collections/blogs/new" apiMethod="GET" componentRef="new-blogs-carousel" />

               <EditorDiv className="pointer-events-none absolute top-1/2 left-0 h-[240px] w-[240px] -translate-y-1/2 rounded-full bg-[rgba(0,167,111,1)] blur-[290px] content-['']"></EditorDiv>

               <EditorDiv className="pointer-events-none absolute top-0 right-0 h-[200px] w-[200px] rounded-full bg-[rgba(97,95,255,1)] blur-[290px] content-['']"></EditorDiv>
            </EditorDiv>
         </EditorContainer>
      </EditorSection>
   );
};

export default Blogs;
