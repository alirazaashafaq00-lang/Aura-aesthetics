import { NextRequest, NextResponse } from "next/server";

// Calls Claude with vision input to produce a structured skin analysis.
// The prompt instructs the model to return JSON only, matching SkinAnalysisResult in lib/ai-service.ts.
export async function POST(req: NextRequest) {
  try {
    const { image } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY as string,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image",
                source: { type: "base64", media_type: "image/jpeg", data: image },
              },
              {
                type: "text",
                text:
                  "You are a cosmetic skin analysis assistant. Looking only at visible skin texture, tone and surface characteristics, return ONLY a JSON object (no markdown, no preamble) with this shape: " +
                  '{"skinType": string, "concerns": [{"label": string, "severity": "low"|"moderate"|"high"}], "recommendedTreatments": string[], "estimatedPriceRange": [number, number]}. ' +
                  "This is for informational, non-diagnostic cosmetic guidance only.",
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    const text = (data.content ?? [])
      .map((block: { type: string; text?: string }) => (block.type === "text" ? block.text : ""))
      .filter(Boolean)
      .join("\n")
      .replace(/```json|```/g, "")
      .trim();

    const result = JSON.parse(text);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Analysis failed" },
      { status: 500 }
    );
  }
}
