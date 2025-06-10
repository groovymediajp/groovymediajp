# GroovyMedia プロジェクト

このリポジトリは、Next.js をベースにした Web サイト/サービスのフロントエンドプロジェクトです。

## ディレクトリ構成

```
├── app/           # ルーティング・グローバルCSS・APIエンドポイント
├── components/    # UIコンポーネント群
│   ├── article/   # 記事表示用コンポーネント
│   ├── content/   # 各種フォームや共通部品
│   ├── home/      # トップページ用コンポーネント
│   └── layout/    # レイアウト・ヘッダー・フッター等
├── content/       # サイト内コンテンツ（md, js）
│   ├── products/  # プロダクト紹介
│   ├── services/  # サービス紹介
│   └── static/    # 静的ページ（プライバシーポリシー等）
├── libs/          # 各種ユーティリティ・外部連携
├── public/        # 静的ファイル（画像・アイコン等）
├── .next/         # Next.jsビルド成果物
├── .yarn/         # Yarn関連
├── ...            # その他設定ファイル
```

## 開発手順

1. 依存パッケージのインストール
   ```bash
   yarn install
   ```
2. 開発サーバー起動
   ```bash
   yarn dev
   ```
3. http://localhost:3000 で動作確認

## 主要依存

- Next.js
- React
- Tailwind CSS
- その他は package.json を参照

## コントリビュート

- プルリクエスト前に `yarn lint` で Lint チェックを行ってください。
- コード規約や詳細な開発ルールは `docs/` ディレクトリを参照してください（今後整備予定）。

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
