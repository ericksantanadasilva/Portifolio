"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { ScrambleText } from "./ScrambleText";

export function ExperienceSection() {
  const { t } = useLanguage();
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-12 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="space-y-6">
        {/* Cabeçalho */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <span className="text-emerald-500 font-bold">/</span>
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950 dark:text-white">
            <ScrambleText text={t("Trajetória & Experiência", "Career & Experience")} triggerOnHover={true} />
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {t(
              "Minhas experiências profissionais, empresas por onde passei e impacto gerado.",
              "My professional career path, companies I've contributed to, and impact delivered."
            )}
          </p>
        </div>

        {/* Linha do tempo de cards */}
        <div className="space-y-4">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
            >
              <CardHeader className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <CardTitle className="text-lg font-mono font-bold text-zinc-900 dark:text-zinc-100">
                    {t(exp.role.pt, exp.role.en)}
                  </CardTitle>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{t(exp.period.pt, exp.period.en)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {exp.company}
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-1 text-zinc-500">
                      • <MapPin className="h-3 w-3 inline" /> {t(exp.location.pt, exp.location.en)}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {t(exp.description.pt, exp.description.en)}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-[11px]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
