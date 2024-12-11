export type Team = {
    id: string;
    name: string;
    players: string[];
    logo: string;
  };
  
  export type TeamsStore = {
    teams: Team[];
    isTeamsLoaded: boolean;
    addTeam: (team: Omit<Team, 'id'>) => void;
    setTeams: (teams: Team[]) => void;
    removeTeam: (id: string) => void;
    setIsTeamsLoaded: (isLoaded: boolean) => void;
  };
  
  export type Match = {
    id: string;     
    teamA?: Team;  
    teamB?: Team; 
    date: string;   
    score: string;  
  };
  
  export type MatchesStore = {
    matches: Match[];
    addMatch: (match: Omit<Match, 'id'>) => void; 
    removeMatch: (id: string) => void;           
    updateScore: (id: string, score: string) => void;
  };