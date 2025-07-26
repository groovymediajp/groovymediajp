import React from "react";
import Link from "next/link";
import { 
  CheckIcon, 
  ArrowRightIcon, 
  MapPinIcon, 
  ClockIcon, 
  CurrencyYenIcon,
  BuildingOfficeIcon 
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "バックエンドエンジニア募集（正社員）| 株式会社グルーヴィーメディア",
  description: "グローバルSaaSプロダクトのバックエンド開発。Python + FastAPI、機械学習、大規模データ処理に携わる正社員バックエンドエンジニアを募集しています。",
};

const jobOverview = {
  title: "バックエンドエンジニア（正社員）",
  subtitle: "グローバルSaaSプロダクトのバックエンド開発・大規模データ処理・機械学習実装",
  type: "正社員",
  workTime: "フルタイム",
  location: "東京（ハイブリッド勤務可）",
  salary: "年収 800万円〜1,200万円",
};

const requiredSkills = [
  "Webアプリケーション開発経験（2年以上）",
  "AWS等クラウド環境での開発・運用経験",
  "Git/GitHubでのチーム開発経験",
  "サーバーレス/コンテナ/CI-CD/インフラ管理の経験",
];

const preferredSkills = [
  "テックリード/アーキテクト経験",
  "Python Webフレームワーク経験",
  "Cloudflare/Edge Runtime経験",
  "Shopify API知識",
  "生成AI開発経験",
];

const responsibilities = [
  "Python + FastAPIを用いたバックエンド開発",
  "大規模データ処理とオートメーション基盤構築",
  "CI/CDパイプライン整備",
  "API連携設計",
  "機械学習/レコメンドエンジン実装",
  "グローバルSaaSのスケーラビリティ向上",
];

const techStack = [
  { category: "バックエンド", items: ["Python", "FastAPI", "SQLAlchemy"] },
  { category: "インフラ", items: ["AWS（ECS, Lambda, SQS, RDS, DynamoDB）", "CloudFlare（Worker, CDN, WAF）"] },
  { category: "開発支援", items: ["GitHub", "GitHub Actions", "CI/CD"] },
  { category: "データ・AI", items: ["機械学習", "レコメンドエンジン", "大規模データ処理"] },
  { category: "テスト", items: ["自動化テスト", "監視・ログ基盤"] },
];

const workingConditions = [
  { label: "雇用形態", value: "正社員" },
  { label: "勤務時間", value: "フルタイム" },
  { label: "勤務地", value: "東京" },
  { label: "勤務形態", value: "ハイブリッド勤務可" },
  { label: "年収", value: "800万円〜1,200万円" },
];

const companyFeatures = [
  "グローバル市場向け製品開発",
  "エンジニア主導の技術文化",
  "AI活用の開発環境",
  "技術的挑戦を推奨",
];

export default function BackendJobPage() {
  return (
    <div className="bg-white">
      {/* Job Header */}
      <div className="bg-gray-800 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {jobOverview.title}
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              {jobOverview.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <BuildingOfficeIcon className="mr-2 h-4 w-4" />
                {jobOverview.type}
              </div>
              <div className="flex items-center">
                <ClockIcon className="mr-2 h-4 w-4" />
                {jobOverview.workTime}
              </div>
              <div className="flex items-center">
                <MapPinIcon className="mr-2 h-4 w-4" />
                {jobOverview.location}
              </div>
              <div className="flex items-center">
                <CurrencyYenIcon className="mr-2 h-4 w-4" />
                {jobOverview.salary}
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/careers/apply"
                className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-500"
              >
                この求人に応募する
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        {/* Company Background */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">事業概要</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              株式会社グルーヴィーメディアは、マーケティングオートメーション領域のグローバルSaaSプロダクトを開発しています。
              主力プロダクトの「StoreCRM」は、Shopifyストア向けのCRM/MAアプリとして、世界中のEC事業者様にご利用いただいています。
            </p>
            <p>
              私たちは、エンジニア主導の技術文化を大切にし、最新技術を積極的に取り入れながら、
              グローバル市場で競争力のあるプロダクトを創造し続けています。
            </p>
          </div>
        </section>

        {/* Job Responsibilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">業務内容</h2>
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">グローバルSaaSプロダクトのバックエンド開発に携わっていただきます：</p>
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="flex items-start">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="ml-3 text-gray-700">{responsibility}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Required Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">必須スキル・経験</h2>
          <div className="space-y-4">
            {requiredSkills.map((skill, index) => (
              <div key={index} className="flex items-start">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                <span className="ml-3 text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Preferred Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">歓迎スキル・経験</h2>
          <div className="space-y-4">
            {preferredSkills.map((skill, index) => (
              <div key={index} className="flex items-start">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                <span className="ml-3 text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">使用技術・ツール</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((stack) => (
              <div key={stack.category} className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckIcon className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span className="ml-2 text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Working Conditions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">勤務条件</h2>
          <div className="rounded-lg bg-gray-50 p-6">
            <dl className="space-y-4">
              {workingConditions.map((condition) => (
                <div key={condition.label} className="sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-900">{condition.label}:</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{condition.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Company Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">当社の特徴</h2>
          <div className="space-y-4">
            {companyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="ml-3 text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Application CTA */}
        <section className="border-t border-gray-200 pt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ご応募をお待ちしています</h2>
            <p className="text-gray-600 mb-8">
              グローバルSaaSプロダクトの開発に挑戦したい方のご応募をお待ちしています。
              <br />
              ご質問やご相談がございましたら、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers/apply"
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-500"
              >
                この求人に応募する
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
              >
                まずは相談する
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}