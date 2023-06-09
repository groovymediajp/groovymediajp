import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import fs from 'fs';

import { products } from '../../content/contents';
import Common from '../../components/content/Common';
import { readContentFile } from '../../modules/filters';

export default function Home({ post }) {
  console.log(post.title);
  return (
    <>
      <Head>
        <title>{`${post.title} - 株式会社グルーヴィーメディア`}</title>
      </Head>
      <Common post={post} />
    </>
  );
}
Home.propTypes = {
  post: PropTypes.object.isRequired,
};

export async function getStaticPaths() {
  return {
    paths: products.map((app) => !app.href.match('http') && { params: { slug: app.slug } }).filter((n) => n),
    fallback: false,
  };
}
export async function getPostData(id) {
  console.log(`apps/${id}`);
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
