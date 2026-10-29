import { Tabs } from 'expo-router';
import { Apple, House, Users } from 'lucide-react-native';

import { MenuButton } from '@/components/MenuButton';
import { Colors } from '@/constants/colors';
import { fruits, people } from '@/services/data';

export default function HomeTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarStyle: { backgroundColor: Colors.surface, borderTopColor: Colors.border, height: 64, paddingTop: 6, paddingBottom: 8 },
        tabBarLabelStyle: { fontWeight: '600' },
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
        headerLeft: () => <MenuButton />,
        sceneStyle: { backgroundColor: Colors.background },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="people"
        options={{
          title: 'People',
          headerShown: false,
          tabBarActiveTintColor: Colors.people,
          tabBarBadge: people.length,
          tabBarBadgeStyle: { backgroundColor: Colors.people },
          tabBarIcon: ({ color, size }) => <Users color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="fruits"
        options={{
          title: 'Fruits',
          headerShown: false,
          tabBarActiveTintColor: Colors.fruits,
          tabBarBadge: fruits.length,
          tabBarBadgeStyle: { backgroundColor: Colors.fruits },
          tabBarIcon: ({ color, size }) => <Apple color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
