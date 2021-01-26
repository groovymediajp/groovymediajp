import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

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
  const { services } = attributes;

  return {
    paths: services.map((service) => ({ params: { slug: service.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const { services } = attributes;

  let currentService = null;
  services.forEach((service) => {
    if (service.slug === slug) {
      currentService = service;
    }
  });

  if (!currentService) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: currentService,
    },
  };
}
