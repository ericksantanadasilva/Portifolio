"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";

// Ícone oficial SVG do Spotify idêntico ao print
function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308c-.215.352-.674.463-1.026.248-2.812-1.718-6.352-2.107-10.521-1.155-.401.092-.8-.16-.892-.561-.092-.402.16-.8.562-.892 4.568-1.044 8.487-.605 11.63 1.314.351.215.462.674.247 1.026zm1.47-3.262c-.27.441-.849.58-1.29.31-3.218-1.978-8.125-2.55-11.93-1.394-.498.151-1.03-.13-1.181-.628-.151-.498.13-1.03.628-1.181 4.357-1.322 9.774-.683 13.463 1.583.441.27.58.85.31 1.29zm.126-3.41c-3.859-2.291-10.228-2.502-13.916-1.383-.591.179-1.218-.16-1.397-.751-.179-.591.16-1.218.751-1.397 4.24-1.287 11.272-1.038 15.698 1.59.531.315.703 1.002.388 1.533-.315.531-1.002.703-1.533.388z" />
    </svg>
  );
}

export function AvatarProfile() {
  const { t } = useLanguage();
  const { personal, statusWidget } = portfolioData;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center sm:items-end gap-5 p-2 sm:p-0">
      {/* Container com o círculo pontilhado rotativo e a foto */}
      <div
        className="relative flex items-center justify-center cursor-pointer group m-2 sm:m-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* SVG do círculo pontilhado que gira continuamente */}
        <div className="absolute inset-[-14px] sm:inset-[-18px] pointer-events-none">
          <svg
            className="w-full h-full animate-[spin_32s_linear_infinite]"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r="92"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeDasharray="14 16"
              strokeLinecap="round"
              className="text-zinc-400 dark:text-zinc-600 transition-colors duration-300"
            />
          </svg>
        </div>

        {/* Moldura da Foto */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-zinc-200/90 dark:border-zinc-800 bg-zinc-200/60 dark:bg-zinc-800/60 shadow-xl transition-all duration-500">
          <Image
            src={personal.avatarUrl}
            alt={personal.name}
            fill
            priority
            className={`object-cover transition-all duration-500 transform ${
              isHovered
                ? "grayscale-0 scale-105"
                : "grayscale contrast-105 scale-100"
            }`}
          />
        </div>
      </div>

      {/* Widget Spotify idêntico à referência */}
      {statusWidget.enabled && (
        <a
          href={statusWidget.link || "https://spotify.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-300/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md hover:border-zinc-500 dark:hover:border-zinc-600 transition-all text-xs font-mono text-zinc-700 dark:text-zinc-300 shadow-sm"
        >
          <SpotifyIcon className="h-4 w-4 text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-500 transition-colors" />
          <span className="truncate max-w-[200px] sm:max-w-[240px]">
            {t(statusWidget.text.pt, statusWidget.text.en)}
          </span>
        </a>
      )}
    </div>
  );
}
