"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Moon, Globe } from "lucide-react";

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { locale, toggleLocale, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = ["hero", "projects", "tech", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Efeito estilo Telegram: Cresce no Dark Mode e encolhe suavemente no Light Mode sem piscar
  const handleToggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const isDark = resolvedTheme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transitionClass = isDark
        ? "transition-dark-to-light"
        : "transition-light-to-dark";
      document.documentElement.classList.add(transitionClass);

      const transition = document.startViewTransition(() => {
        setTheme(nextTheme);
      });

      transition.ready.then(() => {
        if (isDark) {
          // Dark -> Light: O tema escuro (old) encolhe em direção ao botão, revelando a luz por baixo!
          // Com fill: "forwards" para não piscar no final da animação
          const anim = document.documentElement.animate(
            {
              clipPath: [
                `circle(${endRadius}px at ${x}px ${y}px)`,
                `circle(0px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 550,
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              fill: "forwards",
              pseudoElement: "::view-transition-old(root)",
            }
          );

          anim.onfinish = () => {
            document.documentElement.classList.remove(
              "transition-dark-to-light",
              "transition-light-to-dark"
            );
          };
        } else {
          // Light -> Dark: A escuridão brota do botão e cresce até preencher a tela!
          const anim = document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 550,
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              fill: "forwards",
              pseudoElement: "::view-transition-new(root)",
            }
          );

          anim.onfinish = () => {
            document.documentElement.classList.remove(
              "transition-dark-to-light",
              "transition-light-to-dark"
            );
          };
        }
      });

      transition.finished.finally(() => {
        document.documentElement.classList.remove(
          "transition-dark-to-light",
          "transition-light-to-dark"
        );
      });
    } else {
      setTheme(nextTheme);
    }
  };

  const navItems = [
    { id: "hero", labelPt: "Início", labelEn: "Home" },
    { id: "projects", labelPt: "Projetos", labelEn: "Projects" },
    { id: "tech", labelPt: "Tech", labelEn: "Tech" },
    { id: "experience", labelPt: "Carreira", labelEn: "Career" },
    { id: "contact", labelPt: "Contato", labelEn: "Contact" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-40 w-full max-w-[96vw] sm:max-w-max flex justify-center px-2 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between sm:justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 rounded-full border border-zinc-300/90 dark:border-zinc-800/90 bg-[#f7f7f7]/90 dark:bg-[#18181b]/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30 text-[11px] sm:text-xs md:text-sm font-mono max-w-full overflow-hidden">
        
        {/* Links de Navegação com scroll suave e ajuste para telas estreitas */}
        <div className="flex items-center gap-0.5 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`whitespace-nowrap px-2 sm:px-3 py-1 rounded-full transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-semibold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
                }`}
              >
                {isActive && <span className="mr-1 text-emerald-500 hidden sm:inline">•</span>}
                {t(item.labelPt, item.labelEn)}
              </button>
            );
          })}
        </div>

        {/* Divisor */}
        <div className="h-4 w-[1px] bg-zinc-300 dark:bg-zinc-700 mx-0.5 sm:mx-1 shrink-0" />

        {/* Controles de Ações (Idioma e Tema) SEMPRE visíveis e com prioridade máxima */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {/* Alternador de Idioma */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 px-1.5 sm:px-2 py-1 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors uppercase font-mono text-[11px] sm:text-xs font-semibold"
            title={t("Mudar para Inglês", "Switch to Portuguese")}
            aria-label="Toggle language"
          >
            <Globe className="h-3 sm:h-3.5 w-3 sm:w-3.5 opacity-70" />
            <span>{locale}</span>
          </button>

          {/* Alternador de Tema com Transição Telegram sem flicker */}
          {mounted && (
            <button
              onClick={handleToggleTheme}
              className="p-1.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors shrink-0"
              title={t("Alternar tema", "Toggle theme")}
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-amber-400" />
              ) : (
                <Moon className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-zinc-800" />
              )}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
