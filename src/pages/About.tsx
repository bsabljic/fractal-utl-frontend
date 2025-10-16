export default function About(){
  return <div className='space-y-6'>
    <section className='border rounded p-4'>
      <div className='text-lg font-semibold'>About Fractal-UTL v2.4</div>
      <p className='text-sm mt-2'>Dodano: nested CV s odabirom alfa težine, KM s CI i tablicom broja u riziku, te ROC(t) endpoint. Backend koristi scikit-survival za Uno C i dynamic AUC.</p>
    </section>
  </div>
}
