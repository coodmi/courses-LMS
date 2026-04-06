import LandingLayout from '@/layouts/landing-layout';
import FrontendPageRenderer from './page-renderer';

interface Props {
   page: ProjectPage;
}

const Index = (props: Props) => {
   const { page } = props;
   const pageData = JSON.parse(props.page.content);

   return (
      <LandingLayout navbarHeight={page.type === 'home' ? true : false} customizable={false}>
         {pageData ? (
            <FrontendPageRenderer pageData={pageData[0]} />
         ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
               <div className="mx-4 max-w-md space-y-6 rounded-2xl bg-white p-8 text-center shadow-xl">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                     <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                     </svg>
                  </div>
                  <div className="space-y-2">
                     <h1 className="text-2xl font-bold text-gray-900">Page Content Not Available</h1>
                     <p className="text-gray-600">This page is still being created. The content will appear here once it's ready.</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                     <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></div>
                     <span>Building amazing content...</span>
                  </div>
               </div>
            </div>
         )}
      </LandingLayout>
   );
};

export default Index;
