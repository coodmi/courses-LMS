<?php

namespace App\Services;

use App\Models\Course\Course;
use App\Models\Course\CourseCategory;
use App\Models\Course\SectionQuiz;
use App\Models\Instructor;
use App\Models\Page;
use Modules\Blog\Models\BlogCategory;
use Modules\Exam\Models\ExamCategory;
use Illuminate\Pagination\LengthAwarePaginator;
use Modules\Blog\Models\Blog;

class FrontendService
{
   public function getCourses(array $data): LengthAwarePaginator
   {
      $per_page = array_key_exists('course_per_page', $data) ? intval($data['course_per_page']) : 10;

      $paginator = Course::query()
         ->with(['sections' => function ($query) {
            $query->select('id', 'course_id')
               ->with(['section_lessons' => function ($query) {
                  $query->select('id', 'course_section_id', 'duration');
               }]);
         }])
         ->when(array_key_exists('course', $data), function ($query) use ($data) {
            return $query->where('title', 'LIKE', '%' . $data['course'] . '%');
         })
         ->withCount('enrollments')
         ->where('status', 'approved')
         ->orderBy('created_at', 'desc')
         ->paginate($per_page);

      $paginator->getCollection()->transform(function ($course) {
         $course->average_rating = $course->reviews()->avg('rating') ?? 0;
         $course->reviews_count = $course->reviews()->count();
         return $course;
      });

      return $paginator;
   }

   public function getCourseCategories(array $data)
   {
      $page = array_key_exists('category_page', $data) ? intval($data['category_page']) : 1;
      $per_page = array_key_exists('category_per_page', $data) ? intval($data['category_per_page']) : 10;

      $paginator = CourseCategory::withCount(['courses' => function ($query) {
         $query->where('status', 'approved');
      }])
         ->where('slug', '!=', 'default')
         ->when(array_key_exists('category', $data), function ($query) use ($data) {
            return $query->where('title', 'LIKE', '%' . $data['category'] . '%');
         })
         ->paginate($per_page, ['*'], 'page', $page);

      $paginator->getCollection()->transform(function ($category) {
         return [
            'id' => $category->id,
            'title' => $category->title,
            'icon' => $category->icon ?? null,
            'slug' => $category->slug ?? null,
            'courses_count' => $category->courses_count,
         ];
      });

      return $paginator;
   }

   public function getInstructors(array $data): LengthAwarePaginator
   {
      $page = array_key_exists('instructor_page', $data) ? intval($data['instructor_page']) : 1;
      $per_page = array_key_exists('instructor_per_page', $data) ? intval($data['instructor_per_page']) : 10;

      $paginator = Instructor::query()
         ->with([
            'user',
            'courses' => function ($query) {
               $query->where('status', 'approved');
            }
         ])
         ->when(array_key_exists('instructor', $data), function ($query) use ($data) {
            return $query->whereHas('user', function ($userQuery) use ($data) {
               $userQuery->where('name', 'LIKE', '%' . $data['instructor'] . '%');
            });
         })
         ->whereHas('user', function ($query) {
            $query->where('role', '!=', 'admin');
         })
         ->where('instructors.status', 'approved')
         ->withCount('courses')
         ->selectRaw('(SELECT COUNT(*) FROM course_reviews 
            INNER JOIN courses ON course_reviews.course_id = courses.id 
            WHERE courses.instructor_id = instructors.id) as total_reviews_count')
         ->selectRaw('(SELECT AVG(rating) FROM course_reviews 
            INNER JOIN courses ON course_reviews.course_id = courses.id 
            WHERE courses.instructor_id = instructors.id) as total_average_rating')
         ->selectRaw('(SELECT COUNT(DISTINCT user_id) FROM course_enrollments
            INNER JOIN courses ON course_enrollments.course_id = courses.id
            WHERE courses.instructor_id = instructors.id) as total_enrollments_count')
         ->orderBy('total_enrollments_count', 'desc')
         ->orderBy('created_at', 'desc')
         ->paginate($per_page, ['*'], 'page', $page);

      $paginator->getCollection()->transform(function ($instructor) {
         $instructor->average_rating = $instructor->courses->avg('average_rating') ?? 0;
         $instructor->total_reviews = $instructor->courses->sum('reviews_count');

         // Ensure social_links is properly cast as array
         if ($instructor->user && $instructor->user->social_links) {
            if (is_string($instructor->user->social_links)) {
               $instructor->user->social_links = json_decode($instructor->user->social_links, true) ?: [];
            }
         }

         return $instructor;
      });

      return $paginator;
   }

