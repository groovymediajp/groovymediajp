import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import fs from 'fs';

import { products } from '../../../content/contents';
import Common from '../../../components/content/Common';
import { readContentFile } from '../../../libs/filters';

export default async function ProducDetail({ params }) {
  const data = await getData(params.slug);
  return (
    <>
      <Head>
        <title>{`${data.post.title} - 株式会社グルーヴィーメディア`}</title>
      </Head>
      <Common post={data.post} />
    </>
  );
}

export async function getData(id) {
  const post = await readContentFile(fs, `products/${id}`);
  return {
    post: post,
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: products.map((app) => !app.href.match('http') && { params: { slug: app.slug } }).filter((n) => n),
//     fallback: false,
//   };
// }
// export async function getPostData(id) {
//   console.log(`products/${id}`);
//   const fileContents = await readContentFile(fs, `products/${id}`);
//   return fileContents;
// }

// export async function getStaticProps({ params }) {
//   // Add the "await" keyword like this:
//   const postData = await getPostData(params.slug);

//   return {
//     props: {
//       post: postData,
//     },
//   };
// }
