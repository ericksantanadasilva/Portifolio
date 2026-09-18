import React from "react";
import { Mail, MessageSquare, ExternalLink } from "lucide-react";
import { Icons } from "./Icons";
import { SocialLink } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface SocialChipsProps {
  socials: SocialLink[];
  className?: string;
}

export function SocialChips({ socials, className }: SocialChipsProps) {
  const getIcon = (platform: SocialLink["platform"]) => {
    switch (platform) {
      case "github":
        return <Icons.github className="h-4 w-4" />;
      case "linkedin":
        return <Icons.linkedin className="h-4 w-4" />;
      case "email":
        return <Mail className="h-4 w-4" />;
      case "twitter":
        return <Icons.twitter className="h-3.5 w-3.5" />;
      case "discord":
        return <MessageSquare className="h-4 w-4" />;
      case "instagram":
        return <Icons.instagram className="h-4 w-4" />;
      case "youtube":
        return <Icons.youtube className="h-4 w-4" />;
      case "twitch":
        return <Icons.twitch className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <div className={cn("flex flex-wrap gap-2 items-center", className)}>
      {socials.map((social) => (
        <a
          key={social.platform + social.url}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/80 transition-all duration-200 backdrop-blur-sm shadow-xs"
        >
          {getIcon(social.platform)}
          <span>{social.label}</span>
        </a>
      ))}
    </div>
  );
}