   public function getExams(array $data): LengthAwarePaginator
   {
      $per_page = array_key_exists('exam_per_page', $data) ? intval($data['exam_per_page']) : 10;

      $paginator = SectionQuiz::query()
         ->with([
            'course',
            'course_section',
            'quiz_questions',
         ])
         ->when(array_key_exists('exam', $data), function ($query) use ($data) {
            return $query->where('title', 'LIKE', '%' . $data['exam'] . '%');
         })
         ->withCount('quiz_questions')
         ->orderBy('created_at', 'desc')
         ->paginate($per_page);

      $paginator->getCollection()->transform(function ($exam) {
         $exam->submissions_count = $exam->quiz_submissions()->count();
         return $exam;
      });

      return $paginator;
   }

   public function getBlogs(array $data): LengthAwarePaginator
   {
      $per_page = array_key_exists('blogs_per_page', $data) ? intval($data['blogs_per_page']) : 10;

      $paginator = Blog::query()
         ->with('user')
         ->when(array_key_exists('blogs', $data), function ($query) use ($data) {
            return $query->where('title', 'LIKE', '%' . $data['blogs'] . '%');
         })
         ->orderBy('created_at', 'desc')
         ->paginate($per_page);

      $paginator->getCollection()->transform(function ($blog) {
         // Add any additional transformations if needed
         return $blog;
      });

      return $paginator;
   }

   public function getExamCategories(array $data): LengthAwarePaginator
   {
      $page = array_key_exists('exam_category_page', $data) ? intval($data['exam_category_page']) : 1;
      $per_page = array_key_exists('exam_category_per_page', $data) ? intval($data['exam_category_per_page']) : 10;

      $paginator = ExamCategory::withCount('exams')
         ->when(array_key_exists('exam_category', $data), function ($query) use ($data) {
            return $query->where('title', 'LIKE', '%' . $data['exam_category'] . '%');
         })
         ->where('status', true)
         ->orderBy('sort', 'asc')
         ->paginate($per_page, ['*'], 'page', $page);

      $paginator->getCollection()->transform(function ($category) {
         return [
            'id' => $category->id,
            'title' => $category->title,
            'icon' => $category->icon ?? null,
            'slug' => $category->slug ?? null,
            'description' => $category->description ?? null,
            'exams_count' => $category->exams_count,
         ];
      });

      return $paginator;
   }

   public function getBlogCategories(array $data): LengthAwarePaginator
   {
      $page = array_key_exists('blog_category_page', $data) ? intval($data['blog_category_page']) : 1;
      $per_page = array_key_exists('blog_category_per_page', $data) ? intval($data['blog_category_per_page']) : 10;

      $paginator = BlogCategory::withCount('blogs')
         ->when(array_key_exists('blog_category', $data), function ($query) use ($data) {
            return $query->where('name', 'LIKE', '%' . $data['blog_category'] . '%');
         })
         ->where('status', 'active')
         ->orderBy('sort', 'asc')
         ->paginate($per_page, ['*'], 'page', $page);

      $paginator->getCollection()->transform(function ($category) {
         return [
            'id' => $category->id,
            'name' => $category->name,
            'icon' => $category->icon ?? null,
            'slug' => $category->slug ?? null,
            'description' => $category->description ?? null,
            'blogs_count' => $category->blogs_count,
         ];
      });

      return $paginator;
   }
}
