import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { importPosts } from "../../modules/filters";

import HomePosts from "../../components/home/HomePosts";

export default function Home({ newsPosts }) {
  return (
    <>
      <Head>
        <title>ブログ - 株式会社グルーヴィーメディア</title>
      </Head>
      <HomePosts posts={newsPosts} />
    </>
  );
}
Home.propTypes = {
  newsPosts: PropTypes.array.isRequired,
};

export async function getStaticProps({ ...ctx }) {
  const newsPosts = await importPosts("blog", 30);
  return { props: { newsPosts } };
}
