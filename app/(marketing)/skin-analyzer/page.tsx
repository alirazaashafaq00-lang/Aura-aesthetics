"use client";

import { useState } from "react";
import { ImageUploader } from "@/components/marketing/skin-analyzer/ImageUploader";
import { ResultCard } from "@/components/marketing/skin-analyzer/ResultCard";
import { useAI } from "@/hooks/useAI";

export default function SkinAnalyzerPage() {
  const [image, setImage] = useState<string | null>(null);
  const { result, loading, error, runAnalysis } = useAI();

  return (
    <section className="pt-40 pb-24 max-w-5xl mx-auto px-6">
      <p className="section-eyebrow">AI Skin Analyzer</p>
      <h1 className="font-display text-5xl mt-3 mb-4">Upload your selfie</h1>
      <p className="text-obsidian/60 max-w-xl mb-10">
        We'll detect skin type, wrinkles, pigmentation, and pores, then suggest
        treatments and pricing. This is cosmetic guidance, not a medical diagnosis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <ImageUploader onImageReady={setImage} />
          <button
            disabled={!image || loading}
            onClick={() => image && runAnalysis(image)}
            className="mt-6 w-full py-4 rounded-full bg-obsidian text-cream font-medium disabled:opacity-40"
          >
            {loading ? "Analyzing..." : "Analyze My Skin"}
          </button>
          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        </div>

        <div>
          {result ? (
            <ResultCard result={result} />
          ) : (
            <div className="h-full min-h-[300px] rounded-2xl border border-dashed border-obsidian/15 flex items-center justify-center text-obsidian/40 text-sm text-center p-8">
              Your results will appear here after analysis.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
