import React, { Suspense } from "react";

import Common from "components/content/Common";
import ContactForm from "components/content/ContactForm";

export const metadata = {
  title: "アプリケーションお問い合わせ - 株式会社グルーヴィーメディア",
};

function ContactFormWithSuspense() {
  return (
    <Suspense>
      <ContactForm app />
    </Suspense>
  );
}

export default function Contact() {
  const react = <ContactFormWithSuspense />;
  const post = {
    react,
    name: "アプリケーションお問い合わせ",
  };
  return (
    <>
      <Common post={post} />
    </>
  );
}
