"use client";

import { useState } from "react";
import { analyzeSkin, type SkinAnalysisResult } from "@/lib/ai-service";

export function useAI() {
  const [result, setResult] = useState<SkinAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function runAnalysis(imageBase64: string) {
    setLoading(true);
    setError(null);
    try {
      const data = await analyzeSkin(imageBase64);
      setResult(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { result, loading, error, runAnalysis };
}
