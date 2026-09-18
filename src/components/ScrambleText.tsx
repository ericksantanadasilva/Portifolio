"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  showCursor?: boolean;
  triggerOnHover?: boolean;
  speed?: number;
}

const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_!@#$%&";

export function ScrambleText({
  text,
  className = "",
  showCursor = false,
  triggerOnHover = true,
  speed = 35,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [cursorVisible, setCursorVisible] = useState(true);
  const isScramblingRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  const startScramble = useCallback(() => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        isScramblingRef.current = false;
      }

      iteration += 1 / 2; // taxa de avanço suave
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    startScramble();
  }, [startScramble]);

  // Cursor piscante estilo terminal
  useEffect(() => {
    if (!showCursor) return;
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <span
      className={`inline-block cursor-pointer select-none font-mono ${className}`}
      onMouseEnter={() => {
        if (triggerOnHover) {
          startScramble();
        }
      }}
    >
      <span>{displayText}</span>
      {showCursor && (
        <span
          className={`inline-block w-2.5 sm:w-3.5 h-6 sm:h-9 bg-zinc-900 dark:bg-zinc-100 ml-1.5 align-middle ${
            cursorVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-75`}
        />
      )}
    </span>
  );
}
