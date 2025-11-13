import React, { useState } from 'react'
import { Menu, Package, Cpu, BookOpen, MessageSquare, Gauge, ChevronDown } from 'lucide-react'
import Button from './ui/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight text-slate-900">
            <Cpu className="h-5 w-5" /> IAS
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900 transition-colors flex items-center gap-1">Services</a>
            <a href="#solutions" className="hover:text-slate-900 transition-colors flex items-center gap-1">Solutions</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors flex items-center gap-1">Projects</a>
            <a href="#blog" className="hover:text-slate-900 transition-colors flex items-center gap-1">Blog</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-slate-700">Login</Button>
            <Button size="sm">Get a Quote</Button>
          </div>
          <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-slate-700">
              <a href="#services" className="rounded px-2 py-2 hover:bg-slate-100">Services</a>
              <a href="#solutions" className="rounded px-2 py-2 hover:bg-slate-100">Solutions</a>
              <a href="#projects" className="rounded px-2 py-2 hover:bg-slate-100">Projects</a>
              <a href="#blog" className="rounded px-2 py-2 hover:bg-slate-100">Blog</a>
              <div className="flex items-center gap-2 px-2 pt-2">
                <Button variant="ghost" size="sm" className="w-full">Login</Button>
                <Button size="sm" className="w-full">Get a Quote</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
