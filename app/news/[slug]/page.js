import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import fs from 'fs';
import dayjs from 'dayjs';
import {client} from '../../../libs/client';

import { importPosts, readContentFile } from '../../../libs/filters';

import Post from '../../../components/article/Post';

export default async function Home({ params }) {
  console.log('params', params);
  const data = await getData(params.slug);
  console.log('data', data);
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
