import {
    EditorButton,
    EditorContainer,
    EditorDiv,
    EditorDrawer,
    EditorDrawerContent,
    EditorDrawerTrigger,
    EditorDropdownMenu,
    EditorDropdownMenuContent,
    EditorDropdownMenuItem,
    EditorDropdownMenuLabel,
    EditorDropdownMenuTrigger,
    EditorHeader,
    EditorHeading,
    EditorLink,
    EditorNav,
    EditorParagraph,
    EditorPopover,
    EditorPopoverContent,
    EditorPopoverTrigger,
    EditorSpan,
} from '@/pages/editor/lib/components';

const headerSection = () => {
    return (
        <EditorHeader className="sticky top-0 z-50 border-b bg-white shadow-sm">
            <EditorContainer className="p-4">
                <EditorNav className="flex w-full items-center justify-between">
                    <EditorLink
                        href="/"
                        className="text-2xl font-bold text-blue-600"
                    >
                        WebBuilder
                    </EditorLink>
                    <EditorDiv className="hidden gap-6 md:flex">
                        <EditorLink
                            href="#features"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            Features
                        </EditorLink>
                        <EditorLink
                            href="#about"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            About
                        </EditorLink>
                        <EditorLink
                            href="#contact"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            Contact
                        </EditorLink>
                    </EditorDiv>
                    <EditorDiv className="flex items-center gap-3">
                        {/* Popover */}
                        <EditorPopover>
                            <EditorPopoverTrigger className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-primary-foreground hover:bg-primary/90">
                                <EditorSpan>Help</EditorSpan>
                            </EditorPopoverTrigger>
                            <EditorPopoverContent
                                className="w-80 rounded-lg border bg-white p-4 shadow-lg"
                                placement="center"
                            >
                                <EditorHeading
                                    level="h4"
                                    className="mb-2 text-lg font-semibold text-gray-900"
                                >
                                    Need Help?
                                </EditorHeading>
                                <EditorParagraph className="mb-4 text-sm text-gray-600">
                                    Our support team is here to assist you with
                                    any questions or issues you may have.
                                </EditorParagraph>
                                <EditorDiv className="flex flex-col gap-2">
                                    <EditorLink
                                        href="/support"
                                        className="rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
                                    >
                                        Contact Support
                                    </EditorLink>
                                    <EditorLink
                                        href="/faq"
                                        className="text-center text-sm text-blue-600 hover:underline"
                                    >
                                        View FAQ
                                    </EditorLink>
                                </EditorDiv>
                            </EditorPopoverContent>
                        </EditorPopover>

                        {/* Dropdown Menu */}
                        <EditorDropdownMenu className="w-full">
                            <EditorDropdownMenuTrigger className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-primary-foreground hover:bg-primary/90">
                                Resources
                            </EditorDropdownMenuTrigger>
                            <EditorDropdownMenuContent
                                className="min-w-[200px] rounded-lg border bg-white p-2 shadow-lg"
                                placement="right"
                            >
                                <EditorDropdownMenuLabel className="px-3 py-2 text-sm font-semibold text-gray-900">
                                    Quick Links
                                </EditorDropdownMenuLabel>
                                <EditorDropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Documentation
                                </EditorDropdownMenuItem>
                                <EditorDropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Tutorials
                                </EditorDropdownMenuItem>
                                <EditorDropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    API Reference
                                </EditorDropdownMenuItem>
                                <EditorDropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Community
                                </EditorDropdownMenuItem>
                            </EditorDropdownMenuContent>
                        </EditorDropdownMenu>

                        <EditorDrawer>
                            <EditorDrawerTrigger>
                                <EditorSpan>Open Drawer</EditorSpan>
                            </EditorDrawerTrigger>
                            <EditorDrawerContent>
                                <EditorParagraph className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                                    The ultimate page builder that bridges code
                                    and visual editing. Write in JSX or edit
                                    visually - your choice.
                                </EditorParagraph>
                            </EditorDrawerContent>
                        </EditorDrawer>

                        <EditorLink
                            href="/login"
                            className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                        >
                            Log in
                        </EditorLink>
                        <EditorLink href="/register">
                            <EditorButton
                                buttonType="button"
                                className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                            >
                                Sign Up
                            </EditorButton>
                        </EditorLink>
                    </EditorDiv>
                </EditorNav>
            </EditorContainer>
        </EditorHeader>
    );
};

export default headerSection;
