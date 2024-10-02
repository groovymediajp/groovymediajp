import React from "react";
import Head from "next/head";

export const metadata = {
  title: "掲示内容 - 株式会社グルーヴィーメディア",
};

export default function Keiji() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="my-12 max-w-prose mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              その他掲示内容
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  一般事業主行動計画書
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <a target="_blank" href="/assets/pdf/ippankeikakuR060901.pdf">
                    一般事業主行動計画書
                  </a>
                  (令和6年9月1日〜 掲示日時: 2024年10月1日)
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
