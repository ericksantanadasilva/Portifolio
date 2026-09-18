import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900",
        secondary:
          "border-zinc-300 dark:border-zinc-800 bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-300 backdrop-blur-sm",
        outline:
          "border-zinc-400 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200",
        success:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
        terminal:
          "border-zinc-300 dark:border-zinc-700/80 bg-zinc-200/80 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-300 font-mono",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
