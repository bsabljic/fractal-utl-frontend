export default function Overview(){
  return (
    <div className="grid gap-4">
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">Connected Cohort</h2>
          <p className="opacity-70">NSCLC-Radiomics-Lung1 (Aerts, 2014) • n=422 • Survival endpoint</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow"><div className="card-body">
          <h3 className="font-semibold">FRACTAL</h3>
          <code>RISK = D₁ − D₃</code>
          <p className="text-xs opacity-70">Spatial rigidity vs complexity balance</p>
        </div></div>
        <div className="card bg-base-100 shadow"><div className="card-body">
          <h3 className="font-semibold">UTL</h3>
          <code>vₜ = α · rₜ² + (1 − α) · vₜ₋₁</code>
          <p className="text-xs opacity-70">Temporal risk accumulation via EWMA</p>
        </div></div>
        <div className="card bg-base-100 shadow"><div className="card-body">
          <h3 className="font-semibold">UNIFIED</h3>
          <code>z(RISK) + z(vₑₙd)</code>
          <p className="text-xs opacity-70">Z-score standardized combination</p>
        </div></div>
      </div>
    </div>
  )
}
