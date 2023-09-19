import React from "react";

import Common from "components/content/Common";
import ContactForm from "components/content/ContactForm";

export const metadata = {
  title: "アプリケーションお問い合わせ - 株式会社グルーヴィーメディア",
};

export default function Contact() {
  const react = <ContactForm app />;
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
