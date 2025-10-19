import type { VercelRequest, VercelResponse } from '@vercel/node';
export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ ok: true, timestamp: new Date().toISOString(), public_key: 'UTL-DEMO-PUBKEY-123' });
}
