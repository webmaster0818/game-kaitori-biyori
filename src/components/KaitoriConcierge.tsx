'use client';

// 買取AI診断コンシェルジュ(全ページ搭載・フローティング型)。
// 診断ロジックは提携2社の公式確認値(2026-08-04実査)のみで構成。捏造なし。
// CTAは既存のKaitoriWorldCta/FuruichiCta(支給コードバイト厳密一致)を再利用する。

import { useState, useEffect } from "react";
import KaitoriWorldCta from "./KaitoriWorldCta";
import FuruichiCta from "./FuruichiCta";

type Item = "soft" | "console" | "hobby" | "retro" | "mixed";
type Method = "takuhai" | "tento" | "either";
type Priority = "price" | "easy" | "trust";
type Step = "item" | "method" | "priority" | "result";
type Msg = { role: "bot" | "user"; text: string };

const ITEMS: { id: Item; label: string }[] = [
  { id: "soft", label: "🎮 ゲームソフト" },
  { id: "console", label: "🕹️ ゲーム機本体" },
  { id: "hobby", label: "🧸 フィギュア・ホビー・おもちゃ" },
  { id: "retro", label: "👾 レトロゲーム" },
  { id: "mixed", label: "📦 いろいろまとめて" },
];

const METHODS: { id: Method; label: string }[] = [
  { id: "takuhai", label: "📮 宅配で送って売りたい" },
  { id: "tento", label: "🏪 店頭ですぐ現金化したい" },
  { id: "either", label: "🤷 どちらでもOK" },
];

const PRIORITIES: { id: Priority; label: string }[] = [
  { id: "price", label: "💰 とにかく高く売りたい" },
  { id: "easy", label: "⚡ 手間なくサクッと売りたい" },
  { id: "trust", label: "🛡️ 安心できる大手がいい" },
];

function TypingText({ text }: { text: string }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    setShown("");
    let i = 0;
    const t = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, 18);
    return () => clearInterval(t);
  }, [text]);
  return <span>{shown}</span>;
}

const IDLE_MESSAGES = [
  "今いちばん高く売れるソフト、知ってますか？🎮",
  "3つの質問でピッタリの買取先を診断します！",
  "フィギュアもゲームも、まとめ売りもOK📦",
];

function TypingLoop() {
  const [msgIdx, setMsgIdx] = useState(0);
  const [shown, setShown] = useState("");
  useEffect(() => {
    const text = IDLE_MESSAGES[msgIdx];
    let i = 0;
    setShown("");
    const typer = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(typer);
    }, 55);
    const next = setTimeout(() => setMsgIdx((m) => (m + 1) % IDLE_MESSAGES.length), text.length * 55 + 2600);
    return () => { clearInterval(typer); clearTimeout(next); };
  }, [msgIdx]);
  return <span>{shown}<span style={{ display: "inline-block", width: 2, height: 12, marginLeft: 2, verticalAlign: "middle", background: "var(--color-electric-green, #22c55e)", animation: "pulse 1s infinite" }} /></span>;
}

