import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, GestureResponderEvent } from 'react-native';
import { buttonStyles } from '../../styles/CommonStyles';


type AppButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void; 
  disabled?: boolean;
  loading?: boolean; 
  style?: object;
  textStyle?: object; 
};

export default function AppButton({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
  textStyle,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        disabled ? buttonStyles.disabled : buttonStyles.active,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[buttonStyles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

