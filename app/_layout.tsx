import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function Layout() {
    console.log('Layout rendering...');
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <Text>🏠</Text>, 
        }}
      />
      <Tabs.Screen
        name="teams"
        options={{
          title: 'Teams',
          tabBarIcon: () => <Text>👥</Text>, 
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Matches',
          tabBarIcon: () => <Text>⚽</Text>, 
        }}
      />
      <Tabs.Screen
        name="about" 
        options={{
          title: 'About',
          tabBarIcon: () => <Text>ℹ️</Text>,
        }}
      />
    </Tabs>
  );
}
