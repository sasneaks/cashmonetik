'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { chatbotResponses } from '@/lib/content';

export interface Message {
  text: string;
  isBot: boolean;
}

interface ChatbotContextType {
  isOpen: boolean;
  messages: Message[];
  toggleOpen: () => void;
  addMessage: (message: Message) => void;
  handleQuickReply: (topic: string) => void;
  handleUserInput: (input: string) => void;
}

const ChatbotContext = createContext<ChatbotContextType | null>(null);

const INITIAL_MESSAGE: Message = {
  text: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
  isBot: true,
};

const DEFAULT_FALLBACK =
  'Je ne suis pas sûr de comprendre votre demande. Vous pouvez me poser des questions sur nos tarifs, l\'installation, nos produits ou nous contacter directement au 01 62 34 34 62.';

function detectTopic(input: string): string | null {
  const normalized = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  if (/prix|tarif|cout|cou[tû]/.test(normalized)) return 'prix';
  if (/install|delai|livr/.test(normalized)) return 'installation';
  if (/produit|caisse|borne|robot|balance/.test(normalized)) return 'produits';
  if (/contact|tel|mail|appel|conseiller/.test(normalized)) return 'contact';

  return null;
}

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const addMessage = useCallback((message: Message) => {
    setMessages((prev) => [...prev, message]);
  }, []);

  const handleQuickReply = useCallback((topic: string) => {
    const userLabels: Record<string, string> = {
      prix: 'Tarifs et prix',
      installation: "Délai d'installation",
      produits: 'Nos produits',
      contact: 'Parler à un conseiller',
    };

    const userMessage: Message = {
      text: userLabels[topic] || topic,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);

    const response = chatbotResponses[topic] || DEFAULT_FALLBACK;

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    }, 600);
  }, []);

  const handleUserInput = useCallback((input: string) => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: Message = { text: trimmed, isBot: false };
    setMessages((prev) => [...prev, userMessage]);

    const topic = detectTopic(trimmed);
    const response = topic ? chatbotResponses[topic] : DEFAULT_FALLBACK;

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    }, 600);
  }, []);

  return (
    <ChatbotContext.Provider
      value={{ isOpen, messages, toggleOpen, addMessage, handleQuickReply, handleUserInput }}
    >
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot(): ChatbotContextType {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}
