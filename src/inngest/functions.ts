import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        model: google("gemini-2.5-flash"),
        system: "You are a helpful assistant",
        prompt: "What is 2 + 2?",
      }
    );

    const { steps: groqSteps } = await step.ai.wrap(
      "groq-generate-text",
      generateText,
      {
        model: groq("llama-3.3-70b-versatile"),
        system: "You are a helpful assistant",
        prompt: "What is 2 + 2?",
      }
    );

    return { geminiSteps, groqSteps };
  }
);
