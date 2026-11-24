// エリアページの店舗一覧（2026-11-24 に各チェーンの公式店舗ページで、店舗の実在・住所・営業時間・ゲームの買取の取扱いを確認したものだけ）
// 公式で確認できない店舗・ゲームの買取の記載がない店舗は載せない。評価（価格帯など）は付けない。
export type AreaStore = { pref: string; group: string; name: string; address: string; hours: string; buy: string; url: string }
export const AREA_STORES_CHECKED = '2026年11月24日'
export const areaStores: AreaStore[] = [
  {
    "pref": "tokyo",
    "group": "akihabara",
    "name": "BEEP秋葉原店",
    "address": "東京都千代田区神田練塀町15-1 SEEKBASE AKI-OKA MANUFACTURE 3 号棟",
    "hours": "：平日 12時～20時 水曜定休 土 日 ・ 祝日 11時～20時",
    "buy": "「ゲーム、PC、同人アイテム販売・買取」",
    "url": "https://www.akihabara-beep.com/"
  },
  {
    "pref": "tokyo",
    "group": "akihabara",
    "name": "トレーダー本店",
    "address": "〒101-0021 東京都千代田区外神田4-2-1 トレーダー本店ビル",
    "hours": "全日 11:00 ～ 20:00（年中無休）",
    "buy": "「買取できるアイテム」に「TVゲーム」（買取は本店・２号店どちらでも）",
    "url": "https://www.e-trader.jp/trader-shop/"
  },
  {
    "pref": "tokyo",
    "group": "akihabara",
    "name": "BOOKOFF 秋葉原駅前店",
    "address": "〒101-0025 東京都千代田区神田佐久間町1-6-4",
    "hours": "10:00～22:00 ／ 買取受付時間 10:00～22:00 書籍・CD、レコード、DVD、ブルーレイ、ゲームソフト 10:00～21:00 家電・スマホ・ゲームハード・ホビー・トレカ",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20396.html"
  },
  {
    "pref": "tokyo",
    "group": "shinjuku",
    "name": "BOOKOFF PLUS 新宿駅西口店",
    "address": "〒160-0023 東京都新宿区西新宿1-10-2 110ビル3F～6F",
    "hours": "10:00～22:00 ／ 買取受付時間 10:00～22:00 本・ソフト・ゲームハード・家電・携帯電話 10:00～21:00 アニメグッズ・ホビー・トレカ",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20472.html"
  },
  {
    "pref": "tokyo",
    "group": "shinjuku",
    "name": "ゲオ北新宿店",
    "address": "〒1690074 東京都新宿区北新宿３丁目４番１号",
    "hours": "24時間営業",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/00839/"
  },
  {
    "pref": "tokyo",
    "group": "ikebukuro",
    "name": "BOOKOFF 池袋サンシャイン60通り店",
    "address": "〒170-0013 東京都豊島区東池袋1-22-10 ヒューマックスパビリオン",
    "hours": "10:00～22:00 ／ 買取受付時間 10:00～22:00 （書籍・ソフト・ゲームハード・携帯電話・スマホ・トレカ） 11:00～21:00 （アニメグッズ・ホビー）",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20422.html"
  },
  {
    "pref": "tokyo",
    "group": "ikebukuro",
    "name": "ゲオ要町店",
    "address": "〒1710014 東京都豊島区池袋３丁目３番５号",
    "hours": "朝10:00〜夜20:00 【買取受付時間】朝10:00〜夜19:30",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/02893/"
  },
  {
    "pref": "tokyo",
    "group": "ikebukuro",
    "name": "駿河屋 池袋買取センター",
    "address": "〒170-0013 東京都豊島区東池袋1-30-12 城北自動車会館 1F",
    "hours": "10:00～20:00",
    "buy": "「駿河屋取り扱い全ジャンルを対象に」買取",
    "url": "https://www.suruga-ya.jp/feature/realstore/ikebukuro_purchase/index.html"
  },
  {
    "pref": "tokyo",
    "group": "nakano",
    "name": "BOOKOFF 東中野店",
    "address": "〒164-0003 東京都中野区東中野3-9-21",
    "hours": "10:00～21:00",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20533.html"
  },
  {
    "pref": "yokohama",
    "group": "yokohama-st",
    "name": "BOOKOFF 横浜ビブレ店",
    "address": "〒220-8577 神奈川県横浜市西区南幸2-15-13 横浜ビブレ8F",
    "hours": "11:00～21:00 （平日） 10:00～21:00 （土日祝）",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20434.html"
  },
  {
    "pref": "yokohama",
    "group": "yokohama-st",
    "name": "駿河屋 横浜店",
    "address": "神奈川県横浜市西区高島2丁目19−12横浜スカイビル 7階",
    "hours": "10:30～20:30 横浜スカイビルに準じます",
    "buy": "取扱商品に「ゲーム」、買取専用の電話番号あり",
    "url": "https://www.suruga-ya.jp/feature/realstore/yokohama_maruicity/index.html"
  },
  {
    "pref": "yokohama",
    "group": "kannai",
    "name": "BOOKOFF PLUS 横浜伊勢佐木モール店",
    "address": "〒231-0045 神奈川県横浜市中区伊勢佐木町1-7-7",
    "hours": "10:00～22:00 ／ 買取受付時間 10:00～22:00 (B1F) アパレル (1F)本・ソフト・家電 10:00～21:00 (2F)ホビー・トレカ",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20279.html"
  },
  {
    "pref": "saitama",
    "group": "omiya",
    "name": "BOOKOFF PLUS 大宮ラクーン店",
    "address": "〒330-0802 埼玉県さいたま市大宮区宮町1-60 大宮ラクーン7F",
    "hours": "10:00～22:00 （本、CD、DVD、ゲーム、家電、おもちゃ、トレカ、洋服売場）… ／ 買取受付時間 10:00～22:00 （本、CD、DVD、ゲーム、家電、おもちゃ、トレカ、洋服）",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20481.html"
  },
  {
    "pref": "saitama",
    "group": "omiya",
    "name": "ゲオモバイル大宮駅前店",
    "address": "〒3300802 埼玉県さいたま市大宮区宮町１丁目５番地４ 中西ビル１Ｆ",
    "hours": "朝10:00〜夜22:00 【買取受付時間】朝10:00〜夜21:30",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/40314/"
  },
  {
    "pref": "saitama",
    "group": "omiya",
    "name": "駿河屋 大宮マルイ店",
    "address": "〒330-9501 埼玉県さいたま市大宮区桜木町2-3 大宮マルイ 6F",
    "hours": "10:30～20:00（買取受付と買取精算時間 10:30～19:30）",
    "buy": "取扱商品に「ゲーム」、買取受付と精算は10:30～19:30",
    "url": "https://www.suruga-ya.jp/feature/realstore/omiya_marui/index.html"
  },
  {
    "pref": "saitama",
    "group": "kawaguchi",
    "name": "ゲオ川口駅前店",
    "address": "〒3320012 埼玉県川口市本町４丁目２番３号 友愛センタービル１Ｆ",
    "hours": "朝9:00〜深夜0:00 【買取受付時間】朝9:00〜夜23:30",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/07885/"
  },
  {
    "pref": "saitama",
    "group": "kawaguchi",
    "name": "ハードオフ川口上青木店",
    "address": "〒333-0844 埼玉県川口市上青木2-47-11",
    "hours": "10:30～19:30（年中無休）",
    "buy": "取扱商品に「ゲーム機・ゲームソフト」",
    "url": "https://www.hardoff.co.jp/shop/detail/?p=201163"
  },
  {
    "pref": "saitama",
    "group": "tokorozawa",
    "name": "BOOKOFF PLUS 所沢プロぺ通り店",
    "address": "〒359-1116 埼玉県所沢市東町12-1",
    "hours": "10:00～21:00",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20173.html"
  },
  {
    "pref": "saitama",
    "group": "tokorozawa",
    "name": "ゲオ所沢駅前店",
    "address": "〒3591123 埼玉県所沢市日吉町１２番１号 ワルツビルＢ１Ｆ",
    "hours": "朝9:00〜夜23:00 【買取受付時間】朝9:00〜夜22:30",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/03274/"
  },
  {
    "pref": "tokyo",
    "group": "akihabara",
    "name": "駿河屋 秋葉原ゲーム館",
    "address": "東京都千代田区外神田3-15-4 2階",
    "hours": "平日：11:00~21:00 土日祝：10:00~21:00",
    "buy": "取扱商品に「レトロゲーム、現行ゲーム」、O2O買取サービスあり",
    "url": "https://www.suruga-ya.jp/feature/realstore/akihabara_game/index.html"
  },
  {
    "pref": "tokyo",
    "group": "akihabara",
    "name": "駿河屋 秋葉原買取センター",
    "address": "〒101-0021 東京都千代田区外神田3-15-4 1階",
    "hours": "10:00～21:00（年中無休）",
    "buy": "「買取商材はなんと全ジャンル！」",
    "url": "https://www.suruga-ya.jp/feature/realstore/akihabara_kaitori/index.html"
  },
  {
    "pref": "tokyo",
    "group": "shinjuku",
    "name": "駿河屋 新宿マルイアネックス店",
    "address": "〒160-0022 東京都新宿区新宿3丁目1-26 新宿マルイアネックス 5階",
    "hours": "【平日】11:00～21:00 【土曜日・日曜日・祝日】10:30～21:00",
    "buy": "取扱商品に「ゲーム」、「高価買取もしております！」",
    "url": "https://www.suruga-ya.jp/feature/realstore/shinjuku_maruiannex/index.html"
  },
  {
    "pref": "tokyo",
    "group": "shinjuku",
    "name": "BOOKOFF 新宿靖国通り店",
    "address": "〒160-0022 東京都新宿区新宿5-2-1",
    "hours": "10:00～21:00 ／ 買取受付時間 10:00～21:00 本 ソフト売場 10:00～17:00 ホビー・トレカ・家電・携帯・ゲーム機",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20199.html"
  },
  {
    "pref": "tokyo",
    "group": "ikebukuro",
    "name": "BOOKOFF PLUS 池袋要町店",
    "address": "〒171-0043 東京都豊島区要町1-10-3",
    "hours": "10:00～22:00 （1F）本、CD・DVD・ゲーム売場 10:00～20:00 （2F）洋服、ブランド品売場",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20114.html"
  },
  {
    "pref": "tokyo",
    "group": "nakano",
    "name": "ゲオモバイル中野ブロードウェイ店",
    "address": "〒1640001 東京都中野区中野５丁目５２番１５号",
    "hours": "昼11:00〜夜21:00 【買取受付時間】昼11:00〜夜20:30",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/40300/"
  },
  {
    "pref": "tokyo",
    "group": "nakano",
    "name": "ゲオ都立家政店",
    "address": "〒1650032 東京都中野区鷺宮１丁目２８番７号 飛鳥コート鷺宮Ｂ１",
    "hours": "朝9:00〜夜23:00 【買取受付時間】朝9:00〜夜22:30",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/03152/"
  },
  {
    "pref": "saitama",
    "group": "omiya",
    "name": "まんだらけ 大宮店",
    "address": "〒330-0802 埼玉県さいたま市大宮区宮町1-60 大宮ラクーン 8F",
    "hours": "12:00~20:00 / 年中無休 ( 大宮ラクーン休業日は除く) 買取受付は閉店30分前の19時半までとなります。",
    "buy": "公式の買取ページで大宮店の買取ジャンルに「ゲーム」",
    "url": "https://www.mandarake.co.jp/dir/omy/"
  },
  {
    "pref": "saitama",
    "group": "kawaguchi",
    "name": "BOOKOFF 西川口駅東口店",
    "address": "〒332-0034 埼玉県川口市並木2-21-1",
    "hours": "10:00～22:00",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20383.html"
  },
  {
    "pref": "saitama",
    "group": "tokorozawa",
    "name": "BOOKOFF 本川越店",
    "address": "〒350-0043 埼玉県川越市新富町1-9-1",
    "hours": "10:00～21:00",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop10864.html"
  },
  {
    "pref": "saitama",
    "group": "tokorozawa",
    "name": "ゲオ川越新宿店",
    "address": "〒3501124 埼玉県川越市新宿町６丁目５番８号",
    "hours": "朝9:00〜深夜0:00 【買取受付時間】朝9:00〜夜23:30",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/03099/"
  },
  {
    "pref": "osaka",
    "group": "nihonbashi",
    "name": "駿河屋 日本橋オタロード買取センター",
    "address": "大阪市浪速区日本橋4-15-18 中津川ビル 1F",
    "hours": "11:00～20:00（※19:00以降の買取受付は商品をお預かりし、翌日以降の査定・精算）/年中無休",
    "buy": "買取対象商品に「ゲームソフト・ハード・サプライ」",
    "url": "https://www.suruga-ya.jp/feature/realstore/nihonbashi_otaroad_kaitori/index.html"
  },
  {
    "pref": "osaka",
    "group": "nihonbashi",
    "name": "スーパーポテト オタロード店",
    "address": "〒556-0005 大阪府大阪市浪速区日本橋3-8-18 平田ビル１階",
    "hours": "平日：11:00〜20:00 / 土日祝：10:00〜20:00 (年中無休)",
    "buy": "「遊ばなくなったゲームは是非お持ちください！」（高価買取の案内）",
    "url": "https://www.superpotato.com/shop/otaroad/"
  },
  {
    "pref": "osaka",
    "group": "nihonbashi",
    "name": "ゲオ大阪日本橋店",
    "address": "〒5560005 大阪府大阪市浪速区日本橋４丁目１１番１号",
    "hours": "朝9:00〜深夜2:00 /【買取受付時間】朝9:00〜深夜1:30 / 年中無休",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/03085/"
  },
  {
    "pref": "osaka",
    "group": "umeda",
    "name": "ゲオモバイル大阪駅前第３ビル店",
    "address": "〒5300001 大阪府大阪市北区梅田１丁目１番３号 大阪駅前第３ビル Ｂ２Ｆ",
    "hours": "昼11:00〜夜20:00 /【買取受付時間】昼11:00〜夜19:30 / 年中無休",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/40348/"
  },
  {
    "pref": "osaka",
    "group": "namba",
    "name": "BOOKOFF PLUS なんば戎橋店",
    "address": "大阪府大阪市中央区難波1-5-16 大阪B&Vビル2・3F",
    "hours": "10:00～22:00 2階 本・ゲームソフト・ホビー・トレカ売場 / 10:00～21:00 3階 アパレル・ハイブランド売場（買取受付時間 10:00～20:00）",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20457.html"
  },
  {
    "pref": "nagoya",
    "group": "osu",
    "name": "駿河屋 名古屋大須本館",
    "address": "〒460-0011 愛知県名古屋市中区大須3-32-23（3～5F）",
    "hours": "10:00～21:00 / 定休日なし",
    "buy": "取扱商品「4階 ゲーム、ゲーム系書籍」",
    "url": "https://www.suruga-ya.jp/feature/realstore/osu_main/index.html"
  },
  {
    "pref": "nagoya",
    "group": "osu",
    "name": "スーパーポテト 名古屋店",
    "address": "〒460-0011 愛知県名古屋市中区大須3丁目11-30",
    "hours": "平日：11:00〜20:00 / 土日祝：11:00〜20:00（年中無休）",
    "buy": "「買取も地域No.1価格！ぜひご来店ください！」（店舗ページの案内）",
    "url": "https://www.superpotato.com/shop/nagoya/"
  },
  {
    "pref": "nagoya",
    "group": "osu",
    "name": "ゲオモバイル名古屋大須店",
    "address": "〒4600011 愛知県名古屋市中区大須３丁目３１番１号",
    "hours": "昼11:00〜夜20:00 /【買取受付時間】昼11:00〜夜19:30 / 年中無休",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/40389/"
  },
  {
    "pref": "nagoya",
    "group": "sakae",
    "name": "BOOKOFF SUPER BAZAAR 栄スカイル店",
    "address": "愛知県名古屋市中区栄3-4-5 栄スカイル8F",
    "hours": "10:00～21:00 / 12:00～20:00 平日ボードゲームカフェ ※土日祝は10:00から営業（買取受付時間 10:00～21:00 / 10:00～19:00 トレカ買取・ボードゲーム買取）",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20449.html"
  },
  {
    "pref": "nagoya",
    "group": "meieki",
    "name": "BOOKOFF 名古屋豊国通店",
    "address": "愛知県名古屋市中村区豊国通4-5",
    "hours": "10:00～21:00",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20441.html"
  },
  {
    "pref": "nagoya",
    "group": "meieki",
    "name": "ゲオ名古屋亀島店",
    "address": "〒4530012 愛知県名古屋市中村区井深町１７番１５号",
    "hours": "朝9:00〜深夜2:00 /【買取受付時間】朝9:00〜深夜1:30 / 年中無休",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/02883/"
  },
  {
    "pref": "nagoya",
    "group": "other",
    "name": "お宝創庫 中村店",
    "address": "愛知県名古屋市中村区鴨付町２丁目４６",
    "hours": "10:00～24:00（買取時間 10:00～22:00）/ 年中無休",
    "buy": "「取扱い商材一覧 販売・買取：テレビゲーム」",
    "url": "https://www.otakarasouko.com/store/otakarasouko_nakamura/"
  },
  {
    "pref": "nagoya",
    "group": "other",
    "name": "買取王国 高辻店",
    "address": "〒466-0054 愛知県名古屋市昭和区円上町28-18",
    "hours": "12:00～26:00（買取受付終了 25:30）",
    "buy": "取扱商品（買取）のホビー区分に「テレビゲーム」",
    "url": "https://www.okoku.co.jp/inc/shop/detail104"
  },
  {
    "pref": "kyoto",
    "group": "kawaramachi",
    "name": "駿河屋 京都寺町店",
    "address": "京都府京都市下京区恵美須之町534-2",
    "hours": "平日（月～金）12:00～22:00 / 休日（土日祝）10:00～22:00",
    "buy": "取扱商品「現行ゲーム、レトロゲーム」（1階 ゲーム）",
    "url": "https://www.suruga-ya.jp/feature/realstore/teramachi/index.html"
  },
  {
    "pref": "kyoto",
    "group": "other",
    "name": "ゲオ円町店",
    "address": "〒6048495 京都府京都市中京区西ノ京西鹿垣町６３番地",
    "hours": "朝10:00〜夜23:00 /【買取受付時間】朝10:00〜夜22:30 / 年中無休",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/02849/"
  },
  {
    "pref": "kyoto",
    "group": "station",
    "name": "BOOKOFF 京都東寺駅前店",
    "address": "京都府京都市南区西九条川原城町97",
    "hours": "10:00～22:00",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20257.html"
  },
  {
    "pref": "kyoto",
    "group": "station",
    "name": "BOOKOFF 京都三条駅ビル店",
    "address": "京都府京都市東山区三条通大橋東入大橋町117",
    "hours": "10:00～23:00",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20119.html"
  },
  {
    "pref": "kyoto",
    "group": "station",
    "name": "ゲオモバイル京都アバンティ店",
    "address": "〒6018003 京都府京都市南区東九条西山王町３１番地 京都アバンティＢ１Ｆ",
    "hours": "朝10:00〜夜21:00 /【買取受付時間】朝10:00〜夜20:30 / 施設休館日に準ずる",
    "buy": "「お取扱い品目」の買取に「ゲーム」",
    "url": "https://geo-online.co.jp/store/31587/"
  },
  {
    "pref": "kyoto",
    "group": "other",
    "name": "BOOKOFF 京都山科西野店",
    "address": "京都府京都市山科区西野山階町25-5",
    "hours": "10:00～22:00",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20242.html"
  },
  {
    "pref": "kyoto",
    "group": "other",
    "name": "BOOKOFF 京都太秦店",
    "address": "京都府京都市右京区常盤一ノ井町5-1",
    "hours": "10:00～22:00",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20471.html"
  },
  {
    "pref": "kyoto",
    "group": "other",
    "name": "BOOKOFF 京都宝ヶ池店",
    "address": "京都府京都市左京区岩倉南桑原町54",
    "hours": "10:00～22:00",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20252.html"
  },
  {
    "pref": "osaka",
    "group": "nihonbashi",
    "name": "駿河屋 大阪日本橋本館",
    "address": "大阪市浪速区日本橋4丁目11-3",
    "hours": "10:00～21:00 / 年中無休",
    "buy": "取扱商品に「ゲーム」（同社オタロード館は、ゲームはこの本館への持ち込みを案内）",
    "url": "https://www.suruga-ya.jp/feature/realstore/nihonbashi_main/index.html"
  },
  {
    "pref": "osaka",
    "group": "umeda",
    "name": "駿河屋 梅田茶屋町店",
    "address": "〒530-0013 大阪府大阪市北区茶屋町7-20 チャスカ茶屋町 5・6階",
    "hours": "10:00～22:00",
    "buy": "取扱商品に「ゲームソフト・ハード」",
    "url": "https://www.suruga-ya.jp/feature/realstore/umedachaya/index.html"
  },
  {
    "pref": "osaka",
    "group": "namba",
    "name": "BOOKOFF 大阪難波中店",
    "address": "大阪府大阪市浪速区難波中3-1-15",
    "hours": "10:00～22:30",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop10518.html"
  },
  {
    "pref": "nagoya",
    "group": "sakae",
    "name": "駿河屋 名古屋栄店",
    "address": "〒460-0008 愛知県名古屋市中区栄3-8-14 6階7階",
    "hours": "10:00～21:00 / 定休日なし",
    "buy": "取扱商品に「ゲームソフト・ハード」",
    "url": "https://www.suruga-ya.jp/feature/realstore/nagoyasakae/index.html"
  },
  {
    "pref": "kyoto",
    "group": "kawaramachi",
    "name": "BOOKOFF PLUS 河原町オーパ店",
    "address": "京都府京都市中京区河原町通四条上ル 河原町オーパ8F",
    "hours": "11:00～22:00（買取受付 11:00～22:00 本、CD、DVD、家電、ホビー、トレカなど）",
    "buy": "「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20461.html"
  },
  {
    "pref": "chiba",
    "group": "chibaeki",
    "name": "BOOKOFF ＪＲ本千葉駅前店",
    "address": "〒260-0854 千葉県千葉市中央区長洲1-30-1",
    "hours": "10:00～21:00",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20151.html"
  },
  {
    "pref": "chiba",
    "group": "chibaeki",
    "name": "駿河屋 千葉駅前店",
    "address": "〒260-0015 千葉県千葉市中央区富士見2丁目3-1 塚本大千葉ビルB1F",
    "hours": "10:00～21:45 / 定休日なし",
    "buy": "取扱商品「…ゲームソフト・ハード…」／買取について「取扱商品以外は買取対象外となります。」",
    "url": "https://www.suruga-ya.jp/feature/realstore/chibaeki/index.html"
  },
  {
    "pref": "chiba",
    "group": "chibaeki",
    "name": "駿河屋 千葉中央店",
    "address": "〒260-0014 千葉県千葉市中央区本千葉町2-10 1F・5F",
    "hours": "10:00～22:00 / 定休日なし",
    "buy": "取扱商品「ゲーム、フィギュア…」／買取について「一部の書籍やパンフレットは当店でお売りいただけない場合がございます」",
    "url": "https://www.suruga-ya.jp/feature/chiba-chuo/index.html"
  },
  {
    "pref": "chiba",
    "group": "chibaeki",
    "name": "ゲオ千葉末広店",
    "address": "〒2600843 千葉県千葉市中央区末広２丁目１３番２号",
    "hours": "朝10:00〜夜22:00 /【買取受付時間】朝10:00〜夜21:30 / 年中無休",
    "buy": "店舗ページの「お取扱い品目」の買取欄に「ゲーム」",
    "url": "https://geo-online.co.jp/store/02797/"
  },
  {
    "pref": "chiba",
    "group": "chibaeki",
    "name": "ゲオ千葉都町店",
    "address": "〒2600001 千葉県千葉市中央区都町１丁目１１番９号 ２Ｆ",
    "hours": "朝9:00〜深夜1:00 /【買取受付時間】朝9:00〜深夜0:30 / 年中無休",
    "buy": "店舗ページの「お取扱い品目」の買取欄に「ゲーム」",
    "url": "https://geo-online.co.jp/store/40440/"
  },
  {
    "pref": "chiba",
    "group": "funabashi",
    "name": "BOOKOFF SUPER BAZAAR ららぽーとTOKYO-BAY North Gate店",
    "address": "〒273-0012 千葉県船橋市浜町2-2-7 ららぽーとTOKYO-BAY North Gate3F",
    "hours": "10:00～20:00（平日）/ 10:00～21:00（土日祝）／買取受付 10:00～19:30 / 10:00～20:30（土日祝）※トレカは常時19:00受付終了",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20462.html"
  },
  {
    "pref": "chiba",
    "group": "funabashi",
    "name": "BOOKOFF SUPER BAZAAR ゆめまち習志野台モール店",
    "address": "〒274-0063 千葉県船橋市習志野台8丁目58-1 ゆめまち習志野台モール2F",
    "hours": "10:00～21:00 平日 / 9:00～21:00 土日祝／買取受付 店舗営業時間に準ずる",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20555.html"
  },
  {
    "pref": "chiba",
    "group": "funabashi",
    "name": "ゲオ船橋薬園台店",
    "address": "〒2740075 千葉県船橋市滝台町１０５番地１",
    "hours": "朝10:00〜夜22:00 /【買取受付時間】朝10:00〜夜21:30 / 年中無休",
    "buy": "店舗ページの「お取扱い品目」の買取欄に「ゲーム」",
    "url": "https://geo-online.co.jp/store/02971/"
  },
  {
    "pref": "chiba",
    "group": "kashiwa",
    "name": "BOOKOFF ドン・キホーテ柏駅前店",
    "address": "〒277-0005 千葉県柏市柏1-3-1 ドン・キホーテ柏駅前店 4階",
    "hours": "10:00～21:00",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop10813.html"
  },
  {
    "pref": "chiba",
    "group": "kashiwa",
    "name": "ゲオ柏明原店",
    "address": "〒2770843 千葉県柏市明原３丁目２番２５号",
    "hours": "朝10:00〜夜23:00 /【買取受付時間】朝10:00〜夜22:30 / 年中無休",
    "buy": "店舗ページの「お取扱い品目」の買取欄に「ゲーム」",
    "url": "https://geo-online.co.jp/store/03080/"
  },
  {
    "pref": "chiba",
    "group": "kashiwa",
    "name": "ハードオフ柏豊四季店",
    "address": "〒277-0863 千葉県柏市豊四季224-6",
    "hours": "10:00～20:00 / 年中無休",
    "buy": "「現行のゲーム機、レトロゲーム機、周辺機器も幅広く買取、お取扱しております。是非お売りください」／取扱商品「ゲーム機・ゲームソフト」",
    "url": "https://www.hardoff.co.jp/shop/detail/?p=201122"
  },
  {
    "pref": "fukuoka",
    "group": "tenjin",
    "name": "BOOKOFF SUPER BAZAAR ミーナ天神店",
    "address": "〒810-0001 福岡県福岡市中央区天神４丁目３−８ ミーナ天神 7F",
    "hours": "10:00～21:00／買取受付 10:00～21:00 / 10:00～19:00 ※ブランド品・貴金属・腕時計のみ",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20529.html"
  },
  {
    "pref": "fukuoka",
    "group": "tenjin",
    "name": "ゲオモバイル福岡天神西通り店",
    "address": "〒8100001 福岡県福岡市中央区天神２丁目３番２０号",
    "hours": "朝10:00〜夜20:00 /【買取受付時間】朝10:00〜夜19:30 / 年中無休",
    "buy": "店舗ページの「お取扱い品目」の買取欄に「ゲーム」",
    "url": "https://geo-online.co.jp/store/31656/"
  },
  {
    "pref": "fukuoka",
    "group": "hakata",
    "name": "駿河屋 博多マルイ店",
    "address": "福岡県福岡市博多区博多駅中央街9-1（6F）",
    "hours": "10:00～21:00（博多マルイの休館日に準ずる）／買取受付時間 10：00～20：30",
    "buy": "取扱い商品「…ゲームソフト、ゲームハード…」／買取について「一部の書籍、パンフレット、同人誌は当店でお売りいただけない場合がございます」",
    "url": "https://www.suruga-ya.jp/feature/hakata_marui/index.html"
  },
  {
    "pref": "fukuoka",
    "group": "hakata",
    "name": "BOOKOFF 福岡博多口店",
    "address": "〒812-0011 福岡県福岡市博多区博多駅前3-2-8 住友生命ビル",
    "hours": "10:00～22:00",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20314.html"
  },
  {
    "pref": "fukuoka",
    "group": "hakata",
    "name": "ゲオ福岡博多口店",
    "address": "〒8120011 福岡県福岡市博多区博多駅前３丁目２５番２４号",
    "hours": "朝9:00〜深夜0:00 /【買取受付時間】朝9:00〜夜23:30 / 年中無休",
    "buy": "店舗ページの「お取扱い品目」の買取欄に「ゲーム」",
    "url": "https://geo-online.co.jp/store/03387/"
  },
  {
    "pref": "fukuoka",
    "group": "kokura",
    "name": "駿河屋 小倉あるあるCity店",
    "address": "福岡県北九州市小倉北区浅野2-14-5 あるあるCity2階・4階",
    "hours": "11:00〜20:00(買取受付時間 11:00～19:30)／あるあるCityに準じます",
    "buy": "取扱商品「4階 2号店：現行ゲーム、レトロゲーム…」／買取について「「取扱商品」以外は買取対象外となります。」",
    "url": "https://www.suruga-ya.jp/feature/aruarucity/index.html"
  },
  {
    "pref": "fukuoka",
    "group": "kokura",
    "name": "BOOKOFF チャチャタウン小倉店",
    "address": "〒802-0014 福岡県北九州市小倉北区砂津3‐1‐1  2階",
    "hours": "10:00～21:00 本・ホビー売場 / 11:00～21:00 トレカ・家電売場（平日のみ）※土日祝は10:00から／買取受付 10:00～20:30 本・ホビー売場 / 11:00～20:30 トレカ・家電売場",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20547.html"
  },
  {
    "pref": "fukuoka",
    "group": "kokura",
    "name": "ゲオ北九州中津口店",
    "address": "〒8020018 福岡県北九州市小倉北区中津口２丁目２番１６号",
    "hours": "24時間営業 / 年中無休",
    "buy": "店舗ページの「お取扱い品目」の買取欄に「ゲーム」",
    "url": "https://geo-online.co.jp/store/03075/"
  },
  {
    "pref": "kobe",
    "group": "sannomiya",
    "name": "駿河屋 神戸三宮2F買取センター",
    "address": "兵庫県神戸市中央区三宮町1-9-1 センタープラザビル２階-13",
    "hours": "平日：12:00～19:00（受付は18時まで）/ 土日祝：11:00～19:00（受付は18時まで）",
    "buy": "取扱い商品「…ゲームソフト・ハード・サプライ…」／「当店では取扱い商品が買取対象です。」",
    "url": "https://www.suruga-ya.jp/feature/sannomiya_kaitori/index.html"
  },
  {
    "pref": "kobe",
    "group": "sannomiya",
    "name": "BOOKOFF 三宮センター街店",
    "address": "〒650-0021 兵庫県神戸市中央区三宮町2-10-7",
    "hours": "10:00～20:00 ※ブランド品・貴金属等の買取受付時間は18:30までとなります",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop10822.html"
  },
  {
    "pref": "kobe",
    "group": "harbor",
    "name": "ソフマップ 神戸ハーバーランド店",
    "address": "〒650-0044 神戸市中央区東川崎町 1-7-2 umie NORTH MALL 6F",
    "hours": "10:00～20:00（買取の当日支払い分の受付は、閉店の2時間前までが目安）",
    "buy": "フロアガイド 6F 中古「…テレビゲーム本体・ソフト」／「買取カウンター ハード買取、ソフト買取」",
    "url": "https://www.sofmap.com/tenpo/?id=shops&sid=koube"
  },
  {
    "pref": "sendai",
    "group": "station",
    "name": "ソフマップ 仙台駅前店",
    "address": "〒980-0021 宮城県仙台市青葉区中央4-1-1 E BeanS1F",
    "hours": "10:00～20:00",
    "buy": "フロアガイド 1F 中古「テレビゲーム本体、テレビゲームソフト」…「ソフト買取」",
    "url": "https://www.sofmap.com/tenpo/?id=shops&sid=sendai"
  },
  {
    "pref": "sendai",
    "group": "station",
    "name": "らしんばん仙台店",
    "address": "〒980-0021 宮城県仙台市青葉区中央4-1-1 イービーンズ 8階",
    "hours": "全日 10:00～20:00 / 買取受付 10:00～18:00 / 定休日なし（施設に準ずる店休日あり）",
    "buy": "「仙台店では、中古買取や販売を行っています。」／取り扱い商品「…家庭用ゲームソフト、PCゲームソフト」",
    "url": "https://www.lashinbang.com/store/3/"
  },
  {
    "pref": "sendai",
    "group": "ichibancho",
    "name": "BOOKOFF 仙台クリスロード店",
    "address": "〒980-0021 宮城県仙台市青葉区中央2-4-10 ガレリアクリスロード 1F-4F",
    "hours": "10:00～21:00",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20550.html"
  },
  {
    "pref": "sendai",
    "group": "izumi",
    "name": "駿河屋 フォレオ東仙台店",
    "address": "〒983-0833 宮城県仙台市宮城野区東仙台4-14-1",
    "hours": "9:00～22:00 / 定休日なし",
    "buy": "取扱商品「…フィギュア、ゲーム、ボードゲーム…」／買取について「取扱商品以外は買取対象外となります。」",
    "url": "https://www.suruga-ya.jp/feature/higashisendai/index.html"
  },
  {
    "pref": "sendai",
    "group": "izumi",
    "name": "BOOKOFF SUPER BAZAAR 仙台泉古内店",
    "address": "〒981-3123 宮城県仙台市泉区古内字新坂の上34-6",
    "hours": "10:00～21:00／買取受付 10:00～21:00 / 10:00～19:00：アパレル / 10:00～20:00：ハイブランド・雑貨・ホビー",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20232.html"
  },
  {
    "pref": "hiroshima",
    "group": "kamiyacho",
    "name": "BOOKOFF SUPER BAZAAR 広島大手町店",
    "address": "〒730-0051 広島県広島市中区大手町2-7-6",
    "hours": "10:00～22:00（本、CD、DVD、ゲーム、ホビー、家電売場）/ 12:00～22:00（トレカ売場）/ 10:00～20:00（腕時計、貴金属、ブランド品売場）／買取受付 10:00～22:00 本、CD、DVD、ゲーム、家電",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20135.html"
  },
  {
    "pref": "hiroshima",
    "group": "kamiyacho",
    "name": "らしんばん広島店",
    "address": "〒730-0051 広島県広島市中区大手町2-3-1 アニメイトビル 4階",
    "hours": "平日 11:00～20:00（買取受付 11:00～18:00）/ 休日 10:00～20:00（買取受付 11:00～18:00）/ 定休日なし",
    "buy": "「広島店では、中古買取や販売も行っています。」／取り扱い商品「…家庭用ゲームソフト」",
    "url": "https://www.lashinbang.com/store/48/"
  },
  {
    "pref": "hiroshima",
    "group": "south",
    "name": "BOOKOFF SUPER BAZAAR 広島段原店",
    "address": "〒732-0814 広島県広島市南区段原南1-3-52  広島段原ショッピングセンター",
    "hours": "10:00～21:00／買取受付 10:00～21:00 ブランド品、貴金属、腕時計以外 / 10:00～19:00 ブランド品、貴金属、腕時計売場",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20514.html"
  },
  {
    "pref": "hiroshima",
    "group": "south",
    "name": "レプトン 出汐店",
    "address": "広島県広島市南区出汐1丁目15-8",
    "hours": "10:00～21:00",
    "buy": "「ニンテンドースイッチ2・スイッチ／プレイステーション5・4など、最新機種のゲームソフト取り扱いございます。買取も大募集中ですので、ぜひお持ちください！」",
    "url": "https://www.lepton.ne.jp/shop/deshio/"
  },
  {
    "pref": "hiroshima",
    "group": "nishi",
    "name": "駿河屋 アルパーク北棟店",
    "address": "〒733-0863 広島県広島市西区草津南4-7-1 アルパーク北棟2F",
    "hours": "10:00～21:00 / 定休日 アルパークに準ずる",
    "buy": "取扱商品「ゲームソフト・ゲームハード…」／買取について「取扱商品以外は買取対象外となります。」",
    "url": "https://www.suruga-ya.jp/feature/alpark/index.html"
  },
  {
    "pref": "hiroshima",
    "group": "nishi",
    "name": "ゲオ広島庚午店",
    "address": "〒7330822 広島県広島市西区庚午中１丁目６番２３号",
    "hours": "朝9:00〜夜23:00 /【買取受付時間】朝9:00〜夜22:30 / 年中無休",
    "buy": "店舗ページの「お取扱い品目」の買取欄に「ゲーム」",
    "url": "https://geo-online.co.jp/store/40483/"
  },
  {
    "pref": "hiroshima",
    "group": "asa",
    "name": "駿河屋 MEGA中筋店",
    "address": "〒731-0122 広島県広島市安佐南区中筋4-11-7",
    "hours": "10:00～21:00 / 年中無休",
    "buy": "取扱商品「…ゲームソフト・ハード…」／買取について「取扱商品以外は買取対象外となります。」",
    "url": "https://www.suruga-ya.jp/feature/meganakasuji/index.html"
  },
  {
    "pref": "hiroshima",
    "group": "asa",
    "name": "ゲオ広島長束店",
    "address": "〒7310135 広島県広島市安佐南区長束２丁目１番２１号",
    "hours": "朝9:00〜深夜0:00 /【買取受付時間】朝9:00〜夜23:30 / 年中無休",
    "buy": "店舗ページの「お取扱い品目」の買取欄に「ゲーム」",
    "url": "https://geo-online.co.jp/store/03014/"
  },
  {
    "pref": "hiroshima",
    "group": "asa",
    "name": "レプトン 祇園店",
    "address": "広島県広島市安佐南区西原6-33-14 TKビル１F",
    "hours": "10:00～22:00",
    "buy": "「…トレカ・ゲーム・スマホの販売、買取の専門店！！！」「…平成レトロゲームの販売、買取しています！」",
    "url": "https://www.lepton.ne.jp/shop/gion/"
  },
  {
    "pref": "hiroshima",
    "group": "asa",
    "name": "レプトン 上安店",
    "address": "広島市安佐南区上安１丁目２０－１４",
    "hours": "10:00～21:00",
    "buy": "フロア情報「テレビゲームリサイクル、レトロ、トレーティングカード、新品・中古・買取」／「レトロの本体・周辺機器・攻略本も買取募集中です！」",
    "url": "https://www.lepton.ne.jp/shop/kamiyasu/"
  },
  {
    "pref": "hiroshima",
    "group": "asa",
    "name": "レプトン 可部店",
    "address": "広島県広島市安佐北区可部7-7-18",
    "hours": "10:00～22:00",
    "buy": "「中古本体及び周辺機器の販売・買取を強化中です。」「ぜひご家庭で不要のゲーム機・ソフト・トレカをお持ちください。」",
    "url": "https://www.lepton.ne.jp/shop/kabe/"
  },
  {
    "pref": "sapporo",
    "group": "center",
    "name": "駿河屋 札幌ノルベサ店",
    "address": "〒060-0063 北海道札幌市中央区南三条西5丁目1-1 ノルベサ 1階・3階",
    "hours": "11:00～23:00 ※ゲーム・アイドル・トレカ・プラモコーナーは22:00閉店 ※対面買取査定は19:30まで",
    "buy": "取扱商品「…ゲームソフト、ゲームハード…」（買取は1階）",
    "url": "https://www.suruga-ya.jp/feature/sapporo/index.html"
  },
  {
    "pref": "sapporo",
    "group": "center",
    "name": "BOOKOFF 札幌南2条店",
    "address": "〒060-0062 北海道札幌市中央区南二条西1-3",
    "hours": "10:00～21:00",
    "buy": "店舗ページの「売りたい商品」に「ゲームソフト、ゲーム機本体」",
    "url": "https://www.bookoff.co.jp/shop/shop20374.html"
  },
  {
    "pref": "sapporo",
    "group": "shinsapporo",
    "name": "駿河屋 新札幌DUO店",
    "address": "〒004-0052 北海道札幌市厚別区厚別中央2条5丁目6-2 DUO-1 4階",
    "hours": "10:00～21:00（買取受付終了20:30）/ DUO-1の休館日に準じます",
    "buy": "取扱商品「…ゲームソフト・ハード…」／買取について「取扱商品以外は買取対象外となります。」",
    "url": "https://www.suruga-ya.jp/feature/realstore/shinsapporo/index.html"
  }
]
