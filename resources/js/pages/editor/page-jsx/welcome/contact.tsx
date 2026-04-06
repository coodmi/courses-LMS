import {
    EditorButton,
    EditorContainer,
    EditorDiv,
    EditorForm,
    EditorHeading,
    EditorInput,
    EditorLabel,
    EditorParagraph,
    EditorSection,
    EditorTextarea,
} from '@/pages/editor/lib/components';

const contactSection = () => {
    return (
        <EditorSection className="py-20">
            <EditorContainer className="px-4">
                <EditorDiv className="mb-12 text-center">
                    <EditorHeading
                        level="h2"
                        className="mb-4 text-4xl font-bold text-gray-900"
                    >
                        Get In Touch
                    </EditorHeading>
                    <EditorParagraph className="text-lg text-gray-600">
                        Have questions? We'd love to hear from you. Send us a
                        message and we'll respond as soon as possible.
                    </EditorParagraph>
                </EditorDiv>

                <EditorForm className="rounded-lg bg-white p-8 shadow-lg">
                    <EditorDiv className="mb-6">
                        <EditorLabel className="mb-2 block font-medium text-gray-700">
                            Full Name
                        </EditorLabel>
                        <EditorInput
                            inputType="text"
                            name="name"
                            placeholder="John Doe"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                        />
                    </EditorDiv>
                    <EditorDiv className="mb-6">
                        <EditorLabel className="mb-2 block font-medium text-gray-700">
                            Email Address
                        </EditorLabel>
                        <EditorInput
                            inputType="email"
                            name="email"
                            placeholder="john@example.com"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                        />
                    </EditorDiv>
                    <EditorDiv className="mb-6">
                        <EditorLabel className="mb-2 block font-medium text-gray-700">
                            Subject
                        </EditorLabel>
                        <EditorInput
                            inputType="text"
                            name="subject"
                            placeholder="How can we help?"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                        />
                    </EditorDiv>
                    <EditorDiv className="mb-6">
                        <EditorLabel className="mb-2 block font-medium text-gray-700">
                            Message
                        </EditorLabel>
                        <EditorTextarea
                            name="message"
                            placeholder="Tell us about your project or ask us anything..."
                            className="h-32 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                        />
                    </EditorDiv>
                    <EditorButton
                        buttonType="submit"
                        className="w-full rounded-lg bg-blue-600 px-5 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-700"
                    >
                        Send Message
                    </EditorButton>
                </EditorForm>
            </EditorContainer>
        </EditorSection>
    );
};

export default contactSection;
