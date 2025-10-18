export default function About(){
  return (
    <div className="prose max-w-none">
      <h3>About</h3>
      <p>All metrics include 95% confidence intervals, bootstrap validation, cross-validation, and comprehensive statistical tests suitable for peer-reviewed journals.</p>
      <ul>
        <li><b>Validation</b>: Bootstrap CI (1000), 10-fold CV, optimism correction</li>
        <li><b>Equations</b>: LaTeX-ready in Methods</li>
        <li><b>Dataset</b>: NSCLC-Radiomics-Lung1 (Aerts et al., 2014), TICA</li>
      </ul>
    </div>
  )
}
