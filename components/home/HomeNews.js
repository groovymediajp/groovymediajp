import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import GroovyMediaIcon from "components/layout/GroovyMediaIcon";
import { dateFormat } from "libs/funcs";

export default function HomeNews({ posts, singlecolumn }) {
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto lg:max-w-7xl">
        <div>
          <h2 className="text-center text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            お知らせ
          </h2>
        </div>
        <div
          className={
            singlecolumn
              ? "mt-12 max-w-prose mx-auto"
              : "mt-6 grid gap-16 pt-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
          }
        >
          {posts.map((post) => (
            <div key={post.slug} className={singlecolumn ? "mb-6 pb-6 " : ""}>
              <div>
                {post.tags &&
                  post.tags.split(",").map((tag) => {
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"
                    >
                      {tag}
                    </span>;
                  })}
              </div>
              <Link href={`/news/${post.id}`} className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
              </Link>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <GroovyMediaIcon />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    GroovyMedia Staff
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.publishedAt}>
                      {dateFormat(post.publishedAt, true)}
                    </time>
                    {/* <span aria-hidden="true">&middot;</span>
                      <span>6 min read</span> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
HomeNews.propTypes = {
  posts: PropTypes.array.isRequired,
  singlecolumn: PropTypes.bool,
};
HomeNews.defaultProps = {
  singlecolumn: false,
};
