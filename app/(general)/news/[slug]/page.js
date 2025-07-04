import React from "react";
import Head from "next/head";
import { client } from "libs/client";

import Post from "components/article/Post";

export const revalidate = 1;

// export const runtime = "edge";

export default async function NewsDetail({ params }) {
  const { slug } = await params;
  const data = await getData(slug);
  return (
    <>
      <Head>
        <title>お知らせ - 株式会社グルーヴィーメディア</title>
      </Head>
      <Post post={data.post} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await client.get({ endpoint: "news", contentId: slug });
  return {
    title: `${post.title} - 株式会社グルーヴィーメディア`,
  };
}

export async function getData(id) {
  const post = await client.get({ endpoint: "news", contentId: id });
  return {
    post: post,
  };
}

export async function generateStaticParams() {
  const newsPosts = await client.get({
    endpoint: "news",
    queries: { limit: 9999, fields: "id" },
  });
  return newsPosts.contents.map((post) => ({ slug: post.id }));
}
