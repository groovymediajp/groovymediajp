import React from "react";
import { readContentFile } from "libs/filters";

import { services } from "content/contents";

import Common from "components/content/Common";

export const runtime = "edge";

const content = `
---
title: Shopifyアプリ カスタム開発
date: 2023-06-08T04:00:00.000Z
---

Shopify で公開済みのアプリから非公開のアプリまで公開、開発、利用してきた経験を元に事業に最適なアプリ開発、当社既製のアプリのカスタマイズ導入を行います。

特に当社で多く実例があるアプリ分野は以下の通りです。

- サブスクリプションシステムのカスタマイズ導入
- ポイント導入、既存ポイントとの連動
- 受発注フローとのつなぎ込み/納品書自動発行

既製アプリの開発経験のあるチームに相談したい方はぜひリモートでの１時間程度のご相談をご検討ください。
`;

export default async function ServiceDetail({ params }) {
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

export async function getData(id) {
  const post = await readContentFile(content);
  return {
    post: post,
  };
}

export async function generateStaticParams() {
  return services.map((app) => ({ slug: app.slug }));
}
