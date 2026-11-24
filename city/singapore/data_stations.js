// LTA SM-26-01-EN; operating status checked 2026-11-23. See README.md.
const stationsData = {
  "NS1": {
    "type": "tsf",
    "x": 631.88,
    "y": 1418.46,
    "cn": "Jurong<br>East",
    "en": "NS1 / EW24",
    "align": "right",
    "offset": {
      "x": 5.06,
      "y": 51.68
    },
    "aliases": [
      "NS1",
      "EW24",
      "Jurong East",
      "裕廊东"
    ]
  },
  "NS2": {
    "type": "dot",
    "x": 631.69,
    "y": 1240.85,
    "cn": "Bukit Batok",
    "en": "NS2",
    "align": "right",
    "offset": {
      "x": -150.98,
      "y": 4.34
    },
    "aliases": [
      "NS2",
      "Bukit Batok"
    ]
  },
  "NS3": {
    "type": "dot",
    "x": 631.69,
    "y": 1066.35,
    "cn": "Bukit Gombak",
    "en": "NS3",
    "align": "right",
    "offset": {
      "x": -176.57,
      "y": 4.44
    },
    "aliases": [
      "NS3",
      "Bukit Gombak"
    ]
  },
  "NS4": {
    "type": "tsf",
    "x": 654.82,
    "y": 888.56,
    "cn": "Choa Chu Kang",
    "en": "NS4 / BP1",
    "align": "right",
    "offset": {
      "x": -235.65,
      "y": 0.52
    },
    "aliases": [
      "NS4",
      "BP1",
      "Choa Chu Kang"
    ]
  },
  "NS5": {
    "type": "dot",
    "x": 631.69,
    "y": 672.1,
    "cn": "Yew Tee",
    "en": "NS5",
    "align": "right",
    "offset": {
      "x": -115.67,
      "y": 0.09
    },
    "aliases": [
      "NS5",
      "Yew Tee"
    ]
  },
  "NS7": {
    "type": "dot",
    "x": 631.69,
    "y": 465.28,
    "cn": "Kranji",
    "en": "NS7",
    "align": "right",
    "offset": {
      "x": -92.56,
      "y": -0.28
    },
    "aliases": [
      "NS7",
      "Kranji"
    ]
  },
  "NS8": {
    "type": "dot",
    "x": 681.79,
    "y": 295.77,
    "cn": "Marsiling",
    "en": "NS8",
    "align": "right",
    "offset": {
      "x": -126.62,
      "y": -0.29
    },
    "aliases": [
      "NS8",
      "Marsiling"
    ]
  },
  "NS9": {
    "type": "tsf",
    "x": 997.27,
    "y": 230.99,
    "cn": "Woodlands",
    "en": "NS9 / TE2",
    "align": "right",
    "offset": {
      "x": -170.3,
      "y": -39.32
    },
    "aliases": [
      "NS9",
      "TE2",
      "Woodlands",
      "兀兰"
    ]
  },
  "NS10": {
    "type": "dot",
    "x": 1184.82,
    "y": 230.86,
    "cn": "Admiralty",
    "en": "NS10",
    "align": "right",
    "offset": {
      "x": -45.9,
      "y": -36.95
    },
    "aliases": [
      "NS10",
      "Admiralty"
    ]
  },
  "NS11": {
    "type": "dot",
    "x": 1314.81,
    "y": 230.86,
    "cn": "Sembawang",
    "en": "NS11",
    "align": "right",
    "offset": {
      "x": -54.5,
      "y": -36.88
    },
    "aliases": [
      "NS11",
      "Sembawang"
    ]
  },
  "NS12": {
    "type": "dot",
    "x": 1451.3,
    "y": 230.86,
    "cn": "Canberra",
    "en": "NS12",
    "align": "right",
    "offset": {
      "x": -38.63,
      "y": -36.88
    },
    "aliases": [
      "NS12",
      "Canberra"
    ]
  },
  "NS13": {
    "type": "dot",
    "x": 1591.09,
    "y": 283.33,
    "cn": "Yishun",
    "en": "NS13",
    "align": "right",
    "offset": {
      "x": 38.31,
      "y": 1.2
    },
    "aliases": [
      "NS13",
      "Yishun"
    ]
  },
  "NS14": {
    "type": "dot",
    "x": 1650.61,
    "y": 393.32,
    "cn": "Khatib",
    "en": "NS14",
    "align": "right",
    "offset": {
      "x": 36.67,
      "y": 2.23
    },
    "aliases": [
      "NS14",
      "Khatib"
    ]
  },
  "NS15": {
    "type": "dot",
    "x": 1653.46,
    "y": 491.18,
    "cn": "Yio Chu Kang",
    "en": "NS15",
    "align": "right",
    "offset": {
      "x": 33.82,
      "y": 4.15
    },
    "aliases": [
      "NS15",
      "Yio Chu Kang"
    ]
  },
  "NS16": {
    "type": "dot",
    "x": 1653.48,
    "y": 620.58,
    "cn": "Ang Mo Kio",
    "en": "NS16",
    "align": "right",
    "offset": {
      "x": 33.8,
      "y": 1.04
    },
    "aliases": [
      "NS16",
      "Ang Mo Kio"
    ]
  },
  "NS17": {
    "type": "tsf",
    "x": 1653.59,
    "y": 764.09,
    "cn": "Bishan",
    "en": "NS17 / CC15",
    "align": "right",
    "offset": {
      "x": 20.07,
      "y": -34.86
    },
    "aliases": [
      "NS17",
      "CC15",
      "Bishan",
      "碧山"
    ]
  },
  "NS18": {
    "type": "dot",
    "x": 1653.5,
    "y": 834.09,
    "cn": "Braddell",
    "en": "NS18",
    "align": "right",
    "offset": {
      "x": 36.72,
      "y": -0.16
    },
    "aliases": [
      "NS18",
      "Braddell"
    ]
  },
  "NS19": {
    "type": "dot",
    "x": 1653.52,
    "y": 931.14,
    "cn": "Toa Payoh",
    "en": "NS19",
    "align": "right",
    "offset": {
      "x": 36.7,
      "y": 2.24
    },
    "aliases": [
      "NS19",
      "Toa Payoh"
    ]
  },
  "NS20": {
    "type": "dot",
    "x": 1594.97,
    "y": 1051.55,
    "cn": "Novena",
    "en": "NS20",
    "align": "right",
    "offset": {
      "x": 35.73,
      "y": -0.44
    },
    "aliases": [
      "NS20",
      "Novena"
    ]
  },
  "NS21": {
    "type": "tsfo",
    "x": 1511.05,
    "y": 1138.8,
    "cn": "Newton",
    "en": "NS21",
    "align": "right",
    "offset": {
      "x": -5.29,
      "y": 35.94
    },
    "aliases": [
      "Newton",
      "NS21",
      "Newton"
    ],
    "physicalHubId": "newton",
    "paidAreaTransfer": {
      "peerId": "DT11",
      "peerCode": "DT11",
      "peerLine": "DT",
      "limitMinutes": 15
    }
  },
  "NS22": {
    "type": "tsf",
    "x": 1393.2,
    "y": 1285.59,
    "cn": "Orchard",
    "en": "TE14 / NS22",
    "align": "right",
    "offset": {
      "x": 66.02,
      "y": 4.82
    },
    "aliases": [
      "NS22",
      "TE14",
      "Orchard",
      "乌节"
    ]
  },
  "NS23": {
    "type": "dot",
    "x": 1493.98,
    "y": 1395.06,
    "cn": "Somerset",
    "en": "NS23",
    "align": "right",
    "offset": {
      "x": 41.84,
      "y": 0.54
    },
    "aliases": [
      "NS23",
      "Somerset"
    ]
  },
  "NS24": {
    "type": "tsf",
    "x": 1686.06,
    "y": 1540.05,
    "cn": "Dhoby<br>Ghaut",
    "en": "NS24 / NE6 / CC1",
    "align": "right",
    "offset": {
      "x": -39.55,
      "y": -61.83
    },
    "aliases": [
      "NS24",
      "CC1",
      "NE6",
      "Dhoby Ghaut",
      "多美歌"
    ]
  },
  "NS25": {
    "type": "tsf",
    "x": 1867.7,
    "y": 1766.46,
    "cn": "City<br>Hall",
    "en": "NS25 / EW13",
    "align": "right",
    "offset": {
      "x": 66.37,
      "y": -3.79
    },
    "aliases": [
      "NS25",
      "EW13",
      "City Hall",
      "政府大厦"
    ]
  },
  "NS26": {
    "type": "tsf",
    "x": 1867.18,
    "y": 1860.38,
    "cn": "Raffles<br>Place",
    "en": "NS26 / EW14",
    "align": "right",
    "offset": {
      "x": 70.02,
      "y": 38.35
    },
    "aliases": [
      "NS26",
      "EW14",
      "Raffles Place"
    ]
  },
  "NS27": {
    "type": "tsf",
    "x": 1905.83,
    "y": 2023.04,
    "cn": "Marina Bay",
    "en": "NS27 / TE20 / CC33",
    "align": "right",
    "offset": {
      "x": 72.69,
      "y": 39.76
    },
    "aliases": [
      "NS27",
      "CC33",
      "TE20",
      "Marina Bay",
      "滨海湾"
    ]
  },
  "NS28": {
    "type": "dot",
    "x": 1969.36,
    "y": 2104.21,
    "cn": "Marina South Pier",
    "en": "NS28",
    "align": "right",
    "offset": {
      "x": 48.53,
      "y": 0.2
    },
    "aliases": [
      "NS28",
      "Marina South Pier"
    ]
  },
  "EW1": {
    "type": "dot",
    "x": 2921.03,
    "y": 754.11,
    "cn": "Pasir Ris",
    "en": "EW1",
    "align": "right",
    "offset": {
      "x": 33.16,
      "y": 5.03
    },
    "aliases": [
      "EW1",
      "Pasir Ris",
      "巴西立"
    ]
  },
  "EW2": {
    "type": "tsfo",
    "x": 2921.03,
    "y": 842.53,
    "cn": "Tampines",
    "en": "EW2",
    "align": "right",
    "offset": {
      "x": 43.5,
      "y": -14.11
    },
    "aliases": [
      "Tampines",
      "淡滨尼",
      "EW2",
      "Tampines"
    ],
    "physicalHubId": "tampines",
    "paidAreaTransfer": {
      "peerId": "DT32",
      "peerCode": "DT32",
      "peerLine": "DT",
      "limitMinutes": 15
    }
  },
  "EW3": {
    "type": "dot",
    "x": 2920.64,
    "y": 941.6,
    "cn": "Simei",
    "en": "EW3",
    "align": "right",
    "offset": {
      "x": -89.45,
      "y": 1.11
    },
    "aliases": [
      "EW3",
      "Simei"
    ]
  },
  "EW4": {
    "type": "tsf",
    "x": 2900.9,
    "y": 998.29,
    "cn": "Tanah Merah",
    "en": "EW4 / CG",
    "align": "right",
    "offset": {
      "x": -116.82,
      "y": 37.1
    },
    "aliases": [
      "EW4",
      "Tanah Merah",
      "CG",
      "丹那美拉"
    ]
  },
  "EW5": {
    "type": "dot",
    "x": 2700.31,
    "y": 1001.73,
    "cn": "Bedok",
    "en": "EW5",
    "align": "right",
    "offset": {
      "x": -27.81,
      "y": 32.4
    },
    "aliases": [
      "EW5",
      "Bedok",
      "勿洛"
    ]
  },
  "EW6": {
    "type": "dot",
    "x": 2543.78,
    "y": 1085.79,
    "cn": "Kembangan",
    "en": "EW6",
    "align": "right",
    "offset": {
      "x": 34.32,
      "y": -0.19
    },
    "aliases": [
      "EW6",
      "Kembangan"
    ]
  },
  "EW7": {
    "type": "dot",
    "x": 2447.71,
    "y": 1182.12,
    "cn": "Eunos",
    "en": "EW7",
    "align": "right",
    "offset": {
      "x": 37.06,
      "y": -1.23
    },
    "aliases": [
      "EW7",
      "Eunos"
    ]
  },
  "EW8": {
    "type": "tsf",
    "x": 2347.62,
    "y": 1281.99,
    "cn": "Paya Lebar",
    "en": "EW8 / CC9",
    "align": "right",
    "offset": {
      "x": 71.57,
      "y": 1.99
    },
    "aliases": [
      "EW8",
      "CC9",
      "Paya Lebar"
    ]
  },
  "EW9": {
    "type": "dot",
    "x": 2260.15,
    "y": 1370.2,
    "cn": "Aljunied",
    "en": "EW9",
    "align": "right",
    "offset": {
      "x": -112.11,
      "y": 1.21
    },
    "aliases": [
      "EW9",
      "Aljunied"
    ]
  },
  "EW10": {
    "type": "dot",
    "x": 2191.52,
    "y": 1439.01,
    "cn": "Kallang",
    "en": "EW10",
    "align": "right",
    "offset": {
      "x": 35.78,
      "y": 0.73
    },
    "aliases": [
      "EW10",
      "Kallang"
    ]
  },
  "EW11": {
    "type": "dot",
    "x": 2118.33,
    "y": 1512.4,
    "cn": "Lavender",
    "en": "EW11",
    "align": "right",
    "offset": {
      "x": 36.33,
      "y": 0.57
    },
    "aliases": [
      "EW11",
      "Lavender"
    ]
  },
  "EW12": {
    "type": "tsf",
    "x": 2036.45,
    "y": 1593.43,
    "cn": "Bugis",
    "en": "EW12 / DT14",
    "align": "right",
    "offset": {
      "x": 71.18,
      "y": 2.4
    },
    "aliases": [
      "EW12",
      "DT14",
      "Bugis"
    ]
  },
  "EW15": {
    "type": "dot",
    "x": 1572.07,
    "y": 1910.44,
    "cn": "Tanjong<br>Pagar",
    "en": "EW15",
    "align": "right",
    "offset": {
      "x": -115.34,
      "y": 2.04
    },
    "aliases": [
      "EW15",
      "Tanjong Pagar"
    ]
  },
  "EW16": {
    "type": "tsf",
    "x": 1475.9,
    "y": 1760.28,
    "cn": "Outram Park",
    "en": "EW16 / NE3 / TE17",
    "align": "right",
    "offset": {
      "x": -232.63,
      "y": 1.64
    },
    "aliases": [
      "EW16",
      "TE17",
      "NE3",
      "Outram Park",
      "欧南园"
    ]
  },
  "EW17": {
    "type": "dot",
    "x": 1343.78,
    "y": 1689.12,
    "cn": "Tiong Bahru",
    "en": "EW17",
    "align": "right",
    "offset": {
      "x": -156.76,
      "y": 0.44
    },
    "aliases": [
      "EW17",
      "Tiong Bahru"
    ]
  },
  "EW18": {
    "type": "dot",
    "x": 1269.23,
    "y": 1616.86,
    "cn": "Redhill",
    "en": "EW18",
    "align": "right",
    "offset": {
      "x": -102.07,
      "y": -0.08
    },
    "aliases": [
      "EW18",
      "Redhill"
    ]
  },
  "EW19": {
    "type": "dot",
    "x": 1194.69,
    "y": 1544.59,
    "cn": "Queenstown",
    "en": "EW19",
    "align": "right",
    "offset": {
      "x": 36.87,
      "y": 2.34
    },
    "aliases": [
      "EW19",
      "Queenstown"
    ]
  },
  "EW20": {
    "type": "dot",
    "x": 1134.12,
    "y": 1485.87,
    "cn": "Commonwealth",
    "en": "EW20",
    "align": "right",
    "offset": {
      "x": 37.06,
      "y": 0.91
    },
    "aliases": [
      "EW20",
      "Commonwealth"
    ]
  },
  "EW21": {
    "type": "tsf",
    "x": 1040.05,
    "y": 1420.02,
    "cn": "Buona Vista",
    "en": "CC22 / EW21",
    "align": "right",
    "offset": {
      "x": 69.99,
      "y": 1.34
    },
    "aliases": [
      "EW21",
      "CC22",
      "Buona Vista"
    ]
  },
  "EW22": {
    "type": "dot",
    "x": 904.41,
    "y": 1421.64,
    "cn": "Dover",
    "en": "EW22",
    "align": "right",
    "offset": {
      "x": -23.28,
      "y": 35.1
    },
    "aliases": [
      "EW22",
      "Dover"
    ]
  },
  "EW23": {
    "type": "dot",
    "x": 787.69,
    "y": 1421.61,
    "cn": "Clementi",
    "en": "EW23",
    "align": "right",
    "offset": {
      "x": -37.96,
      "y": 35.08
    },
    "aliases": [
      "EW23",
      "Clementi"
    ]
  },
  "EW25": {
    "type": "dot",
    "x": 489.41,
    "y": 1421.54,
    "cn": "Chinese<br>Garden",
    "en": "EW25",
    "align": "right",
    "offset": {
      "x": -30.48,
      "y": 47.89
    },
    "aliases": [
      "EW25",
      "Chinese Garden"
    ]
  },
  "EW26": {
    "type": "dot",
    "x": 369.86,
    "y": 1413.97,
    "cn": "Lakeside",
    "en": "EW26",
    "align": "right",
    "offset": {
      "x": -35.74,
      "y": 36.43
    },
    "aliases": [
      "EW26",
      "Lakeside"
    ]
  },
  "EW27": {
    "type": "dot",
    "x": 277.23,
    "y": 1357.44,
    "cn": "Boon Lay",
    "en": "EW27",
    "align": "right",
    "offset": {
      "x": -132.34,
      "y": 2.32
    },
    "aliases": [
      "EW27",
      "Boon Lay"
    ]
  },
  "EW28": {
    "type": "dot",
    "x": 231.65,
    "y": 1278.22,
    "cn": "Pioneer",
    "en": "EW28",
    "align": "right",
    "offset": {
      "x": -112.35,
      "y": 2.38
    },
    "aliases": [
      "EW28",
      "Pioneer"
    ]
  },
  "EW29": {
    "type": "dot",
    "x": 223.12,
    "y": 1187.82,
    "cn": "Joo Koon",
    "en": "EW29",
    "align": "right",
    "offset": {
      "x": -127.16,
      "y": 1.9
    },
    "aliases": [
      "EW29",
      "Joo Koon"
    ]
  },
  "EW30": {
    "type": "dot",
    "x": 223.12,
    "y": 1097.62,
    "cn": "Gul Circle",
    "en": "EW30",
    "align": "right",
    "offset": {
      "x": -135.51,
      "y": 5.98
    },
    "aliases": [
      "EW30",
      "Gul Circle"
    ]
  },
  "EW31": {
    "type": "dot",
    "x": 223.12,
    "y": 1013.85,
    "cn": "Tuas Crescent",
    "en": "EW31",
    "align": "right",
    "offset": {
      "x": -170.89,
      "y": 0.68
    },
    "aliases": [
      "EW31",
      "Tuas Crescent"
    ]
  },
  "EW32": {
    "type": "dot",
    "x": 223.12,
    "y": 923.65,
    "cn": "Tuas West Road",
    "en": "EW32",
    "align": "right",
    "offset": {
      "x": -190.99,
      "y": 2.53
    },
    "aliases": [
      "EW32",
      "Tuas West Road"
    ]
  },
  "EW33": {
    "type": "dot",
    "x": 223.12,
    "y": 839.88,
    "cn": "Tuas Link",
    "en": "EW33",
    "align": "right",
    "offset": {
      "x": -126.8,
      "y": -0.56
    },
    "aliases": [
      "EW33",
      "Tuas Link"
    ]
  },
  "CC2": {
    "type": "dot",
    "x": 1880.25,
    "y": 1617.88,
    "cn": "Bras<br>Basah",
    "en": "CC2",
    "align": "right",
    "offset": {
      "x": -94.12,
      "y": 15.16
    },
    "aliases": [
      "CC2",
      "Bras Basah"
    ]
  },
  "CC3": {
    "type": "dot",
    "x": 2027.33,
    "y": 1764.51,
    "cn": "Esplanade",
    "en": "CC3",
    "align": "right",
    "offset": {
      "x": 32.27,
      "y": -1.21
    },
    "aliases": [
      "CC3",
      "Esplanade"
    ]
  },
  "CC4": {
    "type": "tsf",
    "x": 2215.38,
    "y": 1814.24,
    "cn": "Promenade",
    "en": "DT15 / CC4",
    "align": "right",
    "offset": {
      "x": 73.18,
      "y": 2.12
    },
    "aliases": [
      "CC4",
      "DT15",
      "Promenade"
    ]
  },
  "CC5": {
    "type": "dot",
    "x": 2301.04,
    "y": 1708.14,
    "cn": "Nicoll Highway",
    "en": "CC5",
    "align": "right",
    "offset": {
      "x": 33.72,
      "y": 1.85
    },
    "aliases": [
      "CC5",
      "Nicoll Highway"
    ]
  },
  "CC6": {
    "type": "dot",
    "x": 2337.83,
    "y": 1610.95,
    "cn": "Stadium",
    "en": "CC6",
    "align": "right",
    "offset": {
      "x": 35.88,
      "y": 3.57
    },
    "aliases": [
      "CC6",
      "Stadium"
    ]
  },
  "CC7": {
    "type": "dot",
    "x": 2359.11,
    "y": 1507.16,
    "cn": "Mountbatten",
    "en": "CC7",
    "align": "right",
    "offset": {
      "x": 37.2,
      "y": 3.08
    },
    "aliases": [
      "CC7",
      "Mountbatten"
    ]
  },
  "CC8": {
    "type": "dot",
    "x": 2363.8,
    "y": 1407.22,
    "cn": "Dakota",
    "en": "CC8",
    "align": "right",
    "offset": {
      "x": 38.2,
      "y": 1.64
    },
    "aliases": [
      "CC8",
      "Dakota"
    ]
  },
  "CC10": {
    "type": "tsf",
    "x": 2302.28,
    "y": 1137.41,
    "cn": "MacPherson",
    "en": "DT26 / CC10",
    "align": "right",
    "offset": {
      "x": -201.15,
      "y": -1.67
    },
    "aliases": [
      "CC10",
      "DT26",
      "MacPherson"
    ]
  },
  "CC11": {
    "type": "dot",
    "x": 2227.13,
    "y": 1022.48,
    "cn": "Tai Seng",
    "en": "CC11",
    "align": "right",
    "offset": {
      "x": 41.7,
      "y": -2.54
    },
    "aliases": [
      "CC11",
      "Tai Seng"
    ]
  },
  "CC12": {
    "type": "dot",
    "x": 2139.83,
    "y": 929.09,
    "cn": "Bartley",
    "en": "CC12",
    "align": "right",
    "offset": {
      "x": 39.31,
      "y": 0.69
    },
    "aliases": [
      "CC12",
      "Bartley"
    ]
  },
  "CC13": {
    "type": "tsf",
    "x": 2007.58,
    "y": 835.24,
    "cn": "Serangoon",
    "en": "NE12 / CC13",
    "align": "right",
    "offset": {
      "x": 69.86,
      "y": 0.04
    },
    "aliases": [
      "CC13",
      "NE12",
      "Serangoon"
    ]
  },
  "CC14": {
    "type": "dot",
    "x": 1846.65,
    "y": 779.42,
    "cn": "Lorong Chuan",
    "en": "CC14",
    "align": "right",
    "offset": {
      "x": -57.8,
      "y": -36.26
    },
    "aliases": [
      "CC14",
      "Lorong Chuan"
    ]
  },
  "CC16": {
    "type": "dot",
    "x": 1488.41,
    "y": 798.64,
    "cn": "Marymount",
    "en": "CC16",
    "align": "right",
    "offset": {
      "x": -17.62,
      "y": 36.97
    },
    "aliases": [
      "CC16",
      "Marymount"
    ]
  },
  "CC17": {
    "type": "tsf",
    "x": 1368.32,
    "y": 859.93,
    "cn": "Caldecott",
    "en": "CC17 / TE9",
    "align": "right",
    "offset": {
      "x": -166.6,
      "y": -5.99
    },
    "aliases": [
      "CC17",
      "TE9",
      "Caldecott"
    ]
  },
  "CC19": {
    "type": "tsf",
    "x": 1171.39,
    "y": 1032.93,
    "cn": "Botanic<br>Gardens",
    "en": "CC19 / DT9",
    "align": "right",
    "offset": {
      "x": -8.3,
      "y": 53.79
    },
    "aliases": [
      "CC19",
      "DT9",
      "Botanic Gardens"
    ]
  },
  "CC20": {
    "type": "dot",
    "x": 1092.2,
    "y": 1166.41,
    "cn": "Farrer Road",
    "en": "CC20",
    "align": "right",
    "offset": {
      "x": -149.52,
      "y": 2.43
    },
    "aliases": [
      "CC20",
      "Farrer Road"
    ]
  },
  "CC21": {
    "type": "dot",
    "x": 1053.12,
    "y": 1291.47,
    "cn": "Holland Village",
    "en": "CC21",
    "align": "right",
    "offset": {
      "x": -183.03,
      "y": -0.21
    },
    "aliases": [
      "CC21",
      "Holland Village"
    ]
  },
  "CC23": {
    "type": "dot",
    "x": 1045.43,
    "y": 1514.94,
    "cn": "one-north",
    "en": "CC23",
    "align": "right",
    "offset": {
      "x": -140.18,
      "y": 3.18
    },
    "aliases": [
      "CC23",
      "one-north"
    ]
  },
  "CC24": {
    "type": "dot",
    "x": 1063.75,
    "y": 1604.08,
    "cn": "Kent Ridge",
    "en": "CC24",
    "align": "right",
    "offset": {
      "x": -141.98,
      "y": 3.03
    },
    "aliases": [
      "CC24",
      "Kent Ridge"
    ]
  },
  "CC25": {
    "type": "dot",
    "x": 1095.06,
    "y": 1691.82,
    "cn": "Haw Par Villa",
    "en": "CC25",
    "align": "right",
    "offset": {
      "x": -167.29,
      "y": -0.33
    },
    "aliases": [
      "CC25",
      "Haw Par Villa"
    ]
  },
  "CC26": {
    "type": "dot",
    "x": 1147.74,
    "y": 1788.84,
    "cn": "Pasir Panjang",
    "en": "CC26",
    "align": "right",
    "offset": {
      "x": -165.49,
      "y": -1.85
    },
    "aliases": [
      "CC26",
      "Pasir Panjang"
    ]
  },
  "CC27": {
    "type": "dot",
    "x": 1210.35,
    "y": 1869.83,
    "cn": "Labrador Park",
    "en": "CC27",
    "align": "right",
    "offset": {
      "x": -174.32,
      "y": 1.92
    },
    "aliases": [
      "CC27",
      "Labrador Park"
    ]
  },
  "CC28": {
    "type": "dot",
    "x": 1293.1,
    "y": 1947.02,
    "cn": "Telok Blangah",
    "en": "CC28",
    "align": "right",
    "offset": {
      "x": -176.71,
      "y": -1.53
    },
    "aliases": [
      "CC28",
      "Telok Blangah"
    ]
  },
  "CC29": {
    "type": "tsf",
    "x": 1416.55,
    "y": 2022.0,
    "cn": "HarbourFront",
    "en": "CC29 / NE1",
    "align": "right",
    "offset": {
      "x": -72.36,
      "y": 42.89
    },
    "aliases": [
      "CC29",
      "NE1",
      "HarbourFront",
      "港湾"
    ]
  },
  "CC30": {
    "type": "dot",
    "x": 1555.65,
    "y": 2071.92,
    "cn": "Keppel",
    "en": "CC30",
    "align": "right",
    "offset": {
      "x": -27.66,
      "y": 37.77
    },
    "aliases": [
      "CC30",
      "Keppel"
    ]
  },
  "CC31": {
    "type": "dot",
    "x": 1677.45,
    "y": 2087.67,
    "cn": "Cantonment",
    "en": "CC31",
    "align": "right",
    "offset": {
      "x": -55.2,
      "y": -32.86
    },
    "aliases": [
      "CC31",
      "Cantonment"
    ]
  },
  "CC32": {
    "type": "dot",
    "x": 1805.83,
    "y": 2079.98,
    "cn": "Prince Edward<br>Road",
    "en": "CC32",
    "align": "right",
    "offset": {
      "x": -65.03,
      "y": 46.09
    },
    "aliases": [
      "CC32",
      "Prince Edward Road"
    ]
  },
  "CC34": {
    "type": "tsf",
    "x": 2101.46,
    "y": 1937.92,
    "cn": "Bayfront",
    "en": "DT16 / CC34",
    "align": "right",
    "offset": {
      "x": 66.67,
      "y": -4.14
    },
    "aliases": [
      "CC34",
      "DT16",
      "Bayfront"
    ]
  },
  "TE1": {
    "type": "dot",
    "x": 899.99,
    "y": 128.64,
    "cn": "Woodlands North",
    "en": "TE1",
    "align": "right",
    "offset": {
      "x": 39.59,
      "y": 1.01
    },
    "aliases": [
      "TE1",
      "Woodlands North"
    ]
  },
  "TE3": {
    "type": "dot",
    "x": 1060.69,
    "y": 296.31,
    "cn": "Woodlands South",
    "en": "TE3",
    "align": "right",
    "offset": {
      "x": 37.88,
      "y": 0.25
    },
    "aliases": [
      "TE3",
      "Woodlands South"
    ]
  },
  "TE4": {
    "type": "dot",
    "x": 1131.55,
    "y": 370.25,
    "cn": "Springleaf",
    "en": "TE4",
    "align": "right",
    "offset": {
      "x": 35.99,
      "y": 0.32
    },
    "aliases": [
      "TE4",
      "Springleaf"
    ]
  },
  "TE5": {
    "type": "dot",
    "x": 1202.41,
    "y": 444.18,
    "cn": "Lentor",
    "en": "TE5",
    "align": "right",
    "offset": {
      "x": 40.39,
      "y": 1.92
    },
    "aliases": [
      "TE5",
      "Lentor"
    ]
  },
  "TE6": {
    "type": "dot",
    "x": 1273.26,
    "y": 518.12,
    "cn": "Mayflower",
    "en": "TE6",
    "align": "right",
    "offset": {
      "x": 39.94,
      "y": 0.71
    },
    "aliases": [
      "TE6",
      "Mayflower"
    ]
  },
  "TE7": {
    "type": "dot",
    "x": 1348.37,
    "y": 610.02,
    "cn": "Bright Hill",
    "en": "TE7",
    "align": "right",
    "offset": {
      "x": 35.35,
      "y": 2.98
    },
    "aliases": [
      "TE7",
      "Bright Hill"
    ]
  },
  "TE8": {
    "type": "dot",
    "x": 1369.15,
    "y": 724.26,
    "cn": "Upper Thomson",
    "en": "TE8",
    "align": "right",
    "offset": {
      "x": 31.72,
      "y": 4.04
    },
    "aliases": [
      "TE8",
      "Upper Thomson"
    ]
  },
  "TE11": {
    "type": "tsf",
    "x": 1370.27,
    "y": 1034.28,
    "cn": "Stevens",
    "en": "DT10 / TE11",
    "align": "right",
    "offset": {
      "x": 30.88,
      "y": 34.32
    },
    "aliases": [
      "TE11",
      "DT10",
      "Stevens"
    ]
  },
  "TE12": {
    "type": "dot",
    "x": 1369.14,
    "y": 1123.7,
    "cn": "Napier",
    "en": "TE12",
    "align": "right",
    "offset": {
      "x": 32.01,
      "y": 4.43
    },
    "aliases": [
      "TE12",
      "Napier"
    ]
  },
  "TE13": {
    "type": "dot",
    "x": 1369.14,
    "y": 1207.47,
    "cn": "Orchard Boulevard",
    "en": "TE13",
    "align": "right",
    "offset": {
      "x": -222.05,
      "y": 0.87
    },
    "aliases": [
      "TE13",
      "Orchard Boulevard"
    ]
  },
  "TE15": {
    "type": "dot",
    "x": 1369.14,
    "y": 1387.92,
    "cn": "Great World",
    "en": "TE15",
    "align": "right",
    "offset": {
      "x": -160.65,
      "y": -1.4
    },
    "aliases": [
      "TE15",
      "Great World"
    ]
  },
  "TE16": {
    "type": "dot",
    "x": 1369.14,
    "y": 1478.14,
    "cn": "Havelock",
    "en": "TE16",
    "align": "right",
    "offset": {
      "x": 34.23,
      "y": 4.55
    },
    "aliases": [
      "TE16",
      "Havelock"
    ]
  },
  "TE18": {
    "type": "dot",
    "x": 1602.59,
    "y": 1822.19,
    "cn": "Maxwell",
    "en": "TE18",
    "align": "right",
    "offset": {
      "x": 24.84,
      "y": 2.58
    },
    "aliases": [
      "TE18",
      "Maxwell"
    ]
  },
  "TE19": {
    "type": "dot",
    "x": 1760.92,
    "y": 1975.89,
    "cn": "Shenton Way",
    "en": "TE19",
    "align": "right",
    "offset": {
      "x": -168.9,
      "y": 3.17
    },
    "aliases": [
      "TE19",
      "Shenton Way"
    ]
  },
  "TE22": {
    "type": "dot",
    "x": 2327.41,
    "y": 1938.48,
    "cn": "Gardens by the Bay",
    "en": "TE22",
    "align": "right",
    "offset": {
      "x": 31.57,
      "y": -4.07
    },
    "aliases": [
      "TE22",
      "Gardens by the Bay"
    ]
  },
  "TE23": {
    "type": "dot",
    "x": 2473.52,
    "y": 1792.38,
    "cn": "Tanjong Rhu",
    "en": "TE23",
    "align": "right",
    "offset": {
      "x": 33.35,
      "y": 2.35
    },
    "aliases": [
      "TE23",
      "Tanjong Rhu"
    ]
  },
  "TE24": {
    "type": "dot",
    "x": 2542.01,
    "y": 1723.9,
    "cn": "Katong Park",
    "en": "TE24",
    "align": "right",
    "offset": {
      "x": 32.53,
      "y": 2.73
    },
    "aliases": [
      "TE24",
      "Katong Park"
    ]
  },
  "TE25": {
    "type": "dot",
    "x": 2610.5,
    "y": 1655.41,
    "cn": "Tanjong Katong",
    "en": "TE25",
    "align": "right",
    "offset": {
      "x": 33.32,
      "y": 2.87
    },
    "aliases": [
      "TE25",
      "Tanjong Katong"
    ]
  },
  "TE26": {
    "type": "dot",
    "x": 2674.42,
    "y": 1591.5,
    "cn": "Marine Parade",
    "en": "TE26",
    "align": "right",
    "offset": {
      "x": 37.33,
      "y": -0.62
    },
    "aliases": [
      "TE26",
      "Marine Parade"
    ]
  },
  "TE27": {
    "type": "dot",
    "x": 2742.91,
    "y": 1523.01,
    "cn": "Marine Terrace",
    "en": "TE27",
    "align": "right",
    "offset": {
      "x": 37.29,
      "y": -0.3
    },
    "aliases": [
      "TE27",
      "Marine Terrace"
    ]
  },
  "TE28": {
    "type": "dot",
    "x": 2811.4,
    "y": 1454.53,
    "cn": "Siglap",
    "en": "TE28",
    "align": "right",
    "offset": {
      "x": 36.46,
      "y": 0.4
    },
    "aliases": [
      "TE28",
      "Siglap"
    ]
  },
  "TE29": {
    "type": "dot",
    "x": 2870.76,
    "y": 1395.18,
    "cn": "Bayshore",
    "en": "TE29",
    "align": "right",
    "offset": {
      "x": 36.53,
      "y": 0.92
    },
    "aliases": [
      "TE29",
      "Bayshore"
    ]
  },
  "BP2": {
    "type": "dot",
    "x": 837.48,
    "y": 836.7,
    "cn": "South View",
    "en": "BP2",
    "align": "right",
    "offset": {
      "x": -107.83,
      "y": 2.57
    },
    "aliases": [
      "BP2",
      "South View"
    ]
  },
  "BP3": {
    "type": "dot",
    "x": 837.48,
    "y": 746.81,
    "cn": "Keat Hong",
    "en": "BP3",
    "align": "right",
    "offset": {
      "x": -104.25,
      "y": 4.54
    },
    "aliases": [
      "BP3",
      "Keat Hong"
    ]
  },
  "BP4": {
    "type": "dot",
    "x": 837.48,
    "y": 663.34,
    "cn": "Teck Whye",
    "en": "BP4",
    "align": "right",
    "offset": {
      "x": -106.14,
      "y": 1.68
    },
    "aliases": [
      "BP4",
      "Teck Whye"
    ]
  },
  "BP5": {
    "type": "dot",
    "x": 837.48,
    "y": 573.45,
    "cn": "Phoenix",
    "en": "BP5",
    "align": "right",
    "offset": {
      "x": -86.23,
      "y": 2.37
    },
    "aliases": [
      "BP5",
      "Phoenix"
    ]
  },
  "BP6": {
    "type": "tsfo",
    "x": 837.48,
    "y": 496.4,
    "cn": "Bukit Panjang",
    "en": "BP6",
    "align": "right",
    "offset": {
      "x": 46.53,
      "y": -27.73
    },
    "aliases": [
      "Bukit Panjang",
      "武吉班让",
      "BP6",
      "Bukit Panjang"
    ],
    "physicalHubId": "bukit-panjang",
    "paidAreaTransfer": {
      "peerId": "DT1",
      "peerCode": "DT1",
      "peerLine": "DT",
      "limitMinutes": 15
    }
  },
  "BP7": {
    "type": "dot",
    "x": 879.0,
    "y": 420.09,
    "cn": "Petir",
    "en": "BP7",
    "align": "right",
    "offset": {
      "x": 30.09,
      "y": -0.29
    },
    "aliases": [
      "BP7",
      "Petir"
    ]
  },
  "BP8": {
    "type": "dot",
    "x": 901.36,
    "y": 374.83,
    "cn": "Pending",
    "en": "BP8",
    "align": "right",
    "offset": {
      "x": 29.62,
      "y": 3.82
    },
    "aliases": [
      "BP8",
      "Pending"
    ]
  },
  "BP9": {
    "type": "dot",
    "x": 887.56,
    "y": 330.64,
    "cn": "Bangkit",
    "en": "BP9",
    "align": "right",
    "offset": {
      "x": 31.54,
      "y": 3.94
    },
    "aliases": [
      "BP9",
      "Bangkit"
    ]
  },
  "BP10": {
    "type": "dot",
    "x": 837.08,
    "y": 306.41,
    "cn": "Fajar",
    "en": "BP10",
    "align": "right",
    "offset": {
      "x": -13.08,
      "y": -23.79
    },
    "aliases": [
      "BP10",
      "Fajar"
    ]
  },
  "BP11": {
    "type": "dot",
    "x": 784.52,
    "y": 333.53,
    "cn": "Segar",
    "en": "BP11",
    "align": "right",
    "offset": {
      "x": -72.84,
      "y": -0.61
    },
    "aliases": [
      "BP11",
      "Segar"
    ]
  },
  "BP12": {
    "type": "dot",
    "x": 772.78,
    "y": 374.83,
    "cn": "Jelapang",
    "en": "BP12",
    "align": "right",
    "offset": {
      "x": -95.72,
      "y": 2.15
    },
    "aliases": [
      "BP12",
      "Jelapang"
    ]
  },
  "BP13": {
    "type": "dot",
    "x": 795.15,
    "y": 420.09,
    "cn": "Senja",
    "en": "BP13",
    "align": "right",
    "offset": {
      "x": -71.74,
      "y": -0.37
    },
    "aliases": [
      "BP13",
      "Senja"
    ]
  },
  "CG1": {
    "type": "tsf",
    "x": 3070.49,
    "y": 1114.12,
    "cn": "Expo",
    "en": "CG1 / DT35",
    "align": "right",
    "offset": {
      "x": 19.06,
      "y": -39.42
    },
    "aliases": [
      "CG1",
      "DT35",
      "Expo",
      "博览"
    ]
  },
  "CG2": {
    "type": "dot",
    "x": 3212.5,
    "y": 1116.58,
    "cn": "Changi Airport",
    "en": "CG2",
    "align": "right",
    "offset": {
      "x": -53.91,
      "y": 37.33
    },
    "aliases": [
      "CG2",
      "Changi Airport",
      "樟宜机场"
    ]
  },
  "NE4": {
    "type": "tsf",
    "x": 1570.41,
    "y": 1673.68,
    "cn": "Chinatown",
    "en": "NE4 / DT19",
    "align": "right",
    "offset": {
      "x": 64.73,
      "y": 6.93
    },
    "aliases": [
      "NE4",
      "DT19",
      "Chinatown",
      "牛车水"
    ]
  },
  "NE5": {
    "type": "dot",
    "x": 1622.15,
    "y": 1620.3,
    "cn": "Clarke<br>Quay",
    "en": "NE5",
    "align": "right",
    "offset": {
      "x": 24,
      "y": 19
    },
    "aliases": [
      "NE5",
      "Clarke Quay",
      "克拉码头"
    ]
  },
  "NE7": {
    "type": "tsf",
    "x": 1761.26,
    "y": 1318.38,
    "cn": "Little India",
    "en": "NE7 / DT12",
    "align": "right",
    "offset": {
      "x": 72.17,
      "y": -0.4
    },
    "aliases": [
      "NE7",
      "DT12",
      "Little India",
      "小印度"
    ]
  },
  "NE8": {
    "type": "dot",
    "x": 1760.72,
    "y": 1214.09,
    "cn": "Farrer Park",
    "en": "NE8",
    "align": "right",
    "offset": {
      "x": 36.33,
      "y": 3.33
    },
    "aliases": [
      "NE8",
      "Farrer Park",
      "花拉公园"
    ]
  },
  "NE9": {
    "type": "dot",
    "x": 1760.72,
    "y": 1123.15,
    "cn": "Boon Keng",
    "en": "NE9",
    "align": "right",
    "offset": {
      "x": 36.33,
      "y": 0.53
    },
    "aliases": [
      "NE9",
      "Boon Keng",
      "文庆"
    ]
  },
  "NE10": {
    "type": "dot",
    "x": 1817.15,
    "y": 1025.78,
    "cn": "Potong Pasir",
    "en": "NE10",
    "align": "right",
    "offset": {
      "x": 37.59,
      "y": 0.07
    },
    "aliases": [
      "NE10",
      "Potong Pasir",
      "波东巴西"
    ]
  },
  "NE11": {
    "type": "dot",
    "x": 1908.82,
    "y": 934.15,
    "cn": "Woodleigh",
    "en": "NE11",
    "align": "right",
    "offset": {
      "x": 34.8,
      "y": -0.77
    },
    "aliases": [
      "NE11",
      "Woodleigh",
      "兀里"
    ]
  },
  "NE13": {
    "type": "dot",
    "x": 2087.56,
    "y": 755.46,
    "cn": "Kovan",
    "en": "NE13",
    "align": "right",
    "offset": {
      "x": -104.49,
      "y": 1.52
    },
    "aliases": [
      "NE13",
      "Kovan",
      "高文"
    ]
  },
  "NE14": {
    "type": "dot",
    "x": 2151.72,
    "y": 691.31,
    "cn": "Hougang",
    "en": "NE14",
    "align": "right",
    "offset": {
      "x": -129.12,
      "y": -1.05
    },
    "aliases": [
      "NE14",
      "Hougang",
      "后港"
    ]
  },
  "NE15": {
    "type": "dot",
    "x": 2220.47,
    "y": 622.59,
    "cn": "Buangkok",
    "en": "NE15",
    "align": "right",
    "offset": {
      "x": -138.28,
      "y": 0.86
    },
    "aliases": [
      "NE15",
      "Buangkok",
      "万国"
    ]
  },
  "NE16": {
    "type": "tsf",
    "x": 2286.48,
    "y": 556.31,
    "cn": "Sengkang",
    "en": "NE16 / STC",
    "align": "right",
    "offset": {
      "x": -173.05,
      "y": -0.47
    },
    "aliases": [
      "NE16",
      "STC",
      "Sengkang",
      "盛港"
    ]
  },
  "NE17": {
    "type": "tsf",
    "x": 2452.6,
    "y": 390.23,
    "cn": "Punggol",
    "en": "NE17 / PTC",
    "align": "right",
    "offset": {
      "x": 68.96,
      "y": 1.8
    },
    "aliases": [
      "NE17",
      "PTC",
      "Punggol",
      "榜鹅"
    ]
  },
  "NE18": {
    "type": "dot",
    "x": 2510.32,
    "y": 332.82,
    "cn": "Punggol Coast",
    "en": "NE18",
    "align": "right",
    "offset": {
      "x": 29.41,
      "y": -3.27
    },
    "aliases": [
      "NE18",
      "Punggol Coast",
      "榜鹅海岸"
    ]
  },
  "DT2": {
    "type": "dot",
    "x": 974.21,
    "y": 551.04,
    "cn": "Cashew",
    "en": "DT2",
    "align": "right",
    "offset": {
      "x": 38.04,
      "y": 1.91
    },
    "aliases": [
      "DT2",
      "Cashew",
      "凯秀"
    ]
  },
  "DT3": {
    "type": "dot",
    "x": 995.23,
    "y": 633.65,
    "cn": "Hillview",
    "en": "DT3",
    "align": "right",
    "offset": {
      "x": 34.59,
      "y": 0.13
    },
    "aliases": [
      "DT3",
      "Hillview",
      "山景"
    ]
  },
  "DT4": {
    "type": "dot",
    "x": 995.23,
    "y": 710.49,
    "cn": "Hume",
    "en": "DT4",
    "align": "right",
    "offset": {
      "x": 34.59,
      "y": 4.93
    },
    "aliases": [
      "DT4",
      "Hume",
      "谦道"
    ]
  },
  "DT5": {
    "type": "dot",
    "x": 995.23,
    "y": 793.74,
    "cn": "Beauty World",
    "en": "DT5",
    "align": "right",
    "offset": {
      "x": 34.59,
      "y": 2.66
    },
    "aliases": [
      "DT5",
      "Beauty World",
      "美世界"
    ]
  },
  "DT6": {
    "type": "dot",
    "x": 995.23,
    "y": 876.99,
    "cn": "King Albert Park",
    "en": "DT6",
    "align": "right",
    "offset": {
      "x": 34.47,
      "y": -0.25
    },
    "aliases": [
      "DT6",
      "King Albert Park",
      "阿尔柏王园"
    ]
  },
  "DT7": {
    "type": "dot",
    "x": 998.49,
    "y": 954.23,
    "cn": "Sixth Avenue",
    "en": "DT7",
    "align": "right",
    "offset": {
      "x": 37.69,
      "y": 3.09
    },
    "aliases": [
      "DT7",
      "Sixth Avenue",
      "第六道"
    ]
  },
  "DT8": {
    "type": "dot",
    "x": 1034.47,
    "y": 1010.97,
    "cn": "Tan Kah Kee",
    "en": "DT8",
    "align": "right",
    "offset": {
      "x": -157.52,
      "y": 1.66
    },
    "aliases": [
      "DT8",
      "Tan Kah Kee",
      "陈嘉庚"
    ]
  },
  "DT13": {
    "type": "dot",
    "x": 1853.51,
    "y": 1409.78,
    "cn": "Rochor",
    "en": "DT13",
    "align": "right",
    "offset": {
      "x": 38.33,
      "y": 3.32
    },
    "aliases": [
      "DT13",
      "Rochor",
      "梧槽"
    ]
  },
  "DT17": {
    "type": "dot",
    "x": 1961.23,
    "y": 1975.83,
    "cn": "Downtown",
    "en": "DT17",
    "align": "top",
    "offset": {
      "x": 32,
      "y": -108
    },
    "aliases": [
      "DT17",
      "Downtown",
      "市中心"
    ]
  },
  "DT18": {
    "type": "dot",
    "x": 1772.49,
    "y": 1866.36,
    "cn": "Telok<br>Ayer",
    "en": "DT18",
    "align": "right",
    "offset": {
      "x": -91.84,
      "y": 5.24
    },
    "aliases": [
      "DT18",
      "Telok Ayer",
      "直落亚逸"
    ]
  },
  "DT20": {
    "type": "dot",
    "x": 1563.43,
    "y": 1570.41,
    "cn": "Fort Canning",
    "en": "DT20",
    "align": "right",
    "offset": {
      "x": -161.79,
      "y": -5.15
    },
    "aliases": [
      "DT20",
      "Fort Canning",
      "福康宁"
    ]
  },
  "DT21": {
    "type": "dot",
    "x": 1912.38,
    "y": 1535.0,
    "cn": "Bencoolen",
    "en": "DT21",
    "align": "right",
    "offset": {
      "x": -101.16,
      "y": -32.28
    },
    "aliases": [
      "DT21",
      "Bencoolen",
      "明古连"
    ]
  },
  "DT22": {
    "type": "dot",
    "x": 1990.54,
    "y": 1456.97,
    "cn": "Jalan Besar",
    "en": "DT22",
    "align": "right",
    "offset": {
      "x": 32.25,
      "y": 0.49
    },
    "aliases": [
      "DT22",
      "Jalan Besar",
      "惹兰勿刹"
    ]
  },
  "DT23": {
    "type": "dot",
    "x": 2091.7,
    "y": 1355.99,
    "cn": "Bendemeer",
    "en": "DT23",
    "align": "right",
    "offset": {
      "x": -148.46,
      "y": -4.32
    },
    "aliases": [
      "DT23",
      "Bendemeer",
      "明地迷亚"
    ]
  },
  "DT24": {
    "type": "dot",
    "x": 2169.87,
    "y": 1277.97,
    "cn": "Geylang Bahru",
    "en": "DT24",
    "align": "right",
    "offset": {
      "x": -182.53,
      "y": 2.85
    },
    "aliases": [
      "DT24",
      "Geylang Bahru",
      "芽笼峇鲁"
    ]
  },
  "DT25": {
    "type": "dot",
    "x": 2238.84,
    "y": 1209.12,
    "cn": "Mattar",
    "en": "DT25",
    "align": "right",
    "offset": {
      "x": -107.32,
      "y": -1.92
    },
    "aliases": [
      "DT25",
      "Mattar",
      "玛达"
    ]
  },
  "DT27": {
    "type": "dot",
    "x": 2390.57,
    "y": 1057.65,
    "cn": "Ubi",
    "en": "DT27",
    "align": "right",
    "offset": {
      "x": 36.61,
      "y": 1.89
    },
    "aliases": [
      "DT27",
      "Ubi",
      "乌美"
    ]
  },
  "DT28": {
    "type": "dot",
    "x": 2464.14,
    "y": 984.22,
    "cn": "Kaki Bukit",
    "en": "DT28",
    "align": "right",
    "offset": {
      "x": 36.21,
      "y": 0.84
    },
    "aliases": [
      "DT28",
      "Kaki Bukit",
      "加基武吉"
    ]
  },
  "DT29": {
    "type": "dot",
    "x": 2533.11,
    "y": 915.37,
    "cn": "Bedok<br>North",
    "en": "DT29",
    "align": "right",
    "offset": {
      "x": 37.31,
      "y": 12.84
    },
    "aliases": [
      "DT29",
      "Bedok North"
    ]
  },
  "DT30": {
    "type": "dot",
    "x": 2651.78,
    "y": 880.5,
    "cn": "Bedok<br>Reservoir",
    "en": "DT30",
    "align": "right",
    "offset": {
      "x": -39.46,
      "y": -47.29
    },
    "aliases": [
      "DT30",
      "Bedok Reservoir"
    ]
  },
  "DT31": {
    "type": "dot",
    "x": 2781.64,
    "y": 880.5,
    "cn": "Tampines<br>West",
    "en": "DT31",
    "align": "right",
    "offset": {
      "x": -45.85,
      "y": -47.29
    },
    "aliases": [
      "DT31",
      "Tampines West"
    ]
  },
  "DT33": {
    "type": "dot",
    "x": 3068.46,
    "y": 939.78,
    "cn": "Tampines East",
    "en": "DT33",
    "align": "right",
    "offset": {
      "x": 32.92,
      "y": 2.93
    },
    "aliases": [
      "DT33",
      "Tampines East"
    ]
  },
  "DT34": {
    "type": "dot",
    "x": 3068.46,
    "y": 1015.99,
    "cn": "Upper Changi",
    "en": "DT34",
    "align": "right",
    "offset": {
      "x": 34.68,
      "y": -0.31
    },
    "aliases": [
      "DT34",
      "Upper Changi"
    ]
  },
  "SE1": {
    "type": "dot",
    "x": 2429.45,
    "y": 629.96,
    "cn": "Compassvale",
    "en": "SE1",
    "align": "right",
    "offset": {
      "x": 18.04,
      "y": 2.91
    },
    "aliases": [
      "SE1",
      "Compassvale"
    ]
  },
  "SE2": {
    "type": "dot",
    "x": 2468.96,
    "y": 669.48,
    "cn": "Rumbia",
    "en": "SE2",
    "align": "right",
    "offset": {
      "x": 16.2,
      "y": 0.59
    },
    "aliases": [
      "SE2",
      "Rumbia"
    ]
  },
  "SE3": {
    "type": "dot",
    "x": 2478.2,
    "y": 735.96,
    "cn": "Bakau",
    "en": "SE3",
    "align": "right",
    "offset": {
      "x": 22.48,
      "y": 1.14
    },
    "aliases": [
      "SE3",
      "Bakau"
    ]
  },
  "SE4": {
    "type": "dot",
    "x": 2398.85,
    "y": 730.82,
    "cn": "Kangkar",
    "en": "SE4",
    "align": "right",
    "offset": {
      "x": -85.19,
      "y": -0.82
    },
    "aliases": [
      "SE4",
      "Kangkar"
    ]
  },
  "SE5": {
    "type": "dot",
    "x": 2359.33,
    "y": 691.3,
    "cn": "Ranggung",
    "en": "SE5",
    "align": "right",
    "offset": {
      "x": -99.16,
      "y": 1.14
    },
    "aliases": [
      "SE5",
      "Ranggung"
    ]
  },
  "SW1": {
    "type": "dot",
    "x": 2240.17,
    "y": 444.72,
    "cn": "Cheng Lim",
    "en": "SW1",
    "align": "right",
    "offset": {
      "x": 18.34,
      "y": -2.26
    },
    "aliases": [
      "SW1",
      "Cheng Lim"
    ]
  },
  "SW2": {
    "type": "dot",
    "x": 2205.13,
    "y": 405.65,
    "cn": "Farmway",
    "en": "SW2",
    "align": "right",
    "offset": {
      "x": 19.61,
      "y": 0.33
    },
    "aliases": [
      "SW2",
      "Farmway"
    ]
  },
  "SW3": {
    "type": "dot",
    "x": 2170.0,
    "y": 370.52,
    "cn": "Kupang",
    "en": "SW3",
    "align": "right",
    "offset": {
      "x": 19.31,
      "y": 1.13
    },
    "aliases": [
      "SW3",
      "Kupang"
    ]
  },
  "SW4": {
    "type": "dot",
    "x": 2120.78,
    "y": 361.59,
    "cn": "Thanggam",
    "en": "SW4",
    "align": "right",
    "offset": {
      "x": -103.19,
      "y": 2.96
    },
    "aliases": [
      "SW4",
      "Thanggam"
    ]
  },
  "SW5": {
    "type": "dot",
    "x": 2088.24,
    "y": 394.78,
    "cn": "Fernvale",
    "en": "SW5",
    "align": "right",
    "offset": {
      "x": -88.12,
      "y": 0.69
    },
    "aliases": [
      "SW5",
      "Fernvale"
    ]
  },
  "SW6": {
    "type": "dot",
    "x": 2104.28,
    "y": 436.25,
    "cn": "Layar",
    "en": "SW6",
    "align": "right",
    "offset": {
      "x": -71.32,
      "y": 1.1
    },
    "aliases": [
      "SW6",
      "Layar"
    ]
  },
  "SW7": {
    "type": "dot",
    "x": 2139.4,
    "y": 471.38,
    "cn": "Tongkang",
    "en": "SW7",
    "align": "right",
    "offset": {
      "x": -95.91,
      "y": 0.93
    },
    "aliases": [
      "SW7",
      "Tongkang"
    ]
  },
  "SW8": {
    "type": "dot",
    "x": 2173.7,
    "y": 503.82,
    "cn": "Renjong",
    "en": "SW8",
    "align": "right",
    "offset": {
      "x": -84.15,
      "y": 1.22
    },
    "aliases": [
      "SW8",
      "Renjong"
    ]
  },
  "PE1": {
    "type": "dot",
    "x": 2499.28,
    "y": 485.52,
    "cn": "Cove",
    "en": "PE1",
    "align": "right",
    "offset": {
      "x": -68.2,
      "y": 2.15
    },
    "aliases": [
      "PE1",
      "Cove"
    ]
  },
  "PE2": {
    "type": "dot",
    "x": 2531.57,
    "y": 536.62,
    "cn": "Meridian",
    "en": "PE2",
    "align": "right",
    "offset": {
      "x": -89.49,
      "y": -1.22
    },
    "aliases": [
      "PE2",
      "Meridian"
    ]
  },
  "PE3": {
    "type": "dot",
    "x": 2571.09,
    "y": 576.14,
    "cn": "Coral Edge",
    "en": "PE3",
    "align": "right",
    "offset": {
      "x": -109.82,
      "y": 0.48
    },
    "aliases": [
      "PE3",
      "Coral Edge"
    ]
  },
  "PE4": {
    "type": "dot",
    "x": 2641.66,
    "y": 572.5,
    "cn": "Riviera",
    "en": "PE4",
    "align": "right",
    "offset": {
      "x": 28.28,
      "y": 1.28
    },
    "aliases": [
      "PE4",
      "Riviera"
    ]
  },
  "PE5": {
    "type": "dot",
    "x": 2641.21,
    "y": 514.8,
    "cn": "Kadaloor",
    "en": "PE5",
    "align": "right",
    "offset": {
      "x": 30.92,
      "y": -1.3
    },
    "aliases": [
      "PE5",
      "Kadaloor"
    ]
  },
  "PE6": {
    "type": "dot",
    "x": 2601.69,
    "y": 475.28,
    "cn": "Oasis",
    "en": "PE6",
    "align": "right",
    "offset": {
      "x": 20.52,
      "y": 0.03
    },
    "aliases": [
      "PE6",
      "Oasis"
    ]
  },
  "PE7": {
    "type": "dot",
    "x": 2561.9,
    "y": 442.41,
    "cn": "Damai",
    "en": "PE7",
    "align": "right",
    "offset": {
      "x": 18.25,
      "y": -2.86
    },
    "aliases": [
      "PE7",
      "Damai"
    ]
  },
  "PW1": {
    "type": "dot",
    "x": 2403.63,
    "y": 281.26,
    "cn": "Sam Kee",
    "en": "PW1",
    "align": "right",
    "offset": {
      "x": 18.5,
      "y": 2.73
    },
    "aliases": [
      "PW1",
      "Sam Kee"
    ]
  },
  "PW2": {
    "type": "dot",
    "x": 2372.99,
    "y": 246.58,
    "cn": "Teck Lee",
    "en": "PW2",
    "align": "right",
    "offset": {
      "x": 18.85,
      "y": -0.04
    },
    "aliases": [
      "PW2",
      "Teck Lee",
      "德利"
    ]
  },
  "PW3": {
    "type": "dot",
    "x": 2337.86,
    "y": 211.45,
    "cn": "Punggol<br>Point",
    "en": "PW3",
    "align": "right",
    "offset": {
      "x": 18.02,
      "y": -2.36
    },
    "aliases": [
      "PW3",
      "Punggol Point"
    ]
  },
  "PW4": {
    "type": "dot",
    "x": 2271.53,
    "y": 210.85,
    "cn": "Samudera",
    "en": "PW4",
    "align": "right",
    "offset": {
      "x": -101.23,
      "y": 0.2
    },
    "aliases": [
      "PW4",
      "Samudera"
    ]
  },
  "PW5": {
    "type": "dot",
    "x": 2263.35,
    "y": 268.4,
    "cn": "Nibong",
    "en": "PW5",
    "align": "right",
    "offset": {
      "x": -83.93,
      "y": 1.37
    },
    "aliases": [
      "PW5",
      "Nibong"
    ]
  },
  "PW6": {
    "type": "dot",
    "x": 2298.47,
    "y": 303.52,
    "cn": "Sumang",
    "en": "PW6",
    "align": "right",
    "offset": {
      "x": -85.64,
      "y": -1.91
    },
    "aliases": [
      "PW6",
      "Sumang"
    ]
  },
  "PW7": {
    "type": "dot",
    "x": 2332.86,
    "y": 337.44,
    "cn": "Soo Teck",
    "en": "PW7",
    "align": "right",
    "offset": {
      "x": -94.08,
      "y": -4.04
    },
    "aliases": [
      "PW7",
      "Soo Teck"
    ]
  },
  "DT11": {
    "type": "tsfo",
    "x": 1581.67,
    "y": 1139.86,
    "cn": "Newton",
    "en": "DT11",
    "align": "right",
    "offset": {
      "x": -75.91,
      "y": 26.88
    },
    "aliases": [
      "Newton",
      "DT11",
      "Newton"
    ],
    "physicalHubId": "newton",
    "paidAreaTransfer": {
      "peerId": "NS21",
      "peerCode": "NS21",
      "peerLine": "NS",
      "limitMinutes": 15
    },
    "hideLabel": true
  },
  "DT1": {
    "type": "tsfo",
    "x": 896.26,
    "y": 519.97,
    "cn": "Bukit Panjang",
    "en": "DT1",
    "align": "right",
    "offset": {
      "x": -12.25,
      "y": -51.3
    },
    "aliases": [
      "Bukit Panjang",
      "武吉班让",
      "DT1",
      "Bukit Panjang"
    ],
    "physicalHubId": "bukit-panjang",
    "paidAreaTransfer": {
      "peerId": "BP6",
      "peerCode": "BP6",
      "peerLine": "BP",
      "limitMinutes": 15
    },
    "hideLabel": true
  },
  "DT32": {
    "type": "tsfo",
    "x": 2980.99,
    "y": 880.5,
    "cn": "Tampines",
    "en": "DT32",
    "align": "right",
    "offset": {
      "x": -16.46,
      "y": -52.08
    },
    "aliases": [
      "Tampines",
      "淡滨尼",
      "DT32",
      "Tampines"
    ],
    "physicalHubId": "tampines",
    "paidAreaTransfer": {
      "peerId": "EW2",
      "peerCode": "EW2",
      "peerLine": "EW",
      "limitMinutes": 15
    },
    "hideLabel": true
  },
  "TE30": {
    "type": "no",
    "x": 2933.39,
    "y": 1330.87,
    "cn": "Bedok South",
    "en": "TE30",
    "align": "right",
    "offset": {
      "x": 31,
      "y": 0
    },
    "aliases": [
      "TE30",
      "勿洛南"
    ],
    "construction": {
      "project": "TEL5",
      "plannedOpening": "2026-12-26"
    }
  },
  "TE31": {
    "type": "no",
    "x": 3068.46,
    "y": 1255.55,
    "cn": "Sungei Bedok",
    "en": "TE31 / DT37",
    "align": "right",
    "offset": {
      "x": 70,
      "y": 0
    },
    "aliases": [
      "TE31",
      "DT37",
      "双溪勿洛"
    ],
    "construction": {
      "project": "TEL5 / DTL3e",
      "plannedOpening": "2026-12-26"
    }
  },
  "DT36": {
    "type": "no",
    "x": 3068.46,
    "y": 1184.52,
    "cn": "Xilin",
    "en": "DT36",
    "align": "right",
    "offset": {
      "x": 28,
      "y": 0
    },
    "aliases": [
      "DT36",
      "锡林"
    ],
    "construction": {
      "project": "DTL3e",
      "plannedOpening": "2026-12-26"
    }
  }
};
