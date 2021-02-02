import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import GroovyMediaIcon from "../layout/GroovyMediaIcon";
import { dateFormat } from "../../modules/filters";

export default function HomePosts({ posts }) {
  // if (!posts || posts.length <= 0) {
  return null;
  // }
  // return (
  //   <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  //     <div className="absolute inset-0">
  //       <div className="bg-white h-1/3 sm:h-2/3"></div>
  //     </div>
  //     <div className="relative max-w-7xl mx-auto">
  //       <div className="text-center">
  //         <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
  //           GroovyMedia blog
  //         </h2>
  //         <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
  //           オンラインストアに関する技術情報や、マーケティング情報などをお伝えします。
  //         </p>
  //       </div>
  //       <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
  //         {posts.map((post) => (
  //           <div
  //             key={post.slug}
  //             className="flex flex-col rounded-lg shadow-lg overflow-hidden"
  //           >
  //             <Link href={`/articles/${post.slug}`}>
  //               <a className="block flex-shrink-0">
  //                 <img
  //                   className="h-48 w-full object-cover"
  //                   src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
  //                   alt=""
  //                 />
  //               </a>
  //             </Link>
  //             <div className="flex-1 bg-white p-6 flex flex-col justify-between">
  //               <div className="flex-1">
  //                 <div>
  //                   {post.tags &&
  //                     post.tags.split(",").map((tag) => (
  //                       <span
  //                         key={tag}
  //                         className="inline-flex items-center mr-2 px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"
  //                       >
  //                         {tag}
  //                       </span>
  //                     ))}
  //                 </div>
  //                 <Link href={`/articles/${post.slug}`}>
  //                   <a className="block mt-2">
  //                     <p className="text-xl font-semibold text-gray-900">
  //                       {post.title}
  //                     </p>
  //                     <p className="mt-3 text-base text-gray-500">
  //                       {post.excerpt}
  //                     </p>
  //                   </a>
  //                 </Link>
  //               </div>
  //               <div className="mt-6 flex items-center">
  //                 <div className="flex-shrink-0">
  //                   <GroovyMediaIcon />
  //                 </div>
  //                 <div className="ml-3">
  //                   <p className="text-sm font-medium text-gray-900">
  //                     GroovyMedia Staff
  //                   </p>
  //                   <div className="flex space-x-1 text-sm text-gray-500">
  //                     <time dateTime={post.date}>
  //                       {dateFormat(post.date, true)}
  //                     </time>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
}
HomePosts.propTypes = {
  posts: PropTypes.array.isRequired,
};
