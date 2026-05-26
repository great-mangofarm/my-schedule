import { Avatar } from '@/components/core/avatar';

// 1. BlogCardProps
type BlogCardProps = {
  blogThumb: string;
  title: string;
  description: string;
  authorImage: string;
  authorName: string;
  date: string;
};

// 2. BlogCard component
const BlogCard = ({
  blogThumb,
  title,
  description,
  authorImage,
  authorName,
  date,
}: BlogCardProps) => (
  <div className="overflow-hidden">
    <div className="overflow-hidden rounded-2xl">
      <img
        src={blogThumb}
        alt={title}
        className="h-full w-full rounded-2xl object-cover"
      />
    </div>
    <div className="py-6">
      <h3 className="text-title-50 mb-2 line-clamp-2 text-lg font-semibold sm:text-2xl">
        <a href="javascript:void(0)">{title}</a>
      </h3>
      <p className="text-text-100 mb-6 text-sm sm:text-base">{description}</p>
      <div className="flex items-center">
        <div className="flex items-center pr-4">
          <div className="shrink-0">
            <Avatar
              src={authorImage}
              alt={authorName}
              size="sm"
              fallback="TD"
            />
          </div>
          <div className="pl-2">
            <p className="text-text-50 text-sm font-medium">{authorName}</p>
          </div>
        </div>
        <div className="bg-background-soft-300 h-1.5 w-1.5 rounded-full"></div>
        <div className="pl-4">
          <p className="text-text-100 text-xs">{date}</p>
        </div>
      </div>
    </div>
  </div>
);

// 3. Blog data
const blogPosts: BlogCardProps[] = [
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-01/image-1.jpg',
    title: "Investing 101 – A Beginner's Guide to Building Wealth",
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    authorImage:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-01/author-1.png',
    authorName: 'Thomas Webb',
    date: '10 Feb 2023',
  },
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-01/image-2.jpg',
    title: 'Building Wealth Through Smart Investments',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    authorImage:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-01/author-2.png',
    authorName: 'Jerome Bell',
    date: '10 Feb 2025',
  },
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-01/image-3.jpg',
    title: 'The Road to Financial Freedom with Investing',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    authorImage:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-01/author-3.png',
    authorName: 'Albert Flores',
    date: '2 Mar 2025',
  },
];

// 4. BlogOne
export default function Blog1() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="mx-auto mb-16 max-w-md text-center">
          <h2 className="text-title-50 mb-2 text-4xl font-semibold sm:text-5xl">
            Our Recent News
          </h2>
          <p className="text-text-100">
            There are many variations of available but the majority have
            suffered alteration in some form.
          </p>
        </div>
        <div className="grid grid-cols-1 justify-center gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
