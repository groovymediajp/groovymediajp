import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
// import styles from "../styles/Home.module.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { importNews } from "../modules/filters";

export default function Home({ news }) {
  console.log("news", news);

  return (
    <>
      <Head>
        <title>株式会社グルーヴィーメディア</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="lg:relative">
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
                  担当者と話す
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
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <div>
            <h2 className="text-center text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              お知らせ
            </h2>
          </div>
          <div className="mt-6 grid gap-16 pt-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {news.map((newsRow) => (
              <div key={newsRow.slug}>
                <div>
                  {newsRow.tags &&
                    newsRow.tags.split(",").map((tag) => {
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        {tag}
                      </span>;
                    })}
                </div>
                <a href={`/news/${newsRow.slug}.html`} className="block mt-4">
                  <p className="text-xl font-semibold text-gray-900">
                    {newsRow.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {newsRow.excerpt}
                  </p>
                </a>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">GroovyMedia Staff</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      GroovyMedia Staff
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-03-16">{newsRow.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
Home.propTypes = {
  news: PropTypes.array.isRequired,
};

export async function getStaticProps({ ...ctx }) {
  const news = await importNews();
  return { props: { news } };
}
