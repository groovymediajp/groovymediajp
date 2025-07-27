import React from "react";
import Head from "next/head";
import { convertContent } from "libs/filters";
import { content } from "libs/static_en";

import Common from "components/content/Common";

export default async function Privacy() {
  const post = await getPostData("privacy");
  return (
    <>
      <Head>
        <title>{`${post.title} - Groovy Media, Inc.`}</title>
      </Head>
      <Common post={post} />
    </>
  );
}

export async function getPostData() {
  const fileContents = await convertContent(content);
  return fileContents;
}