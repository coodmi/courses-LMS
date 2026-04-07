<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Modules\Blog\Models\Blog;
use Modules\Blog\Models\BlogCategory;

class DemoBlogsSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::where('role', 'admin')->first() ?? User::first();

        // Categories
        $tech    = BlogCategory::firstOrCreate(['slug' => 'technology'],  ['name' => 'Technology',  'icon' => 'cpu',        'status' => 'active']);
        $edu     = BlogCategory::firstOrCreate(['slug' => 'education'],   ['name' => 'Education',   'icon' => 'book-open',  'status' => 'active']);
        $career  = BlogCategory::firstOrCreate(['slug' => 'career'],      ['name' => 'Career',      'icon' => 'briefcase',  'status' => 'active']);
        $design  = BlogCategory::firstOrCreate(['slug' => 'design-tips'], ['name' => 'Design Tips', 'icon' => 'pen-tool',   'status' => 'active']);
        $dev     = BlogCategory::firstOrCreate(['slug' => 'development'], ['name' => 'Development', 'icon' => 'code',       'status' => 'active']);

        $blogs = [
            [
                'title'            => '10 Laravel Tips Every Developer Should Know in 2025',
                'thumbnail'        => 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
                'banner'           => 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1400',
                'keywords'         => 'Laravel, PHP, Web Development, Tips',
                'status'           => 'published',
                'blog_category_id' => $dev->id,
                'description'      => '<p>Laravel continues to be one of the most popular PHP frameworks in 2025. Whether you\'re a beginner or a seasoned developer, there are always new tricks to learn. Here are 10 tips that will make your Laravel development faster and more efficient.</p><h2>1. Use Query Scopes</h2><p>Query scopes allow you to define reusable query constraints. Instead of repeating the same where clauses, define a scope on your model and call it anywhere.</p><pre><code>public function scopeActive($query) { return $query->where(\'status\', \'active\'); }</code></pre><h2>2. Leverage Route Model Binding</h2><p>Laravel\'s route model binding automatically injects model instances into your routes, saving you from writing repetitive find() calls.</p><h2>3. Use Collections Effectively</h2><p>Laravel collections provide a fluent, convenient wrapper for working with arrays of data. Methods like filter(), map(), and groupBy() can simplify complex data transformations.</p><h2>4. Cache Your Queries</h2><p>Use Laravel\'s built-in caching to store expensive database queries and improve application performance significantly.</p><h2>5. Use Form Requests for Validation</h2><p>Move your validation logic out of controllers and into dedicated Form Request classes for cleaner, more maintainable code.</p><p>These are just a few of the many powerful features Laravel offers. Keep exploring the documentation and community resources to level up your skills.</p>',
            ],
            [
                'title'            => 'How to Learn Programming Fast: A Complete Guide for Beginners',
                'thumbnail'        => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
                'banner'           => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400',
                'keywords'         => 'Programming, Learning, Beginners, Coding',
                'status'           => 'published',
                'blog_category_id' => $edu->id,
                'description'      => '<p>Learning to program can feel overwhelming at first, but with the right approach, you can make rapid progress. This guide will walk you through the most effective strategies for learning programming quickly.</p><h2>Start with the Right Language</h2><p>For beginners, Python is often recommended because of its clean syntax and versatility. JavaScript is another great choice if you want to build web applications quickly.</p><h2>Build Projects from Day One</h2><p>The best way to learn programming is by building real projects. Don\'t just follow tutorials — apply what you learn to something you care about. Start small: a to-do app, a calculator, or a simple website.</p><h2>Practice Every Day</h2><p>Consistency beats intensity. Even 30 minutes of coding every day will compound into significant progress over weeks and months. Use platforms like LeetCode, HackerRank, or freeCodeCamp to practice.</p><h2>Join a Community</h2><p>Surround yourself with other learners and experienced developers. Communities like Stack Overflow, Reddit\'s r/learnprogramming, and Discord servers are invaluable resources.</p><h2>Embrace Failure</h2><p>Bugs and errors are part of the process. Every error message is a learning opportunity. Learn to read error messages carefully and use debugging tools effectively.</p>',
            ],
            [
                'title'            => 'The Future of Online Education: Trends to Watch in 2025',
                'thumbnail'        => 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
                'banner'           => 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1400',
                'keywords'         => 'Online Education, E-Learning, EdTech, Future',
                'status'           => 'published',
                'blog_category_id' => $edu->id,
                'description'      => '<p>The e-learning industry has exploded in recent years, and 2025 is shaping up to be another transformative year. Here are the key trends that will define the future of online education.</p><h2>AI-Powered Personalized Learning</h2><p>Artificial intelligence is enabling truly personalized learning experiences. AI can analyze a student\'s performance, identify knowledge gaps, and automatically adjust the curriculum to focus on areas that need improvement.</p><h2>Microlearning</h2><p>Short, focused learning modules are becoming increasingly popular. Instead of hour-long lectures, learners prefer bite-sized content they can consume during commutes or breaks.</p><h2>Gamification</h2><p>Adding game elements like points, badges, leaderboards, and challenges to learning platforms significantly increases engagement and completion rates.</p><h2>Virtual Reality Classrooms</h2><p>VR technology is making it possible to create immersive learning environments. Medical students can practice surgeries, engineers can explore virtual prototypes, and history students can visit ancient civilizations.</p><h2>Cohort-Based Learning</h2><p>Learning alongside peers in structured cohorts creates accountability and community. This model combines the flexibility of online learning with the social benefits of traditional education.</p>',
            ],
            [
                'title'            => 'UI/UX Design Principles That Will Transform Your Projects',
                'thumbnail'        => 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
                'banner'           => 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400',
                'keywords'         => 'UI Design, UX Design, Figma, Design Principles',
                'status'           => 'published',
                'blog_category_id' => $design->id,
                'description'      => '<p>Great design is not just about making things look beautiful — it\'s about creating experiences that are intuitive, accessible, and delightful. Here are the core UI/UX principles that every designer should master.</p><h2>Hierarchy and Visual Weight</h2><p>Visual hierarchy guides users\' eyes through your interface in the intended order. Use size, color, contrast, and spacing to establish clear hierarchy and draw attention to the most important elements.</p><h2>Consistency</h2><p>Consistent design reduces cognitive load. When users learn how one part of your interface works, they should be able to apply that knowledge to other parts. Use a design system to maintain consistency across your product.</p><h2>Feedback and Affordance</h2><p>Every interactive element should communicate its purpose and provide feedback when used. Buttons should look clickable, forms should validate in real-time, and loading states should keep users informed.</p><h2>Accessibility First</h2><p>Design for all users, including those with disabilities. Ensure sufficient color contrast, provide alt text for images, support keyboard navigation, and test with screen readers.</p><h2>White Space is Your Friend</h2><p>Don\'t be afraid of empty space. White space improves readability, creates focus, and gives your design room to breathe. Cluttered interfaces overwhelm users and reduce conversion rates.</p>',
            ],
            [
                'title'            => 'How to Land Your First Developer Job in 2025',
                'thumbnail'        => 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
                'banner'           => 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400',
                'keywords'         => 'Career, Developer Job, Portfolio, Interview',
                'status'           => 'published',
                'blog_category_id' => $career->id,
                'description'      => '<p>Breaking into the tech industry can be challenging, but with the right strategy, you can land your first developer job faster than you think. Here\'s a practical roadmap to get you hired.</p><h2>Build a Strong Portfolio</h2><p>Your portfolio is your most powerful tool. Include 3-5 projects that demonstrate your skills and problem-solving ability. Each project should have a live demo, clean code on GitHub, and a README that explains what it does and how you built it.</p><h2>Master the Fundamentals</h2><p>Employers care deeply about fundamentals: data structures, algorithms, system design, and clean code principles. Spend time on LeetCode and study common interview patterns.</p><h2>Network Actively</h2><p>Most jobs are filled through referrals. Attend meetups, contribute to open source, engage on LinkedIn and Twitter, and reach out to developers you admire. A warm introduction is worth more than a cold application.</p><h2>Tailor Your Resume</h2><p>Customize your resume for each application. Use keywords from the job description, quantify your achievements, and keep it to one page. Use tools like Jobscan to optimize for ATS systems.</p><h2>Prepare for Behavioral Interviews</h2><p>Technical skills get you in the door, but soft skills get you the offer. Prepare stories using the STAR method (Situation, Task, Action, Result) for common behavioral questions.</p>',
            ],
            [
                'title'            => 'Python vs JavaScript: Which Should You Learn First?',
                'thumbnail'        => 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
                'banner'           => 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400',
                'keywords'         => 'Python, JavaScript, Programming Languages, Beginners',
                'status'           => 'published',
                'blog_category_id' => $tech->id,
                'description'      => '<p>One of the most common questions from aspiring developers is: should I learn Python or JavaScript first? Both are excellent choices, but they serve different purposes. Let\'s break down the key differences to help you decide.</p><h2>Python: The Versatile Powerhouse</h2><p>Python is known for its clean, readable syntax that closely resembles plain English. It\'s the go-to language for data science, machine learning, automation, and backend web development. If you\'re interested in AI/ML or data analysis, Python is the clear choice.</p><h2>JavaScript: The Language of the Web</h2><p>JavaScript is the only language that runs natively in web browsers, making it essential for frontend development. With Node.js, it also powers backend applications. If you want to build websites and web apps, JavaScript is indispensable.</p><h2>Learning Curve</h2><p>Python generally has a gentler learning curve for absolute beginners. Its syntax is more forgiving and the code is easier to read. JavaScript has more quirks and gotchas, but its immediate visual feedback in the browser can be motivating.</p><h2>Job Market</h2><p>Both languages have strong job markets. JavaScript developers are in high demand for web development roles, while Python developers are sought after for data science, ML, and backend positions.</p><h2>Our Recommendation</h2><p>If you\'re interested in web development, start with JavaScript. If you\'re drawn to data science or automation, start with Python. Either way, you\'ll eventually want to learn both — they complement each other beautifully.</p>',
            ],
        ];

        foreach ($blogs as $blog) {
            Blog::firstOrCreate(
                ['title' => $blog['title']],
                array_merge($blog, ['user_id' => $admin->id])
            );
        }
    }
}
