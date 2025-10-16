export function downloadText(filename: string, content: string, mime='text/plain'){
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}
export function formatNum(x: any){ if(x===null||x===undefined||Number.isNaN(x)) return 'NA'; const v = Number(x); return isFinite(v)? v.toFixed(3):'NA'; }
export function formatP(p: any){ if(p===null||p===undefined||Number.isNaN(p)) return 'NA'; const v = Number(p); if(!isFinite(v)) return 'NA'; if(v<0.001) return '<0.001'; return v.toFixed(3); }
