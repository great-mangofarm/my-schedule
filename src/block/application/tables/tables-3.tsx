import { Button } from '@/components/core/button';
import { Progress } from '@/components/core/progress';
import {
  TableRoot,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/core/table';
import { MenuKebab1 } from '@tailgrids/icons';

export default function Tables3() {
  const courseData = [
    {
      image:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-3/image-1.jpg',
      title: 'UX Design Basics',
      instructor: 'Tom Blake',
      progress: 100,
      enrolledDate: 'Jan 02, 2025',
      certificate: 'Issued',
    },
    {
      image:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-3/image-2.jpg',
      title: 'React Fundamentals',
      instructor: 'Sara Khan',
      progress: 60,
      enrolledDate: 'Feb 20, 2025',
      certificate: '—',
    },
    {
      image:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-3/image-3.jpg',
      title: 'Motion Design',
      instructor: 'Liam Patel',
      progress: 40,
      enrolledDate: 'Mar 01, 2025',
      certificate: '—',
    },
    {
      image:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-3/image-4.jpg',
      title: 'Figma for Beginners',
      instructor: 'Olivia James',
      progress: 20,
      enrolledDate: 'Jan 30, 2025',
      certificate: '—',
    },
    {
      image:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-3/image-5.jpg',
      title: 'Webflow Mastery',
      instructor: 'Daniel Green',
      progress: 70,
      enrolledDate: 'Jan 02, 2025',
      certificate: 'Issued',
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 xl:px-8">
      <div className="bg-background-50 rounded-xl">
        <div className="flex items-center justify-between p-5">
          <div>
            <h3 className="text-text-50 text-lg font-semibold">
              Order History Table
            </h3>
          </div>
          <div>
            <Button variant="ghost" iconOnly size="xs">
              <MenuKebab1 className="size-5" />
            </Button>
          </div>
        </div>
        <div className="p-5 pt-0">
          <TableRoot>
            <TableHeader className="bg-background-soft-50">
              <TableRow>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Course Name
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Instructor
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Progress
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Enrolled Date
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Certificate
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courseData.map((course, idx) => (
                <TableRow key={idx}>
                  <TableCell className="whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <img
                        src={course.image}
                        className="rounded-lg"
                        alt={`${course.title} thumbnail`}
                      />
                      <p className="text-title-50 text-sm font-medium">
                        {course.title}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <p className="text-text-100 text-sm font-medium">
                      {course.instructor}
                    </p>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Progress
                      progress={course.progress}
                      withLabel
                      className="min-w-40"
                    />
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <p className="text-text-100 text-sm">
                      {course.enrolledDate}
                    </p>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <p className="text-text-100 text-sm">
                      {course.certificate}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableRoot>
        </div>
      </div>
    </section>
  );
}
