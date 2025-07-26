import React from "react";
import Link from "next/link";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "採用情報 | 株式会社グルーヴィーメディア",
  description: "モダンな技術スタックでEC領域のSaaSを開発するエンジニアを募集しています。Python、FastAPI、AWS、Shopify API等を使用した開発環境で、プロダクト成長を支える仲間を求めています。",
};

const techStack = [
  { category: "バックエンド", technologies: ["Python", "FastAPI", "SQLAlchemy"] },
  { category: "インフラ", technologies: ["AWS（ECS, Lambda, SQS, RDS, DynamoDB）", "CloudFlare（Worker, CDN, WAF）"] },
  { category: "開発支援", technologies: ["GitHub", "GitHub Actions", "LocalStack"] },
  { category: "テスト・監視", technologies: ["Prefect", "Playwright", "Mailosaur", "Datadog", "Sentry"] },
  { category: "AI・開発効率化", technologies: ["Claude Code", "ChatGPT", "LangChain"] },
  { category: "コラボレーション", technologies: ["Notion", "Slack", "Jira"] },
];

const workingStyle = [
  "モダンな技術スタックでの開発",
  "生成AIツールを活用した効率的な開発ワークフロー",
  "要件定義から設計、実装まで一貫して携わる",
  "自律的で協調性のあるチーム開発",
  "柔軟な働き方（副業・複業歓迎）",
  "プロダクト視点での仕様設計への参画",
];

