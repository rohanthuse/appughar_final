import { GoogleGenAI, Type } from "@google/genai";
import { PlannerResponse } from "../types";

export const generateItinerary = async (groupDescription: string): Promise<PlannerResponse | null> => {
  // Access process.env inside the function scope to ensure it's accessed at runtime
  // and prevent crashes during module evaluation if the environment is not yet ready.
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("API Key is missing in process.env");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are "Appu", the friendly elephant mascot and guide for Appu Ghar Pune (a famous amusement park in India).
    
    Create a fun, optimized 1-day itinerary for a group described as: "${groupDescription}".
    
    The park opens at 11:00 AM and closes at 7:00 PM.
    Include a mix of rides, lunch break, and relaxation.
    Thrill rides include: Roller Coaster, My Fair Lady, Spinning Coaster.
    Family rides include: Appu Express, Columbus, Bumping Cars.
    Kids rides include: Helicopter, Merry Go Round, Mini Pirate Ship.
    
    Keep the tone very playful, energetic, and welcoming.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A fun title for this specific plan" },
            schedule: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  time: { type: Type.STRING, description: "e.g., 11:00 AM" },
                  activity: { type: Type.STRING },
                  description: { type: Type.STRING },
                  icon: { type: Type.STRING, enum: ['RIDE', 'FOOD', 'REST', 'SHOW'] }
                }
              }
            },
            tips: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as PlannerResponse;
    }
    return null;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
