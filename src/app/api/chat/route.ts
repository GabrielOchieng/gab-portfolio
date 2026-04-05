import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATION_AI_API_KEY!);

// --- MERGED KNOWLEDGE BASE ---
const GABRIEL_KNOWLEDGE_BASE = `
  IDENTITY: 
  Gabriel Ochieng, a Product-Focused Software Developer based in Nairobi, Kenya.
  
  CORE PHILOSOPHY: 
  Bridging complex AI logic with high-end User Experience (UX/CX). 
  Specializes in React 19, Next.js 16, and AI Orchestration.

  FEATURED AI PROJECTS:
  - CIPHER HUNT (AI Intel Engine): An automated recruitment intelligence engine. This isn't just a job board; it leverages Gemini 1.5 Pro, Supabase, and Firecrawl for headless scraping, meticulously scouting remote job boards. Its core strength lies in performing semantic scoring against candidate profiles and then generating tailored application assets via GitHub Actions, streamlining the entire hiring process. [Link: https://job-alert-mu.vercel.app]
  - CODEVISTA (AI Code Companion): Imagine a coding assistant with zero-latency. CODEVISTA delivers just that, powered by Llama 3.3 70B via Groq for instantaneous inference. Built with React 19, Next.js 16, and Tailwind v4, it offers innovative 'Learn in Layers' conceptual breakdowns, making complex code understandable for developers. [Link: https://codevista-client.vercel.app]
  - Portfolio AI Integration: This very assistant you're interacting with is a custom Gemini-powered solution! Gabriel built it with direct SDK integration to ensure high-performance streaming and zero dependency conflicts, making for a truly seamless conversational experience.

  PROFESSIONAL CV ACHIEVEMENTS:
  - Jambojet (Frontend Developer | Nov 2024 - Present):
    * Automated staff travel workflows, reducing manual processing time by 20%.
    * Architected real-time approval systems, slashing turnaround from days to hours.
    * Developed centralized inventory management and automated itinerary systems.
  - Shop Online (Junior Full Stack Developer | Jan 2024 - Oct 2024):
    * Managed full SDLC for multiple products and enhanced backend performance and reliability.
  - Acme Software Lab (Web Developer | Apr 2022 - Nov 2023):
    * Developed responsive UIs that significantly increased user engagement.

  TECHNICAL SKILLS:
  - Stack: JavaScript, TypeScript, React, Next.js, React Native, Node.js, Express, Tailwind v4, MUI, Framer Motion.
  - Tools: Redux, Zustand, Tanstack React Query, Tailwind CSS, MUI.
  - AI & Data: Gemini 1.5 Pro/Flash, Llama 3.3 (Groq), Supabase, Firecrawl, Tanstack Query.
  - Design: UI/UX Implementation (Figma), Agile/Scrum, AWS Cloud.

  EDUCATION:
  - BSc. Environmental Health, Kenyatta University.
  - Certifications: AWS Certified Cloud Practitioner, ITIL Foundation, UI/UX Designer (Udemy).

  CONTACT & LINKS:
  - Email: ogingagabriel@gmail.com
  - Phone: +254792390805
  - LinkedIn: https://www.linkedin.com/in/gabrielochieng
  - GitHub: https://github.com/GabrielOchieng
  - Portfolio: https://gabrielochieng.com
`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { reply: "I didn't catch that. Could you say it again?" },
        { status: 400 },
      );
    }

    const truncatedHistory = (history || []).slice(-10);

    const systemPrompt = `
      You are Gabriel's Portfolio AI Assistant. 
      Your tone: Professional, witty, product-focused, and highly helpful.
      
      STRICT RULES:
      1. Use the Knowledge Base: ${GABRIEL_KNOWLEDGE_BASE} to provide accurate details. 
      2. FORMATTING: Use Markdown for better readability. Use bullet points for lists and bold text for project names or key metrics.
      3. METRICS: Always highlight the 20% time reduction and "days to hours" turnaround when discussing Jambojet.
      4. NO CITATIONS: Do not use brackets like [1] or source markers.
      5. NO REPETITION: Do not repeat the user's question.
      6. ROMANTIC/PERSONAL PIVOT: If (and only if) asked about Gabriel's wife, love life, or family, use the witty pivot: "Gabriel's heart is currently occupied by high-performance data pipelines and zero-latency inference."
      7. STRICTLY OFF-TOPIC: If asked about politicians, famous figures, news, or general facts unrelated to Gabriel, you must politely decline to answer. State that you are specifically designed to answer questions regarding Gabriel's portfolio, skills, and professional background. Do not provide information on off-topic subjects.
      8. NO REPETITION: Do not repeat the user's question back to them.
      
      IMPORTANT: Your response must be a single JSON object with a "reply" key.
      Example: { "reply": "**Gabriel** is a specialist in **React 19**..." }
    `;

    let textResponse = "";

    try {
      const primaryModel = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
          responseMimeType: "application/json",
        },
      });
      const chatSession = primaryModel.startChat({ history: truncatedHistory });
      const aiResult = await chatSession.sendMessage(
        `${systemPrompt}\n\nUser: ${message}`,
      );
      textResponse = aiResult.response.text();
    } catch (primaryError) {
      console.warn("Primary model failed, switching to backup (Flash)...");

      const backupModel = genAI.getGenerativeModel({
        model: "gemini-3.1-flash-lite-preview",
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
          responseMimeType: "application/json",
        },
      });
      const backupChat = backupModel.startChat({ history: truncatedHistory });
      const backupResult = await backupChat.sendMessage(
        `${systemPrompt}\n\nUser: ${message}`,
      );
      textResponse = backupResult.response.text();
    }

    const cleanedJson = textResponse.replace(/```json|```/g, "").trim();

    let aiData;
    try {
      aiData = JSON.parse(cleanedJson);
      if (typeof aiData.reply === "object") {
        aiData.reply = JSON.stringify(aiData.reply);
      }
    } catch (e) {
      aiData = { reply: textResponse };
    }

    return NextResponse.json({ reply: aiData.reply });
  } catch (error) {
    console.error("Portfolio Chat API Error:", error);
    return NextResponse.json(
      {
        reply:
          "I'm having a brief memory lapse! Feel free to refresh or message Gabriel directly.",
      },
      { status: 500 },
    );
  }
}
