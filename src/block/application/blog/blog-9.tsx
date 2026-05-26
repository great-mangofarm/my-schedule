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

const featuredArticle: Article = {
  image:
    'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-09/image-1-lg.jpg',
  category: 'Technology',
  badgeColor: 'purple',
  title: 'The Power of AI in Cybersecurity and Data Protection',
  excerpt:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when...",
  views: '5k View',
  likes: '20 Likes',
  shares: '14 Share',
};

const articles: Article[] = [
  {
    image:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-09/image-1.jpg',
    category: 'Business',
    badgeColor: 'cyan',
    title: 'The Role of Augmented Reality in Modern Business',
    excerpt:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...',
    views: '5k View',
    likes: '20 Likes',
    shares: '14 Share',
  },
  {
    image:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-09/image-2.jpg',
    category: 'Web3',
    badgeColor: 'violet',
    title: 'How NFTs and Blockchain Are Entering the Gaming World',
    excerpt:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...',
    views: '5k View',
    likes: '20 Likes',
    shares: '14 Share',
  },
  {
    image:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-09/image-3.jpg',
    category: 'Gaming',
    badgeColor: 'pink',
    title: 'The Role of Augmented Reality in Modern Business',
    excerpt:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...',
    views: '5k View',
    likes: '20 Likes',
    shares: '14 Share',
  },
];

export default function Blog9() {
  return (
    <section className="bg-background-soft-100 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* Header Section */}
        <div className="mx-auto mb-10 max-w-md text-center">
          <p className="bg-primary-500/5 text-primary-500 mb-2 inline-block rounded-lg px-3.5 py-1 font-medium">
            Latest News
          </p>
          <h2 className="text-title-50 mb-4 text-4xl font-semibold sm:text-5xl">
            Our Recent News
          </h2>
          <p className="text-text-100">
            There are many variations of available but the majority have
            suffered alteration in some form.
          </p>
        </div>

        {/* Featured Article */}
        <div className="bg-background-50 mb-8 overflow-hidden rounded-2xl p-2 shadow-sm">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="p-3 sm:p-6 md:w-3/5">
              <div className="mb-6">
                <Badge color={featuredArticle.badgeColor} size="md">
                  {featuredArticle.category}
                </Badge>
              </div>

              <h3 className="text-title-50 mb-3 text-xl font-semibold sm:text-3xl">
                <a href="javascript:void(0)">{featuredArticle.title}</a>
              </h3>

              <p className="text-text-100 mb-7 text-base">
                {featuredArticle.excerpt}
              </p>

              <div className="text-text-100 flex items-center text-sm">
                <span>{featuredArticle.views}</span>
                <span className="bg-background-soft-300 mx-4 block h-1 w-1 rounded-full" />
                <span>{featuredArticle.likes}</span>
                <span className="bg-background-soft-300 mx-4 block h-1 w-1 rounded-full" />
                <span>{featuredArticle.shares}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Smaller Articles Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-background-50 overflow-hidden rounded-2xl p-2 shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>

              <div className="px-3 pt-6 pb-4 sm:px-4">
                <div className="mb-4">
                  <Badge color={article.badgeColor} size="md">
                    {article.category}
                  </Badge>
                </div>

                <h3 className="text-title-50 mb-2 font-semibold">
                  <a href="javascript:void(0)">{article.title}</a>
                </h3>

                <p className="text-text-100 mb-7 text-sm">{article.excerpt}</p>

                <div className="text-text-100 flex items-center text-sm">
                  <span>{article.views}</span>
                  <span className="bg-background-soft-300 mx-4 block h-1 w-1 rounded-full" />
                  <span>{article.likes}</span>
                  <span className="bg-background-soft-300 mx-4 block h-1 w-1 rounded-full" />
                  <span>{article.shares}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
