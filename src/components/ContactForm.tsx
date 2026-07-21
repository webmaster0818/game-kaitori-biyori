'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    const fd = new FormData(e.currentTarget);
    const payload = {
      type: String(fd.get('type') || ''),
      service: String(fd.get('service') || ''),
      company: String(fd.get('company') || ''),
      person: String(fd.get('person') || ''),
      email: String(fd.get('email') || ''),
      tel: String(fd.get('tel') || ''),
      message: String(fd.get('message') || ''),
      website: String(fd.get('website') || ''), // honeypot
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus('ok');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setErrorMsg(data.error || '送信に失敗しました。時間をおいて再度お試しください。');
      }
    } catch {
      setStatus('error');
      setErrorMsg('送信に失敗しました。通信環境をご確認のうえ再度お試しください。');
    }
  }

  if (status === 'ok') {
    return (
      <div className="rounded-xl p-6 text-center" style={{ background: 'rgba(0,230,118,0.08)', border: '1px solid var(--color-electric-green)' }}>
        <p className="font-bold text-lg mb-2" style={{ color: 'var(--color-electric-green)' }}>送信が完了しました</p>
        <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>お問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。</p>
      </div>
    );
  }

  const labelCls = 'block text-sm font-bold mb-1.5';
  const inputCls = 'w-full rounded-lg px-3 py-2.5 text-sm bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-electric-green)]';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* honeypot (人間には見えない・botが入力すると弾く) */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} />

      <div>
        <label className={labelCls} htmlFor="type">お問い合わせ種別</label>
        <select id="type" name="type" className={inputCls} defaultValue="掲載のご相談">
          <option>掲載のご相談</option>
          <option>掲載内容の修正依頼</option>
          <option>取材・提携のご相談</option>
          <option>その他</option>
        </select>
      </div>

      <div>
        <label className={labelCls} htmlFor="service">サービス名・店舗名</label>
        <input id="service" name="service" type="text" className={inputCls} placeholder="例：〇〇買取サービス" />
      </div>

      <div>
        <label className={labelCls} htmlFor="company">運営会社名</label>
        <input id="company" name="company" type="text" className={inputCls} placeholder="例：株式会社〇〇" />
      </div>

      <div>
        <label className={labelCls} htmlFor="person">ご担当者名</label>
        <input id="person" name="person" type="text" className={inputCls} placeholder="例：山田 太郎" />
      </div>

      <div>
        <label className={labelCls} htmlFor="email">メールアドレス <span style={{ color: 'var(--color-electric-green)' }}>必須</span></label>
        <input id="email" name="email" type="email" required className={inputCls} placeholder="例：info@example.com" />
      </div>

      <div>
        <label className={labelCls} htmlFor="tel">電話番号</label>
        <input id="tel" name="tel" type="tel" className={inputCls} placeholder="例：03-1234-5678" />
      </div>

      <div>
        <label className={labelCls} htmlFor="message">お問い合わせ内容 <span style={{ color: 'var(--color-electric-green)' }}>必須</span></label>
        <textarea id="message" name="message" required rows={6} className={inputCls} placeholder="掲載をご希望のサービス内容、ご相談内容などをご記入ください。" />
      </div>

      <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
        ご入力いただいた個人情報は、お問い合わせへの対応の目的にのみ利用します。詳しくは
        <a href="/privacy/" className="underline" style={{ color: 'var(--color-electric-green)' }}>プライバシーポリシー</a>
        をご確認ください。
      </p>

      {status === 'error' && (
        <p className="text-sm font-bold" style={{ color: '#ff6b6b' }}>{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-lg py-3 font-bold text-base transition-opacity disabled:opacity-60"
        style={{ background: 'var(--color-electric-green)', color: 'var(--color-deep-blue)' }}
      >
        {status === 'sending' ? '送信中…' : 'この内容で送信する'}
      </button>
    </form>
  );
}
