import { create } from "zustand";
import { runUnified, type UnifiedResult } from "../lib/api";

type State = {
  loading: boolean;
  error?: string;
  result?: UnifiedResult;
  publicKey?: string;
  setPublicKey: (k?: string) => void;
  run: (file?: File) => Promise<void>;
  reset: () => void;
};

export const useRun = create<State>((set) => ({
  loading: false,
  error: undefined,
  result: undefined,
  publicKey: undefined,
  setPublicKey: (k) => set({ publicKey: k }),
  run: async (file?: File) => {
    set({ loading: true, error: undefined });
    try {
      const res = await runUnified(file);
      set({ result: res, loading: false });
    } catch (e: any) {
      set({ error: e?.message || "Request failed", loading: false });
    }
  },
  reset: () => set({ loading: false, error: undefined, result: undefined }),
}));
