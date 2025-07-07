import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "株式会社グルーヴィーメディア",
  description: "",
};

export default function NoLayout({ children }) {
  return (
    <html lang="ja">
      <body className="pb-8" style={{ background: "white" }}>
        {children}
      </body>
    </html>
  );
}
