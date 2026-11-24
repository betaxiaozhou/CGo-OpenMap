(function () {
    'use strict';
    window.StationBoard.registerModule({
        id: 'singapore-construction', name: '施工区段', targetTab: 'body-top', order: 6, enabled: true,
        shouldRender: ({ station }) => station?.type === 'no' && Boolean(station.construction),
        render({ station }) {
            return `<section class="sg-construction-info" data-sg-construction-sid="${station.id}">
                <h3><cgo-icon name="info" size="18"></cgo-icon>施工中 · Under Construction</h3>
                <p><strong>${station.en} · ${station.cn}</strong> 尚未开放乘车。</p>
                <p>${station.construction.project} 计划于 2026 年 12 月 26 日开放载客；截至本图核对日（2026-11-23）仍按未开通处理，实际安排以 LTA 公告为准。</p>
                <p>TEL5：Bayshore → Bedok South → Sungei Bedok。DTL3e：Expo → Xilin → Sungei Bedok。Sungei Bedok 的 TEL / DTL 换乘尚未启用。</p>
                <a href="https://www.lta.gov.sg/content/ltagov/en/newsroom/2026/11/news-releases/tel5-dtl3e-passenger-service-26-dec-2026.html" target="_blank" rel="noopener noreferrer">LTA 开通安排公告</a>
            </section>`;
        }
    });
})();
