import React from "react";
import Head from "next/head";

export const metadata = {
  title: "会社案内 - 株式会社グルーヴィーメディア",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>株式会社グルーヴィーメディア</title>
      </Head>
      <div className="my-12 max-w-prose mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              会社概要
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">会社名</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  株式会社グルーヴィーメディア
                  <br />
                  (English: GroovyMedia Inc.)
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  代表取締役
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  代表取締役 渡邊 翔太
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  その他役職
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  最高情報責任者兼最高セキュリティ責任者 渡邊 翔太
                  <br />
                  プライバシーポリシー苦情相談窓口責任者　菱沼　大輝
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">住所</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  〒107‐0052
                  <br />
                  東京都港区赤坂赤坂６丁目４番１５号 シティマンション赤坂2F
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">設立</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  2007年4月
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">業務内容</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul>
                    <li>オンラインストア向け ソフトウェアの開発・販売</li>
                    <li>
                      オンラインストア構築・運営のコンサルティング、運用代行
                    </li>
                    <li>システム開発・開発体制構築 </li>
                  </ul>
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">取得認証</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  プライバシーマーク 22000471（01）号
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
