import React from "react";

import { products } from "content/contents";
import Common from "components/content/Common";
import { convertContent } from "libs/filters";

export const runtime = "edge";

const content = `
---
title: かんたん商品カスタムオーダー
date: 2023-06-08T04:00:00.000Z
---

## かんたんにカスタムオーダーを作成

かんたんに商品のオプションを追加できる日本製アプリです。オプションの種類はテキストフォームなど5種類を用意しているほか、オプションによって追加の料金が発生するような設定も可能です。
かんたんに商品のオプションを追加できるアプリです。オプションを追加したい商品のタグを利用してオプションの指定ができるので、いつでも好きな商品にオプションを追加することができます。 オプションの種類はテキストフォーム・チェックボックス・ドロップダウン・選択肢（ラジオボタン）・複数の数値の指定（ 幅・丈・高さ・量り売りなど）の5種類を用意しています。オプションによって追加の料金が発生するような設定も可能です。 さらに、ストアのお客様が追加したオプションに指定・入力した値によって、別のオプションを出し分ける機能もあります。 日本製のアプリなので、お問い合わせなどの対応も日本語で徹底サポートさせていただきます。

* オプションを追加したい商品のタグを利用してオプションの指定ができるので、いつでも好きな商品にオプションを追加することができます。
* オプションの種類はテキストフォームなどの5種類を用意しています。オプションによって追加の料金が発生するような設定も可能です。
* ストアのお客様が追加したオプションに指定・入力した値によって、別のオプションを出し分ける機能もあります。

### 価格

無料プラン: 無料

ベーシックプラン: 19$/月

プロフェッショナルプラン: 49$/月

エンタープライズプラン: 199$/月

### インストール

[インストールはこちらから](https://apps.shopify.com/shopify-application-347)
`;

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
  const post = await convertContent(content);
  return {
    post: post,
  };
}
