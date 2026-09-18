"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  showCursor?: boolean;
  triggerOnHover?: boolean;
  deleteSpeed?: number;
  typeSpeed?: number;
  pauseBeforeRetype?: number;
}

export function TypewriterText({
  text,
  className = "",
  showCursor = true,
  triggerOnHover = true,
  deleteSpeed = 45,
  typeSpeed = 65,
  pauseBeforeRetype = 280,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState(text);
  const [cursorBlink, setCursorBlink] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(false);

  // Piscar cursor quando não está animando
  useEffect(() => {
    if (!showCursor) return;
    const interval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, [showCursor]);

  const runAnimation = useCallback(() => {
    if (animationRef.current) return;
    animationRef.current = true;
    setIsAnimating(true);
    setCursorBlink(true); // Mantém o cursor visível durante a ação

    let currentLength = text.length;

    // Fase 1: Apagar caractere por caractere (backspace)
    const deleteInterval = setInterval(() => {
      currentLength--;
      setDisplayedText(text.slice(0, currentLength));

      if (currentLength <= 0) {
        clearInterval(deleteInterval);

        // Pausa antes de começar a redigitar
        setTimeout(() => {
          let retypeIndex = 0;

          // Fase 2: Reescrever caractere por caractere
          const typeInterval = setInterval(() => {
            retypeIndex++;
            setDisplayedText(text.slice(0, retypeIndex));

            if (retypeIndex >= text.length) {
              clearInterval(typeInterval);
              animationRef.current = false;
              setIsAnimating(false);
            }
          }, typeSpeed);
        }, pauseBeforeRetype);
      }
    }, deleteSpeed);
  }, [text, deleteSpeed, typeSpeed, pauseBeforeRetype]);

  return (
    <span
      className={`inline-block cursor-pointer select-none font-mono ${className}`}
      onMouseEnter={() => {
        if (triggerOnHover) {
          runAnimation();
        }
      }}
      onClick={runAnimation}
      title="Passe o mouse para apagar e reescrever"
    >
      <span>{displayedText}</span>
      {showCursor && (
        <span
          className={`inline-block w-2.5 sm:w-3.5 h-6 sm:h-9 bg-zinc-900 dark:bg-zinc-100 ml-1.5 align-middle ${
            cursorBlink || isAnimating ? "opacity-100" : "opacity-0"
          } transition-opacity duration-75`}
        />
      )}
    </span>
  );
}
