import React from 'react';
import Head from 'next/head';

import HomeNews from '../components/home/HomeNews';
// import HomePosts from '../components/home/HomePosts';

import { client } from '../libs/client';

export const revalidate = 60;

export default async function Home() {
  const data = await getData();
  return (
    <>
      <Head>
        <title>株式会社グルーヴィーメディア</title>
      </Head>
      <main className='lg:relative select-none'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block text-green-500'>オンラインストアを</span>
              <span className='block'>テクノロジーでドライブする</span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Shopifyを始めとするオンラインストアプラットフォームにテクノロジーの力を。我々はアプリケーション・サービスの提供を通じ、多くの店舗や販売者を成功に導きます。
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              {/* <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  我々のヴィジョンを見る
                </a>
              </div> */}
              <div className='mt-3 rounded-md shadow sm:mt-0'>
                <a
                  href='/contact/'
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10'
                  // className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  担当者に相談する
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1585202505656-c6b17753db12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
            alt=''
          />
        </div>
      </main>
      {/* <HomePosts posts={posts} /> */}
      <HomeNews posts={data.newsPosts} />
    </>
  );
}

export async function getData() {
  const newsPosts = await client.get({endpoint: 'news', queries: {limit: 6}})
  // console.log(newsPosts);

  return {
    newsPosts: newsPosts.contents,
  };
}
