import React from "react";
import Head from "next/head";
import { readContentFile } from "libs/filters";

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

export async function getPostData(id) {
  const fileContents = await readContentFile(`static/${id}`);
  return fileContents;
}
