import {
    EditorButton,
    EditorContainer,
    EditorDiv,
    EditorHeading,
    EditorParagraph,
    EditorSection,
} from '@/pages/editor/lib/components';

const heroSection = () => {
    return (
        <EditorSection className="bg-gradient-to-b from-blue-50 to-white py-20">
            <EditorContainer className="px-4 text-center">
                <EditorHeading
                    level="h1"
                    className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl"
                >
                    Build Beautiful Websites
                </EditorHeading>
                <EditorParagraph className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                    The ultimate page builder that bridges code and visual
                    editing. Write in JSX or edit visually - your choice.
                </EditorParagraph>
                <EditorDiv className="flex flex-col justify-center gap-4 sm:flex-row">
                    <EditorButton
                        buttonType="button"
                        className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-700"
                    >
                        Get Started Free
                    </EditorButton>
                    <EditorButton
                        buttonType="button"
                        className="rounded-lg border-2 border-gray-300 bg-transparent px-8 py-3 text-lg font-semibold text-gray-700 hover:bg-gray-50"
                    >
                        Watch Demo
                    </EditorButton>
                </EditorDiv>
            </EditorContainer>
        </EditorSection>
    );
};

export default heroSection;
