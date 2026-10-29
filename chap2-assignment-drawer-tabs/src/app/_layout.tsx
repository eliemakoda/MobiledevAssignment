import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { CircleUser, House, Info, SlidersHorizontal } from 'lucide-react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { MenuButton } from '@/components/MenuButton';
import { Colors } from '@/constants/colors';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '700' },
          headerLeft: () => <MenuButton />,
          drawerActiveTintColor: Colors.primary,
          drawerActiveBackgroundColor: Colors.primarySoft,
          drawerInactiveTintColor: Colors.text,
          drawerLabelStyle: { fontWeight: '600' },
          drawerStyle: { backgroundColor: Colors.surface },
          sceneStyle: { backgroundColor: Colors.background },
        }}>
        <Drawer.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            drawerIcon: ({ color, size }) => <House color={color} size={size} />,
          }}
        />
        <Drawer.Screen
          name="preferences/index"
          options={{
            title: 'Preferences',
            drawerIcon: ({ color, size }) => <SlidersHorizontal color={color} size={size} />,
          }}
        />
        <Drawer.Screen
          name="profile/index"
          options={{
            title: 'My Profile',
            drawerIcon: ({ color, size }) => <CircleUser color={color} size={size} />,
          }}
        />
        <Drawer.Screen
          name="about/index"
          options={{
            title: 'About',
            drawerIcon: ({ color, size }) => <Info color={color} size={size} />,
          }}
        />
        <Drawer.Screen name="index" options={{ drawerItemStyle: { display: 'none' }, headerShown: false }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
