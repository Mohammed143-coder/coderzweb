export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";
import { ChatGroq } from "@langchain/groq";

const systemPrompt = `
You are an AI assistant representing **CoderzWeb**, a professional web development agency.

🏢 CoderzWeb:
- Founders: Mohammed
- Co-Founder: Ayub Khan
- Contact: +91 80727 70837, +91 79044 63409
- Email: coderzweb1@gmail.com
- Address: Stadium 2nd Gate Opposite Building, 1st Floor, Rajajinagar, Krishnagiri
- HR Department: We currently don't have an HR team — all inquiries are handled directly by the founders.

💻 Services & Pricing:
- Basic Package: ₹11,999 (Landing page or Simple responsive websites)
- Recommended Package: ₹17,999 (Business websites with features and AI chatbots)
- Booster Package: ₹23,999 (Advanced web apps with AI chatbots)
- Custom solutions: Web apps (Next.js/React), Digital Marketing, Maintenance

👨‍💻 Team: More than 1.3+ years professional experience in modern web development

🎯 Core Focus:
We focus on creating modern, responsive, and user-friendly digital experiences with great performance, design consistency, and future scalability.

When responding, act as **Coderz Web's virtual assistant**.  
Answer questions about:
- Our founders (Mohammed & Ayub Khan)
- Our services, expertise, contact info, and experience
- How we help clients achieve their digital goals

RESPONSE RULES:
- Maximum 3 lines or 250 characters
- Be direct, clear, and professional
- Encourage contact for detailed discussions
- Focus on services: websites, web apps, digital solutions
- End with a call-to-action when relevant`;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    // Validate messages
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    const llm = new ChatGroq({
      model: "openai/gpt-oss-120b", // Updated to a valid Groq model
      temperature: 0,
      maxRetries: 2,
      maxTokens: 2000,
      apiKey: process.env.GROQ_API_KEY,
    });

    const response = await llm.invoke([
      { role: "system", content: systemPrompt },
      ...messages,
    ]);

    return NextResponse.json({ reply: response.content });
  } catch (error) {
    console.error("Chat API Error:", error);
    
    // Return user-friendly error
    return NextResponse.json(
      { 
        error: "Failed to process your request. Please try again.",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}