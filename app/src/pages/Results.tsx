import {useEffect,useState} from 'react'
type Demo = { cindex:number; p:number; hr:number; ci:[number,number]; note:string }
export default function Results(){
  const [data,setData] = useState<Demo|null>(null)
  useEffect(()=>{ fetch('/api/demo').then(r=>r.json()).then(setData) },[])
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title">Analysis Results</h2>
        {!data ? <progress className="progress w-56"></progress> :
        <div className="grid sm:grid-cols-4 gap-4">
          <Stat label="C-INDEX" value={data.cindex.toFixed(3)} sub="+0.068"/>
          <Stat label="LOG-RANK p" value={data.p.toFixed(3)} sub="p<.05"/>
          <Stat label="HR" value={data.hr.toFixed(2)} sub={`${data.ci[0]}–${data.ci[1]}`}/>
          <div className="col-span-1 sm:col-span-4 text-sm opacity-70">{data.note}</div>
        </div>}
      </div>
    </div>
  )
}
function Stat({label,value,sub}:{label:string;value:string;sub?:string}) {
  return (
    <div className="p-4 rounded-xl bg-base-200">
      <div className="text-xs opacity-60">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
      {sub && <div className="text-xs opacity-60">{sub}</div>}
    </div>
  )
}
