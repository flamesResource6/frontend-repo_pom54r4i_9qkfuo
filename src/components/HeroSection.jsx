import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Play, MessageCircle } from 'lucide-react'

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 sm:px-8 md:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            Industrial Automation & Solutions
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Modern Automation, Real-time Experiences
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            A full-stack revamp with Next.js aesthetics: shadcn/ui styling, real-time chat, admin control, and blazing-fast performance.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              Get a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
            >
              <Play className="mr-2 h-4 w-4" />
              See Projects
            </a>
          </div>
        </motion.div>

        <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { kpi: '99+', label: 'Enterprise Clients' },
            { kpi: '24/7', label: 'Live Support' },
            { kpi: 'A+', label: 'Lighthouse Score' },
            { kpi: 'Realtime', label: 'Chat & Telemetry' }
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * (idx + 1), duration: 0.5 }}
              className="rounded-lg border border-slate-200 bg-white/70 p-4 text-center shadow-sm backdrop-blur"
            >
              <div className="text-2xl font-bold text-slate-900">{item.kpi}</div>
              <div className="text-xs text-slate-600">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <a
        href="#chat"
        className="group fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:translate-y-[-2px] hover:bg-slate-800"
        aria-label="Open chat"
      >
        <MessageCircle className="h-4 w-4" />
        Chat
      </a>
    </section>
  )
}
