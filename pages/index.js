import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { importNews } from "../modules/filters";

import HomeNews from "../components/home/HomeNews";
import HomePosts from "../components/home/HomePosts";

export default function Home({ newsPosts, posts }) {
  return (
    <>
      <Head>
        <title>株式会社グルーヴィーメディア</title>
      </Head>
      <main className="lg:relative select-none">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block text-indigo-600 xl:inline">
                オンラインストアを
              </span>
              <span className="block xl:inline">
                テクノロジーでドライブする
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Shopifyを始めとするオンラインストアプラットフォームを活用したアプリケーション・サービスの提供を通じ、多くの店舗や販売者を成功に導きます。
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  我々のヴィジョンを見る
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  担当者に相談する
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </main>
      <HomePosts posts={posts} />
      <HomeNews posts={newsPosts} />
    </>
  );
}
Home.propTypes = {
  posts: PropTypes.array.isRequired,
  newsPosts: PropTypes.array.isRequired,
};

export async function getStaticProps({ ...ctx }) {
  const newsPosts = await importNews();
  return { props: { newsPosts, posts: newsPosts.slice(0, 3) } };
}
