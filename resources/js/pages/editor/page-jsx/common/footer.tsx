import {
   EditorContainer,
   EditorDiv,
   EditorFooter,
   EditorHeading,
   EditorIcon,
   EditorImage,
   EditorLink,
   EditorParagraph,
} from '@/pages/editor/lib/components';

const Footer = () => {
   return (
      <EditorFooter className="overflow-hidden bg-[rgba(255,222,99,0.06)]">
         <EditorContainer className="space-y-9 py-[60px]">
            <EditorDiv className="flex flex-col items-start justify-between gap-10 md:flex-row">
               {/* Logo and Description */}
               <EditorDiv className="w-full space-y-5 md:max-w-[300px]">
                  <EditorLink href="/" className="inline-block">
                     <EditorImage className="block !h-7 w-auto dark:hidden" src="/assets/icons/logo-dark.png" alt="Mentor Logo" />
                     <EditorImage className="hidden !h-7 w-auto dark:block" src="/assets/icons/logo-light.png" alt="Mentor Logo" />
                  </EditorLink>

                  <EditorParagraph className="text-muted-foreground text-sm">
                     Transform your learning journey with Mentor LMS - a comprehensive online learning platform connecting expert instructors with
                     passionate learners. Discover courses, build skills, and achieve your goals.
                  </EditorParagraph>

                  {/* Social Media Icons */}
                  <EditorDiv className="flex flex-wrap gap-3">
                     <EditorLink
                        href="https://facebook.com"
                        className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                     >
                        <EditorIcon name="facebook" className="h-5 w-5" />
                     </EditorLink>
                     <EditorLink
                        href="https://twitter.com"
                        className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                     >
                        <EditorIcon name="twitter" className="h-5 w-5" />
                     </EditorLink>
                     <EditorLink
                        href="https://instagram.com"
                        className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                     >
                        <EditorIcon name="instagram" className="h-5 w-5" />
                     </EditorLink>
                     <EditorLink
                        href="https://linkedin.com"
                        className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                     >
                        <EditorIcon name="linkedin" className="h-5 w-5" />
                     </EditorLink>
                  </EditorDiv>
               </EditorDiv>

               {/* Footer Links */}
               <EditorDiv className="flex w-full flex-col justify-between gap-10 md:max-w-[640px] md:flex-row">
                  {/* Company Column */}
                  <EditorDiv className="relative w-full">
                     <EditorHeading level="h3" className="mb-3 text-lg font-semibold">
                        Company
                     </EditorHeading>
                     <EditorDiv className="text-muted-foreground flex flex-col gap-2 text-sm">
                        <EditorLink href="/about">About Us</EditorLink>
                        <EditorLink href="/team">Our Team</EditorLink>
                        <EditorLink href="/careers">Careers</EditorLink>
                        <EditorLink href="/contact">Contact Us</EditorLink>
                     </EditorDiv>
                  </EditorDiv>

                  {/* Legal & Policies Column */}
                  <EditorDiv className="relative w-full">
                     <EditorHeading level="h3" className="mb-3 text-lg font-semibold">
                        Legal & Policies
                     </EditorHeading>
                     <EditorDiv className="text-muted-foreground flex flex-col gap-2 text-sm">
                        <EditorLink href="/cookie-policy">Cookie Policy</EditorLink>
                        <EditorLink href="/terms">Terms & Conditions</EditorLink>
                        <EditorLink href="/privacy">Privacy Policy</EditorLink>
                        <EditorLink href="/refund">Refund Policy</EditorLink>
                     </EditorDiv>
                  </EditorDiv>

                  {/* Address Column */}
                  <EditorDiv className="relative w-full">
                     <EditorHeading level="h3" className="mb-3 text-lg font-semibold">
                        Address
                     </EditorHeading>
                     <EditorDiv className="text-muted-foreground flex flex-col gap-2 text-sm">
                        <EditorParagraph>Corner view Suburbazar, Sylhet, Bangladesh.</EditorParagraph>
                        <EditorParagraph>Email: uiLib@gmail.com</EditorParagraph>
                        <EditorParagraph>Phone: +880 1123 456 780</EditorParagraph>
                     </EditorDiv>
                  </EditorDiv>
               </EditorDiv>
            </EditorDiv>

            {/* Payment Methods */}
            <EditorDiv className="space-y-3">
               <EditorHeading level="h3" className="text-base font-medium">
                  We support multiple payment gateways.
               </EditorHeading>
               <EditorDiv className="flex flex-wrap gap-3">
                  <EditorImage className="!h-7 w-auto object-contain" src="/assets/payment/stripe.png" alt="Stripe" />
                  <EditorImage className="!h-7 w-auto object-contain" src="/assets/payment/paypal.png" alt="PayPal" />
                  <EditorImage className="!h-7 w-auto object-contain" src="/assets/payment/mollie.png" alt="Mollie" />
                  <EditorImage className="!h-7 w-auto object-contain" src="/assets/payment/paystack.png" alt="Paystack" />
               </EditorDiv>
            </EditorDiv>
         </EditorContainer>

         {/* Copyright Section */}
         <EditorDiv className="border-t px-6 py-8 text-center">
            <EditorParagraph className="text-muted-foreground text-sm">© Copyright 2025 UI Lib. All rights reserved.</EditorParagraph>
         </EditorDiv>
      </EditorFooter>
   );
};

export default Footer;
