import { useEffect, useState } from "react";
import { useRun } from "../store/run";
import { ping } from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function Overview() {
  const nav = useNavigate();
  const { loading, error, result, setPublicKey, publicKey, run, reset } = useRun();
  const [file, setFile] = useState<File | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const p = await ping();
      setPublicKey(p.public_key);
    })();
  }, [setPublicKey]);

  useEffect(() => {
    if (result && !loading && !error) {
      nav("/results");
    }
  }, [result, loading, error, nav]);

  return (
    <div className="space-y-8">
      <section className="card bg-base-100 border border-white/10 shadow-xl rounded-xl">
        <div className="card-body">
          <h2 className="card-title">Load Demo Cohort</h2>
          <p className="text-sm opacity-75">NSCLC sample with full metrics</p>
          <div className="mt-4 flex gap-3">
            <button
              className="btn btn-primary"
              disabled={loading}
              onClick={() => { reset(); run(undefined); }}
            >
              Fractal demo
            </button>
            <button
              className="btn btn-secondary"
              disabled={loading}
              onClick={() => { reset(); run(undefined); }}
            >
              Unified demo
            </button>
          </div>
          {loading && <div className="mt-3 text-sm opacity-75">Fetching &amp; analyzing…</div>}
          {error && <div className="mt-3 text-error">{error}</div>}
        </div>
      </section>

      <section className="card bg-base-100 border border-white/10 shadow-xl rounded-xl">
        <div className="card-body">
          <h2 className="card-title">Upload Dataset</h2>
          <p className="text-sm opacity-75">CSV/TSV with survival data</p>
          <div className="mt-4 flex items-center gap-3">
            <input
              type="file"
              className="file-input file-input-bordered"
              accept=".csv,.tsv,text/csv,text/tab-separated-values"
              onChange={(e) => setFile(e.target.files?.[0] || undefined)}
            />
            <button
              className="btn btn-accent"
              disabled={loading || !file}
              onClick={() => { reset(); run(file); }}
            >
              Analyze
            </button>
          </div>
        </div>
      </section>

      <section className="card bg-base-100 border border-white/10 shadow-xl rounded-xl">
        <div className="card-body">
          <h2 className="card-title">API Verification</h2>
          <p className="text-sm">
            Public Key:{" "}
            {publicKey ? <span className="text-success">{publicKey}</span> : <span className="text-error">unavailable</span>}
          </p>
        </div>
      </section>
    </div>
  );
}
