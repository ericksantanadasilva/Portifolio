"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Send, Check, Copy } from "lucide-react";
import { ScrambleText } from "./ScrambleText";

export function ContactSection() {
  const { t } = useLanguage();
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="space-y-6">
        {/* Cabeçalho */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <span className="text-emerald-500 font-bold">/</span>
            <span>CONTACT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950 dark:text-white">
            <ScrambleText text={t("Vamos Conversar?", "Let's Connect")} triggerOnHover={true} />
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {t(
              "Sinta-se à vontade para entrar em contato para novas oportunidades, projetos ou apenas para trocar uma ideia.",
              "Feel free to reach out for new opportunities, project inquiries, or just a tech chat."
            )}
          </p>
        </div>

        <Card className="border border-zinc-200/80 dark:border-zinc-800 bg-gradient-to-br from-zinc-50/50 to-zinc-100/30 dark:from-zinc-900/50 dark:to-zinc-950/40">
          <CardContent className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase">
                    {t("Email Direto", "Direct Email")}
                  </span>
                  <p className="text-base sm:text-lg font-mono font-medium text-zinc-900 dark:text-zinc-100">
                    {contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyEmail}
                  className="font-mono text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500 mr-1.5" />
                      {t("Copiado!", "Copied!")}
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 mr-1.5" />
                      {t("Copiar", "Copy")}
                    </>
                  )}
                </Button>

                <a href={`mailto:${contact.email}`}>
                  <Button size="sm" className="font-mono text-xs">
                    <Send className="h-3.5 w-3.5 mr-1.5" />
                    {t("Enviar Mensagem", "Send Email")}
                  </Button>
                </a>
              </div>
            </div>

            {(contact.telegram || contact.discord) && (
              <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                {contact.telegram && (
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold">Telegram:</span>
                    <span>{contact.telegram}</span>
                  </div>
                )}
                {contact.discord && (
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold">Discord:</span>
                    <span>{contact.discord}</span>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
