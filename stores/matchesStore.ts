import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MatchesStore, Match } from '../types/stores/types';

export const useMatchesStore = create<MatchesStore>()(
  persist(
    (set) => ({
      matches: [],
      addMatch: (match: Omit<Match, 'id'>) =>
        set((state) => ({
          matches: [...state.matches, { ...match, id: Date.now().toString() }],
        })),
      removeMatch: (id: string) =>
        set((state) => ({
          matches: state.matches.filter((match) => match.id !== id),
        })),
      updateScore: (id: string, score: string) =>
        set((state) => ({
          matches: state.matches.map((match) =>
            match.id === id ? { ...match, score } : match
          ),
        })),
    }),
    {
      name: 'matches-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
