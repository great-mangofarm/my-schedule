import { Button } from '@/components/core/button';

interface NewsItem {
  image: string;
  title: string;
  author: string;
  time: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    image:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-12/image-1.jpg',
    title: 'Power & Politics Breaking News and Insights',
    author: 'Tatiana Diaz',
    time: '03:48 am',
    href: 'javascript:void()',
  },
  {
    image:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-12/image-2.jpg',
    title: 'The State of the Nation: Key Political Developments',
    author: 'Darrell Steward',
    time: '03:48 am',
    href: 'javascript:void()',
  },
  {
    image:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-12/image-3.jpg',
    title: 'Election Watch Tracking the Future of Governance',
    author: 'Jane Cooper',
    time: '03:48 am',
    href: 'javascript:void()',
  },
  {
    image:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-12/image-4.jpg',
    title: 'From Capitol to Communities: Politics That Matter',
    author: 'Esther Howard',
    time: '03:48 am',
    href: 'javascript:void()',
  },
];

const NewsCard = ({ image, title, author, time, href }: NewsItem) => (
  <div className="flex flex-col items-center gap-2 p-3 sm:flex-row sm:p-5">
    <div className="w-full shrink-0 sm:w-52">
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </div>
    <div className="px-0 sm:p-3">
      <h3 className="text-title-50 mb-3 font-bold">
        <a href={href}>{title}</a>
      </h3>
      <div className="text-text-100 flex items-center text-sm">
        <span className="pr-3">{author}</span>
        <span className="bg-background-soft-500 h-1.5 w-1.5 rounded-full" />
        <span className="text-text-100 pl-4 text-sm">{time}</span>
      </div>
    </div>
  </div>
);

export default function Blog12() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* Header Section */}
        <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center lg:mb-14">
          <div className="max-w-md">
            <p className="bg-primary-500/5 text-primary-500 mb-2 inline-block rounded-lg px-3.5 py-1 font-medium">
              Latest News
            </p>
            <h2 className="text-title-50 mb-3 text-4xl font-bold sm:text-5xl">
              Our Recent News
            </h2>
            <p className="text-text-100 max-w-2xl">
              There are many variations of available but the majority have
              suffered alteration in some form
            </p>
          </div>
          <div className="hidden shrink-0 lg:block">
            <Button variant="primary" appearance="fill">
              <a href="javascript:void(0)">View All Posts</a>
            </Button>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 gap-x-8 xl:grid-cols-2">
          {newsItems.map((item, index) => (
            <div key={index}>
              {(index === 2 || index === 3) && (
                <hr className="border-base-100 col-span-full my-3.5 h-px border-t" />
              )}
              <NewsCard {...item} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button variant="primary" appearance="fill" className="w-full">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
