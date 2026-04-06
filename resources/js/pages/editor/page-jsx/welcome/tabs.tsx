import {
   EditorButton,
   EditorContainer,
   EditorDiv,
   EditorHeading,
   EditorParagraph,
   EditorSection,
   EditorTabs,
   EditorTabsContent,
   EditorTabsList,
   EditorTabsTrigger,
} from '@/pages/editor/lib/components';

const tabsSection = () => {
   return (
      <EditorSection className="bg-white py-20">
         <EditorContainer className="px-4">
            <EditorDiv className="mb-12 text-center">
               <EditorHeading level="h2" className="mb-4 text-4xl font-bold text-gray-900">
                  Choose Your Plan
               </EditorHeading>
               <EditorParagraph className="mx-auto max-w-2xl text-lg text-gray-600">
                  Select the perfect plan for your needs. All plans include a 14-day free trial.
               </EditorParagraph>
            </EditorDiv>

            <EditorTabs className="w-full">
               <EditorTabsList className="mb-8 grid w-full grid-cols-3 gap-4 rounded-lg bg-gray-100 p-2">
                  <EditorTabsTrigger className="cursor-pointer rounded-md px-6 py-3 font-semibold text-gray-700 transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
                     Starter
                  </EditorTabsTrigger>
                  <EditorTabsTrigger className="cursor-pointer rounded-md px-6 py-3 font-semibold text-gray-700 transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
                     Professional
                  </EditorTabsTrigger>
                  <EditorTabsTrigger className="cursor-pointer rounded-md px-6 py-3 font-semibold text-gray-700 transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
                     Enterprise
                  </EditorTabsTrigger>
               </EditorTabsList>

               <EditorTabsContent className="mt-6">
                  <EditorDiv className="rounded-lg border-2 border-gray-200 bg-white p-8 shadow-lg">
                     <EditorDiv className="mb-6 text-center">
                        <EditorHeading level="h3" className="mb-2 text-3xl font-bold text-gray-900">
                           $29/month
                        </EditorHeading>
                        <EditorParagraph>Perfect for individuals and small projects</EditorParagraph>
                     </EditorDiv>
                     <EditorDiv className="space-y-4">
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Up to 10 pages</EditorParagraph>
                        </EditorDiv>
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Visual editor access</EditorParagraph>
                        </EditorDiv>
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Basic templates</EditorParagraph>
                        </EditorDiv>
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Community support</EditorParagraph>
                        </EditorDiv>
                     </EditorDiv>
                     <EditorButton
                        buttonType="button"
                        className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                     >
                        Get Started
                     </EditorButton>
                  </EditorDiv>
               </EditorTabsContent>

               <EditorTabsContent className="mt-6">
                  <EditorDiv className="rounded-lg border-2 border-blue-500 bg-white p-8 shadow-lg">
                     <EditorDiv className="mb-2 text-center">
                        <EditorParagraph className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                           MOST POPULAR
                        </EditorParagraph>
                     </EditorDiv>
                     <EditorDiv className="mb-6 text-center">
                        <EditorHeading level="h3" className="mb-2 text-3xl font-bold text-gray-900">
                           $79/month
                        </EditorHeading>
                        <EditorParagraph>For growing teams and businesses</EditorParagraph>
                     </EditorDiv>
                     <EditorDiv className="space-y-4">
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Unlimited pages</EditorParagraph>
                        </EditorDiv>
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Advanced editor features</EditorParagraph>
                        </EditorDiv>
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Premium templates</EditorParagraph>
                        </EditorDiv>
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Priority support</EditorParagraph>
                        </EditorDiv>
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Team collaboration</EditorParagraph>
                        </EditorDiv>
                     </EditorDiv>
                     <EditorButton
                        buttonType="button"
                        className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                     >
                        Get Started
                     </EditorButton>
                  </EditorDiv>
               </EditorTabsContent>

               <EditorTabsContent className="mt-6">
                  <EditorDiv className="rounded-lg border-2 border-gray-200 bg-white p-8 shadow-lg">
                     <EditorDiv className="mb-6 text-center">
                        <EditorHeading level="h3" className="mb-2 text-3xl font-bold text-gray-900">
                           Custom Pricing
                        </EditorHeading>
                        <EditorParagraph>Tailored solutions for large organizations</EditorParagraph>
                     </EditorDiv>
                     <EditorDiv className="space-y-4">
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Everything in Professional</EditorParagraph>
                        </EditorDiv>
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Custom integrations</EditorParagraph>
                        </EditorDiv>
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Dedicated account manager</EditorParagraph>
                        </EditorDiv>
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">SLA guarantee</EditorParagraph>
                        </EditorDiv>
                        <EditorDiv className="flex items-center gap-3">
                           <EditorParagraph className="text-green-600">✓</EditorParagraph>
                           <EditorParagraph className="text-gray-700">Advanced security</EditorParagraph>
                        </EditorDiv>
                     </EditorDiv>
                     <EditorButton
                        buttonType="button"
                        className="mt-8 w-full rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
                     >
                        Contact Sales
                     </EditorButton>
                  </EditorDiv>
               </EditorTabsContent>
            </EditorTabs>
         </EditorContainer>
      </EditorSection>
   );
};

export default tabsSection;
