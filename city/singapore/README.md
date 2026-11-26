# 新加坡地铁、轻轨与圣淘沙捷运线路图

本地预览：在仓库根目录运行 `python3 -m http.server 8080`，打开 <http://localhost:8080/main.html?city=singapore>。无需安装依赖或构建。主理人申请署名：**Deming ZHOU**（[betaxiaozhou](https://github.com/betaxiaozhou/)）。这项本地登记不代表官方已批准申请。

## 收录范围

以 **2026-11-23** 为运营状态截点，收录 **SMRT 与 SBS Transit 完整 MRT/LRT 运营网络**：6 条地铁、3 个轻轨系统，共 **184 个去重物理车站**、30 个换乘标识枢纽（含 Tanah Merah 机场支线换乘；27 个付费区内换乘、3 个出闸换乘）。运营方向与支线拆为 14 个可选渲染条目，不能把条目数当成独立线路数。另收录圣淘沙捷运 4 站，合计 188 个运营物理车站；圣淘沙捷运独立检票、单独计费。

| 系统 | 线路/环路 | 运营商 | 按线路停站数（含换乘） |
|---|---|---|---:|
| MRT | 南北线 NS | SMRT | 27 |
| MRT | 东西线 EW（机场支线另列 CG） | SMRT | 33 + 3（Tanah Merah 重复） |
| MRT | 东北线 NE | SBS Transit | 17 |
| MRT | 环线 CC（多美歌支线另列 CCE） | SMRT | 合计 33 |
| MRT | 滨海市区线 DT | SBS Transit | 35 |
| MRT | 汤申—东海岸线 TE | SMRT | 27 |
| LRT | 武吉班让 BP / BPL | SMRT | 13 |
| LRT | 盛港 SE / SW，经 Sengkang STC | SBS Transit | 14 |
| LRT | 榜鹅 PE / PW，经 Punggol PTC | SBS Transit | 15 |

MRT/LRT 普通付费区内换乘使用共享节点；Newton、Bukit Panjang、Tampines 的两侧分别建模，合计 187 个线路侧节点，184 仍为去重物理车站数。所有环路均闭合。图中展示线路拓扑，不承诺具体列车交路、班次或直通服务。
- 环线已包含 2026-07-12 开通的 Keppel CC30、Cantonment CC31、Prince Edward Road CC32。
- 汤东线运营至 Bayshore TE29，滨海市区线运营至 Expo DT35。另按施工状态绘出 TE30 Bedok South、TE31/DT37 Sungei Bedok 和 DT36 Xilin，未接入运营站序。LTA 已宣布 TEL5 / DTL3e 计划于 2026-12-26 开放载客。
- 不收录未运营的 NS6 Sungei Kadut、CC18 Bukit Brown、TE10 Mount Pleasant、TE21 Marina South，以及已关闭的 BP14 Ten Mile Junction。
- 已补齐东北线（含 Punggol Coast）、滨海市区线（含 Hume）与盛港/榜鹅轻轨全部已开通站（含 Teck Lee）。跨运营商换乘已按付费区内/外的实际关系显示。Newton（NS21↔DT11）、Bukit Panjang（BP6↔DT1）、Tampines（EW2↔DT32）均需出闸；已拆分站码、以双色窄实心带连接，并提供换乘条件与另一侧节点的跳转按钮。
- 画布按 LTA 华文图展示中文站名，中文、英文和站码均可搜索。`cn` 为官方中文站名，`en` 为英文名，`stationCodes` 独立保存站码，避免改为中文后破坏自绘标牌。车站详情以中文为主，副标题保留站码和英文名供对照。轻轨小站使用较小站码与字号。
- 未核实的站距统一使用规范允许的 `"??"`，未加入估算时刻、票价、行程耗时、实时服务或站点经纬度。

## 来源与版次

