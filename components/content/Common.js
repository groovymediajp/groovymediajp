import React from "react";
import PropTypes from "prop-types";

// import { dateFormat } from "../../modules/funcs";

export default function Common({ post }) {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <div className="text-center">
              {post.tags &&
                post.tags.split(",").map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-0.5 mx-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            {/* <span className="block text-base text-center text-green-600 font-semibold tracking-wide uppercase">
              {dateFormat(post.date, false)}
            </span> */}
            <span className="mt-2 pb-8 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.title || post.name}
            </span>
          </h1>
        </div>
        <div className=" max-w-prose mx-auto" style={{ minHeight: "800px" }}>
          <div className="text-lg">
            <p className="mt-8 text-xl text-gray-500 leading-8">
              {post.description}
            </p>
          </div>
          {post.content && (
            <div
              className="mt-12 prose prose-green prose-lg text-gray-500 mx-auto"
              dangerouslySetInnerHTML={{
                __html: post.content.replace("<a ", '<a target="_blank" '),
              }}
            ></div>
          )}
          {post.react && (
            <div className="mt-12 prose prose-green prose-lg text-gray-500 mx-auto">
              {post.react}
            </div>
          )}
          {post.name && post.name.indexOf("お問い合わせ") === -1 && (
            <div className="text-center mt-10">
              <div className="mt-3 rounded-md shadow sm:mt-0">
                <a
                  href="/contact/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  // className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  担当者に相談する
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
Common.propTypes = {
  post: PropTypes.object.isRequired,
};
