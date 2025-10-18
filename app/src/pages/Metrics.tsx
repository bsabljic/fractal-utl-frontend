export default function Metrics(){
  return (
    <div className="card bg-base-100 border border-white/10">
      <div className="card-body">
        <h2 className="card-title">Advanced Scientific Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <div className="font-semibold mb-2">Classification Performance</div>
            <ul className="list-disc pl-5 opacity-80">
              <li>AUC-ROC</li><li>Sensitivity</li><li>Specificity</li><li>Brier Score</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Clinical Utility</div>
            <ul className="list-disc pl-5 opacity-80">
              <li>PPV / NPV</li><li>NRI</li><li>IDI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
