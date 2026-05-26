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

interface TagInfo {
  label: string;
  color: BadgeColor;
}

type BlogCardProps = {
  blogThumb: string;
  title: string;
  description: string;
  href: string;
  views: string;
  likes: string;
  shares: string;
  tags: TagInfo[];
};

const BlogCard = ({
  blogThumb,
  title,
  description,
  views,
  likes,
  shares,
  href,
  tags,
}: BlogCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="overflow-hidden rounded-lg">
        <img
          src={blogThumb}
          alt={title}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      <div>
        <div className="flex gap-3 py-6">
          {tags.map((tag, index) => (
            <Badge key={index} color={tag.color} size="md">
              {tag.label}
            </Badge>
          ))}
        </div>

        <h3 className="text-title-50 mb-3 text-2xl font-semibold">
          <a href={href}>{title}</a>
        </h3>

        <p className="text-text-100 mb-6 text-sm">{description}</p>

        <div className="flex items-center text-sm">
          <span className="text-text-100">{views} Views</span>
          <span className="bg-background-soft-500 mx-3 block h-1 w-1 rounded-full" />
          <span className="text-text-100">{likes} Likes</span>
          <span className="bg-background-soft-500 mx-3 block h-1 w-1 rounded-full" />
          <span className="text-text-100">{shares} Share</span>
        </div>
      </div>
    </div>
  );
};

const blogPosts: BlogCardProps[] = [
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-10/image-1.jpg',
    title: 'The Next Giant Leap Future of Space Exploration',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    views: '1.5K',
    likes: '50',
    shares: '41',
    href: 'javascript:void()',
    tags: [
      { label: 'Technology', color: 'primary' },
      { label: 'Space', color: 'purple' },
    ],
  },
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-10/image-2.jpg',
    title: 'Interstellar Journeys The Science & Future of Space Travel',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    views: '12K',
    likes: '450',
    shares: '98',
    href: 'javascript:void()',
    tags: [
      { label: 'Technology', color: 'primary' },
      { label: 'Space', color: 'purple' },
    ],
  },
  {
    blogThumb:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-10/image-3.jpg',
    title: 'The Road to the Stars Space Tourism & Beyond',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting...',
    views: '6.5K',
    likes: '65',
    shares: '21',
    href: 'javascript:void()',
    tags: [
      { label: 'Technology', color: 'primary' },
      { label: 'Space', color: 'purple' },
    ],
  },
];

export default function Blog10() {
  return (
    <section className="bg-background-50 py-14 lg:py-28">
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

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
