import React from 'react';
import {
  Compass,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Atom,
  Binary,
  FlaskConical,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  BookOpen,
} from 'lucide-react';
import { NavView } from '../layout/Navigation';

interface HomeViewProps {
  onNavigate: (view: NavView, simId?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-8 md:p-14 text-center max-w-5xl mx-auto shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)]" />

        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive STEM Laboratory System</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight max-w-4xl mx-auto leading-tight">
            Learn Math, Physics &amp; Chemistry Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
              Interactive Simulation
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Move beyond static textbooks and video lectures. Manipulate parameters, observe real-time differential dynamics, and verify conceptual mastery through laboratory telemetry.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => onNavigate('library')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Simulations</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('analytics')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm transition-colors"
            >
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span>Student Analytics</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80 font-mono text-center">
            <div className="p-3 bg-slate-950/60 rounded-2xl border border-slate-800">
              <div className="text-2xl font-black text-cyan-300">10 Labs</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Active Simulations</div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-2xl border border-slate-800">
              <div className="text-2xl font-black text-indigo-300">150+</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Architecture Target</div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-2xl border border-slate-800">
              <div className="text-2xl font-black text-emerald-300">100%</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Real Local Physics</div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-2xl border border-slate-800">
              <div className="text-2xl font-black text-amber-300">0 ms</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Latency (Client-Side)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Scientific Disciplines */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight">
            Comprehensive STEM Curriculum
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto">
            Each discipline contains structured interactive simulations equipped with mathematical sliders, governing theory, and verification quizzes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mathematics Card */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-indigo-500/20 hover:border-indigo-500/40 transition-all space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Binary className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">Mathematics</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Linear equations, quadratic geometry, trigonometric wave oscillators, probability distributions, and calculus derivative limits.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Cartesian Dynamic Coordinates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Roots &amp; Discriminant Analyzers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Unit Circle Phasor Projections</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('library')}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              Explore Math Labs
            </button>
          </div>

          {/* Physics Card */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-500/40 transition-all space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Atom className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">Physics</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Ohm’s law closed circuits with drifting electrons, 2D ballistic projectile trajectory, harmonic pendulums, Hooke’s spring mass, and wave superposition.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Electron Drift &amp; Filament Glow</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Gravity Vector Transformations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Harmonic Oscillator Energy Conservation</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('library')}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              Explore Physics Labs
            </button>
          </div>

          {/* Chemistry Card */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-emerald-500/20 hover:border-emerald-500/40 transition-all space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">Chemistry</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Universal indicator acid-base titrations, ideal gas law cylinder pistons, Bohr quantum hydrogen spectra, activation energy catalysts, and periodic trends.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sigmoidal Titration Curves</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kinetic Molecular Collisions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Electronegativity Heatmap Engine</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('library')}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              Explore Chemistry Labs
            </button>
          </div>
        </div>
      </section>

      {/* Pedagogical Methodology */}
      <section className="max-w-5xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-100">
              The SIMULAB Learning Architecture
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Built on cognitive science and deliberate practice principles.
            </p>
          </div>
          <button
            onClick={() => onNavigate('recommendations')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
          >
            <span>View Personalized Pathways</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold font-mono">
              1
            </div>
            <h4 className="font-bold text-slate-200 text-sm">Active Parameter Control</h4>
            <p className="text-slate-400 leading-relaxed">
              Real calculations powered by HTML5 Canvas &amp; SVG vector graphs. Change variables to immediately visualize dependent effects.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold font-mono">
              2
            </div>
            <h4 className="font-bold text-slate-200 text-sm">6-Part Theory Explanations</h4>
            <p className="text-slate-400 leading-relaxed">
              Every simulation contains formal equations, step-by-step problem solving, real-world examples, and common student misconceptions.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold font-mono">
              3
            </div>
            <h4 className="font-bold text-slate-200 text-sm">Conceptual Verification</h4>
            <p className="text-slate-400 leading-relaxed">
              Targeted multiple-choice assessments with immediate diagnostic feedback, explanation traces, and retry mechanics.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold font-mono">
              4
            </div>
            <h4 className="font-bold text-slate-200 text-sm">Local Learning Analytics</h4>
            <p className="text-slate-400 leading-relaxed">
              Telemetry engine calculates accuracy rates, topic mastery percentages, and suggests rule-based personalized next steps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
