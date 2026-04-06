import { cn } from '@/lib/utils';
import { useEditor } from '@/pages/editor/hooks/use-editor';
import { addElement } from '@/pages/editor/lib/add-element';
import ActionsWrapper from '@/pages/editor/main/dnd/ActionsWrapper';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

const ElementWrapper = ({
   element,
   children,
   tag: Tag = 'div',
   isContainer = false,
   applyStyles = true,
   wrapperClassName = 'relative',
   showDeleteButton = true,
   htmlAttributes = {},
   contentEditable,
   onKeyDown,
   onBlur,
   suppressContentEditableWarning,
}: ElementWrapperProps) => {
   const { id, type } = element;
   const { dispatch, editor: editorState } = useEditor();
   const { editor } = editorState;
   const styles = applyStyles ? element.styles : {};

   // Use useSortable which combines draggable + droppable in one hook
   const { attributes, listeners, setNodeRef, transform, transition, isDragging, isOver, active } = useSortable({
      id,
      data: {
         element,
         type: 'existing-element',
         containerId: element.id, // For containers, this is their own ID
      },
      disabled: editor.liveMode,
   });

   // Show drop indicator when hovering (moved from DroppableContainer)
   const showDropIndicator = isOver && active && isContainer;

   const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.3 : 1,
   };

   const handleOnClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      dispatch({
         type: 'CHANGE_CLICKED_ELEMENT',
         payload: { elementDetails: element },
      });
   };

   const handleOnDrop = (event: React.DragEvent) => {
      event.stopPropagation();
      const componentType = event.dataTransfer.getData('componentType') as EditorBtns;
      addElement(componentType, id, dispatch);
   };

   const handleDragOver = (event: React.DragEvent) => {
      event.preventDefault();
   };

   // Determine wrapper display based on element type
   const getWrapperDisplay = (): string => {
      if (isContainer) return wrapperClassName || 'relative';

      // Block-level elements should have block wrapper
      const blockElements = ['hr', 'dropdownMenuLabel', 'dropdownMenuItem', 'accordionItem', 'tabs'];
      if (blockElements.includes(type as string)) {
         return cn('relative block w-full', wrapperClassName);
      }

      // Inline elements
      return cn('relative inline-block', wrapperClassName);
   };

   // Extract style, className, and event handlers from htmlAttributes to avoid conflicts
   const { style: htmlStyle, className: htmlClassName, ...restHtmlAttributes } = htmlAttributes || {};

   // Get user-defined event handlers and recreate functions from strings
   const userEventHandlers = React.useMemo(() => {
      const handlersRaw = element.htmlAttributes?.eventHandlers || {};
      const handlers: Record<string, any> = {};

      Object.keys(handlersRaw).forEach((key) => {
         const handlerString = handlersRaw[key];
         if (typeof handlerString === 'string') {
            try {
               // Recreate function from string
               // eslint-disable-next-line no-new-func
               handlers[key] = new Function('return ' + handlerString)();
            } catch (error) {
               console.error(`Failed to recreate event handler ${key}:`, error);
            }
         } else if (typeof handlerString === 'function') {
            // Already a function (from code-based pages)
            handlers[key] = handlerString;
         }
      });
      return handlers;
   }, [element.htmlAttributes?.eventHandlers]);

   const { onClick: userOnClick, ...otherEventHandlers } = userEventHandlers;

   const TagComponent = Tag as any;
   const isContentEditable = contentEditable !== undefined;

   // For contentEditable elements, wrap in a container so drag handle/badge/delete are siblings
   if (isContentEditable) {
      return editor.liveMode ? (
         <TagComponent
            style={htmlStyle || styles}
            className={cn('outline-none', htmlClassName)}
            {...restHtmlAttributes}
            {...(otherEventHandlers || {})}
            onClick={(e: React.MouseEvent) => {
               userOnClick?.(e as any);
            }}
            contentEditable={contentEditable}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            suppressContentEditableWarning={suppressContentEditableWarning}
         >
            {children}
         </TagComponent>
      ) : (
         <div
            ref={setNodeRef}
            style={style}
            className={cn(getWrapperDisplay(), {
               '!border-solid !border-blue-500': editor.selectedElement.id === id && !editor.liveMode,
               '!border !border-dashed': !editor.liveMode,
               'z-50': isDragging,
            })}
            onClick={handleOnClick}
         >
            <ActionsWrapper
               id={id}
               element={element}
               listeners={listeners}
               attributes={attributes}
               showDeleteButton={showDeleteButton}
               showDropIndicator={showDropIndicator}
            >
               {/* Main contentEditable element */}
               <TagComponent
                  style={htmlStyle || styles}
                  className={cn('outline-none', htmlClassName)}
                  {...restHtmlAttributes}
                  contentEditable={contentEditable}
                  onKeyDown={onKeyDown}
                  onBlur={onBlur}
                  suppressContentEditableWarning={suppressContentEditableWarning}
               >
                  {children}
               </TagComponent>
            </ActionsWrapper>
         </div>
      );
   }

   // For container elements, render without extra wrapper
   return (
      <TagComponent
         ref={setNodeRef}
         style={{
            ...(isContainer ? styles : htmlStyle || styles),
            ...style,
         }}
         className={cn(
            getWrapperDisplay(),
            {
               '!border-solid !border-blue-500': editor.selectedElement.id === id && !editor.liveMode,
               '!border !border-dashed': !editor.liveMode,
               'z-50': isDragging,
            },
            isContainer ? element.className : undefined,
            htmlClassName,
         )}
         {...restHtmlAttributes}
         {...(editor.liveMode ? otherEventHandlers || {} : {})}
         onClick={(e: React.MouseEvent) => {
            if (!editor.liveMode) {
               handleOnClick(e);
            } else {
               userOnClick?.(e as any);
            }
         }}
         onDrop={isContainer ? handleOnDrop : undefined}
         onDragOver={isContainer ? handleDragOver : undefined}
      >
         <ActionsWrapper
            id={id}
            element={element}
            listeners={listeners}
            attributes={attributes}
            showDeleteButton={showDeleteButton}
            showDropIndicator={showDropIndicator}
         >
            {/* Render container children with sortable/droppable */}
            {children}
         </ActionsWrapper>
      </TagComponent>
   );
};

export default ElementWrapper;
