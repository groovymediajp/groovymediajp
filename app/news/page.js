import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import dayjs from 'dayjs';
import {client} from '../../libs/client';

import { importPosts } from '../../libs/filters';

import HomeNews from '../../components/home/HomeNews';

export default async function Home() {
  const data = await getData();
  return (
    <>
      <Head>
        <title>お知らせ - 株式会社グルーヴィーメディア</title>
      </Head>
      <HomeNews posts={data.newsPosts} singlecolumn />
    </>
  );
}

export async function getData() {
  const newsPosts = await client.get({endpoint: 'news', queries: {limit: 20}})
  return {
    newsPosts: newsPosts.contents,
  };
}
