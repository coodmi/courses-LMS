<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Instructor;
use App\Models\User;
use Modules\Exam\Models\Exam;
use Modules\Exam\Models\ExamCategory;
use Modules\Exam\Models\ExamQuestion;
use Modules\Exam\Models\ExamQuestionOption;

class DemoExamsSeeder extends Seeder
{
    public function run(): void
    {
        // Reuse existing demo instructor
        $user = User::where('email', 'instructor@demo.com')->first();
        $instructor = $user ? Instructor::where('user_id', $user->id)->first() : null;

        if (!$instructor) {
            $instructor = Instructor::first();
        }

        // Ensure exam categories exist
        $webCat = ExamCategory::firstOrCreate(
            ['slug' => 'web-development'],
            ['title' => 'Web Development', 'icon' => 'code', 'status' => true]
        );

        $dsCat = ExamCategory::firstOrCreate(
            ['slug' => 'data-science'],
            ['title' => 'Data Science', 'icon' => 'chart-bar', 'status' => true]
        );

        $generalCat = ExamCategory::firstOrCreate(
            ['slug' => 'general-knowledge'],
            ['title' => 'General Knowledge', 'icon' => 'academic-cap', 'status' => true]
        );

        $exams = [
            [
                'title'             => 'PHP Fundamentals Test',
                'short_description' => 'Test your PHP basics: syntax, functions, OOP and more.',
                'pricing_type'      => 'free',
                'price'             => 0,
                'level'             => 'beginner',
                'status'            => 'published',
                'duration_hours'    => 0,
                'duration_minutes'  => 30,
                'pass_mark'         => 60,
                'total_marks'       => 100,
                'max_attempts'      => 3,
                'total_questions'   => 5,
                'expiry_type'       => 'unlimited',
                'category'          => $webCat,
                'questions' => [
                    ['q' => 'What does PHP stand for?', 'options' => ['PHP: Hypertext Preprocessor', 'Personal Home Page', 'Private Hypertext Protocol', 'Public HTML Page'], 'correct' => 0],
                    ['q' => 'Which symbol is used to declare a variable in PHP?', 'options' => ['#', '@', '$', '&'], 'correct' => 2],
                    ['q' => 'Which function is used to get the length of a string in PHP?', 'options' => ['len()', 'strlen()', 'count()', 'size()'], 'correct' => 1],
                    ['q' => 'What is the correct way to end a PHP statement?', 'options' => ['.', ':', ';', ','], 'correct' => 2],
                    ['q' => 'Which of the following is a PHP framework?', 'options' => ['Django', 'Rails', 'Laravel', 'Express'], 'correct' => 2],
                ],
            ],
            [
                'title'             => 'JavaScript Essentials Quiz',
                'short_description' => 'Assess your JavaScript knowledge from basics to ES6+.',
                'pricing_type'      => 'free',
                'price'             => 0,
                'level'             => 'intermediate',
                'status'            => 'published',
                'duration_hours'    => 0,
                'duration_minutes'  => 30,
                'pass_mark'         => 60,
                'total_marks'       => 100,
                'max_attempts'      => 3,
                'total_questions'   => 5,
                'expiry_type'       => 'unlimited',
                'category'          => $webCat,
                'questions' => [
                    ['q' => 'Which keyword declares a block-scoped variable in JavaScript?', 'options' => ['var', 'let', 'def', 'dim'], 'correct' => 1],
                    ['q' => 'What does "===" check in JavaScript?', 'options' => ['Value only', 'Type only', 'Value and type', 'Reference'], 'correct' => 2],
                    ['q' => 'Which method adds an element to the end of an array?', 'options' => ['push()', 'pop()', 'shift()', 'unshift()'], 'correct' => 0],
                    ['q' => 'What is the output of typeof null?', 'options' => ['"null"', '"undefined"', '"object"', '"boolean"'], 'correct' => 2],
                    ['q' => 'Which ES6 feature allows default parameter values?', 'options' => ['Arrow functions', 'Destructuring', 'Default parameters', 'Spread operator'], 'correct' => 2],
                ],
            ],
            [
                'title'             => 'General Knowledge Challenge',
                'short_description' => 'A fun general knowledge quiz covering science, history and tech.',
                'pricing_type'      => 'free',
                'price'             => 0,
                'level'             => 'beginner',
                'status'            => 'published',
                'duration_hours'    => 0,
                'duration_minutes'  => 20,
                'pass_mark'         => 50,
                'total_marks'       => 100,
                'max_attempts'      => 5,
                'total_questions'   => 5,
                'expiry_type'       => 'unlimited',
                'category'          => $generalCat,
                'questions' => [
                    ['q' => 'What is the chemical symbol for water?', 'options' => ['O2', 'H2O', 'CO2', 'HO'], 'correct' => 1],
                    ['q' => 'How many planets are in our solar system?', 'options' => ['7', '8', '9', '10'], 'correct' => 1],
                    ['q' => 'Who invented the telephone?', 'options' => ['Thomas Edison', 'Nikola Tesla', 'Alexander Graham Bell', 'Albert Einstein'], 'correct' => 2],
                    ['q' => 'What year did World War II end?', 'options' => ['1943', '1944', '1945', '1946'], 'correct' => 2],
                    ['q' => 'Which company created the Python programming language?', 'options' => ['Google', 'Microsoft', 'None — it was created by Guido van Rossum', 'Apple'], 'correct' => 2],
                ],
            ],
            [
                'title'             => 'Advanced Laravel Certification',
                'short_description' => 'Prove your Laravel expertise with this advanced certification exam.',
                'pricing_type'      => 'paid',
                'price'             => 29.99,
                'discount'          => true,
                'discount_price'    => 19.99,
                'level'             => 'advanced',
                'status'            => 'published',
                'duration_hours'    => 1,
                'duration_minutes'  => 0,
                'pass_mark'         => 70,
                'total_marks'       => 100,
                'max_attempts'      => 2,
                'total_questions'   => 5,
                'expiry_type'       => 'unlimited',
                'category'          => $webCat,
                'questions' => [
                    ['q' => 'Which Artisan command creates a new middleware?', 'options' => ['make:filter', 'make:middleware', 'make:guard', 'make:pipe'], 'correct' => 1],
                    ['q' => 'What is the purpose of Laravel Horizon?', 'options' => ['Database management', 'Queue monitoring', 'Cache management', 'Log management'], 'correct' => 1],
                    ['q' => 'Which method is used to define an eager load constraint?', 'options' => ['with()', 'load()', 'join()', 'include()'], 'correct' => 0],
                    ['q' => 'What does the "dd()" function do in Laravel?', 'options' => ['Delete data', 'Dump and die', 'Debug database', 'Deploy and deploy'], 'correct' => 1],
                    ['q' => 'Which facade is used to interact with the cache in Laravel?', 'options' => ['Store', 'Cache', 'Redis', 'Session'], 'correct' => 1],
                ],
            ],
            [
                'title'             => 'Data Science Fundamentals',
                'short_description' => 'Test your knowledge of data science concepts and Python libraries.',
                'pricing_type'      => 'paid',
                'price'             => 39.99,
                'discount'          => true,
                'discount_price'    => 24.99,
                'level'             => 'intermediate',
                'status'            => 'published',
                'duration_hours'    => 0,
                'duration_minutes'  => 45,
                'pass_mark'         => 65,
                'total_marks'       => 100,
                'max_attempts'      => 2,
                'total_questions'   => 5,
                'expiry_type'       => 'unlimited',
                'category'          => $dsCat,
                'questions' => [
                    ['q' => 'Which Python library is primarily used for data manipulation?', 'options' => ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'], 'correct' => 1],
                    ['q' => 'What does "overfitting" mean in machine learning?', 'options' => ['Model performs well on training but poorly on new data', 'Model is too simple', 'Model has too few parameters', 'Model trains too slowly'], 'correct' => 0],
                    ['q' => 'Which algorithm is used for classification problems?', 'options' => ['Linear Regression', 'K-Means', 'Random Forest', 'PCA'], 'correct' => 2],
                    ['q' => 'What is a confusion matrix used for?', 'options' => ['Data visualization', 'Evaluating classification models', 'Feature selection', 'Data cleaning'], 'correct' => 1],
                    ['q' => 'What does "NaN" stand for in data science?', 'options' => ['Not a Number', 'Null and None', 'No Available Node', 'Numeric and Nominal'], 'correct' => 0],
                ],
            ],
            [
                'title'             => 'Full Stack Developer Assessment',
                'short_description' => 'Comprehensive exam covering frontend, backend and database skills.',
                'pricing_type'      => 'paid',
                'price'             => 49.99,
                'discount'          => true,
                'discount_price'    => 34.99,
                'level'             => 'advanced',
                'status'            => 'published',
                'duration_hours'    => 1,
                'duration_minutes'  => 30,
                'pass_mark'         => 70,
                'total_marks'       => 100,
                'max_attempts'      => 2,
                'total_questions'   => 5,
                'expiry_type'       => 'unlimited',
                'category'          => $webCat,
                'questions' => [
                    ['q' => 'What does REST stand for?', 'options' => ['Remote Execution State Transfer', 'Representational State Transfer', 'Resource State Transfer', 'Relational State Transfer'], 'correct' => 1],
                    ['q' => 'Which HTTP method is used to update a resource?', 'options' => ['GET', 'POST', 'PUT', 'DELETE'], 'correct' => 2],
                    ['q' => 'What is the purpose of an index in a database?', 'options' => ['To store data', 'To speed up queries', 'To encrypt data', 'To backup data'], 'correct' => 1],
                    ['q' => 'Which CSS property is used to create a flexible layout?', 'options' => ['display: block', 'display: flex', 'display: inline', 'display: grid'], 'correct' => 1],
                    ['q' => 'What is the purpose of JWT in web development?', 'options' => ['Database querying', 'Authentication and authorization', 'File uploading', 'Caching'], 'correct' => 1],
                ],
            ],
        ];

        foreach ($exams as $data) {
            $questions = $data['questions'];
            $category  = $data['category'];
            unset($data['questions'], $data['category']);

            $exam = Exam::create(array_merge($data, [
                'instructor_id'    => $instructor->id,
                'exam_category_id' => $category->id,
            ]));

            foreach ($questions as $i => $q) {
                $question = ExamQuestion::create([
                    'exam_id'       => $exam->id,
                    'question_type' => 'multiple_choice',
                    'title'         => $q['q'],
                    'marks'         => 20,
                    'sort'          => $i + 1,
                ]);

                foreach ($q['options'] as $j => $optionText) {
                    ExamQuestionOption::create([
                        'exam_question_id' => $question->id,
                        'option_text'      => $optionText,
                        'is_correct'       => $j === $q['correct'],
                        'sort'             => $j + 1,
                    ]);
                }
            }
        }
    }
}