const benefits = [
  "最新技術への挑戦機会",
  "スキルアップ支援",
  "フレックス制度",
  "リモートワーク対応",
  "技術書籍・研修費支援",
  "勉強会・カンファレンス参加支援",
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Join Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              EC領域のSaaSプロダクトで、モダンな技術スタックを使って
              <br />
              プロダクト成長を支えるエンジニアを募集しています
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/careers/engineer"
                className="rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                エンジニア求人を見る
              </Link>
              <Link
                href="/contact"
                className="text-base font-semibold leading-6 text-white"
              >
                まずは相談する <ArrowRightIcon className="inline h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Company Vision */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              EC事業者の成長を技術で支える
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              私たちは、Shopifyを中心としたEC領域向けにSaaS型マーケティングツール「StoreCRM」などを展開しています。
              自動化とデータ駆動により、EC事業者様の業務効率化と売上向上を実現しています。
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Technology Stack</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              モダンな技術スタック
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              最新の技術を積極的に採用し、スケーラブルで保守性の高いシステムを構築しています
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((stack) => (
              <div key={stack.category} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold text-gray-900">{stack.category}</h3>
                <ul className="mt-4 space-y-2">
                  {stack.technologies.map((tech) => (
                    <li key={tech} className="flex items-start">
                      <CheckIcon className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span className="ml-2 text-sm text-gray-600">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Working Style */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Working Style</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              開発スタイル
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              自律性を重視し、チーム一丸となってプロダクト成長に貢献する環境です
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {workingStyle.map((style) => (
              <div key={style} className="flex items-start">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="ml-3 text-base text-gray-700">{style}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Benefits</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              働きやすい環境
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              エンジニアが最高のパフォーマンスを発揮できる環境を整えています
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="ml-3 text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Employee Interviews */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Employee Voices</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              社員インタビュー
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              実際にGroovyMediaで働くエンジニア達の声をお聞きください
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Interview Placeholder 1 */}
            <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-500">TK</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">田中 健太</h3>
                  <p className="text-sm text-gray-600">サーバーサイドエンジニア・2023年入社</p>
                </div>
              </div>
              <blockquote className="mt-6 text-gray-700">
                <p>
                  「モダンな技術スタックと生成AIツールを活用した開発環境で、
                  日々新しいことを学びながら成長できています。
                  プロダクトの企画段階から関わることができ、
                  エンジニアとしてのやりがいを感じています。」
                </p>
              </blockquote>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Python・FastAPI
                </span>
                <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  AWS・インフラ
                </span>
              </div>
            </div>

            {/* Interview Placeholder 2 */}
            <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-500">SM</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">佐藤 美咲</h3>
                  <p className="text-sm text-gray-600">フルスタックエンジニア・2022年入社</p>
                </div>
              </div>
              <blockquote className="mt-6 text-gray-700">
                <p>
                  「Shopify APIとの連携や、リアルタイム処理の実装など、
                  EC領域ならではの技術的チャレンジが多く、
                  毎日が学びの連続です。
                  チーム全体で協力しながら問題解決に取り組む文化があります。」
                </p>
              </blockquote>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                  Shopify API
                </span>
                <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  フロントエンド
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              ※より詳しい社員インタビューは準備中です。ご興味がある方はお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Case Studies</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              技術的取り組み事例
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              実際のプロダクト開発で取り組んでいる技術的チャレンジをご紹介します
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Case Study 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded bg-green-500 flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">高速データ処理基盤の構築</h3>
              </div>
              <p className="mt-4 text-gray-600">
                数百万件のECデータをリアルタイムで処理するため、
                SQS・Lambda・ECSを組み合わせた非同期処理基盤を設計・実装。
                処理時間を従来の1/10に短縮しました。
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">AWS Lambda</span>
                <span className="inline-flex items-center rounded bg-green-50 px-2 py-1 text-xs font-medium text-green-700">SQS</span>
                <span className="inline-flex items-center rounded bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700">ECS</span>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
                    </svg>
                  </div>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">AI活用による開発効率化</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Claude CodeやChatGPTを活用した開発ワークフローを構築。
                コード生成からテスト作成まで自動化し、
                開発速度を大幅に向上させています。
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="inline-flex items-center rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700">Claude Code</span>
                <span className="inline-flex items-center rounded bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700">ChatGPT</span>
                <span className="inline-flex items-center rounded bg-red-50 px-2 py-1 text-xs font-medium text-red-700">自動化</span>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded bg-purple-500 flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                  </div>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">Shopify GraphQL最適化</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Shopify GraphQL APIの効率的な活用により、
                データ取得処理を最適化。
                ページ表示速度を50%改善し、ユーザー体験を向上させました。
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="inline-flex items-center rounded bg-green-50 px-2 py-1 text-xs font-medium text-green-700">GraphQL</span>
                <span className="inline-flex items-center rounded bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700">Shopify API</span>
                <span className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">パフォーマンス</span>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              ※技術ブログでの詳細記事や登壇資料の公開を準備中です。
            </p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Open Positions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              募集職種
            </p>
          </div>
          <div className="mt-16 space-y-8">
            {/* Backend Engineer (Full-time) */}
            <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    バックエンドエンジニア（正社員）
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    グローバルSaaSプロダクトのバックエンド開発・大規模データ処理・機械学習実装
                  </p>
                  <div className="mt-2 text-sm text-gray-500">
                    年収 800万円〜1,200万円 / 東京（ハイブリッド勤務可）
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Python
                    </span>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      FastAPI
                    </span>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      AWS
                    </span>
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                      機械学習
                    </span>
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                      正社員
                    </span>
                  </div>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <Link
                    href="/careers/backend"
                    className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                  >
                    詳細を見る
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Server-side Engineer (Contract) */}
            <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    サーバーサイドエンジニア（業務委託）
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Python + FastAPI + Claude Code モダンな開発スタイルで仕様設計から開発まで
                  </p>
                  <div className="mt-2 text-sm text-gray-500">
                    時給 2,000〜6,000円 / 週10〜30時間 / 東京（リモート可）
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Python
                    </span>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      FastAPI
                    </span>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      AWS
                    </span>
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                      Shopify API
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      業務委託
                    </span>
                  </div>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <Link
                    href="/careers/engineer"
                    className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                  >
                    詳細を見る
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              一緒に働きませんか？
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-200">
              モダンな技術でプロダクト成長を支える仲間を募集しています。
              まずはお気軽にご相談ください。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/careers/apply"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-green-600 shadow-sm hover:bg-green-50"
              >
                応募する
              </Link>
              <Link
                href="/contact"
                className="text-base font-semibold leading-6 text-white"
              >
                まずは相談 <ArrowRightIcon className="inline h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}