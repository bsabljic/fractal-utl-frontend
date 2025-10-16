import { useEffect, useState } from 'react';
import { formatNum, formatP, downloadText } from '../lib/format';
import { verifyManifest } from '../lib/api';

export default function Results(){
  const [data, setData] = useState<any>(null);
  const [verify, setVerify] = useState<string>('');
  useEffect(()=>{ const raw = localStorage.getItem('ftl-current'); if(raw) setData(JSON.parse(raw)); },[]);
  if(!data) return <div className='text-sm text-gray-600'>No results yet.</div>;
  const u = data.metrics?.unified || {}; const f = data.metrics?.fractal || {}; const t = data.metrics?.utl || {};
  const report = `# Fractal-UTL Report
Apparent C-index (Unified): ${formatNum(u.cindex)}
Uno C-index (apparent): ${formatNum(u.uno_cindex)}
iAUC (apparent): ${formatNum(u.iauc)}
CV Uno C-index (5-fold): ${formatNum(u.uno_cindex_cv_mean)} [${u.uno_cindex_cv_ci?.map((x:number)=>x.toFixed(3)).join(' – ')||'NA'}]
CV iAUC (5-fold): ${formatNum(u.iauc_cv_mean)} [${u.iauc_cv_ci?.map((x:number)=>x.toFixed(3)).join(' – ')||'NA'}]
Nested CV (outer=5, inner=3): Uno=${formatNum(u.nested_cv?.uno_cv_mean)} [${u.nested_cv?.uno_cv_ci?.map((x:number)=>x.toFixed(3)).join(' – ')||'NA'}]; iAUC=${formatNum(u.nested_cv?.iauc_cv_mean)} [${u.nested_cv?.iauc_cv_ci?.map((x:number)=>x.toFixed(3)).join(' – ')||'NA'}]
Chosen alphas: ${Array.isArray(u.nested_cv?.alpha_choices)? u.nested_cv.alpha_choices.map((x:number)=>x.toFixed(2)).join(', ') : 'NA'}
Improvement: ${formatNum(u.improvement)}
Log-rank p: ${formatP(u.logrank_3group_p)}
HR: ${u.hazard_ratio?.toFixed(2) || 'NA'}
`;
  return <div className='space-y-6'>
    <div className='flex gap-2'>
      <button className='px-3 py-1.5 text-sm border rounded' onClick={()=>downloadText('fractal-utl-report.md', report)}>Report</button>
      <button className='px-3 py-1.5 text-sm border rounded' onClick={()=>downloadText('fractal-utl-result.json', JSON.stringify(data,null,2), 'application/json')}>JSON</button>
      <button className='px-3 py-1.5 text-sm border rounded' onClick={async()=>{ try{ await verifyManifest(data.lock); setVerify('LOCK verified ✅'); } catch{ setVerify('LOCK failed ❌'); } }}>Verify</button>
      {verify && <span className='text-sm ml-2'>{verify}</span>}
    </div>
    <section className='border rounded p-4 bg-emerald-50/40'>
      <div className='grid sm:grid-cols-3 gap-4 text-sm'>
        <Stat label='Apparent C-index' value={formatNum(u.cindex)}/>
        <Stat label='Uno C-index (CV mean)' value={formatNum(u.uno_cindex_cv_mean)}/>
        <Stat label='iAUC (CV mean)' value={formatNum(u.iauc_cv_mean)}/>
      </div>
      <div className='mt-3 text-xs'>
        CV 95% CI (Uno): <span className='font-mono'>{u.uno_cindex_cv_ci?`${u.uno_cindex_cv_ci[0].toFixed(3)}–${u.uno_cindex_cv_ci[1].toFixed(3)}`:'NA'}</span><br/>
        CV 95% CI (iAUC): <span className='font-mono'>{u.iauc_cv_ci?`${u.iauc_cv_ci[0].toFixed(3)}–${u.iauc_cv_ci[1].toFixed(3)}`:'NA'}</span><br/>
        Nested CV 95% CI (Uno): <span className='font-mono'>{u.nested_cv?.uno_cv_ci?`${u.nested_cv.uno_cv_ci[0].toFixed(3)}–${u.nested_cv.uno_cv_ci[1].toFixed(3)}`:'NA'}</span><br/>
        Nested CV 95% CI (iAUC): <span className='font-mono'>{u.nested_cv?.iauc_cv_ci?`${u.nested_cv.iauc_cv_ci[0].toFixed(3)}–${u.nested_cv.iauc_cv_ci[1].toFixed(3)}`:'NA'}</span>
      </div>
    </section>
    <section className='border rounded p-4'>
      <div className='grid sm:grid-cols-3 gap-4 text-sm'>
        <Stat label='Fractal C-index' value={formatNum(f.cindex)}/>
        <Stat label='UTL C-index' value={formatNum(t.cindex)}/>
        <Stat label='Improvement' value={formatNum(u.improvement)}/>
      </div>
    </section>
    <section className='border rounded p-4'>
      <div className='text-xs text-gray-600'>Lock manifest</div>
      <pre className='text-[11px] overflow-x-auto bg-gray-50 border rounded p-2'>{JSON.stringify(data.lock,null,2)}</pre>
    </section>
  </div>
}
function Stat({label,value}:{label:string,value:string}){
  return <div><div className='text-gray-500'>{label}</div><div className='font-mono text-xl'>{value}</div></div>
}
