import React from "react";
import { convertContent } from "libs/filters";

import Common from "components/content/Common";

const content = `
---
title: Shopifyストア 開設・運営支援
date: 2023-06-08T04:00:00.000Z
---

Shopify ストアをただ開設すること自体は非常に容易です。一方、Shopify ストアを使って良い体験し、継続した売上を作り出すには、Shopify 単体の経験だけではなくアプリとの連動や顧客管理システム/マーケティングオートメーションシステムとの連動を設計する必要が出てきます。

当社ではアプリ開発やテーマ構築を多く実施してきた体験から、テクノロジーサイドとマーケティングサイドを両立させた構築を実施しております。

特に強い分野は下記の通りです。

- サブスクリプションサイトの構築（アプリのカスタマイズ＋テーマ構築）
- 優れた検索体験の構築(リアルタイム検索)
- カスタムオーダー/丈つめなどの購入時オプション導入
- 複数サイトの在庫数連動
- 複数仕入元の商品掲載＋自動発送対応
`;

export default async function ServiceDetail({ params }) {
  const data = await getData();
  return (
    <>
      <Common post={data.post} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const data = await getData();
  return {
    title: `${data.post.title} - 株式会社グルーヴィーメディア`,
  };
}

export async function getData() {
  const post = await convertContent(content);
  return {
    post: post,
  };
}
