"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { SocialChips } from "./SocialChips";
import { ScrambleText } from "./ScrambleText";
import { TypewriterText } from "./TypewriterText";
import { AvatarProfile } from "./AvatarProfile";
import { MapPin } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();
  const { personal, socials } = portfolioData;

  const fullName = personal.alias
    ? `${personal.name} ${personal.alias}`
    : personal.name;

  return (
    <section id="hero" className="pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10">
        <div className="flex-1 space-y-6 max-w-xl">
          {/* Status Badge: Disponível para oportunidades */}
          {personal.availableForHire && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>
                {t("Disponível para projetos & oportunidades", "Available for projects & roles")}
              </span>
            </div>
          )}

          {/* Nome com Efeito Interativo (Typewriter ou Scramble) e Cursor Piscante */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {personal.nameAnimationMode === "scramble" ? (
                <ScrambleText
                  text={fullName}
                  showCursor={true}
                  triggerOnHover={true}
                  speed={30}
                />
              ) : (
                <TypewriterText
                  text={fullName}
                  showCursor={true}
                  triggerOnHover={true}
                  deleteSpeed={40}
                  typeSpeed={65}
                />
              )}
            </h1>

            {/* Linha de comando do terminal com $ */}
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-200/50 dark:bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-300/80 dark:border-zinc-800/80 w-fit">
              <span className="text-zinc-500 select-none font-bold">$</span>
              <span>{personal.terminalRole}</span>
            </div>
          </div>

          {/* Biografia / Descrição principal */}
          <div className="space-y-3 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p className="text-zinc-600 dark:text-zinc-400">
              {t(personal.bio.pt, personal.bio.en)}
            </p>
          </div>

          {/* Chips Sociais em pílulas com ícones */}
          <SocialChips socials={socials} />
        </div>

        {/* Avatar com Círculo Pontilhado Rotativo e Foto P&B -> Colorida no Hover + Spotify */}
        <AvatarProfile />
      </div>
    </section>
  );
}
