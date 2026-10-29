import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '../styles/appStyles';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.header },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: Colors.background },
        }}>
        <Stack.Screen name="index" options={{ title: 'Task Tracker' }} />
        <Stack.Screen name="about" options={{ title: 'About App' }} />
      </Stack>
    </>
  );
}
