import { EditorDiv, EditorDynamicWrapper, EditorSection } from '@/pages/editor/lib/components';

const TopCourse = () => {
   return (
      <EditorDiv className="overflow-y-hidden">
         <EditorSection className="relative py-20">
            <EditorDynamicWrapper api="api/collections/courses/best" apiMethod="GET" componentRef="best-course" />
         </EditorSection>
      </EditorDiv>
   );
};

export default TopCourse;
