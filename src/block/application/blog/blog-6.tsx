import { ArrowRight } from '@tailgrids/icons';

// 1. BlogCardProps
type BlogCardProps = {
  blogThumb: string;
  title: string;
  description: string;
  tag: string;
  date: string;
  href: string;
};

// 2. Blog Card
const BlogCard = ({
  blogThumb,
  title,
  description,
  tag,
  date,
  href,
}: BlogCardProps) => {
  return (
    <div className="bg-background-soft-50 overflow-hidden rounded-2xl p-4 sm:p-5">
      <div className="overflow-hidden">
        <img
          src={blogThumb}
          alt={title}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="mt-5">
        <div className="mb-3 flex items-center">
          <div className="pr-3">
            <span className="text-text-50 text-sm font-medium">{tag}</span>
          </div>
          <div className="bg-background-soft-300 h-1.5 w-1.5 rounded-full"></div>
          <div className="pl-3">
            <span className="text-text-100 text-xs">{date}</span>
          </div>
        </div>
        <h3 className="text-title-50 mb-2 line-clamp-2 text-lg font-semibold sm:text-lg">
          <a href={href}> {title} </a>
        </h3>
        <p className="text-text-100 mb-4 line-clamp-2 text-sm sm:text-base">
          {description}
        </p>
        <a
          href={href}
          className="text-title-50 border-base-200 hover:bg-background-soft-100 hover:text-title-50 inline-flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-colors"
        >
          Read More
          <ArrowRight />
        </a>
      </div>
    </div>
  );
};

//3. Blog Data
const blogPosts: BlogCardProps[] = [
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-06/image-1.jpg',
    title: 'The Magic of Fall Crisp Air & Golden Leaves',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    tag: 'News',
    date: '10 Feb 2023',
    href: 'javascript:void()',
  },
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-06/image-2.jpg',
    title: 'Skyfall Adventures The Thrill of Air Craft Adventures',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    tag: 'News',
    date: '10 Feb 2023',
    href: 'javascript:void()',
  },
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-06/image-3.jpg',
    title: 'Gravity Defied The Beauty of Aerial Adventures',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    tag: 'News',
    date: '10 Feb 2023',
    href: 'javascript:void()',
  },
];

export default function Blog6() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* <!-- Section Header --> */}
        <div className="mx-auto mb-8 max-w-md text-center lg:mb-16">
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
