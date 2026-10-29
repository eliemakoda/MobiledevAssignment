import { Stack } from 'expo-router';

import { MenuButton } from '@/components/MenuButton';
import { Colors } from '@/constants/colors';

export default function PeopleLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.people },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
        contentStyle: { backgroundColor: Colors.background },
      }}>
      <Stack.Screen name="index" options={{ title: 'People', headerLeft: () => <MenuButton /> }} />
      <Stack.Screen name="[id]" options={{ title: 'Person' }} />
    </Stack>
  );
}
