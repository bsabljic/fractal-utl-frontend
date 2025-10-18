import axios from "axios";

export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export type UnifiedResult = {
  cindex: number;
  sens?: number;
  spec?: number;
  brier?: number;
  hr?: number;
  ci?: [number, number];
  nri?: number;
  idi?: number;
  notes?: string;
};

export async function ping(): Promise<{ public_key?: string }> {
  const url = `${API_BASE}/api/ping`;
  try {
    const { data } = await axios.get(url, { timeout: 10000 });
    return data;
  } catch {
    return { public_key: undefined };
  }
}

export async function runUnified(file?: File): Promise<UnifiedResult> {
  const url = `${API_BASE}/api/compare`;
  if (file) {
    const form = new FormData();
    form.append("file", file);
    const { data } = await axios.post(url, form, {
      headers: { "Content-Type": "multipart/form-data" },
      timeout: 60000,
    });
    return data;
  } else {
    // fallback DEMO (lokalni mock da UI radi bez backenda)
    return {
      cindex: 0.704,
      sens: 0.78,
      spec: 0.71,
      brier: 0.186,
      hr: 2.41,
      ci: [1.52, 3.82],
      notes: "Local demo (no backend).",
    };
  }
}
