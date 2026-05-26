import { Badge } from '@/components/core/badge';

type BadgeColor =
  | 'gray'
  | 'primary'
  | 'error'
  | 'warning'
  | 'success'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'violet'
  | 'purple'
  | 'pink'
  | 'rose'
  | 'orange';

interface Article {
  image: string;
  category: string;
  badgeColor: BadgeColor;
  title: string;
  excerpt: string;
  views: string;
  likes: string;
  shares: string;
}

const articles: Article[] = [
  {
    image:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-07/image-1.jpg',
    category: 'Health',
    badgeColor: 'violet',
    title: '5 Quick & Healthy Breakfast Ideas for Busy Mornings',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when...",
    views: '1.5k View',
    likes: '50 Likes',
    shares: '41 Share',
  },
  {
    image:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-07/image-2.jpg',
    category: 'Organic',
    badgeColor: 'success',
    title: '5 Quick & Healthy Breakfast Ideas for Busy Mornings',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when...",
    views: '1.5k View',
    likes: '50 Likes',
    shares: '41 Share',
  },
  {
    image:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-07/image-3.jpg',
    category: 'Food',
    badgeColor: 'pink',
    title: '5 Quick & Healthy Breakfast Ideas for Busy Mornings',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when...",
    views: '1.5k View',
    likes: '50 Likes',
    shares: '41 Share',
  },
];

export default function Blog7() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* Header Section */}
        <div className="mx-auto mb-10 max-w-md text-center">
          <h2 className="text-title-50 mb-2 text-3xl font-bold">
            Our Recent News
          </h2>
          <p className="text-text-100 mx-auto">
            There are many variations of available but the majority have
            suffered alteration in some form.
          </p>
        </div>

        {/* News Articles */}
        <div className="space-y-10">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden lg:flex-row lg:items-center"
            >
              <div className="h-full w-full shrink-0 lg:w-1/2 xl:w-1/3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex-1 pt-6 pl-0 lg:w-1/2 lg:pt-0 lg:pl-12 xl:w-2/3">
                <div className="mb-6">
                  <Badge color={article.badgeColor} size="md">
                    {article.category}
                  </Badge>
                </div>

                <h3 className="text-title-50 mb-2 text-xl font-bold sm:text-3xl">
                  <a href="javascript:void(0)">{article.title}</a>
                </h3>

                <p className="text-text-100 mb-4 text-sm">{article.excerpt}</p>

                <div className="flex items-center text-sm">
                  <span className="text-text-100">{article.views}</span>
                  <span className="bg-background-soft-300 mx-3 block h-1 w-1 rounded-full" />
                  <span className="text-text-100">{article.likes}</span>
                  <span className="bg-background-soft-300 mx-3 block h-1 w-1 rounded-full" />
                  <span className="text-text-100">{article.shares}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
