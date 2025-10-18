import { Line } from 'react-chartjs-2'
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip } from 'chart.js'
Chart.register(LineElement,PointElement,LinearScale,CategoryScale,Legend,Tooltip)

export default function Curves(){
  const data = {
    labels: Array.from({length:13},(_,i)=>i*4),
    datasets: [
      {label:'Low Risk', data:[0.98,0.95,0.92,0.90,0.88,0.85,0.82,0.80,0.78,0.75,0.73,0.72,0.72]},
      {label:'Medium Risk', data:[0.96,0.92,0.88,0.85,0.82,0.78,0.75,0.70,0.66,0.60,0.55,0.50,0.44]},
      {label:'High Risk', data:[0.90,0.80,0.70,0.62,0.55,0.45,0.38,0.33,0.30,0.28,0.25,0.23,0.22]},
    ]
  }
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title">Kaplan-Meier (demo)</h2>
        <Line data={{
          labels:data.labels,
          datasets:data.datasets.map((d,i)=>({
            ...d, tension:.3, borderWidth:2, fill:false
          }))
        }}/>
        <div className="text-xs opacity-60 mt-2">Generated from UNIFIED risk score stratification (tertiles) – demo</div>
      </div>
    </div>
  )
}
