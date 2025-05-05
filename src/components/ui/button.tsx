import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black shadow-xs hover:bg-white/80 text-[15px] font-jura",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-[15px] border bg-white/5 shadow-xs max-w-[196.5px] hover:bg-white/20 text-white dark:bg-input/30 dark:border-input dark:hover:bg-input/50 font-jura",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        iconOutline: "bg-transparent h-[32px] w-[32px] rounded-[4px] border-[1px] border-[#252525] gap-[8px] text-foreground hover:bg-white/10",
        icon: "border-transparent bg-[#252525] h-[32px] w-[32px] rounded-[4px] border-[1px] gap-[8px] text-foreground hover:bg-white/10"
      },
      size: {
        default: "max-w-[196.5px] max-h-[48px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] w-full",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "w-fit h-fit p-[8px]",
        custom: "h-[48px] w-[196.5px]"
      },
      radius: {
        default: "rounded-[4px]"
      },

    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  radius,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className, radius }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
