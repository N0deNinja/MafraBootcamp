import React from 'react';
import { View, Text, FlatList, StyleSheet, Alert, Image } from 'react-native';
import { useTeamsStore } from '../../stores/teamsStore';
import AppButton from '../common/AppButton';
import { Team } from '../../types/stores/types';
import { teamListStyles } from '../../styles/TeamsPageStyles';


type TeamListProps = {
  teams: Team[];
}

export const TeamList = ({teams}: TeamListProps) => {
  const removeTeam = useTeamsStore((state) => state.removeTeam);

  const handleRemove = (id: string) => {
    Alert.alert(
      'Remove Team',
      'Are you sure you want to delete this team?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => removeTeam(id) },
      ]
    );
  };

  return (
    <View >
      <FlatList
        data={teams}
        keyExtractor={(team) => team.id}
        renderItem={({ item }) => (
          <View style={teamListStyles.teamCard}>
            <View style={teamListStyles.logoContainer}>
              <Image 
                source={{ uri: item.logo }} 
                style={teamListStyles.teamLogo} 
                resizeMode="contain" 
              />
            </View>
            <Text style={teamListStyles.teamName}>{item.name}</Text>
            <Text style={teamListStyles.playersText}>
              Players count: {item.players.length}
            </Text>
            <AppButton
              title="Remove"
              onPress={() => handleRemove(item.id)}
              style={teamListStyles.removeButton}
            />
          </View>
        )}
      />
    </View>
  );
}

