"use client";

import React from "react";
import { Formik, Field, Form } from "formik";

export default function ContactForm() {
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const validate = (values) => {
    const errors = {};
    if (!values.company) {
      errors.company = "会社名は必須です / Company name is required";
    }
    if (!values.name) {
      errors.name = "お名前は必須です / Name is required";
    }
    if (!values.email) {
      errors.email = "メールアドレスは必須です / Email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email =
        "メールアドレスの形式が正しくありません / Invalid email address";
    }
    if (!values.type) {
      errors.type = "お問い合わせ種別は必須です / Inquiry type is required";
    }
    if (!values.content) {
      errors.content =
        "お問い合わせ内容は必須です / Contact detail is required";
    }

    return errors;
  };

  if (sent) {
    return (
      <div className="mt-6">
        <p className="text-lg font-semibold text-gray-900">
          {" "}
          お問い合わせありがとうございました。{" "}
        </p>
      </div>
    );
  }

  return (
    <Formik
      initialValues={{
        company: "",
        name: "",
        email: "",
        type: "",
        content: "",
      }}
      validate={validate}
      onSubmit={async (values) => {
        // await new Promise((r) => setTimeout(r, 500));
        console.log("onSubmit", values);

        setSending(true);

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
        } catch (error) {
          console.error(error);
          setSending(false);
          return;
        }

        setSending(false);
        setSent(true);

        scrollTo(0, 0);
      }}
    >
      {({ errors, touched, isValid }) => (
        <Form>
          <div className="space-y-12">
            <div className=" pb-2">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    会社名 / Company Name
                  </label>
                  <div className="mt-2">
                    <Field
                      id="company"
                      name="company"
                      type="company"
                      autoComplete="company"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.company && touched.company ? (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.company}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    お名前 / Your Name
                  </label>
                  <div className="mt-2">
                    <Field
                      id="name"
                      name="name"
                      type="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900pe shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.name && touched.name ? (
                    <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                  ) : null}
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    メールアドレス / Email address
                  </label>
                  <div className="mt-2">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900pe shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  ) : null}
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    電話番号 / Phone Number
                  </label>
                  <div className="mt-2">
                    <Field
                      id="phone"
                      name="phone"
                      type="phone"
                      autoComplete="phone"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900pe shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.phone && touched.phone ? (
                    <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                  ) : null}
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor=""
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    お問い合わせ種別 / Inquiry type
                  </label>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <Field
                        id="type-apps"
                        name="type"
                        type="radio"
                        value="Shopifyアプリケーションの不具合・質問 / Shopify app"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="type-apps"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Shopifyアプリケーションの不具合・質問 / Shopify app
                        support
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <Field
                        id="type-shopify"
                        name="type"
                        type="radio"
                        value="Shopifyテーマ導入、コンサルティング、開発案件へのお問い合わせ / Shopify theme development"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="type-shopify"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Shopifyテーマ導入、コンサルティング、開発案件へのお問い合わせ
                        / Shopify theme development
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <Field
                        id="type-development"
                        name="type"
                        type="radio"
                        value="その他コンサルティング、開発案件へのお問い合わせ / Other"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="type-development"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        その他コンサルティング、開発案件へのお問い合わせ / Other
                        consulting and development inquiries
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <Field
                        id="type-company"
                        name="type"
                        type="radio"
                        value="当社自体へのお問い合わせ / Contact to GroovyMedia Inc."
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="type-company"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        当社自体へのお問い合わせ / Contact to GroovyMedia Inc.
                      </label>
                    </div>
                    {errors.type && touched.type ? (
                      <p className="mt-2 text-sm text-red-600">{errors.type}</p>
                    ) : null}
                    <div className="col-span-full">
                      <label
                        htmlFor="content"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        お問い合わせ内容 / Contact detail
                      </label>
                      <div className="mt-2">
                        <Field
                          id="content"
                          name="content"
                          as="textarea"
                          rows="3"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        お問い合わせ内容をご入力ください。アプリケーションの不具合の際にはストアの管理画面のURLを含め、できるだけ詳細にご記載ください。
                      </p>
                      {errors.content && touched.content ? (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.content}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 text-xs overflow-scroll border p-4 h-40">
            ＜個人情報の取り扱いについて＞ (English below)
            <ul>
              <li>
                この入力フォームでご提供いただく個人情報は、お問い合わせを受け付けて対応するために利用します。
              </li>
              <li>当個人情報を第三者に提供することはありません。</li>
              <li>
                当個人情報の取扱いを委託することがあります。委託にあたっては、委託先における個人情報の安全管理が図られるよう、委託先に対する必要かつ適切な監督を行います。
              </li>
              <li>
                当個人情報の利用目的の通知、開示、内容の訂正・追加または削除、利用の停止・消去および第三者への提供の停止、第三者提供記録の開示（「開示等」といいます。）を受け付けております。開示等の請求等は、以下の「苦情及び相談窓口」で受け付けます。
              </li>
              <li>
                個人情報の提供は任意です。ただし、個人情報を提供されない情報によっては、上記利用目的に記載の業務に支障が生じる恐れがあります。
              </li>
              <li>
                当ホームページではクッキー等を用いておりますが、これによる個人情報の取得、利用は行っておりません。
              </li>
              <li>入力していただいた個人情報はSSLにより暗号化されます。</li>
            </ul>
            <br />
            <br />
            ＜個人情報保護管理者＞ 代表取締役　渡邊　翔太
            <br />
            ＜個人情報苦情及び相談窓口＞ 株式会社グルーヴィーメディア
            <br />
            苦情相談窓口責任者　菱沼　大輝
            <br />
            〒107-0052　東京都港区赤坂赤坂６丁目２番５号 方栄ビル3F
            <br />
            TEL：03-4530-3079　　メール：privacy@groovymedia.jp
            <br />
            （受付時間：10:00～18:00、土日祝日除く）
            <hr />
            [Handling of Personal Information]
            <br />
            The personal information provided in this form will be used only for
            the purpose of receiving and responding to inquiries.
            <ul>
              <li>
                We will not provide this personal information to any third
                party.
              </li>
              <li>
                We may outsource the handling of this personal information. When
                entrusting the handling of personal information to a third
                party, we will exercise necessary and appropriate supervision
                over the entrusted party to ensure the safe management of
                personal information by the entrusted party.
              </li>
              <li>
                In the event that the Company is entrusted with the handling of
                personal information, the Company will supervise the entrusted
                party as necessary and appropriate to ensure the safe management
                of personal information by the entrusted party. The Company
                accepts requests for disclosure, etc. (Requests for Disclosure,
                etc.). Requests for Disclosure, etc. are accepted at the
                "Personal Information Complaints and Consultation Desk" below.
              </li>
              <li>
                The provision of personal information is voluntary. However,
                depending on the information not provided, there is a
                possibility that it may interfere with the operations described
                in the above Purposes of Use.
              </li>
              <li>
                We use cookies, etc. on this website, but we do not obtain or
                use personal information through these cookies, etc.
              </li>
              <li>
                Personal information entered on this website is encrypted by
                SSL.
              </li>
            </ul>
            [Perfonal Information Protection Manager]
            <br />
            Shota Watanabe, Representative Director
            <br />
            <br />
            [Personal Information Complaints and Consultation Desk]
            <br />
            Groovy Media Corporation
            <br />
            Complaints and Inquiries Desk Manager: Daiki Hishinuma
            <br />
            Foei Building 3F, 6-2-5 Akasaka Akasaka, Minato-ku, Tokyo 107-0052,
            Japan
            <br />
            TEL: 03-4530-3079 E-mail: privacy@groovymedia.jp
            <br />
            (Office hours: 10:00-18:00, except Saturdays, Sundays and national
            holidays)
          </div>

          <p className="text-sm">
            上記を確認の上、ご同意いただける方は「同意して送信」ボタンを押してください。
            / If you agree to the above, please click the "Agree and Submit"
            button.
          </p>

          {!isValid && (
            <p className="mt-2 text-sm text-red-600">
              記載内容に不足等がございました。ご確認の上、再度送信をしてください。
              / There were some missing information in the form. Please check
              the information and send it again.
            </p>
          )}

          <div className="mt-4 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              disabled={sending}
              className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              同意をして送信 / Agree and Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