export default function KaitoriConcierge() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("item");
  const [item, setItem] = useState<Item | null>(null);
  const [method, setMethod] = useState<Method | null>(null);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "こんにちは！買取AI診断のカイちゃんです🎮 3つの質問で、あなたにピッタリの買取サービスをご案内します。まず、何を売りたいですか？" },
  ]);

  const say = (userText: string, botText: string) =>
    setMsgs((m) => [...m, { role: "user", text: userText }, { role: "bot", text: botText }]);

  const pickItem = (it: Item, label: string) => {
    setItem(it);
    setStep("method");
    say(label, "了解です！どの方法で売りたいですか？");
  };

  const pickMethod = (me: Method, label: string) => {
    setMethod(me);
    setStep("priority");
    say(label, "あと1問！いちばん重視するのは？");
  };

  const pickPriority = (label: string) => {
    setStep("result");
    say(label, "ありがとうございます！診断結果はこちらです👇");
  };

  const restart = () => {
    setStep("item");
    setItem(null);
    setMethod(null);
    setMsgs([{ role: "bot", text: "もう一度診断しますね！何を売りたいですか？" }]);
  };

  // 事実ベースの振り分け: ホビー系=カイトリワールド(宅配専門・フィギュア/景品/おもちゃ対象・箱10個まで無料)
  // ゲームソフト/機/レトロ=ふるいち(上場テイツー・店頭+宅配・レトロまで価格表公開)
  // まとめ売り=カイトリワールド主(段ボール10箱無料)+ふるいち併記
  const primaryKw = item === "hobby" || (item === "mixed" && method !== "tento");
  const tentoNote = method === "tento" && (item === "hobby" || item === "mixed");

  const resultLead = (() => {
    if (item === "hobby" && method === "tento")
      return "フィギュア・ホビーを店頭で売れる提携先は現在ありませんが、カイトリワールドの宅配買取なら段ボール最大10箱まで無料・査定額3,000円以上で送料無料です(公式確認値)。";
    if (primaryKw)
      return "フィギュア・ホビー・おもちゃ系なら、宅配買取専門のカイトリワールドがおすすめです。段ボール最大10箱まで無料なので、まとめ売りにも向いています(公式確認値)。";
    if (method === "tento")
      return "店頭ですぐ現金化なら、東証スタンダード上場テイツー運営の古本市場(ふるいち)がおすすめです。全国の店舗でその場で現金化でき、レトロゲームまで買取価格表を公開しています(公式確認値)。";
    return "ゲームソフト・ゲーム機なら、東証スタンダード上場テイツー運営の古本市場(ふるいち)がおすすめです。店頭・宅配の両対応で、査定額3,000円以上なら宅配の送料無料・査定了承後3営業日以内振込です(公式確認値)。";
  })();

  return (
    <>
      {!open && (
        <div
          style={{
            position: "fixed", right: 16, bottom: 148, zIndex: 60,
            maxWidth: 230, background: "#ffffff", borderRadius: "14px 14px 2px 14px",
            border: "1.5px solid var(--color-electric-green, #22c55e)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.18)", padding: "10px 12px",
            fontSize: 12.5, lineHeight: 1.6, color: "#111827", cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        >
          <span style={{ fontWeight: 700, color: "#059669" }}>カイちゃん</span>：<TypingLoop />
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="買取AI診断を開く"
        style={{
          position: "fixed", right: 16, bottom: 76, zIndex: 60,
          background: "var(--color-electric-green, #22c55e)", color: "#0a0a0a",
          borderRadius: 9999, padding: "8px 14px 8px 8px", fontWeight: 700, fontSize: 13,
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 8,
        }}
      >
        <img src="/kai-chan.svg" alt="買取AI診断 カイちゃん" width={40} height={40} style={{ display: "block" }} />
        {open ? "✕ 閉じる" : "買取AI診断"}
      </button>

      {open && (
        <div
          style={{
            position: "fixed", right: 12, bottom: 128, zIndex: 60,
            width: "min(94vw, 380px)", maxHeight: "min(70vh, 560px)", overflowY: "auto",
            background: "#ffffff", borderRadius: 16, border: "1px solid rgba(0,0,0,0.12)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)", padding: 14,
          }}
        >
          <p style={{ fontSize: 10, color: "#888", margin: "0 0 8px" }}>
            買取AI診断コンシェルジュ｜ご案内は当サイトの提携先(PR)を含みます
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", gap: 6 }}>
                {m.role === "bot" && <img src="/kai-chan.svg" alt="カイちゃん" width={28} height={28} style={{ flexShrink: 0 }} />}
                <div
                  style={{
                    maxWidth: "85%", fontSize: 13, lineHeight: 1.7, padding: "8px 12px", borderRadius: 12,
                    background: m.role === "user" ? "var(--color-electric-green, #22c55e)" : "#f3f4f6",
                    color: m.role === "user" ? "#0a0a0a" : "#111827",
                  }}
                >
                  {i === msgs.length - 1 && m.role === "bot" ? <TypingText text={m.text} /> : m.text}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
            {step === "item" && ITEMS.map((it) => (
              <button key={it.id} onClick={() => pickItem(it.id, it.label)} style={btnStyle}>{it.label}</button>
            ))}
            {step === "method" && METHODS.map((me) => (
              <button key={me.id} onClick={() => pickMethod(me.id, me.label)} style={btnStyle}>{me.label}</button>
            ))}
            {step === "priority" && PRIORITIES.map((pr) => (
              <button key={pr.id} onClick={() => pickPriority(pr.label)} style={btnStyle}>{pr.label}</button>
            ))}
          </div>

          {step === "result" && (
            <div style={{ marginTop: 12 }}>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: "#111827" }}>{resultLead}</p>
              {tentoNote && item === "mixed" && (
                <p style={{ fontSize: 12, lineHeight: 1.7, color: "#6b7280" }}>
                  ※ゲームソフト・ゲーム機ぶんは、店頭対応のふるいちで現金化するのがスムーズです。
                </p>
              )}
              <div style={{ marginTop: 8 }}>
                {primaryKw ? (
                  <>
                    <KaitoriWorldCta />
                    {item === "mixed" && <FuruichiCta variant="compact" />}
                  </>
                ) : (
                  <>
                    <FuruichiCta />
                    {(item === "soft" || item === "console") && <KaitoriWorldCta compact />}
                  </>
                )}
              </div>
              <p style={{ fontSize: 10, color: "#9ca3af", lineHeight: 1.6, marginTop: 8 }}>
                ※診断はご回答にもとづき、当サイト提携先の公式確認情報(買取対象・送料条件等)から機械的にご案内するものです。買取価格を保証するものではありません。
              </p>
              <button onClick={restart} style={{ ...btnStyle, marginTop: 8 }}>🔄 最初からやり直す</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

const btnStyle: React.CSSProperties = {
  fontSize: 12.5, padding: "7px 12px", borderRadius: 9999,
  border: "1.5px solid var(--color-electric-green, #22c55e)",
  background: "#ffffff", color: "#111827", cursor: "pointer", fontWeight: 500,
};
