import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { importPosts } from '../modules/filters';

import HomeNews from '../components/home/HomeNews';
import HomePosts from '../components/home/HomePosts';

export default function Home({ newsPosts, posts }) {
  return (
    <>
      <Head>
        <title>株式会社グルーヴィーメディア</title>
      </Head>
      <div className='my-12 max-w-prose mx-auto'>
        <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>会社概要</h3>
          </div>
          <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
            <dl className='sm:divide-y sm:divide-gray-200'>
              <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>会社名</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  株式会社グルーヴィーメディア
                  <br />
                  (English: GroovyMedia Inc.)
                </dd>
              </div>
              <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>代表取締役</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>代表取締役　渡邊　翔太</dd>
              </div>
              <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>住所</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  〒107‐0061
                  <br />
                  東京都港区北青山2－7－13 プラセオ青山ビル3階
                </dd>
              </div>
              <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>設立</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>2007年4月</dd>
              </div>
              <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>業務内容</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  <ul>
                    <li>システム開発</li>
                    <li>オンラインストア構築・運営のコンサルティング、運用代行</li>
                    <li>インターネットメディア「サブスク」の運営</li>
                    <li>コンテンツ制作、撮影</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
Home.propTypes = {
  posts: PropTypes.array.isRequired,
  newsPosts: PropTypes.array.isRequired,
};

export async function getStaticProps({ ...ctx }) {
  const newsPosts = await importPosts('news', 6);
  const posts = await importPosts('blog', 3);

  return { props: { newsPosts, posts } };
}
