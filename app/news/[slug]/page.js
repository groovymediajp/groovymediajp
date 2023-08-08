import React from 'react';
import Head from 'next/head';
import {client} from '../../../libs/client';

import Post from '../../../components/article/Post';

export const revalidate = 1;

export default async function NewsDetail({ params }) {
  const data = await getData(params.slug);
  return (
    <>
      <Head>
        <title>お知らせ - 株式会社グルーヴィーメディア</title>
      </Head>
      <Post post={data.post} />
    </>
  );
}

export async function generateMetadata({params}) {
  const post = await client.get({endpoint: 'news', contentId: params.slug})
  return {
    title: `${post.title} - 株式会社グルーヴィーメディア`,
  };
}

export async function getData(id) {
  const post = await client.get({endpoint: 'news', contentId: id})
  return {
    post: post,
  };
}

export async function generateStaticParams() {
  const newsPosts = await client.get({endpoint: 'news', queries: {limit: 9999, fields: "id"}})
  return newsPosts.contents.map((post) => ({ slug: post.id }))
}