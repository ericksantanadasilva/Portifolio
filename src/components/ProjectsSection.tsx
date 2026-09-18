"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Search, ExternalLink, Star, FolderGit2 } from "lucide-react";
import { Icons } from "./Icons";
import { ScrambleText } from "./ScrambleText";

export function ProjectsSection() {
  const { t } = useLanguage();
  const { projects } = portfolioData;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;

    const titleMatch = project.title.toLowerCase().includes(term);
    const descMatch =
      project.description.pt.toLowerCase().includes(term) ||
      project.description.en.toLowerCase().includes(term);
    const tagMatch = project.tags.some((tag) => tag.toLowerCase().includes(term));

    return titleMatch || descMatch || tagMatch;
  });

  return (
    <section id="projects" className="py-12 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="space-y-6">
        {/* Cabeçalho da Seção */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <span className="text-emerald-500 font-bold">/</span>
            <span>PROJECTS</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950 dark:text-white">
              <ScrambleText text={t("Meus Projetos", "Featured Projects")} triggerOnHover={true} />
            </h2>

            {/* Barra de Busca Dinâmica */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
              <Input
                type="text"
                placeholder={t("Buscar por nome ou tag...", "Search by title or tech...")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 text-xs font-mono"
              />
            </div>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {t(
              "Uma seleção de projetos de código aberto, ferramentas e experimentos que criei.",
              "A curated selection of open-source projects, tools, and experiments I've built."
            )}
          </p>
        </div>

        {/* Lista de Projetos */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 font-mono text-sm text-zinc-500">
            <FolderGit2 className="h-8 w-8 mx-auto mb-2 opacity-40" />
            <p>{t("Nenhum projeto encontrado para o termo pesquisado.", "No projects found matching your query.")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-mono text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.stars !== undefined && (
                      <div className="flex items-center gap-1 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500/20" />
                        <span>{project.stars}</span>
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-xs sm:text-sm mt-2 leading-relaxed">
                    {t(project.description.pt, project.description.en)}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[11px] font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                      >
                        <Icons.github className="h-3.5 w-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
