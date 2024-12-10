"use client";

import React from "react";
import { Formik, Field, Form } from "formik";

import { useSearchParams } from "next/navigation";

export default function ContactForm({ app }) {
  const searchParams = useSearchParams();
  console.log("user_id", searchParams.get("user_id"));
  console.log("app", app);
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [ticketId, setTicketId] = React.useState(null);
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
    if (!app) {
      if (!values.type) {
        errors.type = "お問い合わせ種別は必須です / Inquiry type is required";
      }
    }

    if (!values.content) {
      errors.content =
        "お問い合わせ内容は必須です / Contact detail is required";
    }
    if (!values.phone) {
      errors.phone = "電話番号は必須です / Phone number is required";
    }

    return errors;
  };

  const appNames = [
    { value: "会計freee連動アプリ", label: "会計freee連動アプリ" },
    { value: "かんたんサブスク", label: "かんたんサブスク" },
    {
      value: "StoreCRM",
      label: "StoreCRM",
    },
    {
      value: "日本対応CSV/Excelダウンロード",
      label: "日本対応CSV/Excelダウンロード",
    },
    {
      value: "かんたん商品カスタムオーダー",
      label: "かんたん商品カスタムオーダー",
    },
    {
      value: "会計freee連動アプリ_COLORME版",
      label: "会計freee連動アプリ_COLORME版",
    },
    { value: "その他のアプリ・サポート", label: "その他のアプリ・サポート" },
  ];
  const inquiryTypes = [
    { value: "機能の不具合", label: "機能の不具合" },
    { value: "新機能の要望", label: "新機能の要望" },
    { value: "設定について", label: "設定について" },
    { value: "料金について", label: "料金について" },
    { value: "打ち合わせ希望", label: "打ち合わせ希望" },
    { value: "その他", label: "その他" },
  ];

  if (sent) {
    return (
      <div className="mt-6">
        <p className="text-lg font-semibold text-gray-900">
          {" "}
          お問い合わせありがとうございました。
          <br />
          チケットID: {ticketId}
          <br />
          ※お問い合わせの際にはチケットIDをご連絡いただけるとスムーズとなります。
        </p>
      </div>
    );
  }

  return (
    <Formik
      initialValues={{
        company: searchParams.get("company") || "",
        name: searchParams.get("name") || "",
        email: searchParams.get("email") || "",
        type: searchParams.get("email") || "",
        content: searchParams.get("user_id")
          ? `システム ユーザID: ${searchParams.get("user_id")}\n\n`
          : "",
        appname: searchParams.get("appname") || "",
        phone: searchParams.get("phone") || "",
        shopifyadmin: searchParams.get("shopifyadmin") || "",
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
          if (response.status !== 200) {
            throw new Error(await response.text());
          }
          const data = await response.json();
          setTicketId(data.id);
        } catch (error) {
          console.error(error);
          alert(
            "エラーが発生しました。お手数ですが、再度お試しください。 / Error occured. Please try again."
          );
          setSending(false);
          return;
        }

        setSending(false);
        setSent(true);

        scrollTo(0, 0);
      }}
    >
      {({ errors, touched, isValid, values }) => (
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

                {app && (
                  <>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="appname"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        アプリの種類 / App Name
                      </label>
                      <div className="mt-2">
                        <Field
                          id="appname"
                          name="appname"
                          type="appname"
                          as="select"
                          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900pe shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option>--</option>
                          {appNames.map((app) => (
                            <option key={app.value} value={app.value}>
                              {app.label}
                            </option>
                          ))}
                        </Field>
                      </div>
                      {errors.appname && touched.appname ? (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.appname}
                        </p>
                      ) : null}
                    </div>

                    {values.appname !== "会計freee連動アプリ_COLORME版" && (
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="shopifyadmin"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Shopify管理画面URL / Shopify Admin URL
                        </label>
                        <div className="mt-2">
                          <Field
                            id="shopifyadmin"
                            name="shopifyadmin"
                            type="shopifyadmin"
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900pe shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                          管理画面のURLをコピーアンドペーストして入れてください。(*.myshopify.com
                          もしくは admin.shopify.com/***/ のようなURLです )
                        </p>
                        {errors.shopifyadmin && touched.shopifyadmin ? (
                          <p className="mt-2 text-sm text-red-600">
                            {errors.nashopifyadminme}
                          </p>
                        ) : null}
                      </div>
                    )}

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="appinquirytype"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        お問い合わせの種類 / App Inquiry type
                      </label>
                      <div className="mt-2">
                        <Field
                          id="appinquirytype"
                          name="appinquirytype"
                          type="appinquirytype"
                          as="select"
                          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900pe shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option>--</option>
                          {inquiryTypes.map((app) => (
                            <option key={app.value} value={app.value}>
                              {app.label}
                            </option>
                          ))}
                        </Field>
                      </div>
                      {errors.appinquirytype && touched.appinquirytype ? (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.appinquirytype}
                        </p>
                      ) : null}
                    </div>
                  </>
                )}

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

                {!app && (
                  <>
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
                            その他コンサルティング、開発案件へのお問い合わせ /
                            Other consulting and development inquiries
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="col-span-full">
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
                &quot;Personal Information Complaints and Consultation
                Desk&quot; below.
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
            / If you agree to the above, please click the &quot;Agree and
            Submit&quot; button.
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
