'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseTypedTextOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  startDelay?: number;
  loop?: boolean;
}

export function useTypedText({
  strings,
  typeSpeed = 60,
  backSpeed = 40,
  backDelay = 2000,
  startDelay = 1000,
  loop = true,
}: UseTypedTextOptions) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const tick = useCallback(() => {
    const currentString = strings[stringIndex];
    if (isDeleting) {
      setText(currentString.substring(0, text.length - 1));
    } else {
      setText(currentString.substring(0, text.length + 1));
    }
  }, [text, isDeleting, stringIndex, strings]);

  useEffect(() => {
    const currentString = strings[stringIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentString) {
      timeout = setTimeout(() => setIsDeleting(true), backDelay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % strings.length);
      if (!loop && stringIndex === strings.length - 1) return;
    } else {
      const delay = text.length === 0 && stringIndex === 0 && !isDeleting ? startDelay : isDeleting ? backSpeed : typeSpeed;
      timeout = setTimeout(tick, delay);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, stringIndex, strings, typeSpeed, backSpeed, backDelay, startDelay, loop, tick]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return { text, showCursor };
}
