(function () {
    'use strict';
    const stops = [['SENTOSA_VIVO', '怡丰城'], ['SENTOSA_RWS', '名胜世界'], ['SENTOSA_IMBIAH', '英比奥'], ['SENTOSA_BEACH', '海滩']];
    window.StationBoard.registerModule({
        id: 'singapore-sentosa', name: '圣淘沙捷运', targetTab: 'body-top', order: 7, enabled: true,
        shouldRender: ({ station }) => station?.id === 'CC29' || Boolean(station?.sentosaExpress),
        render({ station }) {
            const access = station.id === 'CC29' || station.id === 'SENTOSA_VIVO';
            const target = station.id === 'CC29' ? 'SENTOSA_VIVO' : 'CC29';
            return `<section class="sg-sentosa-info" data-sg-sentosa-sid="${station.id}">
                <h3><cgo-icon name="train" size="18"></cgo-icon>圣淘沙捷运</h3>
                <p>怡丰城 → 名胜世界 → 英比奥 → 海滩。独立检票、单独计费。</p>
                ${access ? '<p>港湾地铁站出闸后，按怡丰城指引前往L大厅3楼，再入闸乘车。地铁的15分钟出闸换乘计费规则不适用于这段捷运。</p>' : '<p>前往地铁请乘至怡丰城，出闸后步行至港湾站，再入闸乘坐东北线或环线。</p>'}
                <p>官方指南列示：怡丰城进岛标准票价4新元；岛内站间及出岛乘车免费。优惠、票价调整及当日安排以圣淘沙官方公告为准。</p>
                <p>官网列示运营时间：每日7:00—24:00。</p>
                ${access ? `<button type="button" class="transfer-link sg-transfer-button" data-jump-sid="${target}">查看${target === 'CC29' ? '港湾地铁站（CC29 / NE1）' : '怡丰城捷运站'}</button>` : ''}
                <div class="sg-sentosa-stops">${stops.filter(([id]) => id !== station.id && (!access || id !== target)).map(([id, name]) => `<button type="button" class="transfer-link sg-transfer-button" data-jump-sid="${id}">查看${name}站</button>`).join('')}</div>
                <a href="https://www.sentosa.com.sg/getting-around" target="_blank" rel="noopener noreferrer">圣淘沙官方交通指南</a>
            </section>`;
        }
    });
})();
