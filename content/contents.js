import {
  ArrowPathIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export const products = [
  {
    name: "かんたんサブスク",
    description:
      "Shopifyでサブスクを構築可能にします。自動のテーマインストール〜サブスク構築支援も含まれております。",
    href: "https://subscription.groovymedia.jp/",
    image: "/assets/apps/subscription.png",
    slug: "subscription",
    remote: true,
  },
  {
    name: "かんたん会計freee売上データ連携",
    description:
      "会計freeeにShopifyの注文データを売上として自動で計上します。Shopifyと会計freeeを併用されている方にオススメです。",
    href: "/products/freee",
    image: "/assets/apps/freee.png",
    slug: "freee",
  },
  {
    name: "CSVダウンロード",
    description: "CSV/Excel形式でShopifyの注文や商品をエクスポートします",
    href: "/products/csv",
    image: "/assets/apps/csv.png",
    slug: "csv",
  },
  {
    name: "かんたん商品カスタムオーダー",
    description: "カスタムオーダー・課金追加などを実現します",
    href: "/products/customorder",
    image: "/assets/apps/customorder.png",
    slug: "customorder",
  },
  // { name: 'Obake - StoreCRM', description: 'かんたんにメールマーケティングを自動化します', href: '/products/obake', image: '/assets/apps/obake.png', slug: 'obake' },
];
export const services = [
  {
    name: "Shopifyアプリ カスタム開発",
    description:
      "Shopifyのテーマ/既存アプリだけでは不十分さを感じていませんか。御社のオペレーションや会計に基づいたカスタムアプリを開発します。要件として何を作るべきかの支援〜実開発までを行っています。",
    href: "/services/appdev",
    icon: CodeBracketIcon,
    slug: "appdev",
  },
  {
    name: "Shopifyストア 開設・運営支援",
    description:
      "Shopifyのストアをどう開設するべきか、デザインや運営を支援し、体制構築をサポートします。まだ、実運営支援及び、運営の自動化を実現するためのシステム・アプリ導入支援も行っています。",
    href: "/services/storedev",
    icon: ShoppingCartIcon,
    slug: "storedev",
  },
  {
    name: "サブスクリプション支援",
    description:
      "継続課金ビジネスは導入することで御社の収益モデルを根本から変える可能性がある一方、独特の難しさ、大変さが存在します。それらをアドバイスし、成功に導きます。",
    href: "/services/subscription",
    icon: ArrowPathIcon,
    slug: "subscription",
  },
];
export const callsToAction = [
  {
    name: "Shopifyストアで見る",
    href: "https://apps.shopify.com/partners/groovymedia-inc1",
    icon: ShoppingCartIcon,
  },
  { name: "営業に問い合わせる", href: "/contact/", icon: EnvelopeIcon },
];
