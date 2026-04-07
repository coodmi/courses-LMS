<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\JobCircular;

class DemoCareersSeeder extends Seeder
{
    public function run(): void
    {
        $jobs = [
            [
                'title'                => 'Senior Laravel Developer',
                'description'          => '<p>We are looking for an experienced <strong>Senior Laravel Developer</strong> to join our growing engineering team. You will be responsible for building and maintaining our core LMS platform, designing scalable APIs, and mentoring junior developers.</p><h3>Responsibilities</h3><ul><li>Design and develop new features for the Alpha LMS platform</li><li>Write clean, maintainable, and well-tested PHP/Laravel code</li><li>Collaborate with frontend developers and designers</li><li>Optimize application performance and database queries</li><li>Participate in code reviews and technical discussions</li></ul><h3>Benefits</h3><ul><li>Competitive salary + performance bonus</li><li>Remote-friendly work environment</li><li>Health insurance coverage</li><li>Annual learning & development budget</li></ul>',
                'experience_level'     => 'senior',
                'location'             => 'Remote / Dhaka, Bangladesh',
                'salary_min'           => 3000,
                'salary_max'           => 5000,
                'salary_currency'      => 'USD',
                'salary_negotiable'    => false,
                'application_deadline' => now()->addDays(30)->format('Y-m-d'),
                'contact_email'        => 'careers@alphalms.com',
                'skills_required'      => ['PHP', 'Laravel', 'MySQL', 'REST API', 'Git'],
                'positions_available'  => 2,
                'job_type'             => 'full-time',
                'work_type'            => 'remote',
                'status'               => 'active',
            ],
            [
                'title'                => 'React Frontend Developer',
                'description'          => '<p>We are hiring a talented <strong>React Frontend Developer</strong> to build beautiful, responsive user interfaces for our LMS platform. You will work closely with our design and backend teams to deliver exceptional user experiences.</p><h3>Responsibilities</h3><ul><li>Build and maintain React components using TypeScript</li><li>Implement responsive designs from Figma mockups</li><li>Integrate with Laravel REST APIs</li><li>Optimize frontend performance and accessibility</li><li>Write unit and integration tests</li></ul><h3>Benefits</h3><ul><li>Flexible working hours</li><li>Remote work options</li><li>Stock options available</li><li>Free access to all Alpha LMS courses</li></ul>',
                'experience_level'     => 'mid',
                'location'             => 'Remote / Sylhet, Bangladesh',
                'salary_min'           => 2000,
                'salary_max'           => 3500,
                'salary_currency'      => 'USD',
                'salary_negotiable'    => false,
                'application_deadline' => now()->addDays(25)->format('Y-m-d'),
                'contact_email'        => 'careers@alphalms.com',
                'skills_required'      => ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Git'],
                'positions_available'  => 3,
                'job_type'             => 'full-time',
                'work_type'            => 'hybrid',
                'status'               => 'active',
            ],
            [
                'title'                => 'UI/UX Designer',
                'description'          => '<p>We are looking for a creative <strong>UI/UX Designer</strong> to shape the visual identity and user experience of Alpha LMS. You will own the design process from research to final handoff.</p><h3>Responsibilities</h3><ul><li>Create wireframes, prototypes, and high-fidelity designs in Figma</li><li>Conduct user research and usability testing</li><li>Maintain and evolve our design system</li><li>Collaborate with developers to ensure pixel-perfect implementation</li><li>Analyze user feedback and iterate on designs</li></ul><h3>Benefits</h3><ul><li>Creative freedom and ownership</li><li>Latest design tools provided</li><li>Conference and workshop budget</li><li>Collaborative and supportive team</li></ul>',
                'experience_level'     => 'mid',
                'location'             => 'Dhaka, Bangladesh',
                'salary_min'           => 1500,
                'salary_max'           => 2500,
                'salary_currency'      => 'USD',
                'salary_negotiable'    => true,
                'application_deadline' => now()->addDays(20)->format('Y-m-d'),
                'contact_email'        => 'careers@alphalms.com',
                'skills_required'      => ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
                'positions_available'  => 1,
                'job_type'             => 'full-time',
                'work_type'            => 'on-site',
                'status'               => 'active',
            ],
            [
                'title'                => 'Content Creator & Course Instructor',
                'description'          => '<p>Alpha LMS is looking for passionate <strong>Content Creators and Course Instructors</strong> to develop high-quality online courses. If you are an expert in your field and love teaching, this is the perfect opportunity for you.</p><h3>Responsibilities</h3><ul><li>Create engaging video lessons and course materials</li><li>Develop quizzes, assignments, and assessments</li><li>Respond to student questions and provide feedback</li><li>Update course content to stay current with industry trends</li><li>Collaborate with our content team on course structure</li></ul><h3>Benefits</h3><ul><li>Revenue sharing on course sales</li><li>Flexible schedule — work from anywhere</li><li>Marketing support for your courses</li><li>Access to professional recording equipment</li></ul>',
                'experience_level'     => 'entry',
                'location'             => 'Remote',
                'salary_min'           => 0,
                'salary_max'           => 0,
                'salary_currency'      => 'USD',
                'salary_negotiable'    => true,
                'application_deadline' => now()->addDays(45)->format('Y-m-d'),
                'contact_email'        => 'careers@alphalms.com',
                'skills_required'      => ['Teaching', 'Video Production', 'Subject Matter Expertise', 'Communication'],
                'positions_available'  => 10,
                'job_type'             => 'freelance',
                'work_type'            => 'remote',
                'status'               => 'active',
            ],
            [
                'title'                => 'DevOps Engineer',
                'description'          => '<p>We are seeking a skilled <strong>DevOps Engineer</strong> to manage and improve our cloud infrastructure. You will ensure our platform is reliable, scalable, and secure for thousands of learners worldwide.</p><h3>Responsibilities</h3><ul><li>Manage AWS/cloud infrastructure and deployments</li><li>Set up and maintain CI/CD pipelines</li><li>Monitor system performance and respond to incidents</li><li>Implement security best practices</li><li>Automate repetitive operational tasks</li></ul><h3>Benefits</h3><ul><li>Competitive salary with equity options</li><li>Remote-first culture</li><li>AWS certification support</li><li>On-call compensation</li></ul>',
                'experience_level'     => 'senior',
                'location'             => 'Remote',
                'salary_min'           => 4000,
                'salary_max'           => 6000,
                'salary_currency'      => 'USD',
                'salary_negotiable'    => false,
                'application_deadline' => now()->addDays(35)->format('Y-m-d'),
                'contact_email'        => 'careers@alphalms.com',
                'skills_required'      => ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
                'positions_available'  => 1,
                'job_type'             => 'full-time',
                'work_type'            => 'remote',
                'status'               => 'active',
            ],
            [
                'title'                => 'Customer Support Specialist',
                'description'          => '<p>We are looking for a friendly and helpful <strong>Customer Support Specialist</strong> to assist our students and instructors. You will be the first point of contact for our users and play a key role in their success.</p><h3>Responsibilities</h3><ul><li>Respond to student and instructor inquiries via email and chat</li><li>Troubleshoot technical issues and escalate when needed</li><li>Create and maintain help documentation</li><li>Gather user feedback and share insights with the product team</li><li>Process refund requests and enrollment issues</li></ul><h3>Benefits</h3><ul><li>Fully remote position</li><li>Flexible working hours</li><li>Free access to all courses on Alpha LMS</li><li>Growth opportunities within the company</li></ul>',
                'experience_level'     => 'entry',
                'location'             => 'Remote',
                'salary_min'           => 800,
                'salary_max'           => 1200,
                'salary_currency'      => 'USD',
                'salary_negotiable'    => false,
                'application_deadline' => now()->addDays(15)->format('Y-m-d'),
                'contact_email'        => 'careers@alphalms.com',
                'skills_required'      => ['Communication', 'Problem Solving', 'Customer Service', 'English'],
                'positions_available'  => 2,
                'job_type'             => 'full-time',
                'work_type'            => 'remote',
                'status'               => 'active',
            ],
        ];

        foreach ($jobs as $job) {
            JobCircular::firstOrCreate(['title' => $job['title']], $job);
        }
    }
}
