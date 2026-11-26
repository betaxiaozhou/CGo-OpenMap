# Deming ZHOU 申请新加坡城市主理人的流程

依据本次克隆版本的 [CONTRIBUTING.md](../../CONTRIBUTING.md)、[PORTING.md](../../PORTING.md)、[AGENTS.md](../../AGENTS.md) 与 [质量规范](../../docs/QUALITY_STANDARDS.md) 整理（2026-11-23）。规则最终由项目核心团队解释；本地代码登记、Fork 或提交 PR 本身均不等于已获官方身份。

## 1. 与项目方确认认领范围

加入官方 QQ 群 **619357751**（[加群入口](https://qm.qq.com/q/nHfgBDS68o)）。说明 GitHub 用户名 `betaxiaozhou`、署名 `Deming ZHOU`，希望长期维护“新加坡完整 MRT/LRT 线路图”，并确认当前是否已有认领者、完整多运营商网络的维护范围，以及官方参考图的几何使用方式是否可接受。本版已覆盖 SMRT 与 SBS Transit。

贡献指南要求各城市主理人加入官方群保持联络；质量预警、整改、下架和交接在群里公示。不在群内可能错过通知并被替换。本次没有代发群消息、提交 Issue 或申请。

## 2. Fork 并接入本地成果

在用户指定的 [仓库](https://github.com/NokiaimuL/CGo-OpenMap) 点击 Fork，目标账号选 `betaxiaozhou`。若 GitHub 自动跳转到新的组织地址，以仓库页当前地址为准。已有本地 clone 无需再下载一次：

```sh
cd /workspace/CGo-OpenMap
git remote rename origin upstream
git remote add origin https://github.com/betaxiaozhou/CGo-OpenMap.git
git switch -c feat/singapore-network
```

这些命令是假设尚未配置 Fork；已存在 `origin` / `upstream` 时先 `git remote -v`，勿重复执行。本次交付保留未提交的工作区修改。已填写申请署名和主页；正式身份应在项目方接受后再调整。

## 3. 核对资料、补全与本地验收

阅读 [城市 README](README.md) 的来源、运营日期、范围与缺项，特别是尚未开通的 TEL5 / DTL3e 三站 和其他运营商换乘信息。现已打包 SIL OFL 授权的 Lato 与 Noto 中文子集及授权文本，无需 LTA Identity；另需确认参考图版权与派生几何使用范围；勿将网上能下载理解为自动取得开放许可。

当前已完成标准城市文件、注册、184 个 MRT/LRT 运营物理站（187 个线路侧节点）、圣淘沙捷运 4 站及 3 个施工站的拓扑与状态和缓存登记。站距用 `??`，没有伪造时刻与公里数。若补齐数据，应保存官方来源与有效日期。检查英文站名/站码检索、主要中文别名、普通付费区内换乘合并、三处出闸换乘拆分、环路闭合、线路高亮、缩放拖动、手机布局、亮暗主题和离线打开；定位需补充可靠地理坐标后才能作为完整功能验收。

在仓库根目录执行：

```sh
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080/main.html?city=singapore
# 在另一个终端执行：
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

依当前 PR 自查清单：**C 级（≥60）才可发 PR，整改到 B 级（≥70）并通过全网自检才可合并上线**；贡献指南长期维护条款要求维持 A 级。PORTING.md 部分文字仍写 A 级上线，应在群里与评审者确认适用要求，不能自行宣布达标。`status: updating` 应在评审接纳后再改为 `active`。

## 4. 提交到自己的 Fork，再发 PR

检查差异，确认除新城市文件外，其余城市脚本和核心脚本的改动仅用于规范要求的全站版本同步：

```sh
git diff --stat
git diff --check
git add city/singapore scripts/check-singapore-*.mjs city/data.js README.md sw.js main.html index.html editor/index.html privacy.html readme.html offline.html city/beijing/beijing.js city/changchun/changchun.js city/dalian/dalian.js city/fuzhou/fuzhou.js city/harbin/harbin.js city/hefei/hefei.js city/hohhot/hohhot.js city/lanzhou/lanzhou.js city/lanzhou/modules/lanzhou_fare_table.js city/lanzhou/modules/lanzhou_station_names.js city/shenyang/shenyang.js city/shijiazhuang/shijiazhuang.js city/suzhou/suzhou.js core/script.js
git commit -m "Add Singapore MRT/LRT network and maintainer application"
git push -u origin feat/singapore-network
```

然后在 GitHub 创建 Pull Request：base 为官方仓库 `main`，compare 为 `betaxiaozhou:feat/singapore-network`。标题可用 `新增新加坡 MRT/LRT 线路图及城市主理人申请`。正文写明申请人、范围、184 个运营站/14 个运营渲染条目，另有圣淘沙捷运 4 站/1 个条目及 3 座施工站/2 个施工元数据条目、资料版次、缺项、验证结果，附桌面/手机/暗色截图，并复制 CONTRIBUTING.md 的完整 PR 自查清单，只勾选已实际完成的项。不要把待核实站距、未接入时刻表或未经评审的质量分数写成已完成。

## 5. 评审、合入与署名确认

响应评审意见，修正数据、文字避让与源资料问题；每次变更升级缓存并重新检查。官方贡献指南将城市数据**合入主仓库**作为城市主理人登记的关键条件。合并后检查 `maintainers` 中姓名/主页、README 名录及地图“关于与帮助”展示是否一致，并由项目方确认申请身份已转正式。是否赋予仓库写权限由维护团队决定，贡献指南没有承诺 PR 合入就自动获得写权限。

## 6. 长期维护与交接

关注 LTA / SMRT 公告，在新线开通、站名变更、停运或服务调整时及时核对和发 PR；回应纠错反馈并保留资料日期。本次后续重要节点是 **2026-12-26 TEL5 / DTL3e**，届时需核验实际开通再更新 TE30、TE31/DT37 与 DT36，不能只按预计日自动当作运营。

质量长期失管、严重排版/数据问题或跌入 D 级（<60）可能触发下架整改与重新招募。无法继续维护时在官方群联络，交接资料、待办和源文件；社区接任者经官方评估可接替主理人。这是长期维护职责，而非完成一次制图即可永久保留的职务。
