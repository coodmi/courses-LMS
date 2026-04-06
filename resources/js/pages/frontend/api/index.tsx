import DashboardLayout from '@/layouts/dashboard/layout';
import { router } from '@inertiajs/react';
import { ReactNode, useState } from 'react';
import BlogsCollection from './partials/blogs-collection';
import CourseCategoriesCollection from './partials/course-categories-collection';
import CoursesCollection from './partials/courses-collection';
import InstructorsCollection from './partials/instructors-collection';
import SponsorsCollection from './partials/sponsors-collection';
import TestimonialsCollection from './partials/testimonials-collection';

interface Testimonial {
   name: string;
   image: string;
   rating: number;
   description: string;
}

interface Sponsor {
   image: string;
   url: string;
}

export type APIParams = 'best' | 'top' | 'new' | 'featured';

export interface ApiPageProps {
   collections: {
      courses?: { best: Course | null; top: Course[]; new: Course[]; featured: Course[] };
      exams?: { best: Exam | null; top: Exam[]; new: Exam[]; featured: Exam[] };
      blogs?: { best: Blog | null; top: Blog[]; new: Blog[]; featured: Blog[] };
      instructors?: { best: Instructor | null; top: Instructor[]; new: Instructor[]; featured: Instructor[] };
      course_categories?: { best: CourseCategory | null; top: CourseCategory[]; new: CourseCategory[]; featured: CourseCategory[] };
      exam_categories?: { best: ExamCategory | null; top: ExamCategory[]; new: ExamCategory[]; featured: ExamCategory[] };
      blog_categories?: { best: BlogCategory | null; top: BlogCategory[]; new: BlogCategory[]; featured: BlogCategory[] };
      testimonials?: { top: Testimonial[]; new: Testimonial[] };
      sponsors?: { top: Sponsor[]; new: Sponsor[] };
   };
   courses: Pagination<Course>;
   exams: Pagination<Exam>;
   blogs: Pagination<Blog>;
   instructors: Pagination<Instructor>;
   course_categories: Pagination<CourseCategory>;
   exam_categories: Pagination<CourseCategory>;
   blog_categories: Pagination<BlogCategory>;
}

const ApiPage = ({ collections, courses, blogs, instructors, course_categories }: ApiPageProps) => {
   const [removing, setRemoving] = useState<string | null>(null);
   const [inserting, setInserting] = useState<string | null>(null);

   const handleRemove = (type: string, category: APIParams, itemId: number | string) => {
      setRemoving(`${type}-${category}-${itemId}`);
      router.put(
         route('frontend.api'),
         {
            type,
            category,
            item_id: itemId,
            action: 'remove',
         },
         {
            preserveScroll: true,
            onFinish: () => setRemoving(null),
         },
      );
   };

   const handleInsert = (type: string, category: APIParams, itemId: number | string) => {
      setInserting(`${type}-${category}-${itemId}`);
      router.put(
         route('frontend.api'),
         {
            type,
            category,
            item_id: itemId,
            action: 'insert',
         },
         {
            preserveScroll: true,
            onFinish: () => setInserting(null),
         },
      );
   };

   const handleTestimonialInsert = (type: string, category: APIParams, itemData: Testimonial) => {
      setInserting(`${type}-${category}-new`);
      router.put(
         route('frontend.api'),
         {
            type,
            category,
            item_data: {
               name: itemData.name,
               image: itemData.image,
               rating: itemData.rating,
               description: itemData.description,
            },
            action: 'insert',
         },
         {
            preserveScroll: true,
            onFinish: () => setInserting(null),
         },
      );
   };

   const handleSponsorInsert = (type: string, category: APIParams, itemData: Sponsor) => {
      setInserting(`${type}-${category}-new`);
      router.put(
         route('frontend.api'),
         {
            type,
            category,
            item_data: {
               image: itemData.image,
               url: itemData.url,
            },
            action: 'insert',
         },
         {
            preserveScroll: true,
            onFinish: () => setInserting(null),
         },
      );
   };

   return (
      <div className="space-y-8">
         <div className="mb-8">
            <h1 className="text-2xl font-bold">Frontend Collections Management</h1>
            <p className="text-muted-foreground">Manage best, top, and new items for each collection type</p>
         </div>

         <div className="space-y-6">
            <CoursesCollection
               data={collections.courses ?? ({ best: null, top: [], new: [] } as { best: Course | null; top: Course[]; new: Course[] })}
               courses={courses}
               removing={removing}
               inserting={inserting}
               onRemove={handleRemove}
               onInsert={handleInsert}
            />

            {/* {collections.exams && (
               <ExamsCollection
                  data={collections.exams}
                  exams={exams}
                  removing={removing}
                  inserting={inserting}
                  onRemove={handleRemove}
                  onInsert={handleInsert}
               />
            )} */}

            <BlogsCollection
               data={collections.blogs ?? ({ best: null, top: [], new: [] } as { best: Blog | null; top: Blog[]; new: Blog[] })}
               blogs={blogs}
               removing={removing}
               inserting={inserting}
               onRemove={handleRemove}
               onInsert={handleInsert}
            />

            <InstructorsCollection
               data={
                  collections.instructors ??
                  ({ best: null, top: [], new: [], featured: [] } as {
                     best: Instructor | null;
                     top: Instructor[];
                     new: Instructor[];
                     featured: Instructor[];
                  })
               }
               instructors={instructors}
               removing={removing}
               inserting={inserting}
               onRemove={handleRemove}
               onInsert={handleInsert}
            />

            <CourseCategoriesCollection
               data={
                  collections.course_categories ??
                  ({ best: null, top: [], new: [], featured: [] } as {
                     best: CourseCategory | null;
                     top: CourseCategory[];
                     new: CourseCategory[];
                     featured: CourseCategory[];
                  })
               }
               categories={course_categories}
               removing={removing}
               inserting={inserting}
               onRemove={handleRemove}
               onInsert={handleInsert}
            />

            {/* {collections.exam_categories && (
               <ExamCategoriesCollection
                  data={collections.exam_categories}
                  categories={exam_categories}
                  removing={removing}
                  inserting={inserting}
                  onRemove={handleRemove}
                  onInsert={handleInsert}
               />
            )} */}

            {/* {collections.blog_categories && (
               <BlogCategoriesCollection
                  data={collections.blog_categories}
                  categories={blog_categories}
                  removing={removing}
                  inserting={inserting}
                  onRemove={handleRemove}
                  onInsert={handleInsert}
               />
            )} */}

            <TestimonialsCollection
               data={collections.testimonials ?? ({ top: [], new: [] } as { top: Testimonial[]; new: Testimonial[] })}
               removing={removing}
               inserting={inserting}
               onRemove={handleRemove}
               onInsert={handleTestimonialInsert}
            />

            <SponsorsCollection
               data={collections.sponsors ?? ({ top: [], new: [] } as { top: Sponsor[]; new: Sponsor[] })}
               removing={removing}
               inserting={inserting}
               onRemove={handleRemove}
               onInsert={handleSponsorInsert}
            />
         </div>
      </div>
   );
};

ApiPage.layout = (page: ReactNode) => <DashboardLayout children={page} />;

export default ApiPage;
