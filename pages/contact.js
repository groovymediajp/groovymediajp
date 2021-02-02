import React from "react";
import Head from "next/head";

import Common from "../components/content/Common";

export default function Contact() {
  const react = (
    <>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScxms49jNR38omYi7Eyace9fU3-pCtPiZhoQBJmABnPo1KNnA/viewform?embedded=true"
        width="640"
        height="2400"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </>
  );
  const post = {
    react,
    name: "お問い合わせ",
  };
  return (
    <>
      <Head>
        <title>お問い合わせ - 株式会社グルーヴィーメディア</title>
      </Head>
      <Common post={post} />
    </>
  );
}
