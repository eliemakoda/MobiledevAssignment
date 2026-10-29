import { Bell, Globe, SlidersHorizontal, Vibrate } from 'lucide-react-native';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

import { PageHero } from '@/components/PageHero';
import { Colors } from '@/constants/colors';

export default function PreferencesScreen() {
  const [prefs, setPrefs] = useState({ notifications: true, vibration: false, french: true });

  const items = [
    { key: 'notifications' as const, label: 'Notifications', icon: Bell },
    { key: 'vibration' as const, label: 'Vibration', icon: Vibrate },
    { key: 'french' as const, label: 'French language', icon: Globe },
  ];

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <PageHero icon={SlidersHorizontal} title="Preferences" text="Adjust how the application behaves." />
      <View style={styles.card}>
        {items.map(({ key, label, icon: Icon }, i) => (
          <View key={key} style={[styles.row, i > 0 && styles.divider]}>
            <Icon size={20} color={Colors.primary} />
            <Text style={styles.label}>{label}</Text>
            <Switch
              value={prefs[key]}
              onValueChange={(v) => setPrefs((p) => ({ ...p, [key]: v }))}
              trackColor={{ true: Colors.primary, false: Colors.border }}
              thumbColor="#FFFFFF"
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 16 },
  card: { backgroundColor: Colors.surface, borderRadius: 16, borderWidth: 1, borderColor: Colors.border },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16 },
  divider: { borderTopWidth: 1, borderTopColor: Colors.border },
  label: { flex: 1, fontSize: 15, color: Colors.text },
});
