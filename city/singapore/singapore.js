(function () {
    "use strict";
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './city/singapore/style.css' + (window.CGO_ASSET_VERSION ? '?v=' + window.CGO_ASSET_VERSION : '');
    document.head.appendChild(link);
    document.documentElement.classList.add('map-singapore');
    const City = {
    "id": "singapore",
    "name": "新加坡",
    "center": {
        "x": 1680,
        "y": 1250
    },
    "defaultScale": 0.37,
    "mapSize": {
        "width": 3400,
        "height": 2450
    },
    "maintainers": [
        {
            "name": "Deming ZHOU",
            "role": "城市主理人（申请中）",
            "github": "https://github.com/betaxiaozhou/"
        }
    ],
    "LINE_META": {},
    "LINE_SORT_ORDER": ["NS", "EW", "CG", "NE", "CC", "CCE", "DT", "TE", "BP", "BPL", "SE", "SW", "PE", "PW", "SENTOSA", "TE-UC", "DT-UC"],
    "LINE_SYNC_GROUPS": [
        [
            "CC",
            "CCE"
        ],
        [
            "BP",
            "BPL"
        ],
        ["SE", "SW"],
        ["PE", "PW"]
    ],
    "SUBURBAN_LINES": [],
    "MERGE_STATIONS": [],
    "CROSS_PLATFORM_STATIONS": [],
    "TRAM_LINES": ["BP","BPL","SE","SW","PE","PW"],
    "dataFiles": {}
};
    // Direction numbers from LTA SM_CH_(Ver210726)_CCL6; CCL is now a closed loop.
    City.terminalMarkers = [
        { stationId: 'EW1', code: 'EW1', number: 1, color: '#009645', dx: 0, dy: -34 },
        { stationId: 'EW33', code: 'EW33', number: 2, color: '#009645', dx: 0, dy: -34 },
        { stationId: 'CG2', code: 'CG2', number: 3, color: '#009645', dx: 46, dy: 0 },
        { stationId: 'NS1', code: 'NS1', number: 4, color: '#e1251b', dx: -33, dy: -36 },
        { stationId: 'NS28', code: 'NS28', number: 5, color: '#e1251b', dx: 0, dy: 34 },
        { stationId: 'CC29', code: 'NE1', number: 6, color: '#9e28b5', dx: 84, dy: 0 },
        { stationId: 'NE18', code: 'NE18', number: 7, color: '#9e28b5', dx: 0, dy: -34 },
        { stationId: 'DT1', code: 'DT1', number: 11, color: '#0055b8', dx: 0, dy: 40 },
        { stationId: 'TE31', code: 'DT37', number: 12, color: '#0055b8', dx: 86, dy: 0 },
        { stationId: 'TE1', code: 'TE1', number: 13, color: '#9d5918', dx: 0, dy: -34 },
        { stationId: 'TE31', code: 'TE31', number: 14, color: '#9d5918', dx: -86, dy: 0 }
    ];
    City.terminalMarkerSvg = function ({ number, color }) {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" aria-hidden="true"><circle cx="14" cy="14" r="13.7" fill="${color}"/><text x="14" y="14" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="Singapore Lato, sans-serif" font-size="16" font-weight="700">${number}</text></svg>`;
    };
    City.renderTerminalMarkers = function () {
        const layer = document.getElementById('stations-layer');
        if (!layer) return;
        layer.querySelectorAll('.sg-terminal-marker').forEach(el => el.remove());
        this.terminalMarkers.forEach(marker => {
            const station = stationsData[marker.stationId];
            const el = document.createElement('div');
            el.className = 'sg-terminal-marker';
            el.dataset.stationId = marker.stationId;
            el.dataset.terminalNumber = marker.number;
            el.style.left = (station.x + marker.dx) + 'px';
            el.style.top = (station.y + marker.dy) + 'px';
            el.setAttribute('role', 'img');
            el.setAttribute('aria-label', `${station.cn}，终点方向编号${marker.number}${station.type === 'no' ? '（施工中）' : ''}`);
            el.innerHTML = this.terminalMarkerSvg(marker);
            layer.appendChild(el);
        });
    };
    // Bow-sided station codes; interchange segments share one continuous silhouette.
    City.renderStationIcon = function (station) {
        if (station.sentosaExpress) {
            return {
                html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32" aria-hidden="true" data-symbol="monorail"><rect x="1" y="1" width="32" height="30" rx="6" fill="#f7931e" stroke="#ffffff" stroke-width="1.2"/><path d="M10 6H24Q28 6 28 10V19Q28 23 24 23H10Q6 23 6 19V10Q6 6 10 6Z" fill="#ffffff"/><path d="M10 10H16V16H10ZM18 10H24V16H18Z" fill="#f7931e"/><path d="M17 23V28M12 28H22" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none"/></svg>',
                width: 36, height: 34, className: 'sg-station-sign sg-sentosa-sign', zIndex: 18
            };
        }
        const codes = (station.stationCodes || station.en || '').split(' / ').filter(code => /^(?:(NS|EW|CG|CC|TE|BP|NE|DT|SE|SW|PE|PW)\d+|STC|PTC|CG)$/.test(code));
        if (!codes.length) return null;
        const palette = { NS: '#e1251b', EW: '#009645', CG: '#009645', CC: '#fa9e0d', TE: '#9d5918', BP: '#718472', NE: '#9e28b5', DT: '#0055b8', SE: '#718472', SW: '#718472', PE: '#718472', PW: '#718472', STC: '#718472', PTC: '#718472' };
        const transfer = codes.length > 1 || station.type === 'tsfo';
        const lightRail = !transfer && /^(BP|SE|SW|PE|PW)/.test(codes[0]);
        const factor = lightRail ? 0.72 : 1;
        const height = (transfer ? 32 : 25) * factor;
        const cells = codes.map(code => ((code.match(/\d+$/)?.[0].length || 2) === 1 ? 44 : 51) * (transfer ? 1.28 : 1) * factor);
        const width = cells.reduce((sum, cell) => sum + cell, 0);
        // Coordinates normalized from the characteristic bowed sides, not rounded rectangles.
        const h = height, w = width, n = v => Number(v.toFixed(2));
        const shape = `M${n(.276*h)} 0 H${n(w-.276*h)}
            C${n(w-.165*h)} 0 ${n(w-.102*h)} ${n(.1075*h)} ${n(w-.0854*h)} ${n(.1402*h)}
            C${n(w-.02875*h)} ${n(.2526*h)} ${w} ${n(.3733*h)} ${w} ${n(.5*h)}
            C${w} ${n(.6267*h)} ${n(w-.02875*h)} ${n(.7474*h)} ${n(w-.0854*h)} ${n(.86*h)}
            C${n(w-.102*h)} ${n(.8925*h)} ${n(w-.165*h)} ${h} ${n(w-.276*h)} ${h}
            H${n(.276*h)} C${n(.165*h)} ${h} ${n(.102*h)} ${n(.8925*h)} ${n(.0854*h)} ${n(.86*h)}
            C${n(.02875*h)} ${n(.7474*h)} 0 ${n(.6267*h)} 0 ${n(.5*h)}
            C0 ${n(.3733*h)} ${n(.02875*h)} ${n(.2526*h)} ${n(.0854*h)} ${n(.1402*h)}
            C${n(.102*h)} ${n(.1075*h)} ${n(.165*h)} 0 ${n(.276*h)} 0 Z`;
        const clipId = 'sg-code-' + codes.join('-');
        let x = 0;
        const plates = codes.map((code, index) => {
            const [, prefix, number = ''] = code.match(/^([A-Z]+)(\d*)$/);
            const cell = cells[index], center = x + cell / 2;
            const ink = prefix === 'CC' ? '#2d2a26' : '#ffffff';
            const separator = code === 'CG' && index > 0 ? `<path d="M${x} 0 V${height}" stroke="#ffffff" stroke-width="1.5"/>` : '';
            const plate = `<rect x="${x}" y="0" width="${cell + 0.1}" height="${height}" fill="${palette[prefix]}"/>
                <text x="${center}" y="${height/2}" dominant-baseline="central" text-anchor="middle" fill="${ink}" font-family="Singapore Lato, sans-serif" font-size="${(transfer ? 18.5 : 14.5) * factor}" font-weight="700">${prefix}${number ? ' ' + number : ''}</text>${separator}`;
            x += cell;
            return plate;
        }).join('');
        return {
            html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 ${width+2} ${height+2}" aria-hidden="true"><defs><clipPath id="${clipId}"><path d="${shape}"/></clipPath></defs><g clip-path="url(#${clipId})">${plates}</g><path d="${shape}" fill="none" stroke="#ffffff" stroke-width="1.2"/></svg>`,
            width: width + 2, height: height + 2,
            className: station.type === 'tsfo' ? 'sg-station-sign sg-transfer-sign sg-tap-out-sign' : transfer ? 'sg-station-sign sg-transfer-sign' : 'sg-station-sign', zIndex: transfer ? 22 : 18
        };
    };
    // The generic 'free interchange' wording does not describe Singapore distance fares.
    City.stationBoard = { modules: { transfers: { enabled: false } } };
    City.stationBoard.modules['header-title'] = {
        slot: 'header', order: 20,
        render({ station }) {
            const escape = window.CGoA11y.escapeHtml;
            const subtitle = [station.stationCodes || station.transportLabel, station.en].filter(Boolean).join(' · ');
            return `<div class="header-name-group"><div class="panel-cn-name" role="heading" aria-level="2" tabindex="-1">${escape(station.cn)}</div><div class="panel-en-name" lang="en">${escape(subtitle)}</div></div>`;
        }
    };
    City.stationBoard.modules['header-badges'] = {
        slot: 'header', order: 30,
        render({ relatedLinesInfo = [] }) {
            const seen = new Set();
            const escape = window.CGoA11y.escapeHtml;
            const badges = relatedLinesInfo.filter(info => {
                if (!info.svg || seen.has(info.svg)) return false;
                seen.add(info.svg);
                return true;
            }).map(info => `<span class="svg-icon-placeholder line-badge" data-src="${escape(info.svg)}" title="${escape(info.name)}" style="--svgclr:${escape(info.svgclr)};--svgtext:${escape(info.svgtext)}"></span>`).join('');
            return `<div class="panel-badges sg-line-badges">${badges}</div>`;
        }
    };
    if (typeof document !== 'undefined' && document.write) {
        const v = window.CGO_ASSET_VERSION;
        document.write('<script src="./city/singapore/data_crossings.js' + (v ? '?v=' + v : '') + '"><\/script>');
        document.write('<script src="./city/singapore/data_construction.js' + (v ? '?v=' + v : '') + '"><\/script>');
        document.write('<script src="./city/singapore/modules/construction.js' + (v ? '?v=' + v : '') + '"><\/script>');
        document.write('<script src="./city/singapore/modules/airport-shuttle.js' + (v ? '?v=' + v : '') + '"><\/script>');
        document.write('<script src="./city/singapore/modules/unpaid-transfer.js' + (v ? '?v=' + v : '') + '"><\/script>');
        document.write('<script src="./city/singapore/modules/sentosa-express.js' + (v ? '?v=' + v : '') + '"><\/script>');
    }
    City.renderCrossingGaps = function () {
        const layer = document.getElementById('lines-layer');
        const connectors = layer?.querySelector('.virtual-connectors');
        if (!layer || typeof SG_CROSSING_GAPS === 'undefined') return;
        layer.querySelector('.sg-crossing-gaps')?.remove();
        // Match the reference drawing's paint order; line selection order is unchanged.
        for (const id of ['CG','BP','BPL','SE','SW','PE','PW','TE','DT','CC','CCE','NE','EW','NS']) {
            const group = layer.querySelector(`.line-visual-group[data-visual-id="${id}"]`);
            if (group) layer.insertBefore(group, connectors);
        }
        const ns = 'http://www.w3.org/2000/svg';
        const group = document.createElementNS(ns, 'g');
        group.setAttribute('class', 'sg-crossing-gaps');
        for (const attributes of SG_CROSSING_GAPS) {
            const path = document.createElementNS(ns, 'path');
            for (const [key, value] of Object.entries(attributes)) path.setAttribute(key, value);
            group.appendChild(path);
        }
        layer.insertBefore(group, connectors);
    };
    City.renderConstruction = function () {
        const layer = document.getElementById('not-open-layer');
        if (!layer || typeof SG_CONSTRUCTION_ANNOTATION === 'undefined') return;
        layer.querySelector('.sg-construction-annotation')?.remove();
        const ns = 'http://www.w3.org/2000/svg';
        const group = document.createElementNS(ns, 'g');
        group.setAttribute('class', 'sg-construction-annotation');
        group.setAttribute('role', 'img');
        group.setAttribute('aria-label', 'Under Construction: TEL5 / DTL3e，施工中，尚未开放乘车');
        for (const { tag, text, ...attributes } of SG_CONSTRUCTION_ANNOTATION) {
            const element = document.createElementNS(ns, tag);
            for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value);
            if (text) element.textContent = text;
            group.appendChild(element);
        }
        layer.appendChild(group);
    };
    City.renderTapOutBridges = function () {
        const layer = document.querySelector('#lines-layer .virtual-connectors');
        if (!layer || typeof VIRTUAL_FREE_CONNECT_LINES === 'undefined') return;
        layer.querySelectorAll('.sg-tap-out-bridge').forEach(element => element.remove());
        const svgNS = 'http://www.w3.org/2000/svg';
        for (const { from, to } of VIRTUAL_FREE_CONNECT_LINES) {
            const a = stationsData[from], b = stationsData[to];
            if (!a?.paidAreaTransfer || !b?.paidAreaTransfer) continue;
            const dx = b.x - a.x, dy = b.y - a.y, length = Math.hypot(dx, dy);
            const height = 10.5, midpoint = length / 2, bevel = 2.2;
            const group = document.createElementNS(svgNS, 'g');
            group.setAttribute('class', 'sg-tap-out-bridge');
            group.dataset.from = from;
            group.dataset.to = to;
            group.setAttribute('transform', `translate(${a.x} ${a.y}) rotate(${Math.atan2(dy, dx) * 180 / Math.PI})`);
            const shapes = [
                [`0,${-height/2} ${midpoint+bevel},${-height/2} ${midpoint-bevel},${height/2} 0,${height/2}`, from],
                [`${midpoint+bevel},${-height/2} ${length},${-height/2} ${length},${height/2} ${midpoint-bevel},${height/2}`, to]
            ];
            for (const [points, id] of shapes) {
                const polygon = document.createElementNS(svgNS, 'polygon');
                polygon.setAttribute('points', points);
                polygon.setAttribute('fill', linesData.find(line => line.stationIds.includes(id)).color);
                polygon.setAttribute('stroke', 'none');
                group.appendChild(polygon);
            }
            layer.appendChild(group);
        }
    };
    City.renderSentosaAccess = function () {
        const layer = document.querySelector('#lines-layer .virtual-connectors');
        if (!layer || !stationsData.SENTOSA_VIVO) return;
        layer.querySelector('.sg-sentosa-access')?.remove();
        const ns = 'http://www.w3.org/2000/svg';
        const group = document.createElementNS(ns, 'g');
        group.setAttribute('class', 'sg-sentosa-access');
        group.setAttribute('aria-label', '港湾出闸后步行至怡丰城3楼，另行检票乘圣淘沙捷运');
        const path = document.createElementNS(ns, 'path');
        path.setAttribute('d', 'M1460 2039 V2100 L1420 2132');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'var(--text-light)');
        path.setAttribute('stroke-width', '2.4');
        path.setAttribute('stroke-dasharray', '5 4');
        group.appendChild(path);
        const text = document.createElementNS(ns, 'text');
        text.setAttribute('x', '1472');
        text.setAttribute('y', '2080');
        text.setAttribute('fill', 'var(--text-light)');
        text.textContent = '步行';
        group.appendChild(text);
        layer.appendChild(group);
    };
    City.minScale = 0.1;
    City.isTramLine = function (id) { return this.TRAM_LINES.includes(id); };
    City.isTramStation = function (s) { return Boolean(s?.relatedLines?.some(id => this.isTramLine(id))); };
    City.formatOwnerName = raw => raw || 'SMRT / 新捷运';
    City.formatCompanyString = list => [...new Set(list)].join(' / ');
    City.getNavigationUrl = (name, rail, { station } = {}) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent((station?.en || name) + (station?.sentosaExpress ? ' Sentosa Express station Singapore' : ' MRT station Singapore'));
    document.addEventListener('DOMContentLoaded', () => {
        City.renderCrossingGaps();
        City.renderTapOutBridges();
        City.renderSentosaAccess();
        City.renderConstruction();
        City.renderTerminalMarkers();
        const mobile = innerWidth < 600;
        const scale = mobile ? 0.65 : Math.max(0.1, Math.min((innerWidth - 100) / 3400, (innerHeight - 130) / 2450, 0.7));
        window.setMapView?.({ scale, x: innerWidth / 2 - (mobile ? 1750 : 1680) * scale, y: innerHeight / 2 - (mobile ? 1500 : 1250) * scale });
    }, { once: true });
    window.CURRENT_CITY = City;
    window.SINGAPORE_CITY = City;
})();
