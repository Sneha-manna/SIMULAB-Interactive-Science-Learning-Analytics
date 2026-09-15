import React from 'react';
import {
  FlaskConical,
  Compass,
  BarChart3,
  Lightbulb,
  Flame,
  User,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { UserProfile } from '../../types/user';

export type NavView = 'home' | 'library' | 'analytics' | 'recommendations' | 'simulation';

interface NavigationProps {
  currentView: NavView;
  onSelectView: (view: NavView) => void;
  userProfile: UserProfile;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onSelectView,
  userProfile,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <div
          onClick={() => onSelectView('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all shadow-lg shadow-cyan-500/10">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-lg text-slate-100 tracking-tight font-sans">
                SIMU<span className="text-cyan-400">LAB</span>
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                PRO
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono tracking-wider">
              STEM SIMULATION PLATFORM
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-2xl border border-slate-800">
          <button
            onClick={() => onSelectView('library')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'library'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Simulations</span>
          </button>

          <button
            onClick={() => onSelectView('analytics')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'analytics'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Student Analytics</span>
          </button>

          <button
            onClick={() => onSelectView('recommendations')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'recommendations'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>Pathways</span>
          </button>

          <button
            onClick={() => onSelectView('home')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'home'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Overview</span>
          </button>
        </nav>

        {/* Right Student Profile & Streak Badge */}
        <div className="flex items-center gap-3">
          {/* Daily Streak */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold font-mono">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            <span>{userProfile.streakDays ?? 5} Day Streak</span>
          </div>

          {/* User Avatar */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
            <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-bold text-xs">
              {userProfile.name ? userProfile.name.charAt(0) : 'A'}
            </div>
            <div className="hidden lg:block text-left">
              <div className="text-xs font-bold text-slate-200 leading-none">
                {userProfile.name}
              </div>
              <div className="text-[10px] text-cyan-400 font-mono mt-0.5">
                {userProfile.gradeLevel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
