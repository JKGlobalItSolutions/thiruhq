import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer opacity-100 visible transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F1F4B]/25 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-[#0F1F4B] shadow hover:bg-primary/90 hover:text-[#0F1F4B]",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background text-[#0F1F4B] shadow-sm hover:bg-accent hover:text-[#0F1F4B]",
        secondary: "bg-secondary text-[#0F1F4B] shadow-sm hover:bg-secondary/80 hover:text-[#0F1F4B]",
        ghost: "text-[#0F1F4B] hover:bg-accent hover:text-[#0F1F4B]",
        link: "text-[#0F1F4B] underline-offset-4 hover:underline",
        hero: "bg-white text-[#0F1F4B] shadow-elegant hover:bg-white/95 hover:text-[#0F1F4B] hover:shadow-glow hover:-translate-y-0.5",
        cta: "bg-white text-[#0F1F4B] shadow-glow hover:bg-white/95 hover:text-[#0F1F4B] hover:-translate-y-0.5 hover:brightness-110",
        outlineBrand: "border-2 border-primary text-[#0F1F4B] bg-background hover:bg-primary hover:text-white transition-colors",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-7 text-base",
        xl: "h-14 rounded-xl px-8 text-base font-semibold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };