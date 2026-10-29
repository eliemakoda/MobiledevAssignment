import { useNavigation } from 'expo-router';
import { DrawerActions } from 'expo-router/react-navigation';
import { Menu } from 'lucide-react-native';
import { Pressable } from 'react-native';

export function MenuButton({ color = '#FFFFFF' }: { color?: string }) {
  const navigation = useNavigation();
  return (
    <Pressable
      accessibilityLabel="Open menu"
      hitSlop={10}
      style={{ paddingHorizontal: 16 }}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      <Menu size={24} color={color} />
    </Pressable>
  );
}
