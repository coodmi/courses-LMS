import {
    EditorContainer,
    EditorDiv,
    EditorHeading,
    EditorParagraph,
    EditorSection,
} from '@/pages/editor/lib/components';

const aboutSection = () => {
    return (
        <EditorSection className="bg-gray-50 py-20">
            <EditorContainer className="px-4">
                <EditorDiv className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <EditorDiv>
                        <EditorHeading
                            level="h2"
                            className="mb-6 text-4xl font-bold text-gray-900"
                        >
                            Built for Modern Development
                        </EditorHeading>
                        <EditorParagraph className="mb-4 text-lg text-gray-600">
                            Our platform combines the best of both worlds - the
                            flexibility of code and the simplicity of visual
                            editing.
                        </EditorParagraph>
                        <EditorParagraph className="mb-6 text-lg text-gray-600">
                            Whether you're a developer who loves JSX or a
                            designer who prefers drag-and-drop, we've got you
                            covered.
                        </EditorParagraph>
                        <EditorDiv className="space-y-3">
                            <EditorDiv className="flex items-center gap-3">
                                <EditorParagraph className="text-green-600">
                                    ✓
                                </EditorParagraph>
                                <EditorParagraph className="text-gray-700">
                                    Full TypeScript support
                                </EditorParagraph>
                            </EditorDiv>
                            <EditorDiv className="flex items-center gap-3">
                                <EditorParagraph className="text-green-600">
                                    ✓
                                </EditorParagraph>
                                <EditorParagraph className="text-gray-700">
                                    Automatic UUID generation
                                </EditorParagraph>
                            </EditorDiv>
                            <EditorDiv className="flex items-center gap-3">
                                <EditorParagraph className="text-green-600">
                                    ✓
                                </EditorParagraph>
                                <EditorParagraph className="text-gray-700">
                                    Bidirectional editing
                                </EditorParagraph>
                            </EditorDiv>
                            <EditorDiv className="flex items-center gap-3">
                                <EditorParagraph className="text-green-600">
                                    ✓
                                </EditorParagraph>
                                <EditorParagraph className="text-gray-700">
                                    Real-time preview
                                </EditorParagraph>
                            </EditorDiv>
                        </EditorDiv>
                    </EditorDiv>
                    <EditorDiv className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white shadow-2xl">
                        <EditorHeading
                            level="h3"
                            className="mb-4 text-2xl font-bold"
                        >
                            Trusted by Developers
                        </EditorHeading>
                        <EditorParagraph className="mb-6 text-lg opacity-90">
                            Join thousands of developers building amazing
                            websites with our platform.
                        </EditorParagraph>
                        <EditorDiv className="grid grid-cols-2 gap-6">
                            <EditorDiv>
                                <EditorHeading
                                    level="h4"
                                    className="mb-1 text-3xl font-bold"
                                >
                                    10K+
                                </EditorHeading>
                                <EditorParagraph className="opacity-80">
                                    Active Users
                                </EditorParagraph>
                            </EditorDiv>
                            <EditorDiv>
                                <EditorHeading
                                    level="h4"
                                    className="mb-1 text-3xl font-bold"
                                >
                                    50K+
                                </EditorHeading>
                                <EditorParagraph className="opacity-80">
                                    Pages Built
                                </EditorParagraph>
                            </EditorDiv>
                            <EditorDiv>
                                <EditorHeading
                                    level="h4"
                                    className="mb-1 text-3xl font-bold"
                                >
                                    99.9%
                                </EditorHeading>
                                <EditorParagraph className="opacity-80">
                                    Uptime
                                </EditorParagraph>
                            </EditorDiv>
                            <EditorDiv>
                                <EditorHeading
                                    level="h4"
                                    className="mb-1 text-3xl font-bold"
                                >
                                    24/7
                                </EditorHeading>
                                <EditorParagraph className="opacity-80">
                                    Support
                                </EditorParagraph>
                            </EditorDiv>
                        </EditorDiv>
                    </EditorDiv>
                </EditorDiv>
            </EditorContainer>
        </EditorSection>
    );
};

// Export the function so it can be called with dynamic props
export default aboutSection;
