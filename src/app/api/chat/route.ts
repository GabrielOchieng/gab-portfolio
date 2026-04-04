import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATION_AI_API_KEY!);

// --- MERGED KNOWLEDGE BASE (CV + NEW PROJECTS + IDENTITY) ---
const GABRIEL_KNOWLEDGE_BASE = `
  IDENTITY: 
  Gabriel Ochieng, a Product-Focused Software Developer based in Nairobi, Kenya.
  
  CORE PHILOSOPHY: 
  Bridging complex AI logic with high-end User Experience (UX/CX). 
  Specializes in React 19, Next.js 16, and AI Orchestration.


FEATURED AI PROJECTS:
  - CIPHER HUNT (AI Intel Engine): An automated recruitment intelligence engine. It uses Gemini 1.5 Pro, Supabase, and Firecrawl for headless scraping. Key features: scouts remote job boards, performs semantic scoring against candidate profiles, and generates tailored application assets via GitHub Actions. [Link: https://job-alert-mu.vercel.app]
  - CODEVISTA (AI Code Companion): A zero-latency code analysis tool powered by Llama 3.3 70B via Groq for instantaneous inference. Built with React 19, Next.js 16, and Tailwind v4. It features "Learn in Layers" conceptual breakdowns for developers. [Link: https://codevista-client.vercel.app]
  - Portfolio AI Integration: A custom Gemini-powered assistant built with direct SDK integration to ensure high-performance streaming and zero dependency conflicts.



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
  - Stack: JavaScript, TypeScript, React, Next.js, React Native, Node.js, Express, Tailwind v4, Framer Motion,.
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
  - Portfolio: https://gab-portfolio-beta.vercel.app
  -
`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    // Using gemini-1.5-flash for the best balance of speed and reasoning
    const model = genAI.getGenerativeModel({
      model: "gemini-3.1-flash-lite-preview",
    });

    const chatSession = model.startChat({
      history: history || [],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const systemPrompt = `
      You are Gabriel's Portfolio AI Assistant. 
      Your tone: Professional, witty, product-focused, and highly helpful.
      
      STRICT RULES:
      1. Use the Knowledge Base: ${GABRIEL_KNOWLEDGE_BASE} to provide accurate details. 
      2. Highlight specific metrics like the 20% time reduction and "days to hours" turnaround at Jambojet.
      3. When asked about AI, emphasize the advanced orchestration in "Cipher Hunt" and the speed of "CodeVista."
      4. DO NOT include any citations, source markers, or brackets like or .
      5. Speak naturally and conversationally.
      
      KNOWLEDGE BASE:
      ${GABRIEL_KNOWLEDGE_BASE}
      
      USER QUESTION: "${message}"
      
      Return ONLY a valid JSON object:
      { "reply": "your natural, citation-free response, professional response" }
    `;

    //     const aiResult = await model.generateContent(systemPrompt);
    //     const textResponse = aiResult.response.text();

    //     // Robust JSON cleaning to handle potential AI markdown output
    //     const cleanedJson = textResponse.replace(/```json|```/g, "").trim();
    //     const aiData = JSON.parse(cleanedJson);

    //     return NextResponse.json({ reply: aiData.reply });
    //   } catch (error) {
    //     console.error("Portfolio Chat API Error:", error);
    //     return NextResponse.json(
    //       {
    //         reply:
    //           "I'm currently optimizing my responses to better serve you. Please feel free to reach out to Gabriel directly!",
    //       },
    //       { status: 500 },
    //     );
    //   }
    // }

    const aiResult = await chatSession.sendMessage(
      `${systemPrompt}\n\nUser Question: ${message}`,
    );
    const textResponse = aiResult.response.text();

    // 5. Robust JSON cleaning
    const cleanedJson = textResponse.replace(/```json|```/g, "").trim();

    let aiData;
    try {
      aiData = JSON.parse(cleanedJson);
    } catch (e) {
      // Fallback in case Gemini returns raw text instead of JSON
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
