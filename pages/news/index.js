import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { importNews } from "../../modules/filters";

import HomeNews from "../../components/home/HomeNews";

export default function Home({ newsPosts }) {
  return (
    <>
      <Head>
        <title>お知らせ - 株式会社グルーヴィーメディア</title>
      </Head>
      <HomeNews posts={newsPosts} />
    </>
  );
}
Home.propTypes = {
  newsPosts: PropTypes.array.isRequired,
};

export async function getStaticProps({ ...ctx }) {
  const newsPosts = await importNews(30);
  return { props: { newsPosts } };
}
