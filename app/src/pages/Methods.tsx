export default function Methods(){
  return (
    <div className="space-y-4">
      <Card title="FRACTAL" text="RISK = D₁ − D₃ (spatial rigidity vs complexity balance)" />
      <Card title="UTL" text="vₜ = α·rₜ² + (1−α)·vₜ₋₁ (temporal accumulation via EWMA)" />
      <Card title="UNIFIED" text="z(RISK) + z(v_EWMA)" />
    </div>
  );
}
function Card({title, text}:{title:string; text:string}) {
  return (
    <div className="card bg-base-100 border border-white/10">
      <div className="card-body">
        <div className="font-semibold">{title}</div>
        <div className="opacity-80">{text}</div>
      </div>
    </div>
  );
}
