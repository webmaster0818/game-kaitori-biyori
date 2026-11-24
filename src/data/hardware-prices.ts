// ハード別ページの買取価格（2026-11-24 に各社の公式買取ページで実測。推定・創作なし。掲載のない店は null）
// 駿河屋=買取検索の通常買取価格（箱・説明書・付属品そろい前提）／ブックオフ=宅配買取（sell.bookoff.co.jp）の参考買取価格（箱説あり・店舗買取価格とは異なる）／ゲオ=宅配買取（buy.geo-online.co.jp）の「最高価格」（状態が最も良い場合の上限）
export const HW_CHECKED = '2026年11月24日'
export type HwCell = { price: number | null; listing: string | null; url: string | null; note?: string }
export type HwRow = { family: string; model: string; cells: Partial<Record<'駿河屋' | 'ブックオフ' | 'ゲオ', HwCell>> }
export const hwPrices: HwRow[] = [
 {
  "family": "PS4",
  "model": "PS4 初期型(CUH-1000/1100/1200系)",
  "cells": {
   "駿河屋": {
    "price": 13000,
    "listing": "プレイステーション4本体 ジェットブラック(HDD 500GB/CUH-1200AB01)",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=CUH-1200AB01"
   },
   "ブックオフ": {
    "price": 8000,
    "listing": "PlayStation4 ジェット・ブラック(CUH1200AB01)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/CUH-1200AB01"
   },
   "ゲオ": {
    "price": 16000,
    "listing": "PlayStation4 CUH-1200AB01 ジェット・ブラック",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=CUH-1200"
   }
  }
 },
 {
  "family": "PS4",
  "model": "PS4 Slim(CUH-2000/2100/2200系)",
  "cells": {
   "駿河屋": {
    "price": 14000,
    "listing": "プレイステーション4本体 ジェットブラック (HDD 500GB/CUH-2200AB01)",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=PS4%20CUH-2200"
   },
   "ブックオフ": {
    "price": 10000,
    "listing": "PlayStation4 ジェット・ブラック 500GB(CUH2200AB01)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/CUH-2200AB01"
   },
   "ゲオ": {
    "price": 18000,
    "listing": "PlayStation4 CUH-2200AB01 ジェット・ブラック 500GB",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=CUH-2200&sort=2"
   }
  }
 },
 {
  "family": "PS4",
  "model": "PS4 Pro(CUH-7000/7100/7200系)",
  "cells": {
   "駿河屋": {
    "price": 16000,
    "listing": "プレイステーション4 Pro本体 ジェットブラック(HDD 1TB/CUH-7200BB01)",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=CUH-7200BB01"
   },
   "ブックオフ": {
    "price": 12001,
    "listing": "PlayStation4 Pro 1TB:ジェット・ブラック(CUH7200BB01)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/CUH-7200BB01"
   },
   "ゲオ": {
    "price": 22000,
    "listing": "PlayStation4 Pro CUH-7200BB01 ジェット・ブラック 1TB",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=CUH-7200"
   }
  }
 },
 {
  "family": "3DS/DS",
  "model": "Nintendo 3DS",
  "cells": {
   "駿河屋": {
    "price": 13000,
    "listing": "ニンテンドー3DS本体 コスモブラック",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC3DS%E6%9C%AC%E4%BD%93%20%E3%82%B3%E3%82%B9%E3%83%A2%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   },
   "ブックオフ": {
    "price": 9000,
    "listing": "ニンテンドー3DS:コスモブラック(CTRSKAAA)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC3DS%20%E3%82%B3%E3%82%B9%E3%83%A2%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   },
   "ゲオ": {
    "price": 10000,
    "listing": "ニンテンドー3DS コスモブラック",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=3DS%20%E3%82%B3%E3%82%B9%E3%83%A2%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   }
  }
 },
 {
  "family": "3DS/DS",
  "model": "Nintendo 3DS LL",
  "cells": {
   "駿河屋": {
    "price": 16000,
    "listing": "ニンテンドー3DSLL本体 ブラック",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC3DSLL%E6%9C%AC%E4%BD%93%20%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   },
   "ブックオフ": {
    "price": 12001,
    "listing": "ニンテンドー3DS LL:ブラック(SPRSKKAA)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/SPRSKKAA"
   },
   "ゲオ": {
    "price": 13000,
    "listing": "ニンテンドー3DS LL ブラック",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=3DS%20LL%20%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   }
  }
 },
 {
  "family": "3DS/DS",
  "model": "New 3DS",
  "cells": {
   "駿河屋": {
    "price": 22000,
    "listing": "Newニンテンドー3DS本体 ブラック",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=KTR-S-KAAA"
   },
   "ブックオフ": {
    "price": 16000,
    "listing": "Newニンテンドー3DS:ブラック(KTRSKAAA)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/New%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC3DS%20%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   },
   "ゲオ": {
    "price": 20000,
    "listing": "Newニンテンドー3DS ブラック",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=New%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC3DS%20%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   }
  }
 },
 {
  "family": "3DS/DS",
  "model": "New 3DS LL",
  "cells": {
   "駿河屋": {
    "price": 25000,
    "listing": "Newニンテンドー3DSLL本体 メタリックブラック",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=New%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC3DSLL%E6%9C%AC%E4%BD%93%20%E3%83%A1%E3%82%BF%E3%83%AA%E3%83%83%E3%82%AF%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   },
   "ブックオフ": {
    "price": 17000,
    "listing": "Newニンテンドー3DS LL:メタリックブラック(REDSVAAA)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/New%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC3DS%20%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   },
   "ゲオ": {
    "price": 20000,
    "listing": "Newニンテンドー3DS LL メタリックブラック",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%83%A1%E3%82%BF%E3%83%AA%E3%83%83%E3%82%AF%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   }
  }
 },
 {
  "family": "3DS/DS",
  "model": "Nintendo 2DS",
  "cells": {
   "駿河屋": {
    "price": 16000,
    "listing": "ニンテンドー2DS本体 クリアブラック",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC2DS%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": 8000,
    "listing": "ニンテンドー2DS スーパーマリオパック(ホワイト×イエロー)(FTRSWDDT)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/FTRS"
   },
   "ゲオ": {
    "price": 10000,
    "listing": "ニンテンドー2DS クリアブラック",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=2DS"
   }
  }
 },
 {
  "family": "3DS/DS",
  "model": "New 2DS LL",
  "cells": {
   "駿河屋": {
    "price": 22000,
    "listing": "Newニンテンドー2DS LL本体 ブラック×ターコイズ",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=New%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC2DSLL%E6%9C%AC%E4%BD%93%20%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%C3%97%E3%82%BF%E3%83%BC%E3%82%B3%E3%82%A4%E3%82%BA"
   },
   "ブックオフ": {
    "price": 16000,
    "listing": "Newニンテンドー2DS LL:ブラック×ターコイズ(JANSBAAA)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/New%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC3DS%20%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   },
   "ゲオ": {
    "price": 20000,
    "listing": "Newニンテンドー2DS LL ブラック×ターコイズ",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=2DS"
   }
  }
 },
 {
  "family": "3DS/DS",
  "model": "Nintendo DS",
  "cells": {
   "駿河屋": {
    "price": 10000,
    "listing": "ニンテンドーDS本体 ピュアホワイト",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDS%E6%9C%AC%E4%BD%93%20%E3%83%94%E3%83%A5%E3%82%A2%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88"
   },
   "ブックオフ": {
    "price": 2700,
    "listing": "ニンテンドーDS:ピュアホワイト",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDS%20%E3%83%94%E3%83%A5%E3%82%A2%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88"
   },
   "ゲオ": {
    "price": 2500,
    "listing": "ニンテンドーDS ピュアホワイト",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDS%20%E3%83%94%E3%83%A5%E3%82%A2%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88"
   }
  }
 },
 {
  "family": "3DS/DS",
  "model": "Nintendo DS Lite",
  "cells": {
   "駿河屋": {
    "price": 11000,
    "listing": "ニンテンドーDS Lite本体 クリスタルホワイト",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDS%20Lite%E6%9C%AC%E4%BD%93%20%E3%82%AF%E3%83%AA%E3%82%B9%E3%82%BF%E3%83%AB%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88"
   },
   "ブックオフ": {
    "price": 4000,
    "listing": "ニンテンドーDS Lite:クリスタルホワイト",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/DS%20Lite%20%E3%82%AF%E3%83%AA%E3%82%B9%E3%82%BF%E3%83%AB%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88"
   },
   "ゲオ": {
    "price": 4500,
    "listing": "ニンテンドーDS Lite クリスタルホワイト",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=DS%20Lite%20%E3%82%AF%E3%83%AA%E3%82%B9%E3%82%BF%E3%83%AB%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88"
   }
  }
 },
 {
  "family": "Xbox",
  "model": "Xbox Series X",
  "cells": {
   "駿河屋": {
    "price": 50000,
    "listing": "Xbox Series X本体 [RRT-00015]",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=Xbox%20Series%20X%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": 16000,
    "listing": "Xbox Series X(RRT-00015)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/RRT00015"
   },
   "ゲオ": {
    "price": null,
    "listing": "Xbox Series X 1TB ディスクモデル(ブラック)",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=Xbox%20Series%20X",
    "note": "同名の別型番の可能性があり掲載を見送り"
   }
  }
 },
 {
  "family": "Xbox",
  "model": "Xbox Series S 512GB",
  "cells": {
   "駿河屋": {
    "price": 26000,
    "listing": "Xbox Series S本体 [RRS-00015]",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=Xbox%20Series%20S%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": 10500,
    "listing": "Xbox Series S(RRS-00015)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/RRS00015"
   },
   "ゲオ": {
    "price": 24000,
    "listing": "Xbox Series S(512GBオールデジタル ロボット ホワイト)",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=Xbox"
   }
  }
 },
 {
  "family": "Xbox",
  "model": "Xbox Series S 1TB",
  "cells": {
   "駿河屋": {
    "price": 35000,
    "listing": "Xbox Series S本体 1TB ブラック [XXU-00015]",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=Xbox%20Series%20S%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": 11000,
    "listing": "Xbox Series S 1TB (ブラック)(XXU00015)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/XXU00015"
   },
   "ゲオ": {
    "price": 27000,
    "listing": "Xbox Series S 1TB (ブラック)",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=Xbox"
   }
  }
 },
 {
  "family": "Xbox",
  "model": "Xbox One X",
  "cells": {
   "駿河屋": {
    "price": 14000,
    "listing": "Xbox One X本体 ブラック (HDD 1TB/CYV-00015)",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=Xbox%20One%20X%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": 7000,
    "listing": "【箱説なし】Xbox One X 1TB(CYV00015)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/CYV00015"
   },
   "ゲオ": {
    "price": null,
    "listing": null,
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=Xbox%20One"
   }
  }
 },
 {
  "family": "Xbox",
  "model": "Xbox One S",
  "cells": {
   "駿河屋": {
    "price": 16000,
    "listing": "Xbox One S本体 1TB(Gears 5 同梱版)",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=Xbox%20One%20S%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": 8600,
    "listing": "Xbox One S 1TB GEARS 5 同梱版(2341035)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/Xbox%20One%20S%201TB"
   },
   "ゲオ": {
    "price": null,
    "listing": null,
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=Xbox%20One"
   }
  }
 },
 {
  "family": "Xbox",
  "model": "Xbox One(初期型)",
  "cells": {
   "駿河屋": {
    "price": 12000,
    "listing": "XboxOne本体 500GB (Halo： The Master Chief Collection 同梱版)",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=Xbox%20One%E6%9C%AC%E4%BD%93%20500GB"
   },
   "ブックオフ": {
    "price": 4500,
    "listing": "Xbox One 500GB(Halo: THE Master Chief Collection 同梱版)(5C600098)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/Xbox%20One%20500GB"
   },
   "ゲオ": {
    "price": null,
    "listing": null,
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=Xbox%20One"
   }
  }
 },
 {
  "family": "Game Boy",
  "model": "ゲームボーイ(初代)",
  "cells": {
   "駿河屋": {
    "price": 16000,
    "listing": "ゲームボーイ本体",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": null,
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%20%E6%9C%AC%E4%BD%93"
   },
   "ゲオ": {
    "price": null,
    "listing": null,
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4"
   }
  }
 },
 {
  "family": "Game Boy",
  "model": "ゲームボーイポケット",
  "cells": {
   "駿河屋": {
    "price": 13000,
    "listing": "ゲームボーイポケット本体 ブラック",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%83%9D%E3%82%B1%E3%83%83%E3%83%88%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": null,
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%83%9D%E3%82%B1%E3%83%83%E3%83%88"
   },
   "ゲオ": {
    "price": 2000,
    "listing": "ゲームボーイポケット ブラック",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%83%9D%E3%82%B1%E3%83%83%E3%83%88"
   }
  }
 },
 {
  "family": "Game Boy",
  "model": "ゲームボーイカラー",
  "cells": {
   "駿河屋": {
    "price": 13000,
    "listing": "ゲームボーイカラー本体 パープル",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%82%AB%E3%83%A9%E3%83%BC%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": null,
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%82%AB%E3%83%A9%E3%83%BC"
   },
   "ゲオ": {
    "price": 5000,
    "listing": "ゲームボーイカラー パープル",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%82%AB%E3%83%A9%E3%83%BC%20%E3%83%91%E3%83%BC%E3%83%97%E3%83%AB"
   }
  }
 },
 {
  "family": "Game Boy",
  "model": "ゲームボーイアドバンス",
  "cells": {
   "駿河屋": {
    "price": 16000,
    "listing": "ゲームボーイアドバンス本体 バイオレット",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%82%A2%E3%83%89%E3%83%90%E3%83%B3%E3%82%B9%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": "ゲームボーイアドバンス バイオレット",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%82%A2%E3%83%89%E3%83%90%E3%83%B3%E3%82%B9%20%E6%9C%AC%E4%BD%93"
   },
   "ゲオ": {
    "price": 8000,
    "listing": "ゲームボーイアドバンス バイオレット",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%82%A2%E3%83%89%E3%83%90%E3%83%B3%E3%82%B9%20%E3%83%90%E3%82%A4%E3%82%AA%E3%83%AC%E3%83%83%E3%83%88"
   }
  }
 },
 {
  "family": "Game Boy",
  "model": "ゲームボーイアドバンスSP",
  "cells": {
   "駿河屋": {
    "price": 15000,
    "listing": "ゲームボーイアドバンスSP本体 オニキスブラック",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%82%A2%E3%83%89%E3%83%90%E3%83%B3%E3%82%B9SP%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": 2700,
    "listing": "ゲームボーイアドバンスSPオニキスブラック (ACアダプター付)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%82%A2%E3%83%89%E3%83%90%E3%83%B3%E3%82%B9SP"
   },
   "ゲオ": {
    "price": 9000,
    "listing": "ゲームボーイアドバンスSP オニキスブラック",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%82%AA%E3%83%8B%E3%82%AD%E3%82%B9%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF"
   }
  }
 },
 {
  "family": "Game Boy",
  "model": "ゲームボーイミクロ",
  "cells": {
   "駿河屋": {
    "price": 26000,
    "listing": "ゲームボーイミクロ本体 シルバー",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%83%9F%E3%82%AF%E3%83%AD%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": 3600,
    "listing": "ゲームボーイミクロ:シルバー (ACアダプター、ポーチ付)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%83%9F%E3%82%AF%E3%83%AD"
   },
   "ゲオ": {
    "price": 18000,
    "listing": "ゲームボーイミクロ シルバー",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4"
   }
  }
 },
 {
  "family": "Retro",
  "model": "ファミコン(本体)",
  "cells": {
   "駿河屋": {
    "price": 8000,
    "listing": "ファミコン本体",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%83%95%E3%82%A1%E3%83%9F%E3%82%B3%E3%83%B3%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": "ファミコン本体(旧)",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%20%E6%9C%AC%E4%BD%93"
   },
   "ゲオ": {
    "price": null,
    "listing": null,
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF"
   }
  }
 },
 {
  "family": "Retro",
  "model": "スーパーファミコン",
  "cells": {
   "駿河屋": {
    "price": 5500,
    "listing": "スーパーファミコン本体",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%95%E3%82%A1%E3%83%9F%E3%82%B3%E3%83%B3%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": "スーパーファミコン本体",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%95%E3%82%A1%E3%83%9F%E3%82%B3%E3%83%B3%20%E6%9C%AC%E4%BD%93"
   },
   "ゲオ": {
    "price": null,
    "listing": null,
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%95%E3%82%A1%E3%83%9F%E3%82%B3%E3%83%B3"
   }
  }
 },
 {
  "family": "Retro",
  "model": "メガドライブ",
  "cells": {
   "駿河屋": {
    "price": 13000,
    "listing": "メガドライブ本体",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%83%A1%E3%82%AC%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": null,
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%83%A1%E3%82%AC%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96%20%E6%9C%AC%E4%BD%93"
   },
   "ゲオ": {
    "price": null,
    "listing": null,
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%83%A1%E3%82%AC%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96"
   }
  }
 },
 {
  "family": "Retro",
  "model": "PCエンジン",
  "cells": {
   "駿河屋": {
    "price": 14000,
    "listing": "PCエンジン本体",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=PC%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": null,
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/PC%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3%20%E6%9C%AC%E4%BD%93"
   },
   "ゲオ": {
    "price": null,
    "listing": null,
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=PC%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3"
   }
  }
 },
 {
  "family": "Retro",
  "model": "ネオジオ(AES)",
  "cells": {
   "駿河屋": {
    "price": 75000,
    "listing": "NEOGEO本体",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=NEOGEO%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": null,
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%83%8D%E3%82%AA%E3%82%B8%E3%82%AA%20%E6%9C%AC%E4%BD%93"
   },
   "ゲオ": {
    "price": null,
    "listing": null,
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=NEOGEO"
   }
  }
 },
 {
  "family": "Retro",
  "model": "セガサターン",
  "cells": {
   "駿河屋": {
    "price": 10000,
    "listing": "セガサターン本体",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%82%BB%E3%82%AC%E3%82%B5%E3%82%BF%E3%83%BC%E3%83%B3%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": "セガサターン",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%82%BB%E3%82%AC%E3%82%B5%E3%82%BF%E3%83%BC%E3%83%B3%20%E6%9C%AC%E4%BD%93"
   },
   "ゲオ": {
    "price": 5000,
    "listing": "セガサターン HST-0014 ミントグレイ",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%82%BB%E3%82%AC%E3%82%B5%E3%82%BF%E3%83%BC%E3%83%B3"
   }
  }
 },
 {
  "family": "Retro",
  "model": "NINTENDO64",
  "cells": {
   "駿河屋": {
    "price": 6500,
    "listing": "ニンテンドウ64本体",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%82%A664%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": "NINTENDO64",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/NINTENDO64%20%E6%9C%AC%E4%BD%93"
   },
   "ゲオ": {
    "price": 3500,
    "listing": "ニンテンドウ64",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%82%A664"
   }
  }
 },
 {
  "family": "Retro",
  "model": "ドリームキャスト",
  "cells": {
   "駿河屋": {
    "price": 13000,
    "listing": "ドリームキャスト本体[HKT-3000]",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%AD%E3%83%A3%E3%82%B9%E3%83%88%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": "ドリームキャスト本体 HKT-3000",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%AD%E3%83%A3%E3%82%B9%E3%83%88%20%E6%9C%AC%E4%BD%93"
   },
   "ゲオ": {
    "price": 3500,
    "listing": "ドリームキャスト HKT-3000",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%AD%E3%83%A3%E3%82%B9%E3%83%88"
   }
  }
 },
 {
  "family": "Retro",
  "model": "ゲームキューブ",
  "cells": {
   "駿河屋": {
    "price": 11000,
    "listing": "ゲームキューブ本体(バイオレット)",
    "url": "https://www.suruga-ya.jp/kaitori/search_buy?category=&search_word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%E6%9C%AC%E4%BD%93"
   },
   "ブックオフ": {
    "price": null,
    "listing": "ニンテンドーゲームキューブ:バイオレット",
    "url": "https://sell.bookoff.co.jp/online/search/genre/51/keyword/%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%20%E6%9C%AC%E4%BD%93"
   },
   "ゲオ": {
    "price": 2500,
    "listing": "ニンテンドーゲームキューブ バイオレット",
    "url": "https://buy.geo-online.co.jp/search/result/?cate_level1=22&cate_level2=2250&word=%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96"
   }
  }
 }
]
