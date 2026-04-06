import { useAppearance } from '@/hooks/use-appearance';
import LandingLayout from '@/layouts/landing-layout';
import { convertPageToEditorElement } from '../editor/lib/jsx-to-editor-element';
import aboutUsPageData from '../editor/page-jsx/about-us';
import cookiePolicyPageData from '../editor/page-jsx/cookie-policy';
import home1PageData from '../editor/page-jsx/home-1';
import home2PageData from '../editor/page-jsx/home-2';
import home3PageData from '../editor/page-jsx/home-3';
import home4PageData from '../editor/page-jsx/home-4';
import home5PageData from '../editor/page-jsx/home-5';
import ourTeamPageData from '../editor/page-jsx/our-team';
import PageRenderer from '../editor/page-jsx/page-renderer';
import privacyPolicyPageData from '../editor/page-jsx/privacy-policy';
import refundPolicyPageData from '../editor/page-jsx/refund-policy';
import termsAndConditionsPageData from '../editor/page-jsx/terms-and-conditions';

interface Props {
   page: ProjectPage;
}

const Show = (props: Props) => {
   const home1 = convertPageToEditorElement(home1PageData());
   const home2 = convertPageToEditorElement(home2PageData());
   const home3 = convertPageToEditorElement(home3PageData());
   const home4 = convertPageToEditorElement(home4PageData());
   const home5 = convertPageToEditorElement(home5PageData());
   const aboutUs = convertPageToEditorElement(aboutUsPageData());
   const ourTeam = convertPageToEditorElement(ourTeamPageData());
   const cookiePolicy = convertPageToEditorElement(cookiePolicyPageData());
   const privacyPolicy = convertPageToEditorElement(privacyPolicyPageData());
   const refundPolicy = convertPageToEditorElement(refundPolicyPageData());
   const termsAndConditions = convertPageToEditorElement(termsAndConditionsPageData());
   // const home5 = convertPageToEditorElement(home5PageData());
   // console.log(home1, home2, home3, home4);

   const { appearance } = useAppearance('system');
   // setGlobalColorTheme(appearance, props.page.project.theme_color);

   const pageData = JSON.parse(props.page.content);

   return (
      <LandingLayout navbarHeight={true} customizable={false}>
         <PageRenderer pageData={home1} />
      </LandingLayout>
   );

   return pageData ? (
      <PageRenderer pageData={pageData[0]} />
   ) : (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
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
   );
};

export default Show;
