import { useEffect, useState } from 'react';
import { fetchKM, fetchIAUC, fetchForest, fetchROC } from '../lib/api';

export default function Curves(){
  const [srcUrl, setSrcUrl] = useState<string>('/data/nsclc_demo_with_vt.csv');
  const [kmUrl, setKmUrl] = useState<string>('');
  const [iaucUrl, setIaucUrl] = useState<string>('');
  const [forestUrl, setForestUrl] = useState<string>('');
  const [rocUrl, setRocUrl] = useState<string>('');
  const [t, setT] = useState<number>(600);
  const [busy, setBusy] = useState<'km'|'iauc'|'forest'|'roc'|''>('');

  useEffect(()=>{
    try{
      const raw = localStorage.getItem('ftl-current');
      if(raw){
        const j = JSON.parse(raw);
        if(j?.meta?.dataset && typeof j.meta.dataset === 'string' && (j.meta.dataset.startsWith('http') || j.meta.dataset.startsWith('/'))){
          setSrcUrl(j.meta.dataset);
        } else if (j?.source) {
          setSrcUrl(j.source);
        }
      }
    } catch{}
  },[]);

  async function buildKM(){
    setBusy('km');
    try{ const blob = await fetchKM(srcUrl); setKmUrl(URL.createObjectURL(blob)); }
    catch(e:any){ alert(e.message || 'Failed to fetch KM plot'); }
    finally{ setBusy(''); }
  }
  async function buildIAUC(){
    setBusy('iauc');
    try{ const blob = await fetchIAUC(srcUrl); setIaucUrl(URL.createObjectURL(blob)); }
    catch(e:any){ alert(e.message || 'Failed to fetch iAUC plot'); }
    finally{ setBusy(''); }
  }
  async function buildForest(){
    setBusy('forest');
    try{ const blob = await fetchForest(srcUrl); setForestUrl(URL.createObjectURL(blob)); }
    catch(e:any){ alert(e.message || 'Failed to fetch Forest plot'); }
    finally{ setBusy(''); }
  }
  async function buildROC(){
    setBusy('roc');
    try{ const blob = await fetchROC(srcUrl, t); setRocUrl(URL.createObjectURL(blob)); }
    catch(e:any){ alert(e.message || 'Failed to fetch ROC(t)'); }
    finally{ setBusy(''); }
  }

  return (
    <div className="space-y-6">
      <section className="border rounded p-4">
        <div className="font-semibold mb-2">Select Source</div>
        <div className="flex gap-2">
          <input className="border rounded px-2 py-1 flex-1" value={srcUrl} onChange={e=>setSrcUrl(e.target.value)} />
          <button className="px-3 py-1.5 text-sm border rounded" onClick={()=>setSrcUrl('/data/nsclc_demo.csv')}>Fractal demo</button>
          <button className="px-3 py-1.5 text-sm border rounded" onClick={()=>setSrcUrl('/data/nsclc_demo_with_vt.csv')}>Unified demo</button>
        </div>
      </section>

      <section className="border rounded p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <button disabled={busy==='km'} className="px-3 py-1.5 text-sm border rounded" onClick={buildKM}>
            {busy==='km' ? 'Rendering KM…' : 'Render KM (+ CI, Number-at-risk)'}
          </button>
          <button disabled={busy==='iauc'} className="px-3 py-1.5 text-sm border rounded" onClick={buildIAUC}>
            {busy==='iauc' ? 'Rendering iAUC…' : 'Render Dynamic AUC (iAUC)'}
          </button>
          <button disabled={busy==='forest'} className="px-3 py-1.5 text-sm border rounded" onClick={buildForest}>
            {busy==='forest' ? 'Rendering Forest…' : 'Render Forest Plot'}
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <label className="text-xs text-gray-600">ROC time (days):</label>
            <input type="number" className="border rounded px-2 py-1 w-28" value={t} onChange={e=>setT(parseInt(e.target.value||'0',10))}/>
            <button disabled={busy==='roc'} className="px-3 py-1.5 text-sm border rounded" onClick={buildROC}>
              {busy==='roc' ? 'Rendering ROC…' : 'Render ROC(t)'}
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-600 mb-1">Kaplan–Meier (PNG)</div>
            {kmUrl ? <img src={kmUrl} alt="KM" className="border rounded w-full" /> : <div className="text-xs text-gray-500">No KM yet.</div>}
          </div>
          <div>
            <div className="text-xs text-gray-600 mb-1">Dynamic AUC (PNG)</div>
            {iaucUrl ? <img src={iaucUrl} alt="iAUC" className="border rounded w-full" /> : <div className="text-xs text-gray-500">No iAUC yet.</div>}
          </div>
          <div>
            <div className="text-xs text-gray-600 mb-1">Cox Forest (PNG)</div>
            {forestUrl ? <img src={forestUrl} alt="Forest" className="border rounded w-full" /> : <div className="text-xs text-gray-500">No Forest yet.</div>}
          </div>
          <div>
            <div className="text-xs text-gray-600 mb-1">ROC(t) (PNG)</div>
            {rocUrl ? <img src={rocUrl} alt="ROC(t)" className="border rounded w-full" /> : <div className="text-xs text-gray-500">No ROC yet.</div>}
          </div>
        </div>
      </section>
    </div>
  );
}
