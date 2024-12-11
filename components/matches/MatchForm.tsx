import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useMatchesStore } from '../../stores/matchesStore';
import { useTeamsStore } from '../../stores/teamsStore';
import AppButton from '../common/AppButton';
import { format } from 'date-fns';
import { matchFormStyles } from '../../styles/MatchesStyles';

type FormData = {
  teamA: string;
  teamB: string;
  date: Date;
};

export default function MatchForm() {
  const teams = useTeamsStore((state) => state.teams);
  const addMatch = useMatchesStore((state) => state.addMatch);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      teamA: '',
      teamB: '',
      date: new Date(),
    },
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const watchTeamA = watch('teamA');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setValue('date', date);
    hideDatePicker();
  };

  const onSubmit = (data: FormData) => {
    if (data.teamA === data.teamB) {
      Alert.alert('Error', 'Team A and Team B must be different.');
      return;
    }

    if (data.date <= new Date()) {
      Alert.alert('Error', 'Match date must be in the future.');
      return;
    }

    addMatch({
      teamA: teams.find((team) => team.name === data.teamA),
      teamB: teams.find((team) => team.name === data.teamB),
      date: data.date.toISOString(),
      score: '',
    });

    Alert.alert('Success', `Match between ${data.teamA} and ${data.teamB} created!`);
  };

  return (
    <View style={matchFormStyles.container}>
      <Text style={matchFormStyles.title}>Create a New Match</Text>

      <View style={matchFormStyles.formGroup}>
        <Text style={matchFormStyles.label}>Team A</Text>
        <Controller
          control={control}
          name="teamA"
          rules={{ required: 'Team A is required' }}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              style={matchFormStyles.input}
              data={teams.map((team) => ({ label: team.name, value: team.name }))}
              labelField="label"
              valueField="value"
              placeholder="Select Team A"
              value={value}
              onChange={(item) => onChange(item.value)}
            />
          )}
        />
        {errors.teamA && <Text style={matchFormStyles.errorText}>{errors.teamA.message}</Text>}
      </View>

      <View style={matchFormStyles.formGroup}>
        <Text style={matchFormStyles.label}>Team B</Text>
        <Controller
          control={control}
          name="teamB"
          rules={{ required: 'Team B is required' }}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              style={matchFormStyles.input}
              data={teams
                .filter((team) => team.name !== watchTeamA)
                .map((team) => ({ label: team.name, value: team.name }))}
              labelField="label"
              valueField="value"
              placeholder="Select Team B"
              value={value}
              onChange={(item) => onChange(item.value)}
            />
          )}
        />
        {errors.teamB && <Text style={matchFormStyles.errorText}>{errors.teamB.message}</Text>}
      </View>

      <View style={matchFormStyles.formGroup}>
        <Text style={matchFormStyles.label}>Match Date</Text>
        <TouchableOpacity onPress={showDatePicker} style={matchFormStyles.datePickerButton}>
          <Controller
            control={control}
            name="date"
            render={({ field: { value } }) => (
              <Text style={matchFormStyles.datePickerButtonText}>
                {format(value, 'MMMM d, yyyy HH:mm')}
              </Text>
            )}
          />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={new Date()}
        />
      </View>

      <AppButton
        title="Create Match"
        onPress={handleSubmit(onSubmit)}
        style={matchFormStyles.createButton}
      />
    </View>
  );
}
