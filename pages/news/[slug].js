import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import fs from "fs";
import dayjs from "dayjs";

import { importPosts, readContentFile } from "../../modules/filters";

import Post from "../../components/article/Post";

export default function Home({ post }) {
  return (
    <>
      <Head>
        <title>お知らせ - 株式会社グルーヴィーメディア</title>
      </Head>
      <Post post={post} />
    </>
  );
}
Home.propTypes = {
  post: PropTypes.object.isRequired,
};

export async function getStaticPaths({ ...ctx }) {
  const newsPosts = await importPosts("news", -1);
  const now = dayjs();
  return {
    paths: newsPosts
      .filter((post) => now.diff(dayjs(post.date)) >= 0)
      .map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  const content = await readContentFile(fs, "news/" + slug);

  return {
    props: {
      post: content,
    },
  };
}
