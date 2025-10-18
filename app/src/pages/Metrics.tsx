export default function Metrics(){
  const blocks = [
    {title:'AUC-ROC', value:'0.704'},
    {title:'Sensitivity', value:'0.780'},
    {title:'Specificity', value:'0.710'},
    {title:'Brier Score', value:'0.186'},
    {title:'PPV', value:'0.680'},
    {title:'NPV', value:'0.800'},
    {title:'NRI', value:'0.312'},
    {title:'IDI', value:'0.042'},
  ]
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {blocks.map(b=>(
        <div key={b.title} className="card bg-base-100 shadow">
          <div className="card-body">
            <div className="text-xs opacity-60">{b.title}</div>
            <div className="text-2xl font-bold">{b.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
