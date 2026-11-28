# Browser regression: selection must preserve route widths, continuous casings and crossing order.
# Authoring/test environment only: requires Python Playwright and /usr/bin/chromium.
# Run against a static server: python scripts/check-singapore-route-casings.py URL
from pathlib import Path
from playwright.sync_api import sync_playwright
import sys,re
root=Path(__file__).resolve().parents[1]
v=re.search(r'var v = "(\d{6}\.\d{6})"', (root/'main.html').read_text()).group(1)
url=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8080/main.html?city=singapore&v='+v
cases=[('NS27','NS27'),('CC32','CC32'),('TE19','TE19'),('EW33','EW33'),('NE18','NE18'),('CC1','NS24'),('DT1','DT1'),('BP3','BP3'),('STC','NE16'),('PTC','NE17'),('CG2','CG2'),('怡丰城','SENTOSA_VIVO'),('TE22','TE22')]
errors=[]
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 for width,height in [(1280,900),(430,932)]:
  c=b.new_context(viewport={'width':width,'height':height},is_mobile=width<600,has_touch=width<600);pg=c.new_page();pg.on('pageerror',lambda e:errors.append(str(e)));pg.on('console',lambda m:errors.append(m.text) if m.type=='error' else None);pg.goto(url);pg.wait_for_selector('[data-source="community-sentosa"]');pg.evaluate('document.fonts.ready.then(()=>true)');pg.wait_for_timeout(800);assert pg.evaluate('window.CGO_ASSET_VERSION')==v
  if pg.locator('.nal-notice-close:visible').count():pg.locator('.nal-notice-close:visible').click()
  pg.evaluate("window.CGoWMAdapter?.close('legend')")
  snapshot='''()=>[...document.querySelectorAll('#lines-layer .sg-official-geometry')].map(e=>{const c=e.querySelector('.sg-route-casing'),p=e.querySelector('.sg-reference-geometry path');return {id:e.dataset.visualId,d:p.getAttribute('d'),casingD:c.getAttribute('d'),ink:[p.getAttribute('fill'),p.getAttribute('stroke'),p.getAttribute('stroke-width')],casing:[c.getAttribute('fill'),c.getAttribute('stroke'),c.getAttribute('stroke-width')]}})'''
  baseline=pg.evaluate(snapshot);assert len(baseline)==15 and all(x['d']==x['casingD'] for x in baseline)
  assert pg.locator('#lines-layer mask,.sg-reference-separations,.sg-crossing-gaps,.sg-water-crossing-casings,.sg-separation-defs').count()==0
  for theme in ['light','dark']:
   pg.evaluate(f"document.documentElement.setAttribute('data-theme','{theme}')")
   assert pg.locator('#lines-layer .sg-route-casing').evaluate_all('(es)=>{const p=document.createElement("span");p.style.color="var(--map-bg)";document.body.append(p);const colour=getComputedStyle(p).color;p.remove();return es.every(e=>getComputedStyle(e).stroke===colour)}')
   for query,sid in cases:
    pg.locator('#mz-menu').click();pg.locator('#station-search-input').fill(query);pg.locator('.search-item[data-sid="'+sid+'"]').click();pg.wait_for_timeout(120)
    assert pg.evaluate(snapshot)==baseline,(width,theme,sid,'selection changes route geometry or order')
    assert pg.locator('#highlight-layer .sg-official-geometry').evaluate_all('(es)=>es.every(e=>getComputedStyle(e).display==="none")')
    assert pg.locator('#lines-layer .sg-official-geometry.active').evaluate_all('(es)=>es.every(e=>getComputedStyle(e).filter.includes("drop-shadow")&&[...e.querySelectorAll(".sg-reference-geometry,.sg-route-casing")].every(x=>getComputedStyle(x).filter==="none"))')
    assert pg.locator('#lines-layer .sg-official-geometry > .line-visual-outer').evaluate_all('(es)=>es.every(e=>getComputedStyle(e).display==="none")')
  pg.evaluate('window.resetMapState();window.SINGAPORE_CITY.renderReferenceGeometry();window.SINGAPORE_CITY.renderReferenceGeometry()');assert pg.evaluate(snapshot)==baseline
  for scale in [1,2,4,1]:pg.evaluate('(scale)=>window.setMapView({scale,x:100-1800*scale,y:250-1900*scale})',scale)
  if width==430 and url.startswith('http://127.0.0.1'):
   pg.evaluate('navigator.serviceWorker.ready.then(()=>true)');pg.reload();pg.wait_for_selector('.sg-route-casing');c.set_offline(True);pg.reload();pg.wait_for_selector('.sg-route-casing');assert pg.evaluate(snapshot)==baseline;assert pg.locator('.sg-construction-casing').evaluate_all('(es)=>es.length===2&&es.every(e=>!e.hasAttribute("mask"))')
  c.close();print('PASS width',width,flush=True)
 assert not errors,errors
 print('PASS:',v,'15 full-route casing/ink pairs; zero runtime masks or crossing patches; geometry, widths and over/under order identical across selection; one group shadow; no painted highlight clone; both themes, idempotent rendering, zoom and offline. Chromium.')
 b.close()
