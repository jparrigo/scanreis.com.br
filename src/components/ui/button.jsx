import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-headline font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase',
  {
    variants: {
      variant: {
        default:
          'bg-[#F97316] text-[#080808] hover:bg-[#EA580C] shadow-lg hover:shadow-orange-500/30 hover:shadow-xl active:scale-[0.97]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-2 border-[#F97316] text-[#F97316] bg-transparent hover:bg-[#F97316] hover:text-[#080808]',
        secondary:
          'bg-[#1a1a1a] text-[#FAFAFA] border border-[#262626] hover:border-[#F97316] hover:text-[#F97316]',
        ghost:
          'text-[#F97316] hover:bg-[#F97316]/10',
        link:
          'text-[#F97316] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2 text-sm rounded-sm',
        sm: 'h-9 px-4 text-xs rounded-sm',
        lg: 'h-13 px-8 py-3 text-base rounded-sm',
        xl: 'h-14 px-10 py-4 text-lg rounded-sm',
        icon: 'h-10 w-10 rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button, buttonVariants }
