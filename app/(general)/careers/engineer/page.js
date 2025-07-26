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
  title: "サーバーサイドエンジニア募集 | 株式会社グルーヴィーメディア",
  description: "Python + FastAPI + Claude Code を使ったモダンな開発環境で、EC領域のSaaSプロダクト開発に携わるサーバーサイドエンジニアを募集しています。",
};

const jobOverview = {
  title: "サーバーサイドエンジニア",
  subtitle: "Python+FastAPI+Claude Code モダンな開発スタイルで仕様設計から開発まで",
  type: "業務委託",
  workTime: "週10~30時間",
  location: "東京都港区赤坂（リモート可）",
  salary: "時給 2,000~6,000円",
  deadline: "2025/8/8",
};

const requiredSkills = [
  "PythonによるWebアプリケーション開発経験（2年以上）",
  "FastAPIまたはFlaskなどの軽量フレームワークの使用経験",
  "GitHubを用いたチーム開発経験",
  "AWSを用いた開発・運用経験（ECS、Lambda、SQSなどいずれか）",
  "要件定義や仕様設計など上流工程への理解・関心",
  "コミュニケーションを取りながら主体的に動ける方",
];

const preferredSkills = [
  "Shopify API（REST/GraphQL）の利用経験",
  "DatadogやSentryなどモダンな監視・ログ基盤の利用経験",
  "テスト自動化（Playwright、Pytest、Mailosaurなど）経験",
  "生成AI（Claude、ChatGPTなど）を用いた開発ワークフローの経験",
  "Serverless Framework、TerraformなどIaCの利用経験",
];

const responsibilities = [
  "Python（FastAPI）を用いたWebアプリケーションのバックエンド開発",
  "Claude Code など生成AIツールを活用した要件定義・仕様設計の推進",
  "GraphQLやWebhookを活用したShopifyとのデータ連携処理の構築",
  "非同期処理・ワーカー基盤（SQS, Lambda, ECSなど）を用いたスケーラブルな処理設計",
  "PrefectやPlaywrightを用いたE2Eテストの設計・自動化",
  "AWS環境下でのローカル開発支援（LocalStackなど）",
  "希望やスキルに応じて、プロジェクト全体の設計や技術選定にも関与",
];

const techStack = [
  { category: "バックエンド", items: ["Python", "FastAPI", "SQLAlchemy"] },
  { category: "インフラ", items: ["AWS（ECS, Lambda, SQS, RDS, DynamoDB）", "CloudFlare（Worker, CDN, WAF）"] },
  { category: "開発支援", items: ["GitHub", "GitHub Actions", "LocalStack"] },
  { category: "テスト", items: ["Prefect", "Playwright", "Mailosaur"] },
  { category: "コラボレーション", items: ["Notion", "Slack", "Jira"] },
  { category: "AI・開発効率化", items: ["Claude Code", "ChatGPT", "LangChain"] },
];

const workingConditions = [
  { label: "契約形態", value: "業務委託" },
  { label: "稼働時間", value: "週10~30時間（週2日〜5日）" },
  { label: "勤務地", value: "東京都港区赤坂6-4-15 シティマンション赤坂2F" },
  { label: "最寄り駅", value: "千代田線 赤坂駅徒歩3分" },
  { label: "リモート", value: "応相談（当初はオフラインでの作業を想定）" },
  { label: "報酬", value: "時給 or 月額：スキル・稼働日数に応じて応相談（¥2,500〜¥6,000/h 程度）" },
  { label: "その他", value: "働き方の柔軟性あり（副業・複業も歓迎）" },
];

const idealCandidate = [
  "モダンな技術スタックで開発したい方",
  "プロダクト視点で仕様設計に関わりたい方",
  "自律的に動きながら、チームと協調して開発できる方",
  "経験を積んでスキルアップしたい20〜30代の中堅〜若手エンジニア歓迎",
];

export default function EngineerJobPage() {
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">募集背景</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              弊社は、Shopifyを中心としたEC領域向けにSaaS型マーケティングツール「StoreCRM」などを展開しているスタートアップです。
              現在はプロダクトの成長に伴い、さらなる機能追加・システム刷新・新規サービス開発が必要となっており、
              設計から開発、場合によってはAI活用による要件整理までリードできるエンジニアを募集しています。
            </p>
          </div>
        </section>

        {/* Job Responsibilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">業務内容</h2>
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">以下のような業務に携わっていただきます：</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">契約形態・報酬</h2>
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

        {/* Ideal Candidate */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">求める人物像</h2>
          <div className="space-y-4">
            {idealCandidate.map((trait, index) => (
              <div key={index} className="flex items-start">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="ml-3 text-gray-700">{trait}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Reference Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">参考リンク</h2>
          <div className="space-y-2">
            <div>
              <span className="text-sm font-medium text-gray-900">当社HP: </span>
              <a href="https://www.groovymedia.jp/" className="text-sm text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                https://www.groovymedia.jp/
              </a>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900">製品ページ: </span>
              <a href="https://www.storecrm.com/" className="text-sm text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                https://www.storecrm.com/
              </a>
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="border-t border-gray-200 pt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ご応募をお待ちしています</h2>
            <p className="text-gray-600 mb-8">
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