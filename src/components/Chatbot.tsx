"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Inline SVG Icons to prevent resolution errors ---
const IconSend = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);
const IconMessage = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);
const IconClose = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const IconDelete = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);
const IconCopy = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);
const IconCheck = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ApiHistoryItem {
  role: "user" | "model";
  parts: { text: string }[];
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const initialMessage: ChatMessage = {
    role: "assistant",
    content: "Hi! I'm Gabriel's AI assistant. How can I help you today?",
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [apiHistory, setApiHistory] = useState<ApiHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const clearChat = () => {
    setMessages([initialMessage]);
    setApiHistory([]);
    setInput("");
  };

  const copyToClipboard = (text: string, index: number) => {
    const cleanText = text.replace(/\*\*/g, "").replace(/^\* /gm, "• ");
    navigator.clipboard.writeText(cleanText);
    setCopiedId(index);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatMessage = (text: string) => {
    if (!text) return null;

    const lines = text.split("\n");

    return lines.map((line, lineIdx) => {
      const isBullet =
        line.trim().startsWith("* ") || line.trim().startsWith("- ");
      const cleanLine = isBullet
        ? line.trim().replace(/^[* -]\s+/, "• ")
        : line;

      // Split into parts based on bold markdown
      const boldParts = cleanLine.split(/(\*\*.*?\*\*)/g);

      const renderedLine = boldParts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong
              key={i}
              className="font-extrabold text-gray-900 dark:text-black"
            >
              {part.slice(2, -2)}
            </strong>
          );
        }

        // Combined regex to prioritize Markdown links [text](url), then emails, phones, and plain URLs
        const combinedRegex =
          /(\[.+?\]\(https?:\/\/[^\s)]+\))|(https?:\/\/[^\s]+)|([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)|(\+254[0-9]{9})/g;

        return part.split(combinedRegex).map((subPart, j) => {
          if (!subPart) return null;

          // Detect Markdown link [Name](URL)
          if (subPart.startsWith("[") && subPart.includes("](")) {
            const match = subPart.match(/\[(.+?)\]\((.+?)\)/);
            if (match) {
              return (
                <a
                  key={`mdl-${j}`}
                  href={match[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-primary hover:opacity-80 break-all"
                >
                  {match[1]}
                </a>
              );
            }
          }

          // Detect plain URL
          if (subPart.match(/^https?:\/\//)) {
            return (
              <a
                key={`l-${j}`}
                href={subPart.replace(/[.,]$/, "")}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-primary hover:opacity-80 break-all"
              >
                {subPart}
              </a>
            );
          }

          // Detect Email
          if (subPart.includes("@") && !subPart.includes(" ")) {
            return (
              <a
                key={`e-${j}`}
                href={`mailto:${subPart}`}
                className="underline font-bold text-primary"
              >
                {subPart}
              </a>
            );
          }

          // Detect Phone
          if (subPart.startsWith("+254")) {
            return (
              <a
                key={`p-${j}`}
                href={`tel:${subPart}`}
                className="underline font-bold text-primary whitespace-nowrap"
              >
                {subPart}
              </a>
            );
          }

          return subPart;
        });
      });

      return (
        <div
          key={lineIdx}
          className={`${lineIdx > 0 ? "mt-2" : ""} ${isBullet ? "pl-2" : ""}`}
        >
          {renderedLine}
        </div>
      );
    });
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend, history: apiHistory }),
      });

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setApiHistory((prev) => [
        ...prev,
        { role: "user", parts: [{ text: textToSend }] },
        { role: "model", parts: [{ text: data.reply }] },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection lost. Try again!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-2 right-6 z-90">
      {!isOpen && (
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0px rgba(67, 62, 209, 0.5), 0 0 0px rgba(67, 62, 209, 0.3)",
              "0 0 10px rgba(67, 62, 209, 0.6), 0 0 20px rgba(67, 62, 209, 0.4)",
              "0 0 0px rgba(67, 62, 209, 0.5), 0 0 0px rgba(67, 62, 209, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-full inline-block"
        >
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary p-4 rounded-full text-white shadow-2xl flex items-center justify-center cursor-pointer border-none outline-none"
          >
            <IconMessage size={28} />
          </motion.button>
        </motion.div>
      )}

      {isOpen && (
        <motion.button
          onClick={() => setIsOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary p-4 rounded-full text-white shadow-2xl flex items-center justify-center cursor-pointer border-none outline-none"
        >
          <IconClose size={28} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] sm:w-87.5 h-125 max-h-[70vh] bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-white p-3 shadow-md flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
                  Gabriel AI
                </p>
                <h3 className="text-lg font-bold">Portfolio Assistant</h3>
              </div>
              <button
                onClick={clearChat}
                className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer border-none bg-transparent text-white"
              >
                <IconDelete size={20} />
              </button>
            </div>

            {/* Messages Body */}
            <div
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`group relative max-w-[90%] text-sm p-3 rounded-2xl shadow-sm leading-relaxed ${msg.role === "user" ? "bg-primary text-white rounded-br-none" : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"}`}
                  >
                    {formatMessage(msg.content)}
                    {msg.role === "assistant" && (
                      <button
                        onClick={() => copyToClipboard(msg.content, idx)}
                        className="absolute -right-8 top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-primary cursor-pointer bg-transparent border-none"
                      >
                        {copiedId === idx ? (
                          <IconCheck size={14} />
                        ) : (
                          <IconCopy size={14} />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start pl-2">
                  <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            <div className="p-3 border-t bg-white flex flex-wrap gap-2">
              {["Tech Stack", "AI Projects", "Contact"].map((label) => (
                <button
                  key={label}
                  disabled={isLoading}
                  onClick={() =>
                    sendMessage(
                      `Tell me about Gabriel's ${label.toLowerCase()}`,
                    )
                  }
                  className="text-[10px] font-bold uppercase border border-primary/30 text-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer bg-transparent disabled:opacity-50 active:scale-95"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <div className="p-4 border-t bg-white flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask Gabriel's AI..."
                className="flex-1 text-sm p-3 rounded-xl bg-gray-100 border-none outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50"
                disabled={isLoading}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading}
                className="bg-primary text-white p-3 rounded-xl hover:bg-[#433ed1] disabled:opacity-50 transition-colors flex items-center justify-center border-none cursor-pointer"
              >
                <IconSend size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
