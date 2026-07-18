export type SkinAnalysisResult = {
  skinType: string;
  concerns: { label: string; severity: "low" | "moderate" | "high" }[];
  recommendedTreatments: string[];
  estimatedPriceRange: [number, number];
};

/**
 * Sends the uploaded selfie to the /api/ai/analyze-skin route, which in turn
 * calls the Anthropic API (Claude) with vision input to produce a structured
 * skin analysis. Kept as a thin client wrapper so components stay simple.
 */
export async function analyzeSkin(imageBase64: string): Promise<SkinAnalysisResult> {
  const res = await fetch("/api/ai/analyze-skin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: imageBase64 }),
  });

  if (!res.ok) {
    throw new Error("Skin analysis failed. Please try again.");
  }

  return res.json();
}
