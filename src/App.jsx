import React from 'react'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">What we’re building here</h2>
        <p className="mt-2 text-slate-600">
          A modular revamp of Industrial Automation & Solutions using modern UI patterns. This preview showcases the animated hero with a full-width 3D cover.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Next steps</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
              <li>Add shadcn/ui navigation and layout shell</li>
              <li>Implement blog data model and APIs</li>
              <li>Wire authentication and role-based access</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Tech highlights</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
              <li>Framer Motion animations</li>
              <li>Spline 3D background with safe overlays</li>
              <li>Tailwind-first responsive design</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
