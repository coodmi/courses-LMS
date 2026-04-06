import SearchInput from '@/components/search-input';
import { router } from '@inertiajs/react';

const CourseSearchInput = () => {
   return (
      <div className="relative">
         <SearchInput
            iconPosition="right"
            placeholder="Search for courses that fit your goals"
            className="[&>svg]:text-secondary-foreground bg-background z-10 w-full rounded md:max-w-[440px] [&>input]:h-10"
            onChangeValue={(value) => router.get(route('category.courses', { category: 'all', search: value }))}
         />

         <div className="after:pointer-events-none after:absolute after:top-1/2 after:-left-[60px] after:h-[240px] after:w-[240px] after:-translate-y-1/2 after:rounded-full after:bg-[rgba(0,167,111,1)] after:blur-[290px] after:content-[''] dark:after:bg-[#fff5cc6d]"></div>
      </div>
   );
};

export default CourseSearchInput;
