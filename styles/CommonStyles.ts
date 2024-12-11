import { StyleSheet } from 'react-native';
export const buttonStyles = StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    active: {
      backgroundColor: '#007BFF', 
    },
    disabled: {
      backgroundColor: '#A0A0A0',
    },
    text: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });
  