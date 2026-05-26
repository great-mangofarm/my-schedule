import { Button } from '@/components/core/button';

// 1. BlogCardProps
type BlogCardProps = {
  title: string;
  description: string;
  tag: string;
  date: string;
  href: string;
};

const BlogCard = ({ title, description, tag, date, href }: BlogCardProps) => {
  return (
    <div className="bg-background-soft-100 rounded-2xl p-6">
      <div className="from-background-50 to-background-soft-100 mb-4 inline-flex items-center rounded-md bg-linear-to-r px-2 py-1">
        <span className="text-text-100 pr-3 text-sm">{tag}</span>
        <span className="bg-background-soft-500 h-1.5 w-1.5 rounded-full"></span>
        <span className="text-text-100 pl-3 text-sm">{date}</span>
      </div>

      <h3 className="text-title-50 mb-3 text-xl font-semibold">
        <a href={href}>{title}</a>
      </h3>

      <p className="text-text-100 mb-5 text-base">{description}</p>

      <a href={href} className="text-primary-500 text-base font-medium">
        Read details...
      </a>
    </div>
  );
};

const blogPosts: BlogCardProps[] = [
  {
    title: '“How to Properly Clean and Maintain Your Custom”',
    description:
      'Learn the fundamentals of smart investing and how to grow your financial portfolio...',
    tag: 'News',
    date: '10 Feb 2023',
    href: 'javascript:void()',
  },
  {
    title: '“Clean Energy Revolution: The Future of Sustainability”',
    description:
      'Learn the fundamentals of smart investing and how to grow your financial portfolio...',
    tag: 'News',
    date: '26 Feb 2023',
    href: 'javascript:void()',
  },
  {
    title: '“The Clean Air Movement: Fighting Pollution Together”',
    description:
      'Learn the fundamentals of smart investing and how to grow your financial portfolio...',
    tag: 'News',
    date: '28 Feb 2023',
    href: 'javascript:void()',
  },
];

export default function Blog8() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* <!-- Header Section --> */}
        <div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div className="max-w-md">
            <p className="bg-primary-500/5 text-primary-500 mb-2 inline-block rounded-lg px-3.5 py-1 font-medium">
              Latest News
            </p>
            <h2 className="text-title-50 mb-4 text-4xl font-semibold sm:text-5xl">
              From the blogs
            </h2>
            <p className="text-text-100 max-w-2xl">
              There are many variations of available but the majority have
              suffered alteration in some form.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button size="lg" className="h-12">
              <a href="javascript:void(0)">View All Posts</a>
            </Button>
          </div>
        </div>

        {/* <!-- Blog Cards Grid --> */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        {/* <!-- Link --> */}
        <div className="mt-10 flex justify-center sm:hidden">
          <a
            href="javascript:void(0)"
            className="bg-primary-500 hover:bg-primary-600 text-white-100 flex w-full items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
