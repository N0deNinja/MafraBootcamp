import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import TeamForm from '../components/teams/TeamForm';
import {TeamList} from '../components/teams/TeamList';
import { useGetTeams } from '../hooks/useGetTeams';
import { useTeamsStore } from '../stores/teamsStore';
import { teamPageStyles } from '../styles/TeamsPageStyles';

export default function TeamsPage() {
  const { teams: fetchedTeams, loading } = useGetTeams();
  const teams = useTeamsStore((state) => state.teams);
  const setTeams = useTeamsStore((state) => state.setTeams);
  const isTeamsLoaded = useTeamsStore((state) => state.isTeamsLoaded);

  const [activeTab, setActiveTab] = useState<'create' | 'yourTeams'>('create');

  useEffect(() => {
    if (!isTeamsLoaded && !loading) {
      setTeams(fetchedTeams);
    }
  }, [fetchedTeams, loading, setTeams, isTeamsLoaded]);

  const handleTabChange = (tab: 'create' | 'yourTeams') => {
    setActiveTab(tab);
  };

  const renderCreateTeam = () => (
    <View style={teamPageStyles.card}>
      <TeamForm />
    </View>
  );

  const renderYourTeams = () => (
    <View style={teamPageStyles.card}>
      <Text style={teamPageStyles.title}>Existing Teams</Text>
      <TeamList teams={teams}/>
    </View>
  );

  return (
    <FlatList
      data={[]}
      ListHeaderComponent={
        <View style={teamPageStyles.tabContainer}>
          <TouchableOpacity
            style={[teamPageStyles.tabButton, activeTab === 'create' && teamPageStyles.activeTab]}
            onPress={() => handleTabChange('create')}
          >
            <Text style={teamPageStyles.tabText}>Create Team</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[teamPageStyles.tabButton, activeTab === 'yourTeams' && teamPageStyles.activeTab]}
            onPress={() => handleTabChange('yourTeams')}
          >
            <Text style={teamPageStyles.tabText}>Your Teams</Text>
          </TouchableOpacity>
        </View>
      }
      ListFooterComponent={activeTab === 'create' ? renderCreateTeam() : renderYourTeams()}
      contentContainerStyle={teamPageStyles.container}
      renderItem={null}
      keyExtractor={(item, index) => index.toString()} 
    />
  );
}
