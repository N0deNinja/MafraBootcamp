import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function Home() {
  const [quote, setQuote] = useState<string>('');

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Team Manager!</Text>
      <Text style={styles.subtitle}>Your all-in-one app for managing teams and matches.</Text>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>
          {quote || 'Loading daily quote...'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ECF0F1',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#BDC3C7', 
    textAlign: 'center',
    marginBottom: 30,
  },
  quoteContainer: {
    backgroundColor: '#34495E', 
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, 
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#ECF0F1', 
    textAlign: 'center',
  },
});
