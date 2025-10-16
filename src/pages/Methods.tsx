import { BlockMath } from 'react-katex';
export default function Methods(){
  return <div className='space-y-6'>
    <section className='border rounded p-4'><div className='text-sm font-semibold mb-2'>Nested CV (outer 5, inner 3)</div>
      <p className='text-sm text-gray-700'>U svakom vanjskom foldu biramo težinski koeficijent \\(\\alpha\\) za unified skor (\\(h=\\alpha z(RISK_{fr}) + (1-\\alpha) z(v_t)\\)) putem unutarnje 3-fold CV maksimizacije Uno C; potom na vanjskom testu izvještavamo Uno C i iAUC.</p>
      <BlockMath math={`h = \\alpha\\,z(RISK_{fractal}) + (1-\\alpha)\\,z(v_{end}),\\quad \\alpha\\in\\{0.25, 0.5, 0.75\\}`}/>
    </section>
    <section className='border rounded p-4'><div className='text-sm font-semibold mb-2'>KM s CI i number-at-risk</div>
      <p className='text-sm text-gray-700'>KM krivulje s 95% CI i tablicom broja u riziku na vremenskim točkama (kvazi 0–90. percentil) za tri tercila unified skora.</p>
    </section>
    <section className='border rounded p-4'><div className='text-sm font-semibold mb-2'>Time-dependent ROC@t</div>
      <p className='text-sm text-gray-700'>Incident/dynamic definicija: slučajevi su događaji do vremena \\(t\\), kontrole preživjeli nakon \\(t\\); cenzurirani prije \\(t\\) se isključuju. AUC se računa trapeznom integracijom ROC krivulje.</p>
    </section>
  </div>
}
