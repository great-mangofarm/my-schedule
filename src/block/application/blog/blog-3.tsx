import { useState } from 'react';
import { ClockThree } from '@tailgrids/icons';
import { motion } from 'framer-motion';

const blogData = {
  active: {
    category: 'Latest News',
    featured: {
      img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-03/image-1.jpg',
      readTime: '30 Min Read',
      title: 'Discover how simplicity shapes modern architecture.',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum...',
      author: {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-03/image-1.jpg',
        name: 'Josep Helen',
        date: '18 Feb 2025',
      },
    },
    list: [
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-03/image-2.jpg',
        title: 'How Architecture Affects Mental Health and Well-Being',
        time: '2 Day Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-03/image-3.jpg',
        title: 'Adaptive Reuse Transforming Old Buildings for Modern Use',
        time: '5 Day Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-03/image-4.jpg',
        title: 'Exploring Iconic Architectural Landmarks Around the World',
        time: '1 Week Ago',
      },
    ],
  },
  popular: {
    category: 'Most Popular',
    featured: {
      img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-03/image-1.jpg',
      readTime: '15 Min Read',
      title: 'The Art of Minimalist Design in Modern Homes',
      desc: 'Minimalism is not just a style; it is a way of living that emphasizes simplicity and functionality...',
      author: {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-03/image-1.jpg',
        name: 'Sarah Smith',
        date: '20 Jan 2025',
      },
    },
    list: [
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-03/image-3.jpg',
        title: 'Sustainable Architecture: Building for a Greener Future',
        time: '3 Hours Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-03/image-2.jpg',
        title: 'The Evolution of Skyscrapers: From Brick to Steel',
        time: '1 Day Ago',
      },
      {
        img: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blogs/blog-03/image-1.jpg',
        title: 'Top 10 Architectural Wonders You Must See',
        time: '2 Weeks Ago',
      },
    ],
  },
};

export default function Blog3() {
  const [activeTab, setActiveTab] = useState('popular'); // 'active' (Latest) or 'popular' (Popular)

  const currentData =
    activeTab === 'active' ? blogData.active : blogData.popular;

  return (
    <section className="bg-background-50 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        {/* <!-- Header Section --> */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="max-w-md text-center lg:text-left">
            <p className="bg-primary-500/5 text-primary-500 mb-2 inline-block rounded-lg px-3.5 py-1 font-medium">
              {currentData.category}
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
                    layoutId="activeTab"
                    className="bg-background-50 absolute inset-0 rounded-lg shadow-sm"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('active')}
                className={`relative cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium ${
                  activeTab === 'active'
                    ? 'text-text-100'
                    : 'text-title-50 hover:text-text-100'
                }`}
              >
                <span className="relative z-10">Latest News</span>
                {activeTab === 'active' && (
                  <motion.div
                    layoutId="activeTab"
                    className="bg-background-50 absolute inset-0 rounded-lg shadow-sm"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* <!-- News Grid --> */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-12"
        >
          {/* <!-- Featured Article (Left) --> */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl">
              <img
                src={currentData.featured.img}
                alt={currentData.featured.title}
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="text-text-100 mt-4 flex items-center text-sm">
              <ClockThree className="mr-2 size-5" />

              <span>{currentData.featured.readTime}</span>
            </div>
            <h3 className="text-title-50 mt-2 line-clamp-1 text-2xl font-semibold">
              <a href="javascript:void(0)"> {currentData.featured.title} </a>
            </h3>

            <p className="text-text-100 mt-2 text-sm">
              {currentData.featured.desc}
            </p>
            <div className="mt-4 flex items-center">
              <img
                src={currentData.featured.author.img}
                alt="Author"
                className="mr-3 h-10 w-10 rounded-full"
              />
              <div>
                <p className="text-title-50 text-sm font-medium">
                  {currentData.featured.author.name}
                </p>
                <p className="text-text-100 text-xs">
                  {currentData.featured.author.date}
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Right Column Articles --> */}
          <div className="space-y-6 lg:col-span-6">
            {currentData.list.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 sm:flex-row sm:items-center"
              >
                <div className="h-32 w-full shrink-0 sm:w-56">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-title-50 mb-2 font-semibold">
                    <a href="javascript:void(0)">{item.title}</a>
                  </h3>
                  <div className="text-text-100 flex items-center text-xs">
                    <ClockThree className="mr-2 size-5" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
