import { Avatar } from '@/components/core/avatar';
import { Badge } from '@/components/core/badge';
import { Link1AngularRight } from '@tailgrids/icons';

export default function BlogDetails1() {
  return (
    <section className="bg-background-50">
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <div className="mx-auto max-w-[800px]">
            <div className="mb-6 flex items-center justify-center gap-4">
              <Badge color="violet" size="md">
                Wealth
              </Badge>
              <span className="bg-background-soft-300 h-1.5 w-1.5 rounded-full"></span>
              <span className="text-text-100 text-sm font-medium">
                20 Feb 2025
              </span>
              <span className="bg-background-soft-300 h-1.5 w-1.5 rounded-full"></span>
              <span className="text-text-100 text-sm font-medium">
                12k View
              </span>
            </div>
            <h1 className="text-title-50 text-center text-3xl font-semibold sm:text-5xl">
              Investing 101: A Beginner’s Guide to Building Wealth
            </h1>
          </div>
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-01/image-1.jpg"
            alt=""
            className="my-16 rounded-2xl"
          />

          <div className="mx-auto max-w-[800px] space-y-8">
            <div className="space-y-4">
              <h2 className="text-title-50 text-2xl font-semibold">
                Introduction
              </h2>
              <p className="text-text-100 text-base">
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
            <div className="space-y-4">
              <h2 className="text-title-50 text-2xl font-semibold">
                Why Invest
              </h2>
              <p className="text-text-100 text-base">
                Many people keep their money in a savings account, but inflation
                gradually reduces its purchasing power. Investing helps combat
                inflation and allows your money to grow over time. Here are some
                key reasons why investing is essential:
              </p>
              <ul className="list-inside list-disc space-y-1">
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
                    Investments come with varying levels of risk. Generally, the
                    higher the risk, the greater the potential for reward.
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
            <div>
              <figure className="my-16">
                <img
                  src="/src/assetshttps://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-01/image-2.jpg"
                  alt=""
                  className="rounded-2xl"
                />
                <figcaption className="text-text-100 mt-2 flex items-center gap-2 text-sm font-medium">
                  <Link1AngularRight className="text-text-100 size-5" />
                  image source link
                  <a href="javascript:void(0)">unsplash</a>
                </figcaption>
              </figure>
              <p className="text-text-100 mb-12 text-base">
                Investing is one of the most effective ways to build long-term
                wealth. Whether you want to grow your savings, prepare for
                retirement, or achieve financial independence, learning how to
                invest wisely can set you on the right path. In this guide, we
                will cover the basics of investing, different investment
                options, and strategies to help beginners make informed
                decisions.
              </p>
            </div>
            <div>
              <blockquote className="text-title-50 text-xl font-semibold italic">
                “Bonds are loans to corporations or governments that pay
                interest over time. They are generally considered safer than
                stocks but offer lower returns”
              </blockquote>
              <div className="text-title-50 mt-8 flex flex-col items-center">
                <Avatar
                  src="https://cdn-tailgrids.b-cdn.net/3.0/application/blog-details/blog-details-01/author.png"
                  alt="Jenny Wilson"
                  size="md"
                  fallback="JW"
                />
                <span className="text-title-50 mt-3 block text-sm font-semibold">
                  Jenny Wilson
                </span>
                <p className="text-text-100 text-xs">Product designer @pimjo</p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-title-50 text-2xl font-semibold">
                Final Thoughts
              </h2>
              <p className="text-text-100 text-base">
                Many people keep their money in a savings account, but inflation
                gradually reduces its purchasing power. Investing helps combat
                inflation and allows your money to grow over time. Here are some
                key reasons why investing is essential:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
