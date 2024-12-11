import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MatchForm from '../components/matches/MatchForm';
import MatchList from '../components/matches/MatchList';
import { matchesPageStyles } from '../styles/MatchesStyles';

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState<'create' | 'yourMatches'>('create');

  // Todo create component that can be reused in Teams
  return (
    <View style={matchesPageStyles.container}>
      <View style={matchesPageStyles.tabContainer}>
        <TouchableOpacity
          style={[matchesPageStyles.tabButton, activeTab === 'create' && matchesPageStyles.activeTab]}
          onPress={() => setActiveTab('create')}
        >
          <Text style={matchesPageStyles.tabText}>Create Match</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[matchesPageStyles.tabButton, activeTab === 'yourMatches' && matchesPageStyles.activeTab]}
          onPress={() => setActiveTab('yourMatches')}
        >
          <Text style={matchesPageStyles.tabText}>Your Matches</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'create' ? <MatchForm /> : <MatchList />}
    </View>
  );
}

