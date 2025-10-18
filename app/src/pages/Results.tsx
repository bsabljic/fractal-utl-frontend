import { useRun } from "../store/run";

export default function Results() {
  const { result, error, loading } = useRun();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Results</h2>
      {loading && <div>Running analysis…</div>}
      {error && <div className="text-error">{error}</div>}
      {!loading && !result && !error && (
        <div className="opacity-70">After analysis, results will appear here (C-index, HR, CI, p-values).</div>
      )}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatCard label="C-index" value={result.cindex} />
          <StatCard label="Sensitivity" value={result.sens} />
          <StatCard label="Specificity" value={result.spec} />
          <StatCard label="Brier Score" value={result.brier} />
          <StatCard label="HR" value={result.hr} />
          <div className="card bg-base-100 border border-white/10">
            <div className="card-body">
              <div className="font-medium">95% CI</div>
              <div className="text-lg">{result.ci ? `[${result.ci[0]}, ${result.ci[1]}]` : "—"}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value?: number }) {
  return (
    <div className="card bg-base-100 border border-white/10">
      <div className="card-body">
        <div className="font-medium">{label}</div>
        <div className="text-2xl">{value ?? "—"}</div>
      </div>
    </div>
  );
}
