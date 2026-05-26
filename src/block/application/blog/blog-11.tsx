import { Badge } from '@/components/core/badge';

interface FeaturedArticle {
  image: string;
  category: string;
  title: string;
  newsType: string;
  date: string;
  excerpt: string;
}

interface SideArticle {
  newsType: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

const featuredArticle: FeaturedArticle = {
  image:
    'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-11/image-1.jpg',
  category: 'Design',
  title: 'Everything you need to know About UI/UX Design And Product Design.',
  newsType: 'News',
  date: '13 Feb 2025',
  excerpt:
    "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard...",
};

const sideArticles: SideArticle[] = [
  {
    newsType: 'News',
    date: '14 Feb 2025',
    title: '"From Pixels to Perfection: Mastering Tech Design"',
    excerpt:
      'Learn the fundamentals of smart investing and how to grow your financial portfolio...',
    href: 'javascript:void()',
  },
  {
    newsType: 'News',
    date: '27 Feb 2025',
    title: '"Next-Gen Development trends Shaping the Digital World"',
    excerpt:
      'Learn the fundamentals of smart investing and how to grow your financial portfolio...',
    href: 'javascript:void()',
  },
];

export default function Blog11() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:w-5/7">
            {/* Featured Article (Left) */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute right-0 bottom-0 left-0 m-2 rounded-xl bg-black/50 p-6 backdrop-blur-lg">
                <div className="max-w-lg">
                  <Badge
                    color="gray"
                    size="md"
                    className="text-primary-500 bg-background-50"
                  >
                    {featuredArticle.category}
                  </Badge>
                  <h3 className="text-white-100 mt-3 text-xl font-bold">
                    <a href="javascript:void(0)">{featuredArticle.title}</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-text-50 text-sm font-medium">
                  {featuredArticle.newsType}
                </span>
                <span className="text-background-soft-500 shrink-0 text-sm">
                  •
                </span>
                <span className="text-text-100 text-sm">
                  {featuredArticle.date}
                </span>
              </div>
              <p className="text-text-100 text-base sm:text-lg">
                {featuredArticle.excerpt}
              </p>
            </div>
          </div>

          {/* Right Column Articles */}
          <div className="flex flex-col gap-6 md:w-2/7">
            {sideArticles.map((article, index) => (
              <div
                key={index}
                className="bg-background-soft-100 rounded-2xl p-6"
              >
                <div className="from-background-50 to-background-soft-100 mb-4 inline-flex items-center gap-2 rounded-md bg-linear-to-r px-2 py-1">
                  <span className="text-title-50 text-sm">
                    {article.newsType}
                  </span>
                  <span className="bg-background-soft-500 block h-1.5 w-1.5 rounded-full" />
                  <span className="text-text-100 text-sm">{article.date}</span>
                </div>

                <h3 className="text-title-50 mb-3 text-xl font-semibold">
                  <a href={article.href}>{article.title}</a>
                </h3>

                <p className="text-text-100 mb-4 text-sm">{article.excerpt}</p>

                <a
                  href={article.href}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Read details...
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
