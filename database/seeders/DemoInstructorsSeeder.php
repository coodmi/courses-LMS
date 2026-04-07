<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Instructor;

class DemoInstructorsSeeder extends Seeder
{
    public function run(): void
    {
        $instructors = [
            [
                'name'         => 'Sarah Johnson',
                'email'        => 'sarah@demo.com',
                'photo'        => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
                'designation'  => 'Full Stack Developer',
                'biography'    => 'Sarah is a full stack developer with 8+ years of experience building scalable web applications. She specializes in React, Node.js, and cloud architecture. She has mentored over 500 students and loves making complex topics simple.',
                'skills'       => ['React', 'Node.js', 'AWS', 'TypeScript'],
                'social_links' => ['facebook' => 'https://facebook.com', 'twitter' => 'https://twitter.com', 'linkedin' => 'https://linkedin.com', 'instagram' => 'https://instagram.com'],
                'courses'      => ['react-typescript-masterclass', 'advanced-javascript-es2024'],
            ],
            [
                'name'         => 'Emily Chen',
                'email'        => 'emily@demo.com',
                'photo'        => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
                'designation'  => 'UI/UX Designer',
                'biography'    => 'Emily is a UI/UX designer with a passion for creating beautiful, user-centered digital experiences. She has designed products used by millions of people worldwide and has 6+ years of experience in product design.',
                'skills'       => ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
                'social_links' => ['facebook' => 'https://facebook.com', 'twitter' => 'https://twitter.com', 'linkedin' => 'https://linkedin.com', 'instagram' => 'https://instagram.com'],
                'courses'      => ['ui-ux-design-with-figma'],
            ],
            [
                'name'         => 'Michael Brown',
                'email'        => 'michael@demo.com',
                'photo'        => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
                'designation'  => 'Laravel & PHP Expert',
                'biography'    => 'Michael is a backend developer specializing in Laravel and PHP. He has built enterprise-level applications and contributed to several open-source projects. With 10+ years of experience, he brings real-world expertise to every lesson.',
                'skills'       => ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
                'social_links' => ['facebook' => 'https://facebook.com', 'twitter' => 'https://twitter.com', 'linkedin' => 'https://linkedin.com', 'instagram' => 'https://instagram.com'],
                'courses'      => ['complete-laravel-11-bootcamp'],
            ],
            [
                'name'         => 'Priya Patel',
                'email'        => 'priya@demo.com',
                'photo'        => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300',
                'designation'  => 'Data Science & ML Engineer',
                'biography'    => 'Priya is a data scientist and ML engineer with expertise in Python, scikit-learn, and deep learning. She has worked at top tech companies and published research in machine learning. She loves teaching data science to beginners.',
                'skills'       => ['Python', 'Machine Learning', 'TensorFlow', 'Pandas'],
                'social_links' => ['facebook' => 'https://facebook.com', 'twitter' => 'https://twitter.com', 'linkedin' => 'https://linkedin.com', 'instagram' => 'https://instagram.com'],
                'courses'      => ['python-for-data-science', 'machine-learning-a-z'],
            ],
        ];

        foreach ($instructors as $data) {
            $courses      = $data['courses'];
            $socialLinks  = $data['social_links'];
            unset($data['courses'], $data['social_links']);

            $user = User::firstOrCreate(
                ['email' => $data['email']],
                [
                    'name'              => $data['name'],
                    'password'          => Hash::make('password'),
                    'role'              => 'instructor',
                    'status'            => 1,
                    'photo'             => $data['photo'],
                    'email_verified_at' => now(),
                ]
            );

            $user->update(['photo' => $data['photo'], 'social_links' => $socialLinks]);

            $instructor = Instructor::firstOrCreate(
                ['user_id' => $user->id],
                [
                    'designation' => $data['designation'],
                    'biography'   => $data['biography'],
                    'skills'      => $data['skills'],
                    'resume'      => '',
                    'status'      => 'approved',
                ]
            );

            $instructor->update([
                'designation' => $data['designation'],
                'biography'   => $data['biography'],
                'skills'      => $data['skills'],
                'status'      => 'approved',
            ]);

            if (!$user->instructor_id) {
                $user->update(['instructor_id' => $instructor->id]);
            }

            // Assign courses to this instructor
            foreach ($courses as $slug) {
                \App\Models\Course\Course::where('slug', $slug)
                    ->update(['instructor_id' => $instructor->id]);
            }
        }
    }
}
