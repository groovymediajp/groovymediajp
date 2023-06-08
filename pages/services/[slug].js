import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import fs from 'fs';
import { readContentFile } from '../../modules/filters';

import { services } from '../../content/contents';

import Common from '../../components/content/Common';

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

export async function getStaticPaths() {
  return {
    paths: services.map((service) => ({ params: { slug: service.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  let currentService = null;
  services.forEach((service) => {
    if (service.slug === slug) {
      currentService = service;
    }
  });

  if (!currentService) {
    return {
      notFound: true,
    };
  }

  const content = await readContentFile(fs, 'services/' + slug);
  currentService.content = content.content;

  return {
    props: {
      post: currentService,
    },
  };
}
