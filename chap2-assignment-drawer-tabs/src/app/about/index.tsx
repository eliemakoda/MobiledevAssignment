import { Info, Layers, Menu, PanelBottom } from 'lucide-react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { PageHero } from '@/components/PageHero';
import { Colors } from '@/constants/colors';

const concepts = [
  { icon: Menu, title: 'Drawer', text: 'Left menu: Home, Preferences, My Profile, About.' },
  { icon: PanelBottom, title: 'Tabs', text: 'Home menu uses bottom tabs: Home, People, Fruits.' },
  { icon: Layers, title: 'Stack', text: 'People and Fruits each have an internal stack with a detail view.' },
];

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <PageHero icon={Info} title="About" text="Chapter 2 assignment: left menu and tabbed navigation with Expo Router (SDK 57)." />
      {concepts.map(({ icon: Icon, title, text }) => (
        <View key={title} style={styles.card}>
          <Icon size={22} color={Colors.primary} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  title: { fontSize: 15, fontWeight: '700', color: Colors.text },
  text: { fontSize: 14, color: Colors.textMuted, marginTop: 2 },
});
