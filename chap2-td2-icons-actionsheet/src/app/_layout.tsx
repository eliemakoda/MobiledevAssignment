import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <ActionSheetProvider>
      <>
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </>
    </ActionSheetProvider>
  );
}
