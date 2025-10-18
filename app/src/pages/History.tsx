export default function History(){
  const items = [
    {ts:'2025-10-18', txt:'LOCK VERIFIED: Multi-signal coherence achieved (C > 0.65, p < 0.05)'},
    {ts:'2025-10-17', txt:'Protocol UTL_v1.1; Production-grade: Retry + Timeout + Progress'},
  ]
  return (
    <ul className="timeline timeline-vertical">
      {items.map((i,idx)=>(
        <li key={idx}>
          <div className="timeline-start">{i.ts}</div>
          <div className="timeline-middle"><div className="badge badge-primary"></div></div>
          <div className="timeline-end timeline-box">{i.txt}</div>
        </li>
      ))}
    </ul>
  )
}
