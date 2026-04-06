import { useEditor } from '@/pages/editor/hooks/use-editor';
import IconPicker from '@/pages/editor/main/icon-picker';
import React from 'react';

const IconSettings = ({
    changeCustomValues,
}: {
    changeCustomValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    const { editor } = useEditor();

    return (
        editor.editor.selectedElement.type === 'icon' && (
            <IconPicker
                enableSearch={true}
                onSelect={(e) =>
                    changeCustomValues({
                        target: {
                            id: 'icon',
                            value: e,
                        },
                    } as any)
                }
            />
        )
    );
};

export default IconSettings;
