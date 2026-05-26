import { Button } from '@/components/core/button';
import { ArrowRight, CalendarTime, ClockThree } from '@tailgrids/icons';

// 1. BlogCardProps
type BlogCardProps = {
  blogThumb: string;
  title: string;
  description: string;
  date: string;
  time: string;
  href: string;
};

// 2. Blog Card Component
const BlogCard = ({
  blogThumb,
  title,
  description,
  date,
  time,
  href,
}: BlogCardProps) => {
  return (
    <div className="bg-background-50 overflow-hidden rounded-2xl p-4 sm:p-5">
      <div className="overflow-hidden">
        <img
          src={blogThumb}
          alt={title}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="mt-5">
        <div className="mb-3 flex items-center gap-5">
          <div className="text-text-100 flex items-center gap-2 text-xs">
            <CalendarTime />
            <span>{date}</span>
          </div>
          <div className="text-text-100 flex items-center gap-2 text-xs">
            <ClockThree />
            <span>{time}</span>
          </div>
        </div>
        <h3 className="text-title-50 mb-2 line-clamp-2 text-lg font-semibold sm:text-lg">
          <a href={href}> {title} </a>
        </h3>
        <p className="text-text-100 mb-4 line-clamp-2 text-sm sm:text-base">
          {description}
        </p>

        <Button appearance="outline">
          <a href="javascript:void(0)" className="flex gap-2">
            Read More
            <ArrowRight />
          </a>
        </Button>
      </div>
    </div>
  );
};

// 3. Blog data
const blogPosts: BlogCardProps[] = [
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-04/image-1.jpg',
    title: "Investing 101 – A Beginner's Guide to Building Wealth",
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    date: '10 Feb 2023',
    time: '8:01 PM',
    href: 'javascript:void()',
  },
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-04/image-2.jpg',
    title: 'The Impact of Autonomous Vehicles on the Auto Industry',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    date: '10 Feb 2023',
    time: '8:01 PM',
    href: 'javascript:void()',
  },
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-04/image-3.jpg',
    title: 'How Hybrid Cars Work and Why They Matter',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    date: '10 Feb 2023',
    time: '8:01 PM',
    href: 'javascript:void()',
  },
];

export default function Blog4() {
  return (
    <section className="bg-background-soft-100 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* <!-- Section Header --> */}
        <div className="mx-auto mb-16 max-w-md text-center">
          <p className="bg-primary-500/5 text-primary-500 mb-2 inline-block rounded-lg px-3.5 py-1 font-medium">
            Latest News
          </p>
          <h2 className="text-title-50 mb-2 text-4xl font-bold sm:text-5xl">
            Our Recent News
          </h2>
          <p className="text-text-100">
            There are many variations of available but the majority have
            suffered alteration in some form.
          </p>
        </div>

        {/* <!-- News Cards --> */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
