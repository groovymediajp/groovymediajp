import React from 'react';
import Head from 'next/head';
import {client} from '../../../libs/client';

import Post from '../../../components/article/Post';

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

export async function getData(id) {
  const post = await client.get({endpoint: 'news', contentId: id})
  return {
    post: post,
  };
}
