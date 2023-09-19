import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import fs from "fs";
import { readContentFile } from "libs/filters";

export default async function Privacy() {
  const post = await getPostData("privacy");
  return (
    <>
      <Head>
        <title>{`${post.title} - 株式会社グルーヴィーメディア`}</title>
      </Head>
      {post.content && (
        <div
          className="mt-12 prose prose-green prose-lg text-gray-500 mx-auto"
          dangerouslySetInnerHTML={{
            __html: post.content.replace("<a ", '<a target="_blank" '),
          }}
        ></div>
      )}
    </>
  );
}

export async function getPostData(id) {
  const fileContents = await readContentFile(fs, `static/${id}`);
  return fileContents;
}
