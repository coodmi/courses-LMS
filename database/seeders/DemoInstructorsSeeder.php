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
                'name'        => 'Sarah Johnson',
                'email'       => 'sarah@demo.com',
                'photo'       => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
                'designation' => 'Full Stack Developer',
                'biography'   => 'Sarah is a full stack developer with 8+ years of experience building scalable web applications. She specializes in React, Node.js, and cloud architecture.',
                'skills'      => ['React', 'Node.js', 'AWS', 'TypeScript'],
            ],
            [
                'name'        => 'Emily Chen',
                'email'       => 'emily@demo.com',
                'photo'       => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
                'designation' => 'UI/UX Designer',
                'biography'   => 'Emily is a UI/UX designer with a passion for creating beautiful, user-centered digital experiences. She has designed products used by millions of people worldwide.',
                'skills'      => ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
            ],
            [
                'name'        => 'Michael Brown',
                'email'       => 'michael@demo.com',
                'photo'       => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
                'designation' => 'Laravel & PHP Expert',
                'biography'   => 'Michael is a backend developer specializing in Laravel and PHP. He has built enterprise-level applications and contributed to several open-source projects.',
                'skills'      => ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
            ],
            [
                'name'        => 'Priya Patel',
                'email'       => 'priya@demo.com',
                'photo'       => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300',
                'designation' => 'Mobile App Developer',
                'biography'   => 'Priya is a mobile developer with expertise in React Native and Flutter. She has published 20+ apps on the App Store and Google Play.',
                'skills'      => ['React Native', 'Flutter', 'iOS', 'Android'],
            ],
        ];

        foreach ($instructors as $data) {
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

            // Update photo if user already exists
            $user->update(['photo' => $data['photo']]);

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
        }
    }
}
