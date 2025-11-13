import React from 'react'
import { cn } from '../../lib/utils'

export default function Button({ asChild = false, variant = 'default', size = 'md', className, children, ...props }) {
  const Comp = asChild ? 'span' : 'button'
  const base = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    default: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-400',
    outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus:ring-slate-300',
    ghost: 'bg-transparent text-slate-900 hover:bg-slate-100',
  }
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base',
  }
  return (
    <Comp className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Comp>
  )
}
