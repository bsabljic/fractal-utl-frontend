import { useEffect, useRef, useState } from 'react';
import { analyzeFile, fetchAnalyze, getPublicKey } from '../lib/api';
import { downloadText } from '../lib/format';

export default function Overview(){
  const [status, setStatus] = useState('');
  const [pubKey, setPubKey] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{ getPublicKey().then(j=>setPubKey(j.public_key_hex||'')).catch(()=>{}); },[]);

  async function runFetch(u: string){
    setStatus('Fetching & analyzing…');
    try{ const res = await fetchAnalyze(u); localStorage.setItem('ftl-current', JSON.stringify(res)); setStatus('Complete. See Results tab.'); }
    catch(e:any){ setStatus(e.message); }
  }
  async function onFile(f?: File){
    if(!f) return;
    setStatus('Analyzing upload…');
    try{ const res = await analyzeFile(f); localStorage.setItem('ftl-current', JSON.stringify(res)); setStatus('Complete. See Results tab.'); }
    catch(e:any){ setStatus(e.message); }
  }

  return <div className='space-y-6'>
    <section className='border rounded p-4 bg-green-50/40'>
      <div className='font-semibold'>Load Demo Cohort</div>
      <div className='text-sm text-gray-600'>NSCLC sample with full metrics</div>
      <div className='mt-2 flex gap-2'>
        <button className='px-3 py-1.5 text-sm border rounded' onClick={()=>runFetch('/data/nsclc_demo.csv')}>Fractal demo</button>
        <button className='px-3 py-1.5 text-sm border rounded' onClick={()=>runFetch('/data/nsclc_demo_with_vt.csv')}>Unified demo</button>
      </div>
    </section>

    <section className='border rounded p-4'>
      <div className='font-semibold mb-2'>Upload Dataset</div>
      <input ref={fileRef} type='file' accept='.csv,.tsv' onChange={e=>onFile(e.target.files?.[0] as File)} />
    </section>

    <section className='border rounded p-4'>
      <div className='font-semibold mb-2'>API Verification</div>
      <div className='text-xs font-mono break-all'>Public Key: {pubKey ? pubKey.slice(0,56)+'…' : 'unavailable'}</div>
      {pubKey && <button onClick={()=>downloadText('public_key.txt', pubKey)} className='mt-2 px-2 py-1 text-xs border rounded'>Download Key</button>}
    </section>

    {status && <div className='text-sm text-gray-700'>{status}</div>}
  </div>
}
