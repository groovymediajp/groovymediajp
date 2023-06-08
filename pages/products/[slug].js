import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import fs from 'fs';
import remark from 'remark';
import html from 'remark-html';

import { products } from '../../content/contents';
import Common from '../../components/content/Common';
import { readContentFile } from '../../modules/filters';

export default function Home({ post }) {
  return (
    <>
      <Head>
        <title>お知らせ - 株式会社グルーヴィーメディア</title>
      </Head>
      <Common post={post} />
    </>
  );
}
Home.propTypes = {
  post: PropTypes.object.isRequired,
};

export async function getStaticPaths({ ...ctx }) {
  return {
    paths: products.map((app) => ({ params: { slug: app.slug } })),
    fallback: false,
  };
}
export async function getPostData(id) {
  const fileContents = await readContentFile(fs, `apps/${id}`);
  return fileContents;
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.slug);

  return {
    props: {
      post: postData,
    },
  };
}
