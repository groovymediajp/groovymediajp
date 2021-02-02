import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import fs from "fs";
import { readContentFile } from "../../modules/filters";

import { attributes } from "../../content/home.md";
import Common from "../../components/content/Common";

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
  const { apps } = attributes;

  return {
    paths: apps.map((app) => ({ params: { slug: app.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const { apps } = attributes;

  let currentApp = null;
  apps.forEach((app) => {
    if (app.slug === slug) {
      currentApp = app;
    }
  });

  if (!currentApp) {
    return {
      notFound: true,
    };
  }

  const content = await readContentFile(fs, "apps/" + slug);
  // console.log("content", content);
  currentApp.content = content.content;
  // currentApp.title = null;

  return {
    props: {
      post: currentApp,
    },
  };
}
