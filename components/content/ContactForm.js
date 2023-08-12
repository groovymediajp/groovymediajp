"use client";

import React from "react";
import { Formik, Field, Form } from "formik";

export default function ContactForm() {
  const [sending, setSending] = React.useState(false);
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
      }}
    >
      {({ errors, touched, isValid }) => (
        <Form>
          <div className="space-y-12">
            <div className=" pb-12">
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
                        value="apps"
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
                        value="shopify"
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
                        value="development"
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
                        value="company"
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

          {!isValid && (
            <p className="mt-2 text-sm text-red-600">
              記載内容に不足等がございました。ご確認の上、再度送信をしてください。
              / There were some missing information in the form. Please check
              the information and send it again.
            </p>
          )}

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              disabled={sending}
              className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              送信 / Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
