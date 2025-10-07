"use client";
import { useState } from "react";
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
        { role: "assistant", content: data.reply || "Sorry, no response received." },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { 
          role: "assistant", 
          content: "Sorry, something went wrong. Please try again." 
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
        className="w-16 h-16 flex items-center justify-center rounded-full 
        bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
        text-white shadow-lg animate-bounce hover:scale-110 transition"
      >
        <RiRobot3Line size={30} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 md:bottom-16 -right-52 md:-right-80 w-auto h-96 md:w-96 md:h-96 bg-white 
          shadow-2xl rounded-2xl flex flex-col border overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
            text-white font-semibold p-3">
            CoderWeb AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  m.role === "user"
                    ? "ml-auto bg-cyan-100 text-cyan-900"
                    : "mr-auto bg-gray-200 text-gray-900"
                }`}
              >
                {m.content}
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto bg-gray-200 text-gray-900 p-2 rounded-lg w-56 md:w-max-72">
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="flex p-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow border rounded-lg px-3 py-2 text-sm focus:outline-none"
              placeholder="Ask me..."
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r 
              from-cyan-400 via-purple-500 to-pink-500 text-white font-semibold
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}