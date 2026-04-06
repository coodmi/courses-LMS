import {
    EditorContainer,
    EditorDiv,
    EditorFooter,
    EditorHeading,
    EditorLink,
    EditorParagraph,
} from '@/pages/editor/lib/components';

const footerSection = () => {
    return (
        <EditorFooter className="border-t bg-gray-900 py-12 text-white">
            <EditorContainer className="px-4">
                <EditorDiv className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Company Info */}
                    <EditorDiv>
                        <EditorHeading
                            level="h3"
                            className="mb-4 text-xl font-bold"
                        >
                            WebBuilder
                        </EditorHeading>
                        <EditorParagraph className="text-gray-400">
                            Building the future of web development with visual
                            and code-first tools.
                        </EditorParagraph>
                    </EditorDiv>

                    {/* Product Links */}
                    <EditorDiv>
                        <EditorHeading
                            level="h4"
                            className="mb-4 text-lg font-semibold"
                        >
                            Product
                        </EditorHeading>
                        <EditorDiv className="flex flex-col gap-2">
                            <EditorLink
                                href="/features"
                                className="text-gray-400 hover:text-white"
                            >
                                Features
                            </EditorLink>
                            <EditorLink
                                href="/pricing"
                                className="text-gray-400 hover:text-white"
                            >
                                Pricing
                            </EditorLink>
                            <EditorLink
                                href="/templates"
                                className="text-gray-400 hover:text-white"
                            >
                                Templates
                            </EditorLink>
                            <EditorLink
                                href="/integrations"
                                className="text-gray-400 hover:text-white"
                            >
                                Integrations
                            </EditorLink>
                        </EditorDiv>
                    </EditorDiv>

                    {/* Resources Links */}
                    <EditorDiv>
                        <EditorHeading
                            level="h4"
                            className="mb-4 text-lg font-semibold"
                        >
                            Resources
                        </EditorHeading>
                        <EditorDiv className="flex flex-col gap-2">
                            <EditorLink
                                href="/docs"
                                className="text-gray-400 hover:text-white"
                            >
                                Documentation
                            </EditorLink>
                            <EditorLink
                                href="/blog"
                                className="text-gray-400 hover:text-white"
                            >
                                Blog
                            </EditorLink>
                            <EditorLink
                                href="/support"
                                className="text-gray-400 hover:text-white"
                            >
                                Support
                            </EditorLink>
                            <EditorLink
                                href="/community"
                                className="text-gray-400 hover:text-white"
                            >
                                Community
                            </EditorLink>
                        </EditorDiv>
                    </EditorDiv>

                    {/* Company Links */}
                    <EditorDiv>
                        <EditorHeading
                            level="h4"
                            className="mb-4 text-lg font-semibold"
                        >
                            Company
                        </EditorHeading>
                        <EditorDiv className="flex flex-col gap-2">
                            <EditorLink
                                href="/about"
                                className="text-gray-400 hover:text-white"
                            >
                                About Us
                            </EditorLink>
                            <EditorLink
                                href="/careers"
                                className="text-gray-400 hover:text-white"
                            >
                                Careers
                            </EditorLink>
                            <EditorLink
                                href="/contact"
                                className="text-gray-400 hover:text-white"
                            >
                                Contact
                            </EditorLink>
                            <EditorLink
                                href="/privacy"
                                className="text-gray-400 hover:text-white"
                            >
                                Privacy Policy
                            </EditorLink>
                        </EditorDiv>
                    </EditorDiv>
                </EditorDiv>

                {/* Bottom Footer */}
                <EditorDiv className="mt-12 border-t border-gray-800 pt-8">
                    <EditorDiv className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <EditorParagraph className="text-gray-400">
                            © 2026 WebBuilder. All rights reserved.
                        </EditorParagraph>
                        <EditorDiv className="flex gap-6">
                            <EditorLink
                                href="/terms"
                                className="text-gray-400 hover:text-white"
                            >
                                Terms
                            </EditorLink>
                            <EditorLink
                                href="/privacy"
                                className="text-gray-400 hover:text-white"
                            >
                                Privacy
                            </EditorLink>
                            <EditorLink
                                href="/cookies"
                                className="text-gray-400 hover:text-white"
                            >
                                Cookies
                            </EditorLink>
                        </EditorDiv>
                    </EditorDiv>
                </EditorDiv>
            </EditorContainer>
        </EditorFooter>
    );
};

export default footerSection;
