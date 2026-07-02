import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  title: {
    default: "ゲーム買取おすすめはどこ？比較ランキング【2026年7月】毎週実測の買取価格で解説｜ゲーム買取びより",
    template: "%s｜ゲーム買取びより",
  },
  description:
    "ゲーム買取のおすすめはどこがいい？に直答。毎週実測する買取価格DBで「今どこが一番高いか」を確認しながら、高く売る・早く売る・箱なしジャンク・まとめ売りなど用途別に10社を比較。手数料を引いた実質手取りのシミュレーターつき。",
  keywords: [
    "ゲーム買取",
    "ゲーム買取 おすすめ",
    "ゲーム買取 比較",
    "ゲーム 売る",
    "ゲーム買取 ランキング",
    "Switch 買取",
    "PS5 買取",
    "レトロゲーム 買取",
  ],
  openGraph: {
    title: "ゲーム買取おすすめはどこ？比較ランキング【2026年7月】｜ゲーム買取びより",
    description:
      "毎週実測の買取価格DBで「今どこが一番高いか」を確認しながら、用途別にゲーム買取10社を比較。実質手取りシミュレーターつき。",
    type: "website",
    locale: "ja_JP",
    siteName: "ゲーム買取びより",
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenKaku.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${zenKaku.className} min-h-full flex flex-col`}>
        <Header />
        <div className="md:hidden text-right py-1 pr-4" style={{ fontSize: '11px', color: '#999', background: '#f8f8f8', borderBottom: '1px solid #eee' }}>PRを含みます</div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
