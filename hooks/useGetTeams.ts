import { useState, useEffect } from 'react';

type Team = {
  id: string;
  name: string;
  players: string[];
  logo: string;
};

export const useGetTeams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
      const dummyTeams: Team[] = [
        {
          id: '1',
          name: 'Team Alpha',
          players: ['Alice', 'Bob'],
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSwegethyri4G7X10SvjNuhezQePOFjdCCQ&s',
        },
        {
          id: '2',
          name: 'Team Beta',
          players: ['Charlie', 'David', 'Eve'],
          logo: 'https://via.placeholder.com/150',
        },
        {
          id: '3',
          name: 'Team Gamma',
          players: ['Frank', 'Grace'],
          logo: 'https://via.placeholder.com/150',
        },
      ];
      setTeams(dummyTeams);
      setLoading(false);
    };

    fetchTeams();
  }, []);

  return { teams, loading };
};
