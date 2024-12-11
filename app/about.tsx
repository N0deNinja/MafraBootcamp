import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import packageJson from '../package.json'

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Team Manager</Text>
      <Text style={styles.text}>
        Team Manager is a simple and intuitive app for managing your teams and matches.
      </Text>
      <Text style={styles.text}>
        Version: <Text style={styles.version}>{packageJson.version}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  version: {
    fontWeight: 'bold',
  },
});
