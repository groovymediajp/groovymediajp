import React from "react";

import { products } from "content/contents";
import Common from "components/content/Common";
import { convertContent } from "libs/filters";

export const runtime = "edge";

const content = `
---
title: かんたん会計freee売上データ連携
date: 2023-06-08T04:00:00.000Z
---
## 会計freeeとShopifyの売上を簡単に連動させます

注文データをfreee会計に連携できるアプリです。毎日発生する注文を、自動／手動で連携できます。決済手数料や送料などを商品とは別の勘定科目で記帳することもできます。軽減税率やPOSにも対応しています。
毎日発生するShopifyの注文データを、freee会計へ勘定科目・取引先・メモタグ・部門・品目を指定して自動で連携することができます。 注文をfreee会計へ連携するにあたって、決済手数料や送料、消費税、割引などにそれぞれ別の勘定科目を指定してfreee会計へ記帳することも可能なうえ、「記帳しない」「商品の勘定科目と合わせる」設定にもできます。POSへの対応も可能となっています。 Shopifyペイメントの決済手数料を記帳することができるので、freee会計へ記帳された未決済取引の消込もスムーズに行うことができます。 freee会計への連携を自動に設定した場合、毎日自動でfreee会計への連携を実行します。手動で注文の発生した期間を指定して連携をすることも可能です。また、freee会計で一度削除したデータも「強制記帳」で再連携することができます。 さらに、Shopifyの商品在庫を棚卸として記帳することを支援するための棚卸処理機能も用意しています。

* 毎日発生する注文を自動、または手動でfreeeへ連携できます。過去の注文の手動連携、勘定科目、取引メモ、取引先の設定、取引メモに表示する項目の調整ができます。
* 注文を連携するにあたって、特定の注文の決済手数料や送料、割引や消費税などにそれぞれ別の勘定科目を指定してfreee会計へ記帳可能です。
* freee会計へ記帳された未決済取引の消込も、Shopifyペイメントの決済手数料も記帳することができるのでスムーズに行うことができます。
* freee会計へのデータの記帳方法もカスタマイズできます。機能の追加のご要望などあれば、お気軽にお問い合わせください。

### 価格

基本プラン：無料

ライトプラン: 14$/月 (50件を超過する記帳には0.3$/件)

ベーシックプラン: 29$/月 (200件を超過する記帳には0.15$/件)

アドバンスドプラン: 49$/月 (600件を超過する記帳には0.05$/件)

エンタープライズプラン: 99$/月 (記帳無制限)

### インストール
[インストールはこちらから](https://apps.shopify.com/freee)
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
