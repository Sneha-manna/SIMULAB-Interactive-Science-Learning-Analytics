import { ExperimentLog, Badge } from '../types/analytics';
import { StudentProfile } from '../types/user';
import { INITIAL_STUDENT_PROFILE, INITIAL_EXPERIMENT_LOGS, INITIAL_BADGES } from './seedData';

const KEYS = {
  PROFILE: 'simulab_student_profile',
  LOGS: 'simulab_experiment_logs',
  BADGES: 'simulab_student_badges',
  COMPLETED: 'simulab_completed_simulations',
};

// Safe LocalStorage helpers
export const storageService = {
  getProfile(): StudentProfile {
    try {
      const data = localStorage.getItem(KEYS.PROFILE);
      if (data) return JSON.parse(data);
    } catch {
      // Fallback
    }
    this.saveProfile(INITIAL_STUDENT_PROFILE);
    return INITIAL_STUDENT_PROFILE;
  },

  getUserProfile(): StudentProfile {
    return this.getProfile();
  },

  subscribe(callback: () => void): () => void {
    const handler = () => callback();
    window.addEventListener('simulab_storage_change', handler);
    return () => window.removeEventListener('simulab_storage_change', handler);
  },

  saveProfile(profile: StudentProfile): void {
    try {
      localStorage.setItem(KEYS.PROFILE, JSON.stringify(profile));
      window.dispatchEvent(new Event('simulab_storage_change'));
    } catch (e) {
      console.error('Storage error:', e);
    }
  },

  getLogs(): ExperimentLog[] {
    try {
      const data = localStorage.getItem(KEYS.LOGS);
      if (data) return JSON.parse(data);
    } catch {
      // Fallback
    }
    this.saveLogs(INITIAL_EXPERIMENT_LOGS);
    return INITIAL_EXPERIMENT_LOGS;
  },

  saveLogs(logs: ExperimentLog[]): void {
    try {
      localStorage.setItem(KEYS.LOGS, JSON.stringify(logs));
      window.dispatchEvent(new Event('simulab_storage_change'));
    } catch (e) {
      console.error('Storage error:', e);
    }
  },

  addLog(newLog: Omit<ExperimentLog, 'id'>): ExperimentLog {
    const logs = this.getLogs();
    const created: ExperimentLog = {
      ...newLog,
      id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    };
    const updated = [created, ...logs];
    this.saveLogs(updated);

    // Also update completed list
    this.markCompleted(newLog.simulationId);
    // Check badges
    this.evaluateBadges(updated);

    return created;
  },

  getCompletedSimulationIds(): string[] {
    try {
      const data = localStorage.getItem(KEYS.COMPLETED);
      if (data) return JSON.parse(data);
    } catch {
      // Fallback
    }
    const fromLogs: string[] = Array.from(new Set(this.getLogs().map((l) => l.simulationId)));
    this.saveCompleted(fromLogs);
    return fromLogs;
  },

  saveCompleted(ids: string[]): void {
    try {
      localStorage.setItem(KEYS.COMPLETED, JSON.stringify(ids));
      window.dispatchEvent(new Event('simulab_storage_change'));
    } catch (e) {
      console.error('Storage error:', e);
    }
  },

  markCompleted(simulationId: string): void {
    const current = this.getCompletedSimulationIds();
    if (!current.includes(simulationId)) {
      this.saveCompleted([...current, simulationId]);
    }
  },

  getBadges(): Badge[] {
    try {
      const data = localStorage.getItem(KEYS.BADGES);
      if (data) return JSON.parse(data);
    } catch {
      // Fallback
    }
    this.saveBadges(INITIAL_BADGES);
    return INITIAL_BADGES;
  },

  saveBadges(badges: Badge[]): void {
    try {
      localStorage.setItem(KEYS.BADGES, JSON.stringify(badges));
      window.dispatchEvent(new Event('simulab_storage_change'));
    } catch (e) {
      console.error('Storage error:', e);
    }
  },

  evaluateBadges(logs: ExperimentLog[]): void {
    const badges = this.getBadges();
    let changed = false;

    const completedIds = Array.from(new Set(logs.map((l) => l.simulationId)));
    const mathCount = logs.filter((l) => l.subject === 'mathematics').length;
    const physicsCount = logs.filter((l) => l.subject === 'physics').length;
    const chemCount = logs.filter((l) => l.subject === 'chemistry').length;
    const hasPerfect = logs.some((l) => l.accuracy === 100);

    const updated = badges.map((badge) => {
      if (badge.isUnlocked) return badge;

      let unlock = false;
      if (badge.id === 'badge-first-lab' && logs.length >= 1) unlock = true;
      if (badge.id === 'badge-physics-pioneer' && physicsCount >= 3) unlock = true;
      if (badge.id === 'badge-chemistry-alchemist' && chemCount >= 2) unlock = true;
      if (badge.id === 'badge-math-apprentice' && mathCount >= 3) unlock = true;
      if (badge.id === 'badge-perfect-score' && hasPerfect) unlock = true;
      if (badge.id === 'badge-ten-sims' && completedIds.length >= 10) unlock = true;

      if (unlock) {
        changed = true;
        return {
          ...badge,
          isUnlocked: true,
          unlockedAt: new Date().toISOString(),
        };
      }
      return badge;
    });

    if (changed) {
      this.saveBadges(updated);
    }
  },

  resetAll(): void {
    try {
      localStorage.setItem(KEYS.PROFILE, JSON.stringify(INITIAL_STUDENT_PROFILE));
      localStorage.setItem(KEYS.LOGS, JSON.stringify(INITIAL_EXPERIMENT_LOGS));
      localStorage.setItem(KEYS.BADGES, JSON.stringify(INITIAL_BADGES));
      const initCompleted = Array.from(new Set(INITIAL_EXPERIMENT_LOGS.map((l) => l.simulationId)));
      localStorage.setItem(KEYS.COMPLETED, JSON.stringify(initCompleted));
      window.dispatchEvent(new Event('simulab_storage_change'));
    } catch (e) {
      console.error('Storage reset error:', e);
    }
  },

  clearAllData(): void {
    try {
      localStorage.setItem(KEYS.LOGS, JSON.stringify([]));
      localStorage.setItem(KEYS.COMPLETED, JSON.stringify([]));
      const clearedBadges = INITIAL_BADGES.map((b) => ({ ...b, isUnlocked: false, unlockedAt: undefined }));
      localStorage.setItem(KEYS.BADGES, JSON.stringify(clearedBadges));
      window.dispatchEvent(new Event('simulab_storage_change'));
    } catch (e) {
      console.error('Storage clear error:', e);
    }
  },
};
