// Chinese names: LTA SM_CH_(Ver210726)_CCL6.pdf and Sentosa official Chinese transport guide.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = (file, variable) => new Function(readFileSync(new URL(`../city/singapore/${file}`, import.meta.url), 'utf8') + `;return ${variable};`)();
const stations = read('data_stations.js', 'stationsData');
const lines = read('data_lines.js', 'linesData');
assert.equal(Object.keys(stations).length, 194);
for (const [id, station] of Object.entries(stations)) {
    assert(/^[\u3400-\u9fff]+$/.test(station.cn), `${id}: Chinese primary name`);
    assert(/[A-Za-z]/.test(station.en), `${id}: English search name retained`);
    assert(station.aliases.includes(station.cn) && station.aliases.includes(station.en), `${id}: both name searches resolve`);
    for (const code of station.stationCodes.split(' / ').filter(Boolean)) assert(station.aliases.includes(code), `${id}: code remains searchable`);
}
for (const [id, name] of Object.entries({ NS25: '政府大厦', EW16: '欧南园', DT20: '福康宁', NE5: '克拉码头', DT4: '谦道', CC30: '吉宝', CC31: '广东民', TE31: '双溪勿洛', DT36: '锡林', SE1: '康埔桦', PW4: '山姆' })) assert.equal(stations[id].cn, name);
globalThis.window = {};
globalThis.document = {createElement: () => ({}), head: {appendChild() {}}, documentElement: {classList: {add() {}}}, addEventListener() {}};
new Function(readFileSync(new URL('../city/singapore/singapore.js', import.meta.url), 'utf8'))();
for (const station of Object.values(stations)) {
    const html = window.SINGAPORE_CITY.renderStationIcon(station)?.html || '';
    assert(html.includes(station.sentosaExpress ? 'data-symbol="monorail"' : 'Singapore Lato'), 'Chinese names must not break custom station signs');
}
for (const svg of new Set(lines.map(line => line.svg))) {
    const source = readFileSync(new URL('../' + svg.replace(/^\.\//, ''), import.meta.url), 'utf8');
    assert(source.includes(svg.endsWith('sentosa-express.svg') ? 'data-symbol="monorail"' : 'data-font="Lato Bold"'), 'Custom line mark matches the service');
    assert(!source.includes('<text'), 'Line lettering stays outlined');
}
console.log('PASS: 194 Chinese primary names; English/code searches preserved; custom station plates, monorail pictograms and Lato Bold line lettering retained.');
