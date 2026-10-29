import { Stack } from 'expo-router';

import { MenuButton } from '@/components/MenuButton';
import { Colors } from '@/constants/colors';

export default function FruitsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.fruits },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
        contentStyle: { backgroundColor: Colors.background },
      }}>
      <Stack.Screen name="index" options={{ title: 'Fruits', headerLeft: () => <MenuButton /> }} />
      <Stack.Screen name="[id]" options={{ title: 'Fruit' }} />
    </Stack>
  );
}
