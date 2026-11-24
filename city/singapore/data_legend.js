// Operating routes and LTA-style construction key.
const LEGEND_CONFIG = [
  {
    "type": "title",
    "title": "新加坡 Singapore · MRT / LRT",
    "subtitle": "6 MRT · 3 LRT · SMRT & SBS Transit",
    "marginTop": 8,
    "desc": "<div class=\"sg-transfer-key\" aria-label=\"换乘符号说明\"><div class=\"sg-transfer-key-row\"><div class=\"sg-transfer-key-sign\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-1 -1 123.6 34\" aria-hidden=\"true\"><defs><clipPath id=\"sg-legend-NS1-EW24\"><path d=\"M8.83 0 H112.77\n            C116.32 0 118.34 3.44 118.87 4.49\n            C120.68 8.08 121.6 11.95 121.6 16\n            C121.6 20.05 120.68 23.92 118.87 27.52\n            C118.34 28.56 116.32 32 112.77 32\n            H8.83 C5.28 32 3.26 28.56 2.73 27.52\n            C0.92 23.92 0 20.05 0 16\n            C0 11.95 0.92 8.08 2.73 4.49\n            C3.26 3.44 5.28 0 8.83 0 Z\"/></clipPath></defs><g clip-path=\"url(#sg-legend-NS1-EW24)\"><rect x=\"0\" y=\"0\" width=\"56.42\" height=\"32\" fill=\"#e1251b\"/>\n                <text x=\"28.16\" y=\"16\" dominant-baseline=\"central\" text-anchor=\"middle\" fill=\"#ffffff\" font-family=\"Singapore Lato, sans-serif\" font-size=\"18.5\" font-weight=\"700\">NS 1</text><rect x=\"56.32\" y=\"0\" width=\"65.38\" height=\"32\" fill=\"#009645\"/>\n                <text x=\"88.96000000000001\" y=\"16\" dominant-baseline=\"central\" text-anchor=\"middle\" fill=\"#ffffff\" font-family=\"Singapore Lato, sans-serif\" font-size=\"18.5\" font-weight=\"700\">EW 24</text></g><path d=\"M8.83 0 H112.77\n            C116.32 0 118.34 3.44 118.87 4.49\n            C120.68 8.08 121.6 11.95 121.6 16\n            C121.6 20.05 120.68 23.92 118.87 27.52\n            C118.34 28.56 116.32 32 112.77 32\n            H8.83 C5.28 32 3.26 28.56 2.73 27.52\n            C0.92 23.92 0 20.05 0 16\n            C0 11.95 0.92 8.08 2.73 4.49\n            C3.26 3.44 5.28 0 8.83 0 Z\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.2\"/></svg></div><div class=\"sg-transfer-key-label\"><strong>付费区内换乘</strong><small>Standard Transfer</small></div></div><div class=\"sg-transfer-key-row\"><div class=\"sg-transfer-key-sign\" aria-hidden=\"true\"><span class=\"sg-key-code\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-1 -1 67.28 34\" aria-hidden=\"true\"><defs><clipPath id=\"sg-legend-NS21\"><path d=\"M8.83 0 H56.45\n            C60 0 62.02 3.44 62.55 4.49\n            C64.36 8.08 65.28 11.95 65.28 16\n            C65.28 20.05 64.36 23.92 62.55 27.52\n            C62.02 28.56 60 32 56.45 32\n            H8.83 C5.28 32 3.26 28.56 2.73 27.52\n            C0.92 23.92 0 20.05 0 16\n            C0 11.95 0.92 8.08 2.73 4.49\n            C3.26 3.44 5.28 0 8.83 0 Z\"/></clipPath></defs><g clip-path=\"url(#sg-legend-NS21)\"><rect x=\"0\" y=\"0\" width=\"65.38\" height=\"32\" fill=\"#e1251b\"/>\n                <text x=\"32.64\" y=\"16\" dominant-baseline=\"central\" text-anchor=\"middle\" fill=\"#ffffff\" font-family=\"Singapore Lato, sans-serif\" font-size=\"18.5\" font-weight=\"700\">NS 21</text></g><path d=\"M8.83 0 H56.45\n            C60 0 62.02 3.44 62.55 4.49\n            C64.36 8.08 65.28 11.95 65.28 16\n            C65.28 20.05 64.36 23.92 62.55 27.52\n            C62.02 28.56 60 32 56.45 32\n            H8.83 C5.28 32 3.26 28.56 2.73 27.52\n            C0.92 23.92 0 20.05 0 16\n            C0 11.95 0.92 8.08 2.73 4.49\n            C3.26 3.44 5.28 0 8.83 0 Z\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.2\"/></svg></span><svg class=\"sg-key-neck\" viewBox=\"0 0 24 11\" aria-hidden=\"true\"><polygon fill=\"#e1251b\" points=\"0,0 14,0 10,11 0,11\"/><polygon fill=\"#0055b8\" points=\"14,0 24,0 24,11 10,11\"/></svg><span class=\"sg-key-code\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-1 -1 67.28 34\" aria-hidden=\"true\"><defs><clipPath id=\"sg-legend-DT11\"><path d=\"M8.83 0 H56.45\n            C60 0 62.02 3.44 62.55 4.49\n            C64.36 8.08 65.28 11.95 65.28 16\n            C65.28 20.05 64.36 23.92 62.55 27.52\n            C62.02 28.56 60 32 56.45 32\n            H8.83 C5.28 32 3.26 28.56 2.73 27.52\n            C0.92 23.92 0 20.05 0 16\n            C0 11.95 0.92 8.08 2.73 4.49\n            C3.26 3.44 5.28 0 8.83 0 Z\"/></clipPath></defs><g clip-path=\"url(#sg-legend-DT11)\"><rect x=\"0\" y=\"0\" width=\"65.38\" height=\"32\" fill=\"#0055b8\"/>\n                <text x=\"32.64\" y=\"16\" dominant-baseline=\"central\" text-anchor=\"middle\" fill=\"#ffffff\" font-family=\"Singapore Lato, sans-serif\" font-size=\"18.5\" font-weight=\"700\">DT 11</text></g><path d=\"M8.83 0 H56.45\n            C60 0 62.02 3.44 62.55 4.49\n            C64.36 8.08 65.28 11.95 65.28 16\n            C65.28 20.05 64.36 23.92 62.55 27.52\n            C62.02 28.56 60 32 56.45 32\n            H8.83 C5.28 32 3.26 28.56 2.73 27.52\n            C0.92 23.92 0 20.05 0 16\n            C0 11.95 0.92 8.08 2.73 4.49\n            C3.26 3.44 5.28 0 8.83 0 Z\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.2\"/></svg></span></div><div class=\"sg-transfer-key-label\"><strong>出闸后换乘</strong><small>Tap Out to Transfer</small></div></div></div>"
  },
  {
    "type": "title",
    "title": "地铁 MRT",
    "subtitle": "",
    "marginTop": 12
  },
  {
    "type": "grid",
    "cols": 1,
    "items": [
      {
        "targets": [
          "NS"
        ],
        "name": "南北线 North–South Line"
      },
      {
        "targets": [
          "EW"
        ],
        "name": "东西线 East–West Line"
      },
      {
        "targets": [
          "CG"
        ],
        "name": "东西线机场支线（接驳） Changi Airport Shuttle"
      },
      {
        "targets": [
          "NE"
        ],
        "name": "东北线 North East Line"
      },
      {
        "targets": [
          "CC"
        ],
        "name": "环线 Circle Line"
      },
      {
        "targets": [
          "CCE"
        ],
        "name": "环线多美歌支线 Dhoby Ghaut"
      },
      {
        "targets": [
          "DT"
        ],
        "name": "滨海市区线 Downtown Line"
      },
      {
        "targets": [
          "TE"
        ],
        "name": "汤申—东海岸线 Thomson–East Coast"
      }
    ]
  },
  {
    "type": "title",
    "title": "轻轨 LRT",
    "subtitle": "",
    "marginTop": 12
  },
  {
    "type": "grid",
    "cols": 1,
    "items": [
      {
        "targets": [
          "BP"
        ],
        "name": "武吉班让轻轨 Bukit Panjang LRT"
      },
      {
        "targets": [
          "BPL"
        ],
        "name": "武吉班让轻轨环路 BPLRT Loop"
      },
      {
        "targets": [
          "SE"
        ],
        "name": "盛港轻轨东环 Sengkang East"
      },
      {
        "targets": [
          "SW"
        ],
        "name": "盛港轻轨西环 Sengkang West"
      },
      {
        "targets": [
          "PE"
        ],
        "name": "榜鹅轻轨东环 Punggol East"
      },
      {
        "targets": [
          "PW"
        ],
        "name": "榜鹅轻轨西环 Punggol West"
      }
    ]
  },
  {
    "type": "title",
    "title": "施工中 · Under Construction",
    "desc": "<div class=\"sg-construction-key\"><span>Under<br>Construction</span><p>保留线路色和站码，以点状边界及左括线标出施工范围。尚未开放乘车；计划于 2026-12-26 开通，以 LTA 公告为准。</p></div>",
    "marginTop": 16
  },
  {
    "type": "grid",
    "cols": 1,
    "items": [
      {
        "targets": [
          "TE-UC"
        ],
        "name": "TEL5：Bedok South / Sungei Bedok（未开通）"
      },
      {
        "targets": [
          "DT-UC"
        ],
        "name": "DTL3e：Xilin / Sungei Bedok（未开通）"
      }
    ]
  }
];
