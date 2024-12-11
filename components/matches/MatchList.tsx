import React from 'react';
import { FlatList } from 'react-native';
import { useMatchesStore } from '../../stores/matchesStore';
import { MatchCard } from './MatchCard';

export default function MatchList() {
  const matches = useMatchesStore((state) => state.matches);
  const updateScore = useMatchesStore((state) => state.updateScore);

  return (
    <FlatList
      data={matches}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MatchCard match={item} updateScore={updateScore} />
      )}
    />
  );
}

