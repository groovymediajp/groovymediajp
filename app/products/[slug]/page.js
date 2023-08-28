import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import fs from "fs";

import { products } from "../../../content/contents";
import Common from "../../../components/content/Common";
import { readContentFile } from "../../../libs/filters";

// export const runtime = "edge";

export default async function ProducDetail({ params }) {
  const data = await getData(params.slug);
  return (
    <>
      <Common post={data.post} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const data = await getData(params.slug);
  return {
    title: `${data.post.title} - 株式会社グルーヴィーメディア`,
  };
}

export async function generateStaticParams() {
  return products
    .filter((product) => !product.remote)
    .map((app) => ({ slug: app.slug }));
}

export async function getData(id) {
  const post = await readContentFile(fs, `products/${id}`);
  return {
    post: post,
  };
}
