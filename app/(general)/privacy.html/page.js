import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import fs from "fs";
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
  const fileContents = await readContentFile(fs, `static/${id}`);
  return fileContents;
}
