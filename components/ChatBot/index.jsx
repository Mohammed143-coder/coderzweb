"use client";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiRobot3Line } from "react-icons/ri";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();

    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, newMessage] }),
      });

      // Check if response is ok
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      // Check if response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON");
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "Sorry, no response received.",
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-16 left-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 animate-bounce items-center justify-center 
        rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 
        to-pink-500 text-white shadow-lg transition hover:scale-110"
      >
        <RiRobot3Line size={30} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="animate-slide-up absolute -right-auto bottom-20 flex h-96 w-auto flex-col overflow-hidden rounded-2xl 
          border bg-white shadow-2xl md:-right-80 md:bottom-16 md:h-96 md:w-96"
        >
          {/* Header */}
          <div
            className="flex items-center justify-between bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
            p-3 font-semibold text-white"
          >
            <span>CoderWeb AI Assistant</span>
            <span>
              <MdClose className="h-6 w-6" onClick={() => setIsOpen(!isOpen)} />
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[75%] rounded-lg p-2 ${
                  m.role === "user"
                    ? "ml-auto bg-cyan-100 text-cyan-900"
                    : "mr-auto bg-gray-200 text-gray-900"
                }`}
              >
                {m.content}
              </div>
            ))}
            {isLoading && (
              <div className="md:w-max-72 mr-auto w-56 rounded-lg bg-gray-200 p-2 text-gray-900">
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="flex border-t p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow rounded-lg border px-3 py-2 text-sm focus:outline-none"
              placeholder="Ask me..."
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="ml-2 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 
              to-pink-500 px-4 py-2 font-semibold text-white
              disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
