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
      <Common post={data.post} />
    </>
  );
}

export async function generateMetadata({params}) {
  const data = await getData(params.slug);
  return {
    title: `${data.post.title} - 株式会社グルーヴィーメディア`,
  };
}

export async function getData(id) {
  const post = await readContentFile(fs, `services/${id}`);
  return {
    post: post,
  };
}

export async function generateStaticParams() {
  return services.map((app) => ({ slug: app.slug }))
}
