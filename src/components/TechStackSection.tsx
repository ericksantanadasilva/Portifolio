"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Cpu, Layers, Database, Terminal, Wrench } from "lucide-react";
import { ScrambleText } from "./ScrambleText";

export function TechStackSection() {
  const { t } = useLanguage();
  const { techStack } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", labelPt: "Todas", labelEn: "All", icon: Layers },
    { id: "frontend", labelPt: "Frontend", labelEn: "Frontend", icon: Cpu },
    { id: "backend", labelPt: "Backend", labelEn: "Backend", icon: Terminal },
    { id: "database", labelPt: "Bancos de Dados", labelEn: "Databases", icon: Database },
    { id: "devops", labelPt: "DevOps & Cloud", labelEn: "DevOps & Cloud", icon: Wrench },
  ];

  const filteredTech =
    selectedCategory === "all"
      ? techStack
      : techStack.filter((tech) => tech.category === selectedCategory);

  return (
    <section id="tech" className="py-12 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="space-y-6">
        {/* Cabeçalho da Seção estilo terminal */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <span className="text-emerald-500 font-bold">/</span>
            <span>STACK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950 dark:text-white">
            <ScrambleText text={t("Tecnologias & Ferramentas", "Tech Stack & Tools")} triggerOnHover={true} />
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {t(
              "As principais ferramentas e tecnologias que utilizo no meu dia a dia.",
              "The primary tools and technologies I work with on a daily basis."
            )}
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  isSelected
                    ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-semibold shadow-sm"
                    : "border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{t(cat.labelPt, cat.labelEn)}</span>
              </button>
            );
          })}
        </div>

        {/* Grade de Tecnologias */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center justify-between p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 backdrop-blur-sm shadow-xs"
            >
              <span className="font-mono text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <Badge variant="terminal" className="text-[10px] uppercase">
                {tech.category}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
