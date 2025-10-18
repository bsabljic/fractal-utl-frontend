export default function Methods(){
  const cards = [
    {title:'Fractal Consciousness Framework', formula:'D₁ = (1 − H) + S'},
    {title:'Components (rigidity)', formula:'D₃ = H + σ² + (1 − G)'},
    {title:'UTL Temporal Risk', formula:'vₜ = α·rₜ² + (1−α)·vₜ₋₁'},
    {title:'Unified Score', formula:'z(RISK_fractal) + z(v_end)'},
    {title:'Cox PH', formula:'h(t|x) = h₀(t) · exp(βᵀx)'},
  ]
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cards.map(c=>(
        <div key={c.title} className="card bg-base-100 shadow">
          <div className="card-body"><h3 className="font-semibold">{c.title}</h3>
            <code className="opacity-80">{c.formula}</code>
          </div>
        </div>
      ))}
    </div>
  )
}
