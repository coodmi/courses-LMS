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
use App\Models\Course\CourseOutcome;
use App\Models\Course\CourseRequirement;
use App\Models\Course\CourseFaq;

class DemoCoursesSeeder extends Seeder
{
    public function run(): void
    {
        // Create instructor user
        $user = User::firstOrCreate(
            ['email' => 'instructor@demo.com'],
            [
                'name'              => 'Demo Instructor',
                'password'          => Hash::make('password'),
                'role'              => 'instructor',
                'status'            => 1,
                'email_verified_at' => now(),
            ]
        );

        $instructor = Instructor::firstOrCreate(
            ['user_id' => $user->id],
            [
                'designation' => 'Senior Developer',
                'biography'   => 'Experienced instructor with 10+ years in software development.',
                'skills'      => ['PHP', 'Laravel', 'JavaScript', 'React'],
                'resume'      => '',
                'status'      => 1,
            ]
        );

        if (!$user->instructor_id) {
            $user->update(['instructor_id' => $instructor->id]);
        }

        // Categories
        $webDev  = CourseCategory::firstOrCreate(['slug' => 'web-development'], ['title' => 'Web Development', 'sort' => 2, 'status' => 1, 'thumbnail' => 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400']);
        $dataSci = CourseCategory::firstOrCreate(['slug' => 'data-science'],    ['title' => 'Data Science',    'sort' => 3, 'status' => 1, 'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400']);
        $design  = CourseCategory::firstOrCreate(['slug' => 'design'],          ['title' => 'Design',          'sort' => 4, 'status' => 1, 'thumbnail' => 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400']);
        $mobile  = CourseCategory::firstOrCreate(['slug' => 'mobile-dev'],      ['title' => 'Mobile Development', 'sort' => 5, 'status' => 1, 'thumbnail' => 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400']);
        $devops  = CourseCategory::firstOrCreate(['slug' => 'devops'],          ['title' => 'DevOps',          'sort' => 6, 'status' => 1, 'thumbnail' => 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400']);
        $cyber   = CourseCategory::firstOrCreate(['slug' => 'cybersecurity'],   ['title' => 'Cybersecurity',   'sort' => 7, 'status' => 1, 'thumbnail' => 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400']);

        $courses = [
            [
                'title'             => 'Complete Laravel 11 Bootcamp',
                'slug'              => 'complete-laravel-11-bootcamp',
                'pricing_type'      => 'free',
                'price'             => 0,
                'level'             => 'beginner',
                'status'            => 'approved',
                'language'          => 'English',
                'thumbnail'         => 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600',
                'banner'            => 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200',
                'short_description' => 'Master Laravel 11 from scratch with hands-on projects.',
                'description'       => '<p>This comprehensive course covers everything you need to build modern web applications with Laravel 11. From routing and controllers to Eloquent ORM and API development.</p>',
                'category'          => $webDev,
                'outcomes'          => ['Build real-world Laravel apps', 'Understand MVC architecture', 'Work with Eloquent ORM', 'Create REST APIs', 'Deploy Laravel apps'],
                'requirements'      => ['Basic PHP knowledge', 'Understanding of HTML/CSS', 'A computer with internet access'],
                'lessons'           => [
                    ['title' => 'Introduction to Laravel', 'src' => 'dQw4w9WgXcQ', 'duration' => '12 min', 'free' => 1],
                    ['title' => 'Routing & Controllers',   'src' => 'dQw4w9WgXcQ', 'duration' => '18 min', 'free' => 0],
                    ['title' => 'Blade Templates',         'src' => 'dQw4w9WgXcQ', 'duration' => '15 min', 'free' => 0],
                    ['title' => 'Eloquent ORM',            'src' => 'dQw4w9WgXcQ', 'duration' => '22 min', 'free' => 0],
                    ['title' => 'Authentication',          'src' => 'dQw4w9WgXcQ', 'duration' => '20 min', 'free' => 0],
                ],
            ],
            [
                'title'             => 'React & TypeScript Masterclass',
                'slug'              => 'react-typescript-masterclass',
                'pricing_type'      => 'free',
                'price'             => 0,
                'level'             => 'intermediate',
                'status'            => 'approved',
                'language'          => 'English',
                'thumbnail'         => 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
                'banner'            => 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200',
                'short_description' => 'Build production-ready React apps with TypeScript.',
                'description'       => '<p>Learn React with TypeScript from the ground up. Covers hooks, context, state management, and building real-world applications.</p>',
                'category'          => $webDev,
                'outcomes'          => ['Build React apps with TypeScript', 'Master React Hooks', 'Manage state with Context API', 'Write type-safe code', 'Deploy React applications'],
                'requirements'      => ['JavaScript fundamentals', 'Basic HTML & CSS', 'Node.js installed'],
                'lessons'           => [
                    ['title' => 'React Fundamentals',  'src' => 'dQw4w9WgXcQ', 'duration' => '14 min', 'free' => 1],
                    ['title' => 'TypeScript Basics',   'src' => 'dQw4w9WgXcQ', 'duration' => '16 min', 'free' => 0],
                    ['title' => 'Hooks Deep Dive',     'src' => 'dQw4w9WgXcQ', 'duration' => '25 min', 'free' => 0],
                    ['title' => 'State Management',    'src' => 'dQw4w9WgXcQ', 'duration' => '20 min', 'free' => 0],
                    ['title' => 'Building a Full App', 'src' => 'dQw4w9WgXcQ', 'duration' => '35 min', 'free' => 0],
                ],
            ],
            [
                'title'             => 'Python for Data Science',
                'slug'              => 'python-for-data-science',
                'pricing_type'      => 'free',
                'price'             => 0,
                'level'             => 'beginner',
                'status'            => 'approved',
                'language'          => 'English',
                'thumbnail'         => 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600',
                'banner'            => 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200',
                'short_description' => 'Learn Python, Pandas, NumPy and data visualization.',
                'description'       => '<p>A beginner-friendly course covering Python programming, data manipulation with Pandas, numerical computing with NumPy, and data visualization with Matplotlib.</p>',
                'category'          => $dataSci,
                'outcomes'          => ['Write Python scripts', 'Manipulate data with Pandas', 'Visualize data with Matplotlib', 'Use NumPy for computation', 'Analyze real datasets'],
                'requirements'      => ['No prior programming experience needed', 'A computer with Python installed'],
                'lessons'           => [
                    ['title' => 'Python Basics',       'src' => 'dQw4w9WgXcQ', 'duration' => '18 min', 'free' => 1],
                    ['title' => 'NumPy Arrays',        'src' => 'dQw4w9WgXcQ', 'duration' => '20 min', 'free' => 0],
                    ['title' => 'Pandas DataFrames',   'src' => 'dQw4w9WgXcQ', 'duration' => '22 min', 'free' => 0],
                    ['title' => 'Data Visualization',  'src' => 'dQw4w9WgXcQ', 'duration' => '25 min', 'free' => 0],
                    ['title' => 'Mini Project',        'src' => 'dQw4w9WgXcQ', 'duration' => '30 min', 'free' => 0],
                ],
            ],
            [
                'title'             => 'Advanced JavaScript & ES2024',
                'slug'              => 'advanced-javascript-es2024',
                'pricing_type'      => 'paid',
                'price'             => 49.99,
                'discount'          => 1,
                'discount_price'    => 29.99,
                'level'             => 'advanced',
                'status'            => 'approved',
                'language'          => 'English',
                'thumbnail'         => 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600',
                'banner'            => 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=1200',
                'short_description' => 'Deep dive into modern JavaScript patterns and ES2024 features.',
                'description'       => '<p>Take your JavaScript skills to the next level. Covers closures, prototypes, async/await, generators, and the latest ES2024 features with real-world examples.</p>',
                'category'          => $webDev,
                'outcomes'          => ['Master closures and scope', 'Understand prototypal inheritance', 'Write async JavaScript', 'Use ES2024 features', 'Apply design patterns'],
                'requirements'      => ['Solid JavaScript basics', 'Experience with DOM manipulation', 'Familiarity with ES6'],
                'lessons'           => [
                    ['title' => 'Closures & Scope',   'src' => 'dQw4w9WgXcQ', 'duration' => '20 min', 'free' => 1],
                    ['title' => 'Prototypes & Classes','src' => 'dQw4w9WgXcQ', 'duration' => '22 min', 'free' => 0],
                    ['title' => 'Async Patterns',     'src' => 'dQw4w9WgXcQ', 'duration' => '28 min', 'free' => 0],
                    ['title' => 'ES2024 Features',    'src' => 'dQw4w9WgXcQ', 'duration' => '18 min', 'free' => 0],
                    ['title' => 'Design Patterns',    'src' => 'dQw4w9WgXcQ', 'duration' => '35 min', 'free' => 0],
                ],
            ],
            [
                'title'             => 'UI/UX Design with Figma',
                'slug'              => 'ui-ux-design-with-figma',
                'pricing_type'      => 'paid',
                'price'             => 59.99,
                'discount'          => 1,
                'discount_price'    => 39.99,
                'level'             => 'beginner',
                'status'            => 'approved',
                'language'          => 'English',
                'thumbnail'         => 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
                'banner'            => 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200',
                'short_description' => 'Design beautiful interfaces and prototypes using Figma.',
                'description'       => '<p>Learn UI/UX design principles and master Figma to create stunning interfaces, wireframes, and interactive prototypes for web and mobile apps.</p>',
                'category'          => $design,
                'outcomes'          => ['Design professional UI layouts', 'Create wireframes and prototypes', 'Build a design system', 'Conduct user research', 'Export assets for developers'],
                'requirements'      => ['No design experience needed', 'A free Figma account'],
                'lessons'           => [
                    ['title' => 'Design Principles', 'src' => 'dQw4w9WgXcQ', 'duration' => '15 min', 'free' => 1],
                    ['title' => 'Figma Basics',      'src' => 'dQw4w9WgXcQ', 'duration' => '20 min', 'free' => 0],
                    ['title' => 'Wireframing',       'src' => 'dQw4w9WgXcQ', 'duration' => '22 min', 'free' => 0],
                    ['title' => 'Prototyping',       'src' => 'dQw4w9WgXcQ', 'duration' => '25 min', 'free' => 0],
                    ['title' => 'Design System',     'src' => 'dQw4w9WgXcQ', 'duration' => '30 min', 'free' => 0],
                ],
            ],
            [
                'title'             => 'Machine Learning A-Z',
                'slug'              => 'machine-learning-a-z',
                'pricing_type'      => 'paid',
                'price'             => 79.99,
                'discount'          => 1,
                'discount_price'    => 49.99,
                'level'             => 'intermediate',
                'status'            => 'approved',
                'language'          => 'English',
                'thumbnail'         => 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600',
                'banner'            => 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200',
                'short_description' => 'Hands-on machine learning with Python and scikit-learn.',
                'description'       => '<p>A practical machine learning course covering supervised and unsupervised learning, model evaluation, feature engineering, and deploying ML models to production.</p>',
                'category'          => $dataSci,
                'outcomes'          => ['Understand ML algorithms', 'Build regression and classification models', 'Evaluate model performance', 'Engineer features', 'Deploy ML models'],
                'requirements'      => ['Python basics', 'Basic statistics knowledge', 'NumPy and Pandas familiarity'],
                'lessons'           => [
                    ['title' => 'ML Fundamentals',   'src' => 'dQw4w9WgXcQ', 'duration' => '20 min', 'free' => 1],
                    ['title' => 'Regression Models', 'src' => 'dQw4w9WgXcQ', 'duration' => '25 min', 'free' => 0],
                    ['title' => 'Classification',    'src' => 'dQw4w9WgXcQ', 'duration' => '28 min', 'free' => 0],
                    ['title' => 'Clustering',        'src' => 'dQw4w9WgXcQ', 'duration' => '22 min', 'free' => 0],
                    ['title' => 'Model Deployment',  'src' => 'dQw4w9WgXcQ', 'duration' => '35 min', 'free' => 0],
                ],
            ],
        ];

        foreach ($courses as $data) {
            $lessons      = $data['lessons'];
            $outcomes     = $data['outcomes'];
            $requirements = $data['requirements'];
            $category     = $data['category'];
            unset($data['lessons'], $data['outcomes'], $data['requirements'], $data['category']);

            $course = Course::updateOrCreate(
                ['slug' => $data['slug']],
                array_merge($data, [
                    'instructor_id'      => $instructor->id,
                    'course_category_id' => $category->id,
                    'expiry_type'        => 'unlimited',
                    'created_from'       => 'admin',
                ])
            );

            // Outcomes
            CourseOutcome::where('course_id', $course->id)->delete();
            foreach ($outcomes as $i => $outcome) {
                CourseOutcome::create(['course_id' => $course->id, 'outcome' => $outcome, 'sort' => $i + 1]);
            }

            // Requirements
            CourseRequirement::where('course_id', $course->id)->delete();
            foreach ($requirements as $i => $req) {
                CourseRequirement::create(['course_id' => $course->id, 'requirement' => $req, 'sort' => $i + 1]);
            }

            // Section & Lessons
            $section = CourseSection::firstOrCreate(
                ['course_id' => $course->id, 'title' => 'Getting Started'],
                ['sort' => 1]
            );

            SectionLesson::where('course_section_id', $section->id)->delete();
            foreach ($lessons as $i => $lesson) {
                SectionLesson::create([
                    'title'             => $lesson['title'],
                    'sort'              => $i + 1,
                    'status'            => 1,
                    'lesson_type'       => 'video',
                    'lesson_provider'   => 'youtube',
                    'lesson_src'        => $lesson['src'],
                    'is_free'           => $lesson['free'],
                    'duration'          => $lesson['duration'],
                    'course_id'         => $course->id,
                    'course_section_id' => $section->id,
                ]);
            }
        }
    }
}
