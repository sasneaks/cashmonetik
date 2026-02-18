'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatbot } from '@/providers/ChatbotProvider';
import { chatbotQuickReplies } from '@/lib/content';

export function Chatbot() {
  const { isOpen, messages, toggleOpen, handleQuickReply, handleUserInput } = useChatbot();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when widget opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleUserInput(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[900]">
      {/* Widget panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[72px] right-0 w-[380px] max-h-[520px] flex flex-col rounded-lg overflow-hidden border border-border bg-bg-elevated shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-primary border-b border-border">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0">
                CM
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-display font-semibold text-sm leading-tight">
                  Assistant CashMonetik
                </p>
                <p className="text-white/80 text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  En ligne
                </p>
              </div>
              <button
                onClick={toggleOpen}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/15 transition-colors duration-200"
                aria-label="Fermer le chat"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                  <path
                    d="M12 4L4 12M4 4l8 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[320px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-line ${
                      msg.isBot
                        ? 'bg-bg-card border border-border rounded-lg rounded-bl-sm text-text'
                        : 'bg-primary rounded-lg rounded-br-sm text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {chatbotQuickReplies.map((reply) => (
                <button
                  key={reply.topic}
                  onClick={() => handleQuickReply(reply.topic)}
                  className="text-xs px-3 py-1.5 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-display font-medium"
                >
                  {reply.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-border">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Votre message..."
                className="flex-1 bg-bg-card border border-border rounded-md px-3 py-2 text-sm text-text placeholder:text-text-tertiary focus:outline-none focus:border-primary transition-colors duration-200"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-9 h-9 flex items-center justify-center rounded-md bg-primary text-white hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 flex-shrink-0"
                aria-label="Envoyer"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M14 2L7 9M14 2L9.5 14L7 9M14 2L2 6.5L7 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <button
        onClick={toggleOpen}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:bg-primary-hover hover:shadow-[0_4px_28px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 ease-out-custom flex items-center justify-center relative"
        aria-label={isOpen ? 'Fermer le chat' : 'Ouvrir le chat'}
      >
        {/* Chat icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
          <path
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {/* Notification badge with pulse */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center">
            <span className="absolute w-5 h-5 rounded-full bg-red-500 animate-chatbot-pulse" />
            <span className="relative w-5 h-5 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
              1
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
