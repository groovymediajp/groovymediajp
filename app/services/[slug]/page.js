import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import fs from 'fs';
import { readContentFile } from '../../../libs/filters';

import { services } from '../../../content/contents';

import Common from '../../../components/content/Common';

export default async function ServiceDetail({ params }) {
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
  const post = await readContentFile(fs, `services/${id}`);
  return {
    post: post,
  };
}

// Home.propTypes = {
//   post: PropTypes.object.isRequired,
// };

// export async function getStaticPaths() {
//   return {
//     paths: services.map((app) => ({ params: { slug: app.slug } })),
//     fallback: false,
//   };
// }
// export async function getPostData(id) {
//   const fileContents = await readContentFile(fs, `services/${id}`);
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
