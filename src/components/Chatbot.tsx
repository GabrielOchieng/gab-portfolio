"use client";

import { useState, useEffect, useRef } from "react";
import {
  AiOutlineSend,
  AiOutlineMessage,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineCopy,
  AiOutlineCheck,
} from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

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

  // Clear Chat Functionality
  const clearChat = () => {
    setMessages([initialMessage]);
    setApiHistory([]);
    setInput("");
  };

  // Copy to Clipboard Functionality
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(index);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatMessage = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
    const phoneRegex = /(\+254[0-9]{9})/g;

    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={`l-${i}`}
            href={part.replace(/[.,]$/, "")}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold hover:text-primary break-all"
          >
            {part}
          </a>
        );
      }
      return part.split(emailRegex).map((subPart, j) => {
        if (subPart.match(emailRegex)) {
          return (
            <a
              key={`e-${j}`}
              href={`mailto:${subPart}`}
              className="underline font-bold hover:text-primary"
            >
              {subPart}
            </a>
          );
        }
        return subPart.split(phoneRegex).map((phonePart, k) => {
          if (phonePart.match(phoneRegex)) {
            return (
              <a
                key={`p-${k}`}
                href={`tel:${phonePart}`}
                className="underline font-bold hover:text-primary whitespace-nowrap"
              >
                {phonePart}
              </a>
            );
          }
          return phonePart;
        });
      });
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
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-primary p-4 rounded-full text-white shadow-2xl flex items-center justify-center cursor-pointer border-none outline-none"
      >
        {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMessage size={28} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="absolute bottom-16 right-0 
             w-[calc(100vw-2rem)] sm:w-87.5 
             h-125 max-h-[70vh] 
             bg-white shadow-2xl rounded-2xl border border-gray-200 
             flex flex-col overflow-hidden"
          >
            {/* Header with Clear Button */}
            <div className="bg-primary text-white p-2 shadow-md flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
                  Gabriel AI
                </p>
                <h3 className="text-lg font-bold">Portfolio Assistant</h3>
              </div>
              <button
                onClick={clearChat}
                title="Clear Conversation"
                className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer border-none bg-transparent text-white"
              >
                <AiOutlineDelete size={20} />
              </button>
            </div>

            {/* Messages */}
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
                    className={`group relative max-w-[85%] text-sm p-3 rounded-2xl shadow-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {formatMessage(msg.content)}

                    {/* Copy Button for Assistant Messages */}
                    {msg.role === "assistant" && (
                      <button
                        onClick={() => copyToClipboard(msg.content, idx)}
                        className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-primary cursor-pointer bg-transparent border-none"
                      >
                        {copiedId === idx ? (
                          <AiOutlineCheck size={14} />
                        ) : (
                          <AiOutlineCopy size={14} />
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

            {/* Suggestion Chips */}
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
                <AiOutlineSend size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
