import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const metric = String(req.query.metric || 'f1_score');
  const data = [
    { domain: "High-value clients", A: { f1_score: 0.72 }, B: { f1_score: 0.86 }, diff: 0.14 },
    { domain: "Tech support tickets", A: { f1_score: 0.68 }, B: { f1_score: 0.83 }, diff: 0.15 },
  ];
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ ok: true, metric, domains: data, timestamp: new Date().toISOString() });
}
