#!/usr/bin/env python3
"""週次価格DB更新後に実行: src/data/prices.ts の現行価格を data/price-history.csv に追記。
使い方: python3 scripts/append-price-history.py  (PRICE_SURVEY_DATEの日付で追記・同日重複はスキップ)"""
import re, csv, sys, pathlib

root = pathlib.Path(__file__).resolve().parent.parent
src = (root / 'src/data/prices.ts').read_text()
csv_path = root / 'data/price-history.csv'

date_m = re.search(r"PRICE_SURVEY_DATE = '(\d{4}-\d{2}-\d{2})'", src)
if not date_m:
    sys.exit('PRICE_SURVEY_DATE not found')
date = date_m.group(1)

existing = csv_path.read_text() if csv_path.exists() else 'date,title,platform,store,price_jpy\n'
if f'\n{date},' in existing or existing.startswith(f'{date},'):
    print(f'{date} は追記済み。スキップ')
    sys.exit(0)

rows = []
for m in re.finditer(r"title: '([^']+)', platform: '([^']+)', prices: \{ ([^}]*) \}", src):
    title, platform, prices = m.groups()
    for pm in re.finditer(r"(bookoff|geo|surugaya|retrog): (\d+)", prices):
        rows.append([date, title, platform, pm.group(1), pm.group(2)])

with open(csv_path, 'a', newline='') as f:
    csv.writer(f).writerows(rows)
print(f'{date}: {len(rows)}行を追記')
