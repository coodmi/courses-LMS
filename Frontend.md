Currently our LMS script have

1. Courses
2. Exams
3. Blogs
4. Instructors

Now I want to make a system where I will put the collection of data which is the best based on bellow structure.

For example: Courses

- best (here will be store only one id)
- top (here will be store array of ids)
- new (here will be store array of ids)

For example: Exams

- best (here will be store only one id)
- top (here will be store array of ids)
- new (here will be store array of ids)

For example: Blogs

- best (here will be store only one id)
- top (here will be store array of ids)
- new (here will be store array of ids)

For example: Instructors

- best (here will be store only one id)
- top (here will be store array of ids)
- new (here will be store array of ids)

Now you have database migration and model for this system where will have

- type: course, exam, blog, instructor
- model: model reference like Course, Exam, Blog, Instructor
- best: store only one id
- top: store array of ids
- new: store array of ids
- beside the best, top, new also add some 2 or 3 columns for future use

Then you have to make the controllers and routes for this system. in this case all routes will be only api call from here.

- Get routes for stored id's data like api/collection/courses/best, etc.
- Post/Put/Update routes for updating the data like api/collection/courses/best, etc. Only admin can access these routes. Where the admin will select the courses id from the frontend and send it to the backend. again when I deselect the courses then the id will be removed from the backend.

For default data insert, you have to make a seeder file where you will put these default data

For Course

- best: 1
- top: 1, 2, 3, 4, 5, 6, 7, 8
- new: 16, 15, 14, 13, 12, 11, 10, 9

For Exam

- best: 1
- top: 1, 2, 3
- new: 3, 2, 1

For Blog

- best: 1
- top: 1, 2, 3, 4, 5, 6, 7, 8
- new: 16, 15, 14, 13, 12, 11, 10, 9

For Instructor

- best: 1
- top: 1, 2, 3, 4, 5, 6
- new: 12, 11, 10, 9, 8, 7

In this case you don't need to handle frontend. I will handle it.
