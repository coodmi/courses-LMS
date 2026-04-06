<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Instructor;
use App\Models\Course\Course;
use App\Models\Course\CourseCategory;
use App\Models\Course\CourseCategoryChild;
use App\Models\Course\CourseSection;
use App\Models\Course\SectionLesson;

class DemoCoursesSeeder extends Seeder
{
    public function run(): void
    {
        // Create instructor user
        $user = User::firstOrCreate(
            ['email' => 'instructor@demo.com'],
            [
                'name' => 'Demo Instructor',
                'password' => Hash::make('password'),
                'role' => 'instructor',
                'status' => 1,
                'email_verified_at' => now(),
            ]
        );

        $instructor = Instructor::firstOrCreate(
            ['user_id' => $user->id],
            [
                'designation' => 'Senior Developer',
                'biography' => 'Experienced instructor with 10+ years in software development.',
                'skills' => ['PHP', 'Laravel', 'JavaScript', 'React'],
                'resume' => '',
                'status' => 1,
            ]
        );

        if (!$user->instructor_id) {
            $user->update(['instructor_id' => $instructor->id]);
        }

        // Ensure categories exist
        $webDev = CourseCategory::firstOrCreate(
            ['slug' => 'web-development'],
            ['title' => 'Web Development', 'sort' => 2, 'status' => 1]
        );

        $dataSci = CourseCategory::firstOrCreate(
            ['slug' => 'data-science'],
            ['title' => 'Data Science', 'sort' => 3, 'status' => 1]
        );

        $design = CourseCategory::firstOrCreate(
            ['slug' => 'design'],
            ['title' => 'Design', 'sort' => 4, 'status' => 1]
        );

        $courses = [
            [
                'title'             => 'Complete Laravel 11 Bootcamp',
                'slug'              => 'complete-laravel-11-bootcamp',
                'pricing_type'      => 'free',
                'price'             => 0,
                'level'             => 'beginner',
                'course_type'       => 'online',
                'status'            => 'approved',
                'language'          => 'English',
                'short_description' => 'Master Laravel 11 from scratch with hands-on projects.',
                'description'       => '<p>This comprehensive course covers everything you need to build modern web applications with Laravel 11. From routing and controllers to Eloquent ORM and API development.</p>',
                'category'          => $webDev,
                'lessons'           => ['Introduction to Laravel', 'Routing & Controllers', 'Blade Templates', 'Eloquent ORM', 'Authentication'],
            ],
            [
                'title'             => 'React & TypeScript Masterclass',
                'slug'              => 'react-typescript-masterclass',
                'pricing_type'      => 'free',
                'price'             => 0,
                'level'             => 'intermediate',
                'course_type'       => 'online',
                'status'            => 'approved',
                'language'          => 'English',
                'short_description' => 'Build production-ready React apps with TypeScript.',
                'description'       => '<p>Learn React with TypeScript from the ground up. Covers hooks, context, state management, and building real-world applications.</p>',
                'category'          => $webDev,
                'lessons'           => ['React Fundamentals', 'TypeScript Basics', 'Hooks Deep Dive', 'State Management', 'Building a Full App'],
            ],
            [
                'title'             => 'Python for Data Science',
                'slug'              => 'python-for-data-science',
                'pricing_type'      => 'free',
                'price'             => 0,
                'level'             => 'beginner',
                'course_type'       => 'online',
                'status'            => 'approved',
                'language'          => 'English',
                'short_description' => 'Learn Python, Pandas, NumPy and data visualization.',
                'description'       => '<p>A beginner-friendly course covering Python programming, data manipulation with Pandas, numerical computing with NumPy, and data visualization with Matplotlib.</p>',
                'category'          => $dataSci,
                'lessons'           => ['Python Basics', 'NumPy Arrays', 'Pandas DataFrames', 'Data Visualization', 'Mini Project'],
            ],
            [
                'title'             => 'Advanced JavaScript & ES2024',
                'slug'              => 'advanced-javascript-es2024',
                'pricing_type'      => 'paid',
                'price'             => 49.99,
                'discount'          => 1,
                'discount_price'    => 29.99,
                'level'             => 'advanced',
                'course_type'       => 'online',
                'status'            => 'approved',
                'language'          => 'English',
                'short_description' => 'Deep dive into modern JavaScript patterns and ES2024 features.',
                'description'       => '<p>Take your JavaScript skills to the next level. Covers closures, prototypes, async/await, generators, and the latest ES2024 features with real-world examples.</p>',
                'category'          => $webDev,
                'lessons'           => ['Closures & Scope', 'Prototypes & Classes', 'Async Patterns', 'ES2024 Features', 'Design Patterns'],
            ],
            [
                'title'             => 'UI/UX Design with Figma',
                'slug'              => 'ui-ux-design-with-figma',
                'pricing_type'      => 'paid',
                'price'             => 59.99,
                'discount'          => 1,
                'discount_price'    => 39.99,
                'level'             => 'beginner',
                'course_type'       => 'online',
                'status'            => 'approved',
                'language'          => 'English',
                'short_description' => 'Design beautiful interfaces and prototypes using Figma.',
                'description'       => '<p>Learn UI/UX design principles and master Figma to create stunning interfaces, wireframes, and interactive prototypes for web and mobile apps.</p>',
                'category'          => $design,
                'lessons'           => ['Design Principles', 'Figma Basics', 'Wireframing', 'Prototyping', 'Design System'],
            ],
            [
                'title'             => 'Machine Learning A-Z',
                'slug'              => 'machine-learning-a-z',
                'pricing_type'      => 'paid',
                'price'             => 79.99,
                'discount'          => 1,
                'discount_price'    => 49.99,
                'level'             => 'intermediate',
                'course_type'       => 'online',
                'status'            => 'approved',
                'language'          => 'English',
                'short_description' => 'Hands-on machine learning with Python and scikit-learn.',
                'description'       => '<p>A practical machine learning course covering supervised and unsupervised learning, model evaluation, feature engineering, and deploying ML models to production.</p>',
                'category'          => $dataSci,
                'lessons'           => ['ML Fundamentals', 'Regression Models', 'Classification', 'Clustering', 'Model Deployment'],
            ],
        ];

        foreach ($courses as $data) {
            $lessons  = $data['lessons'];
            $category = $data['category'];
            unset($data['lessons'], $data['category']);

            $course = Course::create(array_merge($data, [
                'instructor_id'      => $instructor->id,
                'course_category_id' => $category->id,
                'expiry_type'        => 'unlimited',
                'created_from'       => 'admin',
            ]));

            $section = CourseSection::create([
                'title'     => 'Getting Started',
                'sort'      => 1,
                'course_id' => $course->id,
            ]);

            foreach ($lessons as $i => $lessonTitle) {
                SectionLesson::create([
                    'title'            => $lessonTitle,
                    'sort'             => $i + 1,
                    'status'           => 1,
                    'lesson_type'      => 'video',
                    'lesson_provider'  => 'youtube',
                    'lesson_src'       => 'dQw4w9WgXcQ',
                    'is_free'          => ($data['pricing_type'] === 'free' || $i === 0) ? 1 : 0,
                    'duration'         => rand(10, 45) . ' min',
                    'course_id'        => $course->id,
                    'course_section_id'=> $section->id,
                ]);
            }
        }
    }
}
