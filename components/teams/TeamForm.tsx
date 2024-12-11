import React from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { useTeamsStore } from '../../stores/teamsStore';
import AppButton from '../common/AppButton';
import { teamsFormStyles } from '../../styles/TeamsPageStyles';

type FormData = {
  name: string;
  players: { name: string }[];
};

export default function TeamForm() {
  const { addTeam } = useTeamsStore();
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: '',
      players: [{ name: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'players',
  });

  const onSubmit = (data: FormData) => {
    if (data.players.length === 0 || data.players.some(player => player.name === '')) {
      Alert.alert('Error', 'At least one player is required.');
      return;
    }

    addTeam({
      name: data.name,
      players: data.players.map((player) => player.name),
      logo: 'https://via.placeholder.com/150',
    });
    Alert.alert('Success', `Team "${data.name}" added!`);
    reset();
  };

  return (
    <View>
      <Text style={teamsFormStyles.title}>Create a New Team</Text>

      <View style={teamsFormStyles.formGroup}>
        <Text style={teamsFormStyles.label}>Team Name</Text>
        <Controller
          control={control}
          name="name"
          rules={{
            required: 'Team name is required',
            minLength: {
              value: 3,
              message: 'Team name must be at least 3 characters',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={[teamsFormStyles.input, errors.name && teamsFormStyles.errorBorder]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter team name"
              />
              {errors.name && <Text style={teamsFormStyles.errorText}>{errors.name.message}</Text>}
            </>
          )}
        />
      </View>

      {fields.map((field, index) => (
        <View key={field.id} style={teamsFormStyles.formGroup}>
          <Text style={teamsFormStyles.label}>Player {index + 1}</Text>
          <Controller
            control={control}
            name={`players.${index}.name`}
            rules={{
              required: 'Player name is required',
              minLength: {
                value: 2,
                message: 'Player name must be at least 2 characters',
              },
            }}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <>
                <TextInput
                  style={[teamsFormStyles.input, error && teamsFormStyles.errorBorder]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={`Enter player ${index + 1}`}
                />
                {error && <Text style={teamsFormStyles.errorText}>{error.message}</Text>}
              </>
            )}
          />
          <AppButton
            title="Remove"
            onPress={() => remove(index)}
            style={teamsFormStyles.removeButton}
          />
        </View>
      ))}

      <AppButton
        title="Add Player"
        onPress={() => append({ name: '' })}
        style={teamsFormStyles.addButton}
      />
      <AppButton
        title="Create Team"
        onPress={handleSubmit(onSubmit)}
        style={teamsFormStyles.createButton}
      />
    </View>
  );
}


