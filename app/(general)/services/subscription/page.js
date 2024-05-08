import React from "react";
import { readContentFile } from "libs/filters";

import { services } from "content/contents";

import Common from "components/content/Common";

export const runtime = "edge";

const content = `
---
title: サブスクリプション支援
date: 2023-06-08T04:00:00.000Z
---

継続課金を行うサブスクリプションは理想的なビジネスモデルである一方、クレジットカードの有効期限切れやクレジットカード決済失敗、ユーザからの依頼へのサポート、チャーンレート（解約率）の改善など課題の多い事業モデルです。

弊社では Shopify を通じたサブスクリプション事業の立ち上げ支援の経験を通じて得られた経験を元に自社でサブスクリプションアプリを提供しており、そのアプリを通じたカスタム開発やコンサルティングを実施しております。また、サブスクリプションプログラムをまとめたサイト「サブスク」の運営も行っており、そこを経て他社サブスクリプション事例の比較調査や分析も行っております。

詳細につきましては担当者までお問い合わせください。
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
