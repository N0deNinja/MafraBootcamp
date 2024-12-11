import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TeamsStore, Team } from '../types/stores/types';

export const useTeamsStore = create<TeamsStore>()(
  persist(
    (set, get) => ({
      teams: [],
      isTeamsLoaded: false,

      addTeam: (team: Omit<Team, 'id'>) =>
        set((state) => ({
          teams: [...state.teams, { ...team, id: Date.now().toString() }],
        })),

      setTeams: (teams: Team[]) =>
        set(() => ({
          teams,
          isTeamsLoaded: true,
        })),

      removeTeam: (id: string) =>
        set((state) => ({
          teams: state.teams.filter((team) => team.id !== id),
        })),

      setIsTeamsLoaded: (isLoaded: boolean) =>
        set(() => ({ isTeamsLoaded: isLoaded })),

      initialLoad: async () => {
        try {
          const storedTeams = await AsyncStorage.getItem('teams-store');
          if (storedTeams) {
            const parsedTeams = JSON.parse(storedTeams);
            set({
              teams: parsedTeams,
              isTeamsLoaded: true,
            });
          }
        } catch (error) {
          console.error('Failed to load teams from storage:', error);
        }
      },
    }),
    {
      name: 'teams-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
