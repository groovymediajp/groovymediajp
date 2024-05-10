import React from "react";
import Head from "next/head";
import { convertContent } from "libs/filters";
import { content } from "libs/static";

import Common from "components/content/Common";

export default async function Privacy() {
  const post = await getPostData("privacy");
  return (
    <>
      <Head>
        <title>{`${post.title} - 株式会社グルーヴィーメディア`}</title>
      </Head>
      <Common post={post} />
    </>
  );
}

export async function getPostData() {
  const fileContents = await convertContent(content);
  return fileContents;
}