1. [LTA Rail Network](https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/rail_network.html)：核对运营商分工。
2. [LTA SM-26-01-EN 全网矢量图（2026-07-21 版本）](https://www.lta.gov.sg/content/dam/ltagov/getting_around/public_transport/rail_network/pdf/SM_EN_(Ver210726)_CCL6.pdf)：站名、编号、拓扑、排版参考。
3. [LTA 官方华文全网图（2026-07-21）](https://www.lta.gov.sg/content/dam/ltagov/getting_around/public_transport/rail_network/pdf/SM_CH_(Ver210726)_CCL6.pdf)：190 个节点的中文名逐站核对，包含三座施工站及全部轻轨站。
4. [SMRT 官方全网入口](https://journey.smrt.com.sg/journey/mrt_network_map/)：旅客查看完整网络的入口。
5. [LTA：环线三座新站 2026-07-12 开通](https://www.lta.gov.sg/content/ltagov/en/newsroom/2026/6/news-releases/explore-three-new-circle-line-stage-6-stations-on-4-july-2026.html)。
6. [LTA：TEL5 / DTL3e 于 2026-12-26 开通](https://www.lta.gov.sg/content/ltagov/en/newsroom/2026/11/news-releases/tel5-dtl3e-passenger-service-26-dec-2026.html)。

站名核对使用官方华文版；现有线路几何继续采用英文版的坐标，保持已修复的线路中心线。坐标来自官方 PDF 中心线与站码锚点，转换为 `x=(PDF_x−200)×0.65`、`y=(PDF_y−1000)×0.65`。官方贝塞尔曲线按原形采样，直线样本合并；`r:0` 避免引擎二次倒角。普通站内换乘合并 ID，出闸换乘拆分两侧 ID；标牌与线路中心线独立，各线路保留官方参考图中的独立中心线，不为迁就标牌中心而强制汇聚，避免换乘站前后的尖折与平行线扭曲。图为非官方社区交互版本，不附官方 PDF、不打包官方标志或字体；官方原图版权属于 LTA，引用不代表其背书或授予原图再许可。公开提交前应按上游要求确认来源与派生几何的使用许可。

新增线路核对资料：
- [LTA 东北线：17 站](https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/rail_network/north_east_line.html)
- [LTA 滨海市区线：35 站](https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/rail_network/downtown_line.html)
- [LTA 盛港—榜鹅轻轨](https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/rail_network/sengkang_punggol_lrt.html)
- [LTA Teck Lee 于 2024-08-15 开通](https://www.lta.gov.sg/content/ltagov/en/newsroom/2024/7/news-releases/Teck_Lee_LRT_station_to_start_operations.html)

## 樟宜机场支线

常规运营为 **Tanah Merah（EW4/CG）→ Expo（CG1/DT35）→ Changi Airport（CG2）** 三站接驳，属于东西线机场支线，不计为第七条 MRT。往返市区乘客在 Tanah Merah 换乘东西线主线，或在 Expo 换乘滨海市区线。两处按付费区内换乘处理。

CG 高亮与 EW 主线解耦：点选机场支线或 CG2 时只高亮三站支线；选择 Tanah Merah 枢纽时仍会显示其实际关联线路。三站站卡均提供接驳说明和跳转按钮，出处为 [樟宜机场官方乘车指引](https://www.changiairport.com/en/at-changi/transport-and-directions/getting-to-changi-airport.html)。不硬编码月台号、时刻表或临时施工安排。

Tanah Merah 标牌的 EW4 与 CG 绿色色块之间保留白色分隔；中空双线从 CG 色块下方接入，Expo 为 CG1/DT35 联合站牌，CG2 为终点，不连接回 Tanah Merah。

## 施工区段

参照 LTA 全网图的施工表示法，TEL5 与 DTL3e 保留棕/蓝色实线及彩色站码，以两条点状边界、实体圆角左括线和深底白字 **施工中** 标牌圈出范围；不把轨道改成通用灰色虚线。线路宽度仍为 `9.52445px`，边界直径与间距由参考图同比换算。暗色主题仅调亮边界线，施工牌仍为深底白字，中文使用已打包的 Noto 子集。

三座施工站统一 `type: "no"`，可按站名、TE30、TE31、DT36、DT37 搜索；Sungei Bedok 使用 TE31/DT37 联合站码，但明确提示换乘尚未启用。置顶信息卡展示项目与计划开通日期。`data_notopen.js` 只负责施工走向，`data_construction.js` 保存施工边界与标牌；两条 `isPointOnly` 元数据项提供线路/运营商信息，不绘运营轨道、不接入现有线路站序。MRT/LRT 口径为 184 个运营物理站 / 187 个运营线路侧节点，连同 3 座施工站为 190 个节点；另有圣淘沙捷运 4 站，详见下节。开通须人工核实，不按日期自动变更。

## 圣淘沙岛与圣淘沙捷运

恢复原先遗漏的圣淘沙岛形，采用 LTA 全网图同一坐标变换下的岛屿轮廓；南部画布从 2300 扩到 2450，水系背景同步延伸，既有 MRT/LRT 站点坐标与线路中心线不变。海峡名称移到岛南侧。

按[圣淘沙官方交通页](https://www.sentosa.com.sg/getting-around)和[2026 年官方华文交通指南](https://www.sentosa.com.sg/-/media/sentosa/hero-asset/promos/discovery-pass/fun-discovery-pass/brochure/2026/fun-discovery-pass-brochure-8-may-2026-cn.pdf)绘出 **怡丰城 → 名胜世界 → 英比奥 → 海滩** 四站。采用橙色自绘单轨图标及深色实线，不使用默认圆点、不编造 MRT 站码；该线路为社区示意走向，站距仍用 `??`。

港湾地铁站与怡丰城捷运站为两个独立站点，在 `VIRTUAL_TRANSFER_MAP` 中以非免费计费换乘关系连接，地图不绘制两站间的步行线；衔接方式由车站信息卡说明。置顶卡片解释：从港湾出闸后步行到怡丰城 L 大厅 3 楼，再入闸乘车；地铁 15 分钟换乘计费规则不适用于这段捷运。怡丰城进岛标准票价 4 新元，岛内及出岛乘车免费，优惠和当日安排以官方为准。所有四站可搜索，并提供双向衔接与站点跳转。

现有 MRT/LRT 统计仍为 184 个物理站 / 187 个线路侧节点；新增圣淘沙 4 站后，共 188 个运营物理站 / 191 个运营节点，另有 3 个施工节点，总计 194 个节点。15 个运营渲染条目加 2 个施工元数据条目共 17 项。中文字体子集已补齐新站名和“圣淘沙、步行”等字符。

## 付费区外换乘

三处出闸换乘分别建模为 `NS21 / DT11`、`BP6 / DT1`、`EW2 / DT32` 六个节点。每个节点只属于其实际线路，不把不同付费区作为同一个站点；成对的 `physicalHubId` 保留 184 个物理车站的统计口径。连接关系由 `data_virtual_transfers.js` 定义，城市脚本使用两侧线路色拼成较窄的实心连接带，颜色交界斜切，按官方 Tap Out to Transfer 图例绘制，独立中心线保持不变，避免重新引入线路拐折。

点击任一侧站码，置顶卡片提示先出闸、使用同一支付卡/设备并在 15 分钟内重新进闸，且可跳转到另一侧。只有符合完整距离计费条件时才不另收新起乘费用，不能将整个车程描述为“免费”。城市关闭核心泛化的“电子客票可免费站外换乘”文案，采用本地 `modules/unpaid-transfer.js` 提示。其他换乘枢纽仍为普通付费区内换乘。

官方依据：
- [SimplyGo Transfer Fare Rules](https://simplygo.com.sg/transfer-fare-rules/)
- [交通部 2026-05-06：15 分钟换乘时限说明](https://www.mot.gov.sg/news-resources/newsroom/rationale-for-15-minute-transfer-limit-between-train-stations/)

## 线路线宽与交叉留白

按官方 PDF 的线宽乘以地图比例 `0.65`：MRT 主线为 `9.52445px`，LRT 为 `3.96695px`，机场支线总线带 `13.5564px`、中空芯 `5.4925px`，两条细轨边各约 `4.03195px`。机场支线使用 Tanah Merah → Expo → Changi Airport 的开放中心线，在较宽绿色线带上叠加背景色细芯，形成两条等宽细轨边；绘图数据不再沿外框来回绕行，也不作为环线；Tanah Merah 使用 `EW4 / CG` 标牌覆盖支线接入处。

新加坡线路关闭引擎默认的连续外描边，因此经过河流、滨海湾时不会出现额外白色边框。交叉处使用 `data_crossings.js` 中参考图的 18 处局部留白路径，并按参考图顺序叠放线路。高亮时保持各制式线宽，所有样式与图形仍仅在城市层实现。

## 水系底图

新增海岸水域、新加坡河及滨海湾，水域边界提取自上述 LTA 图中的两组水色路径，使用同一坐标变换与线网对齐。采用完整 SVG 贝塞尔曲线，亮/暗主题使用两套静态颜色资源；通过城市 `data_scattered.js` 放置在轨道下层，未修改通用渲染逻辑。中文水系名称以 Noto Sans CJK SC 轮廓写入 SVG，外部图片不依赖字体跨文件加载。海岸为交通图示意形状，并非 GIS 精确海岸数据。

## 面板线路标

车站面板顶端、搜索和线路图例使用 LTA 全网图样式的线路缩写标：NSL / EWL / NEL / CCL / DTL / TEL，以及 BP / STC / PTC。素材位于 `assets/line/`，采用线路色、弧形两端及白色外轮廓；DTL 等标识使用白字，CCL 使用深色字。字形与车站站码统一，直接使用已打包的 Lato Bold 并转成路径，不依赖手机字体。

`data_lines.js` 为各交路配置 SVG；机场支线共用 EWL、多美歌支线共用 CCL。城市层只覆盖面板徽标渲染，将同一 SVG 的支线/环路徽标去重；其他线路选项卡与换乘关系保持各自的数据。

## 中英文字体

中文站名采用本地打包的 Noto Sans CJK SC 字符子集（内部名称 Singapore Chinese），保证手机和桌面的字宽一致；线路标及车站站码均采用同一份 **Lato Bold**，英文详情采用 Lato Regular。均为 SIL OFL 开源字体，附授权文本。线路标与水系文字转为路径，首次加载后可离线显示。未打包专有 LTA Identity，见 [字体说明](FONT-NOTICE.md)。

## 文件与维护

`data_stations.js` 保存车站与搜索别名，`data_lines.js` 保存站序、中心线与站距；`data_legend.js` 保存分组图例；`singapore.js` 配置城市导航与初始取景；`style.css` 调整中文标签。MRT/LRT 普通站由城市钩子自绘两端弧形、上下平直的站码色块，换乘站采用较大的连续外形、多线路无缝拼接，去除独立切角、白缝与黑色外框；所有 194 个站点节点（含 3 个施工站、4 个圣淘沙单轨站）均不使用引擎默认圆点或默认换乘图元。其余数据文件满足标准加载链，未承诺尚未提供的功能。`stacard/script.js` 为合法空模块，未启用地图卡片服务。

本城市在注册表中设为 `updating`，等待来源许可确认、人工视觉质量评审和官方主理人接纳，不自行宣称达到 B/A 级。

修改后必须同步全站缓存版本并运行：

```sh
node scripts/check-singapore-sentosa.mjs
node scripts/check-singapore-language.mjs
node scripts/check-singapore-construction.mjs
node scripts/check-singapore-airport.mjs
node scripts/check-singapore-transfers.mjs
node scripts/check-singapore-geometry.mjs
node editor/tests/selfcheck.js
node scripts/check-site-version.mjs
node scripts/check-cache-assets.mjs
```

成为城市主理人的具体步骤见 [申请指南](MAINTAINER_GUIDE.md)。

### 终点方向数字圆标

按 LTA 中文全网图 `SM_CH_(Ver210726)_CCL6.pdf` 绘制线路色圆底、白色数字，字体采用站码相同的 Lato Bold：1巴西立、2大士连路、3樟宜机场、4裕廊东、5滨海南码头、6港湾、7榜鹅海岸、11武吉班让、12双溪勿洛（滨海市区线）、13兀兰北、14双溪勿洛（汤东线）。双溪勿洛仍属施工中，不进入运营线路；已成环的环线及轻轨、圣淘沙捷运不添加虚构方向编号。圆标作为城市独立覆盖层，避免改变车站点击范围和线路锚点。
