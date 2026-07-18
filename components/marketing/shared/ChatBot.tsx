"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm the Aura Aesthetics concierge. How can I help today?" },
  ]);

  function handleSend() {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    // TODO: call your chat API route (e.g. Claude via /api endpoint) and append the response.
  }

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {open && (
        <div className="w-80 h-96 mb-4 glass rounded-2xl shadow-card flex flex-col overflow-hidden">
          <div className="bg-obsidian text-cream px-4 py-3 flex justify-between items-center">
            <span className="text-sm font-medium">Aura Concierge</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={16} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-xl ${
                  m.role === "assistant"
                    ? "bg-obsidian/5 text-obsidian"
                    : "bg-teal-premium text-white ml-auto"
                }`}
              >
                {m.content}
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-obsidian/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 min-w-0 px-3 py-2 rounded-full bg-obsidian/5 text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-teal-premium text-white"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-obsidian text-cream flex items-center justify-center shadow-card hover:scale-105 transition-transform"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
}
