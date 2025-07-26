"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "backend",
    experience: "",
    motivation: "",
    portfolio: "",
    availableStartDate: "",
    weeklyHours: "",
    expectedHourlyRate: "",
    resume: null,
    portfolioFile: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: 実際のフォーム送信処理を実装
    // 現在はダミーの処理
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              応募ありがとうございました
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              ご応募いただき、ありがとうございます。
              <br />
              内容を確認の上、1週間以内にご連絡いたします。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/careers"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
              >
                採用情報に戻る
              </Link>
              <Link
                href="/"
                className="text-sm font-semibold text-gray-900"
              >
                ホームに戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            採用情報に戻る
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            エントリーフォーム
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            以下のフォームにご記入いただき、ご応募ください。
            <br />
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">基本情報</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              まずは基本的な情報をお聞かせください。
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  電話番号
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Position Information */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">応募職種</h2>
            
            <div className="mt-6">
              <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">
                ご希望の職種 <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <select
                  name="position"
                  id="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                >
                  <option value="backend">バックエンドエンジニア（正社員）</option>
                  <option value="engineer">サーバーサイドエンジニア（業務委託）</option>
                  <option value="other">その他（フリー相談）</option>
                </select>
              </div>
            </div>
          </div>

          {/* Experience and Skills */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">経験・スキル</h2>
            
            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">
                  これまでの経験・スキル <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <textarea
                    name="experience"
                    id="experience"
                    rows={5}
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="これまでの開発経験、使用技術、プロジェクト規模などをご記入ください。"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium leading-6 text-gray-900">
                  ポートフォリオ・GitHub等のURL
                </label>
                <div className="mt-2">
                  <input
                    type="url"
                    name="portfolio"
                    id="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Motivation */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">志望動機</h2>
            
            <div className="mt-6">
              <label htmlFor="motivation" className="block text-sm font-medium leading-6 text-gray-900">
                志望動機・弊社を選んだ理由 <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <textarea
                  name="motivation"
                  id="motivation"
                  rows={5}
                  required
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="弊社への志望動機、興味を持った理由などをご記入ください。"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          {/* Working Conditions */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">希望条件</h2>
            
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="availableStartDate" className="block text-sm font-medium leading-6 text-gray-900">
                  稼働開始可能時期
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="availableStartDate"
                    id="availableStartDate"
                    value={formData.availableStartDate}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="weeklyHours" className="block text-sm font-medium leading-6 text-gray-900">
                  希望稼働時間（週）
                </label>
                <div className="mt-2">
                  <select
                    name="weeklyHours"
                    id="weeklyHours"
                    value={formData.weeklyHours}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">選択してください</option>
                    <option value="10-20">10-20時間</option>
                    <option value="20-30">20-30時間</option>
                    <option value="30+">30時間以上</option>
                    <option value="flexible">相談したい</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="expectedHourlyRate" className="block text-sm font-medium leading-6 text-gray-900">
                  希望時給（円）
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="expectedHourlyRate"
                    id="expectedHourlyRate"
                    min="0"
                    step="100"
                    value={formData.expectedHourlyRate}
                    onChange={handleChange}
                    placeholder="3000"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  経験・スキルに応じて調整いたします。まずはご希望をお聞かせください。
                </p>
              </div>
            </div>
          </div>

          {/* File Uploads */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">書類添付</h2>
            
            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="resume" className="block text-sm font-medium leading-6 text-gray-900">
                  履歴書・職務経歴書 <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  PDF、Word形式のファイルをアップロードしてください。
                </p>
              </div>

              <div>
                <label htmlFor="portfolioFile" className="block text-sm font-medium leading-6 text-gray-900">
                  ポートフォリオ・作品集
                </label>
                <div className="mt-2">
                  <input
                    type="file"
                    name="portfolioFile"
                    id="portfolioFile"
                    accept=".pdf,.doc,.docx,.zip"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  任意です。PDF、Word、ZIP形式のファイルをアップロードできます。
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="pb-8">
            <div className="rounded-md bg-gray-50 p-4">
              <p className="text-sm text-gray-600">
                <strong>個人情報の取り扱いについて</strong>
                <br />
                ご提供いただいた個人情報は、採用選考のためにのみ使用し、
                <Link href="/privacy.html" className="text-green-600 hover:text-green-800">
                  プライバシーポリシー
                </Link>
                に従って適切に管理いたします。
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end gap-x-6">
            <Link
              href="/careers"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              キャンセル
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "送信中..." : "応募する"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}