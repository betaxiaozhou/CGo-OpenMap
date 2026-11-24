(function () {
    'use strict';
    const stops = [['EW4','EW4 / CG','Tanah Merah'],['CG1','CG1 / DT35','Expo'],['CG2','CG2','Changi Airport']];
    const details = {
        EW4: '前往机场请在 Tanah Merah 转乘机场接驳列车，并确认列车目的地为 Changi Airport。',
        CG1: '前往机场的下一站是 Changi Airport（CG2）；前往东西线主线请乘往 Tanah Merah 方向，再换乘主线列车。本站可与滨海市区线 DT35 换乘。',
        CG2: '前往市区可在 Tanah Merah 换乘东西线主线，或在 Expo 换乘滨海市区线。'
    };
    window.StationBoard.registerModule({
        id: 'singapore-airport-shuttle', name: '樟宜机场接驳', targetTab: 'body-top', order: 7, enabled: true,
        shouldRender: ({ station }) => Boolean(details[station?.id]),
        render({ station }) {
            return `<section class="sg-airport-shuttle" data-sg-airport-sid="${station.id}">
                <h3><cgo-icon name="train" size="18"></cgo-icon>樟宜机场支线 · Changi Airport Shuttle</h3>
                <ol>${stops.map(([,code,name]) => `<li><strong>${code}</strong> ${name}</li>`).join('')}</ol>
                <p>${details[station.id]}</p>
                <p>三站接驳运营；往返东西线主线须在 Tanah Merah 换车。Tanah Merah 与 Expo 按付费区内换乘处理，请按站内指引前往相应月台。</p>
                ${stops.filter(([id]) => id !== station.id).map(([id,code,name]) => `<button type="button" class="transfer-link sg-transfer-button" data-jump-sid="${id}">查看 ${code} · ${name}</button>`).join('')}
                <a href="https://www.changiairport.com/en/at-changi/transport-and-directions/getting-to-changi-airport.html" target="_blank" rel="noopener noreferrer">樟宜机场官方乘车指引</a>
            </section>`;
        }
    });
})();
