import { AvatarGroup } from '@/components/core/avatar';
import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { Facebook, Linkedin, Twitter } from '@tailgrids/icons';

export default function BlogDetails2() {
  return (
    <section className="bg-background-50 pb-24">
      <div className="bg-background-soft-100 pt-24 pb-40">
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <div className="max-w-[800px]">
            <div className="from-background-50 to-background-soft-100 mb-4 inline-flex items-center gap-3 rounded-md bg-gradient-to-r px-2 py-1 text-sm">
              <span className="bg-background-soft-300 h-1.5 w-1.5 rounded-full"></span>
              <span>News</span>
              <span></span>
              <span>8 min read</span>
              <span>12k View</span>
            </div>
            <h1 className="text-title-50 mb-4 text-left text-3xl font-semibold sm:text-5xl">
              The Next Lunar Mission: Why the Moon Still Matters
            </h1>
            <p className="text-text-100 text-base font-normal">
              Learn the fundamentals of smart investing and how to grow your
              financial portfolio...
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-24">
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <div className="h-[640px]">
            <img
              src="https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-02/image-1.jpg"
              className="h-full w-full rounded-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-24 xl:px-0">
        <div className="grid gap-14 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7 xl:col-span-8">
            <ul className="border-base-100 flex gap-18 border-b pb-8">
              <li>
                <span className="text-text-100 text-sm">Written By</span>
                <h4 className="text-title-50 text-base font-semibold">
                  Jocelyn Calzoni
                </h4>
              </li>
              <li>
                <span className="text-text-100 text-sm">Published On</span>
                <h4 className="text-title-50 text-base font-semibold">
                  17 February 2025
                </h4>
              </li>
            </ul>
            <div className="mt-8">
              <h2 className="text-title-50 mb-4 text-2xl font-semibold">
                Understanding the Basics of Investing
              </h2>
              <p className="text-text-100 mb-4 text-base">
                Investing is one of the most effective ways to build long-term
                wealth. Whether you want to grow your savings, prepare for
                retirement, or achieve financial independence, learning how to
                invest wisely can set you on the right path. In this guide, we
                will cover the basics of investing, different investment
                options, and strategies to help beginners make informed
                decisions.
              </p>
              <p className="text-text-100 text-base">
                Investing is one of the most effective ways to build long-term
                wealth. Whether you want to grow your savings, prepare for
                retirement, or achieve financial independence, learning options,
                and strategies to help beginners make informed decisions or
                achieve financial independence.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-title-50 mb-4 text-2xl font-semibold">
                Why Invest
              </h2>
              <p className="text-text-100 mb-4 text-base">
                Many people keep their money in a savings account, but inflation
                gradually reduces its purchasing power. Investing helps combat
                inflation and allows your money to grow over time. Here are some
                key reasons why investing is essential:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-1">
                <li className="text-text-50 text-base">
                  Wealth Growth: Investing helps your money grow faster than
                  traditional savings.
                </li>
                <li className="text-text-50 text-base">
                  Financial Security: A well-planned investment portfolio can
                  provide financial stability.
                </li>
                <li className="text-text-50 text-base">
                  Retirement Planning: Investments like stocks and bonds can
                  help build a strong retirement fund.
                </li>
                <li className="text-text-50 text-base">
                  Passive Income: Some investments generate regular income
                  without active work.
                </li>
              </ul>
              <div className="mb-8 border-l-2 border-black px-7 py-4">
                <blockquote className="text-title-50 mb-7 text-xl font-semibold italic">
                  “Bonds are loans to corporations or governments that pay
                  interest over time. They are generally considered safer than
                  stocks but offer lower returns”
                </blockquote>
                <p className="text-text-50 font-medium">
                  — Martin hugo, Content creator
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-title-50 text-2xl font-semibold">
                  Understanding the Basics of Investing
                </h2>
                <p className="text-text-100 text-base">
                  Before diving into the world of investing, it’s important to
                  understand some key concepts
                </p>
                <ol className="list-inside space-y-4">
                  <li className="text-text-50 text-base">
                    <span className="mb-5 inline-block text-base">
                      1. Risk vs Reward
                    </span>
                    <p className="text-text-100 text-base">
                      Investments come with varying levels of risk. Generally,
                      the higher the risk, the greater the potential for reward.
                      Finding the right balance based on your risk tolerance is
                      crucial
                    </p>
                  </li>

                  <li className="text-text-50 text-base">
                    <span className="mb-5 inline-block text-base">
                      2. Diversification
                    </span>
                    <p className="text-text-100 text-base">
                      This involves spreading your investments across different
                      asset types to reduce risk. A diversified portfolio helps
                      minimizes losses if one investment underperforms.
                    </p>
                  </li>
                  <li className="text-text-50 text-base">
                    <span className="mb-5 inline-block text-base">
                      3. Compound Interest
                    </span>
                    <p className="text-text-100 text-base">
                      The power of compounding allows your earnings to generate
                      additional earnings. The earlier you start investing, the
                      more you benefit from compound interest over time.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2">
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-02/image-2.jpg"
                  className="w-full rounded-xl"
                  alt=""
                />
                <img
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-02/image-3.jpg"
                  className="w-full rounded-xl"
                  alt=""
                />
              </div>
              <div>
                <p className="text-text-100 text-base">
                  Investing is one of the most effective ways to build long-term
                  wealth. Whether you want to grow your savings, prepare for
                  retirement, or achieve financial independence, learning how to
                  invest wisely can set you on the right path. In this guide, we
                  will cover the basics of investing, different investment
                  options, and strategies to help beginners make informed
                  decisions.
                </p>
              </div>
              <div className="mt-8">
                <h2 className="text-title-50 mb-4 text-2xl font-semibold">
                  Final Thoughts
                </h2>
                <p className="text-text-100 mb-4 text-base">
                  Many people keep their money in a savings account, but
                  inflation gradually reduces its purchasing power. Investing
                  helps combat inflation and allows your money to grow over
                  time. Here are some key reasons why investing is essential:
                </p>
              </div>
            </div>
            <div className="border-base-100 border-t pt-8">
              <div className="flex items-center gap-4">
                <p className="text-text-50 text-sm">Share Post:</p>
                <div className="flex">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-background-soft-100 inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent"
                  >
                    <Facebook className="text-text-50 size-5" />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-background-soft-100 inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent"
                  >
                    <Twitter className="text-text-200 size-5" />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-background-soft-100 inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent"
                  >
                    <Linkedin className="text-text-200 size-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-background-soft-100 rounded-2xl p-8">
              <h3 className="text-title-50 mb-4 text-center text-2xl font-semibold">
                Join Exclusive list
              </h3>
              <p className="text-text-100 px-4 text-center text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
              <div className="mt-6 mb-4 flex justify-center">
                <AvatarGroup
                  size="md"
                  data={[
                    {
                      src: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-02/ga-1.png',
                      alt: 'User 1',
                    },
                    {
                      src: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-02/ga-2.png',
                      alt: 'User 2',
                    },
                    {
                      src: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-02/ga-3.png',
                      alt: 'User 3',
                    },
                    {
                      src: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-02/ga-4.png',
                      alt: 'User 4',
                    },
                    {
                      src: 'https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-02/ga-5.png',
                      alt: 'User 5',
                    },
                  ]}
                />
              </div>
              <p className="text-text-100 px-4 text-center text-base font-medium">
                <span className="text-title-50">2500+ </span>
                People Already Join Us
              </p>
              <form className="mt-6">
                <div className="flex w-full flex-col gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="text-center placeholder:text-center"
                  />
                  <Button
                    variant="primary"
                    appearance="fill"
                    className="w-full"
                  >
                    Subscribe Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
