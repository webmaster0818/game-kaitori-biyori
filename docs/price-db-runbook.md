# 買取価格DB 週次更新ランブック（毎週木曜）

戦略柱2「週次買取価格データベース」の運用手順。2026-06-12運用開始。

## データソース（全て公式・出典必須／創作禁止）
| ソース | URL | 備考 |
|---|---|---|
| ブックオフ「ゲームの高価買取情報」 | https://www.bookoff.co.jp/selllist/game/ | ページ内に「最終更新日」表記あり（週次更新） |
| ゲオ店舗情報「Switchの高価買取品」 | https://geo-online.co.jp/store_info/buy/Switch/ | 店頭参考買取価格・約35タイトル |
| 駿河屋 高価買取リスト | https://www.suruga-ya.jp/kaitori/kaitori.html | 限定版中心。bot遮断時は検索スニペット経由か未確認と明記 |
| レトログ 価格表 | https://kaitori-retrog.jp/buypricelist/nintendoswitch | 更新日表記あり |

## 手順
1. 調査エージェントで上記4ソースの最新価格を収集（タイトル・価格・確認日・出典URL）
2. `src/app/software/high-value/page.tsx` を更新:
   - `bookoffList` / `geoList` / `surugayaList` 配列の価格・タイトル
   - `crossCompare`（同一タイトルのブックオフvsゲオ差）を再計算
   - Hero・本文中の「調査日」表記、Article JSON-LDの `dateModified`
3. `public/sitemap.xml` の `/software/high-value/` の lastmod を更新
4. `npm run build` → `cp public/sitemap.xml out/` → `rsync -a --delete --exclude='.git' out/ ../game-kaitori-biyori-deploy/`
5. 両リポを commit + push（webmaster0818）→ 本番反映を確認
6. GSC sitemap送信: `sc-domain:gamekaitori-biyori.com`（gsc-api/venv + `secrets/gsc-token.json`）
7. Discordチャンネル `1492366657555796191` に「今週の買取価格DB更新」を報告（主な変動を箇条書き。変動なしならその旨を簡潔に）

## 将来拡張（承認後）
- ハード本体（Switch2/PS5）の価格推移グラフ化（履歴は `docs/price-history.csv` に蓄積予定）
- X(Twitter)週次投稿への転用（柱6）

※cron(セッション内・木曜10:23)は7日で失効するため、新セッションでは本ランブックを参照して再設定すること。
