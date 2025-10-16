export const API_BASE = (import.meta as any).env?.VITE_API_BASE || '';

async function safeFetch(input: RequestInfo, init?: RequestInit){
  const r = await fetch(input, init).catch(()=>{throw new Error('Network/CORS error')});
  if(!r.ok){ throw new Error(`${r.status} ${r.statusText}`); }
  return r;
}
export async function analyzeFile(file: File){
  const fd = new FormData(); fd.append('file', file);
  const r = await safeFetch(`${API_BASE}/api/analyze`, { method: 'POST', body: fd }); return r.json();
}
export async function fetchAnalyze(url: string){
  const r = await safeFetch(`${API_BASE}/api/fetch-analyze`, { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ url })}); return r.json();
}
export async function getPublicKey(){ const r = await safeFetch(`${API_BASE}/api/public-key`); return r.json(); }
export async function verifyManifest(manifest:any){ const r = await safeFetch(`${API_BASE}/api/verify-manifest`, { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(manifest)}); return r.json(); }

export async function fetchKM(url: string): Promise<Blob>{
  const r = await safeFetch(`${API_BASE}/api/plots/km`, { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ url })});
  return r.blob();
}
export async function fetchIAUC(url: string): Promise<Blob>{
  const r = await safeFetch(`${API_BASE}/api/plots/iauc`, { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ url })});
  return r.blob();
}
export async function fetchForest(url: string): Promise<Blob>{
  const r = await safeFetch(`${API_BASE}/api/plots/forest`, { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ url })});
  return r.blob();
}
export async function fetchROC(url: string, timeDays: number): Promise<Blob>{
  const r = await safeFetch(`${API_BASE}/api/plots/roc`, { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ url, time: timeDays })});
  return r.blob();
}
