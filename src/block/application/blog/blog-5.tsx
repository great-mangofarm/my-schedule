import { Avatar } from '@/components/core/avatar';
import { ClockThree } from '@tailgrids/icons';
import { motion } from 'framer-motion';
import { useState } from 'react';

const blogData = {
  popular: {
    featured: [
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-1.jpg',
        title: 'The Art of Social Engagement Building Meaningful Connections',
        desc: 'Learn the fundamentals of smart investing and how to grow your portfolio...',
        author: {
          name: 'Zaire Franci',
          img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/author-1.png',
        },
        date: '10 Feb 2023',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-2.jpg',
        title:
          'Trending Now Social Media Strategies for the Modern Entrepreneur',
        desc: 'Learn the fundamentals of smart investing and how to grow your portfolio...',
        author: {
          name: 'Zaire Franci',
          img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/author-1.png',
        },
        date: '10 Feb 2023',
      },
    ],
    list1: [
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-3.jpg',
        title: 'Mastering Social Media Marketing Tips/Trends for 2025',
        time: '2 Day Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-4.jpg',
        title: 'Maximizing Your Social Media Reach: Tools & Tips',
        time: '2 Day Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-5.jpg',
        title: 'The Power of Social Networking Strategies for Growth',
        time: '2 Day Ago',
      },
    ],
    list2: [
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-6.jpg',
        title: 'Content Creation & Strategy: Dominating Social Platforms',
        time: '2 Day Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-7.jpg',
        title: 'Social Media Savvy Unlocking Success for Your Brand',
        time: '2 Day Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-8.jpg',
        title: 'From Likes to Leads Converting Social Media Into Revenue',
        time: '2 Day Ago',
      },
    ],
  },
  recent: {
    featured: [
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-2.jpg',
        title:
          'Trending Now Social Media Strategies for the Modern Entrepreneur',
        desc: 'Learn the fundamentals of smart investing and how to grow your portfolio...',
        author: {
          name: 'Zaire Franci',
          img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/author-1.png',
        },
        date: '12 Feb 2023',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-1.jpg',
        title: 'The Art of Social Engagement Building Meaningful Connections',
        desc: 'Learn the fundamentals of smart investing and how to grow your portfolio...',
        author: {
          name: 'Zaire Franci',
          img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/author-1.png',
        },
        date: '12 Feb 2023',
      },
    ],
    list1: [
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-5.jpg',
        title: 'The Power of Social Networking Strategies for Growth',
        time: '1 Day Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-3.jpg',
        title: 'Mastering Social Media Marketing Tips/Trends for 2025',
        time: '1 Day Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-4.jpg',
        title: 'Maximizing Your Social Media Reach: Tools & Tips',
        time: '1 Day Ago',
      },
    ],
    list2: [
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-8.jpg',
        title: 'From Likes to Leads Converting Social Media Into Revenue',
        time: '1 Day Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-6.jpg',
        title: 'Content Creation & Strategy: Dominating Social Platforms',
        time: '1 Day Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-05/image-7.jpg',
        title: 'Social Media Savvy Unlocking Success for Your Brand',
        time: '1 Day Ago',
      },
    ],
  },
};

export default function Blog5() {
  const [activeTab, setActiveTab] = useState('popular');
  const currentData =
    activeTab === 'popular' ? blogData.popular : blogData.recent;

  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* <!-- Header Section --> */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="max-w-md text-center lg:text-left">
            <p className="bg-primary-500/5 text-primary-500 mb-2 inline-block rounded-lg px-3.5 py-1 font-medium">
              {activeTab === 'popular' ? 'Most Popular' : 'Latest News'}
            </p>
            <h2 className="text-title-50 mb-4 text-4xl font-bold sm:text-5xl">
              Our Recent News
            </h2>
            <p className="text-text-100 text-base">
              There are many variations of available but the majority have
              suffered alteration in some form.
            </p>
          </div>
          {/* <!-- Tabs --> */}
          <div>
            <div className="bg-background-soft-100 flex gap-1 rounded-[10px] p-1">
              <button
                onClick={() => setActiveTab('popular')}
                className={`relative cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium ${
                  activeTab === 'popular'
                    ? 'text-text-100'
                    : 'text-title-50 hover:text-text-100'
                }`}
              >
                <span className="relative z-10">Most Popular</span>
                {activeTab === 'popular' && (
                  <motion.div
                    layoutId="activeTab5"
                    className="bg-background-50 absolute inset-0 rounded-lg shadow-sm"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('recent')}
                className={`relative cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium ${
                  activeTab === 'recent'
                    ? 'text-text-100'
                    : 'text-title-50 hover:text-text-100'
                }`}
              >
                <span className="relative z-10">Latest News</span>
                {activeTab === 'recent' && (
                  <motion.div
                    layoutId="activeTab5"
                    className="bg-background-50 absolute inset-0 rounded-lg shadow-sm"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <!-- Featured Articles --> */}
          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {currentData.featured.map((item, index) => (
              <div key={index}>
                <div className="mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-64 w-full rounded-2xl object-cover"
                  />
                </div>

                <h3 className="text-title-50 mb-3 line-clamp-2 text-2xl font-bold">
                  <a href="javascript:void(0)">{item.title}</a>
                </h3>

                <p className="text-text-100 mb-4 text-base">{item.desc}</p>

                <div className="flex items-center">
                  <div className="flex items-center pr-3">
                    <div className="mr-3">
                      <Avatar
                        size="sm"
                        src={item.author.img}
                        alt="photo"
                        fallback="TD"
                      />
                    </div>
                    <div>
                      <p className="text-title-50 text-sm font-medium">
                        {item.author.name}
                      </p>
                    </div>
                  </div>
                  <div className="bg-background-soft-300 h-1.5 w-1.5 rounded-full"></div>
                  <div className="pl-3">
                    <span className="text-text-100 text-xs">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <!-- Smaller Articles Grid --> */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Column 1 */}
            <div className="border-base-100 space-y-5 rounded-2xl sm:border sm:p-5">
              {currentData.list1.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 xl:flex-row">
                  <div className="shrink-0 xl:w-54">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full rounded-md object-cover"
                    />
                  </div>
                  <div className="py-3">
                    <h3 className="text-title-50 mb-3 text-lg font-semibold">
                      <a href="javascript:void(0)">{item.title}</a>
                    </h3>
                    <div className="text-text-100 flex items-center gap-2 text-xs">
                      <ClockThree className="size-5" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="border-base-100 space-y-5 rounded-2xl sm:border sm:p-5">
              {currentData.list2.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 xl:flex-row">
                  <div className="shrink-0 xl:w-54">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full rounded-md object-cover"
                    />
                  </div>
                  <div className="py-3">
                    <h3 className="text-title-50 mb-3 text-lg font-semibold">
                      <a href="javascript:void(0)">{item.title}</a>
                    </h3>
                    <div className="text-text-100 flex items-center gap-2 text-xs">
                      <ClockThree className="size-5" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
