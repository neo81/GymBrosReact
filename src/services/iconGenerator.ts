import { GoogleGenAI } from "@google/genai";

async function generateIcons() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  const prompt = "A sleek, minimalist iOS dark mode app icon for a gym app called 'GymBros'. The icon should feature a stylized dumbbell in a vibrant neon emerald green against a deep matte black background. The style should be professional, modern, and fit perfectly with iOS 18 dark mode aesthetics. High resolution, centered, no text, just the logo.";

  // Generate 512x512 icon
  const response512 = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: prompt,
        },
      ],
    },
    config: {
      imageConfig: {
            aspectRatio: "1:1",
            imageSize: "1K"
        }
    },
  });

  // Generate 192x192 icon (or just use the same prompt, the model will output a high res image anyway)
  const response192 = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: prompt + " Optimized for 192x192 resolution.",
        },
      ],
    },
    config: {
      imageConfig: {
            aspectRatio: "1:1",
            imageSize: "512px"
        }
    },
  });

  return {
    icon512: response512.candidates[0].content.parts.find(p => p.inlineData)?.inlineData?.data,
    icon192: response192.candidates[0].content.parts.find(p => p.inlineData)?.inlineData?.data,
  };
}
