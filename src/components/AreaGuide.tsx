import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBox from '@/components/AuthorBox';
import { areaStores, AREA_STORES_CHECKED } from '@/data/area-stores';

// エリアページ共通（2026-11-24 作り直し）。店舗は data/area-stores.ts（公式店舗ページで確認済み）だけを表示する。
// 店舗の評価（価格帯・得意ジャンルなど）は付けない。出典のない数字は書かない。

export type AreaGroup = { key: string; name: string; description: string; emptyNote?: string };
export type AreaOnline = { name: string; href: string; text: string };
export type AreaFaq = { q: string; a: string };

type Props = {
  pref: string;
  city: string;
  headline: string;
  lead: string;
  groups: AreaGroup[];
  points: { title: string; text: string }[];
  online: AreaOnline[];
  faqs: AreaFaq[];
  links: { href: string; title: string; text: string }[];
  dateModified: string;
};

export default function AreaGuide({ pref, city, headline, lead, groups, points, online, faqs, links, dateModified }: Props) {
  const stores = areaStores.filter((s) => s.pref === pref);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline, datePublished: '2026-03-15', dateModified, author: { '@type': 'Organization', name: 'ゲーム買取びより編集部', description: '各社公式買取ページの掲載価格を定期的に実測し、確認日を記載して比較している編集部' }, publisher: { '@type': 'Organization', name: 'ゲーム買取びより' } }) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: city }]} />

      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="tag-pill text-xs mb-4 inline-block" style={{ background: 'rgba(251,191,36,0.2)', color: '#FBBF24' }}>エリア別ガイド</span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">{headline}</h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#CBD5E1' }}>{lead}</p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>店舗情報の確認日: {AREA_STORES_CHECKED}（各チェーンの公式店舗ページ）</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12 glass-card p-6">
          <h2 className="section-heading mb-4"><span className="section-heading-bar" />この一覧の作り方</h2>
          <p className="text-sm mb-2" style={{ color: 'var(--color-text-light)' }}>
            当サイトでは、{city}の主な買取エリアについて、ブックオフ・ゲオ・駿河屋などの公式店舗ページを1店ずつ開き、店舗が実在すること、住所・営業時間、ゲームの買取を受け付けていることが公式に書かれていることを{AREA_STORES_CHECKED}に確かめた店舗だけを掲載しています（{city}で{stores.length}店舗）。
          </p>
          <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
            以前のこのページには、公式の店舗一覧で確認できない店舗名が含まれていたため、{AREA_STORES_CHECKED}に一覧を作り直しました。店舗ごとの買取価格の高い・安いは比べていません。営業時間や買取の受付時間は変わることがあるため、来店前に各店舗の公式ページでご確認ください。
          </p>
        </section>

        {groups.map((g) => {
          const list = stores.filter((s) => s.group === g.key);
          return (
            <section key={g.key} className="mb-12">
              <h2 className="section-heading mb-6"><span className="section-heading-bar" />{g.name}</h2>
              <p className="text-sm mb-6" style={{ color: 'var(--color-text-light)' }}>{g.description}</p>
              {list.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>店舗名（公式表記）</th>
                        <th>住所</th>
                        <th>営業時間・買取受付（公式の記載）</th>
                        <th>ゲームの買取（公式の記載）</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((s) => (
                        <tr key={s.name}>
                          <td className="font-bold text-sm"><a href={s.url} target="_blank" rel="noopener nofollow" className="underline">{s.name}</a></td>
                          <td className="text-sm">{s.address}</td>
                          <td className="text-sm">{s.hours}</td>
                          <td className="text-sm">{s.buy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm glass-card p-4" style={{ color: 'var(--color-text-light)' }}>{g.emptyNote}</p>
              )}
            </section>
          );
        })}

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />公式ページで確かめた、来店前に知っておきたいこと</h2>
          <div className="space-y-4">
            {points.map((p, i) => (
              <div key={p.title} className="glass-card p-5 flex items-start gap-4">
                <div className="text-2xl font-black shrink-0" style={{ color: 'var(--color-electric-green)', opacity: 0.3 }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--color-deep-blue)' }}>{p.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />店舗に行けない場合の宅配・出張買取</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {online.map((o) => (
              <Link key={o.name} href={o.href} className="glass-card p-4 card-hover block">
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--color-deep-blue)' }}>{o.name}</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>{o.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6"><span className="section-heading-bar" />よくある質問</h2>
          <div>
            {faqs.map((f, i) => (
              <details key={i} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
        </section>

        <section className="glass-card-dark p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>持ち込む前に<span style={{ color: 'var(--color-electric-green)' }}>買取価格</span>を確かめる</h2>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>当サイトでは、ブックオフ・ゲオ・駿河屋などの公式買取ページの掲載価格を実測して、確認日つきで掲載しています。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/price-index/" className="btn-primary py-3 px-8">買取価格インデックスを見る</Link>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>他のエリアガイド・関連ページ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="glass-card p-4 card-hover block">
                <p className="font-bold text-sm" style={{ color: 'var(--color-deep-blue)' }}>{l.title}</p>
                <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>{l.text}</p>
              </Link>
            ))}
          </div>
        </section>
        <AuthorBox />
      </div>
    </>
  );
}
