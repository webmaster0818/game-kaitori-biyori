import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: '掲載・提携のお問い合わせ | ゲーム買取びより',
  description:
    'ゲーム買取びよりへの掲載をご希望の買取サービス事業者さま向けのお問い合わせ窓口です。掲載のご相談、掲載内容の修正、取材・提携のご相談を承っています。',
  alternates: { canonical: 'https://gamekaitori-biyori.com/contact/' },
  openGraph: {
    title: '掲載・提携のお問い合わせ | ゲーム買取びより',
    description: '掲載をご希望の買取サービス事業者さま向けのお問い合わせ窓口です。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'ゲーム買取びより',
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ name: '掲載・提携のお問い合わせ' }]} />

      <h1 className="text-2xl md:text-3xl font-extrabold mt-4 mb-3" style={{ color: 'var(--color-deep-blue)' }}>
        掲載・提携のお問い合わせ
      </h1>

      <div className="rounded-xl p-5 mb-8" style={{ background: 'var(--color-bg-alt, #F1F5F9)' }}>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
          「ゲーム買取びより」への<strong>掲載をご希望の買取サービス事業者さま</strong>からのお問い合わせを承っています。
          掲載のご相談・掲載内容の修正・取材や提携のご相談など、下記フォームよりお気軽にお問い合わせください。
          内容を確認のうえ、担当者よりご連絡いたします。
        </p>
        <p className="text-xs mt-3" style={{ color: 'var(--color-text-light)' }}>
          ※ 当サイトは公式・一次情報にもとづく中立な比較を編集方針としています。掲載可否・掲載内容は当社の
          <a href="/content-policy/" className="underline" style={{ color: 'var(--color-electric-green)' }}>記事制作ポリシー</a>
          に沿って判断いたします。
        </p>
      </div>

      <ContactForm />
    </main>
  );
}
