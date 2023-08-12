import React from "react";

import Common from "../../components/content/Common";
import ContactForm from "@/components/content/ContactForm";

export const metadata = {
  title: "お問い合わせ - 株式会社グルーヴィーメディア",
};

export default function Contact() {
  const react = <ContactForm />;
  const post = {
    react,
    name: "お問い合わせ",
  };
  return (
    <>
      <Common post={post} />
    </>
  );
}
