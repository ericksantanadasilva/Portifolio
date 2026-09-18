"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const { personal } = portfolioData;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 pb-12 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <div>
          <span>© {currentYear} {personal.name}. </span>
          <span>{t("Todos os direitos reservados.", "All rights reserved.")}</span>
        </div>

        <div className="flex items-center gap-1">
          <span>{t("Construído com", "Built with")} Next.js</span>
        </div>
      </div>

      {/* Botão Flutuante Voltar ao Topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white shadow-lg hover:scale-110 transition-all duration-200"
          title={t("Voltar ao topo", "Back to top")}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </footer>
  );
}
