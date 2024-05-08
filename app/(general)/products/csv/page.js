import React from "react";

import Common from "components/content/Common";
import { convertContent } from "libs/filters";

const content = `
---
title: CSVダウンロード
date: 2023-06-08T04:00:00.000Z
---
## 日本語CSV/エクセル形式で受注データ・商品データをエクスポート

注文データや商品情報をExcelやCSVといったファイル形式でダウンロードが可能となる日本発のアプリです。有償のプランでは、それぞれの配送業者に適したフォーマットで、CSVをダウンロードできます。
CSVダウンロードは、Shopifyの注文データや商品情報をExcelやCSVといったファイル形式でダウンロードが可能となる日本発のアプリです。Excel対応のCSV / Google DriveやNumbersなどに対応したCSVの出力が可能です。 有償プランではヤマト運輸(B2クラウド, )、佐川急便(e飛伝Ⅱ, e飛伝Ⅲ, e飛伝Pro)、日本郵政(クリックポスト, ゆうパックプリントR, Webゆうパックプリント)のそれぞれの配送業者に適したフォーマットで、CSVをダウンロードすることも可能となります。 日本向けにアプリを提供するにあたり、Excelファイルを開いたときに文字化けを起こさないように対応したほか、都道府県名をコード（例：JP-13）ではなく都道府県名（例：東京都）で出力するといった配慮をしています。 日本製なので、アプリ内も日本語で使いやすくなっているほか、お客様サポートについても日本人スタッフが対応します。お客様のご要望に合わせたカスタマイズや、機能追加のお問い合わせも受け付けています。

* Shopifyの注文データや商品情報を、ExcelやCSVといったファイル形式でダウンロードが可能となります！
* 個別の注文を指定したり、期間を指定したり、未発送の注文のみを指定してのCSVダウンロードができます！
* 有償のプランに加入していただくと、ヤマト運輸・佐川急便・日本郵便のそれぞれの配送業者に適したフォーマットで、CSVをダウンロードすることができます！
* 日本の会社が提供するアプリなので、お客様の理想のストアを作るための手厚いサポートが可能です！機能は客様のご要望などをもとに随時アップデートで追加していきます！
* 数多くのShopifyストアやシステムを開発をしてきたからこそできるアプリ＆ストアのカスタマイズ提案などが可能です！お気軽にお問い合わせください！

※ カスタム開発でPDFの自動発行や、CSV自動送付なども対応した経験もございます。詳しくはお問い合わせください。

### 価格

無料プラン: 無料

プロフェッショナルプラン: 20$/月

### インストール

[インストールはこちらから](https://apps.shopify.com/csv-2)
`;

export default async function ProducDetail({ params }) {
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
