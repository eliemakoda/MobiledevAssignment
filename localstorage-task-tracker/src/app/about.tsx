import { Database, Filter, ListChecks, Smartphone } from 'lucide-react-native';
import { ScrollView, Text, View } from 'react-native';

import { Colors } from '../styles/appStyles';

const features = [
  { icon: Database, title: 'expo-sqlite', text: 'Tasks are stored in the local todoApp.db database and survive app restarts.' },
  { icon: ListChecks, title: 'CRUD', text: 'Insert, update (title & status) and delete tasks with async SQL queries (openDatabaseAsync).' },
  { icon: Filter, title: 'Status filter', text: 'Pending, Ongoing and Completed tasks with live counters.' },
  { icon: Smartphone, title: 'Expo SDK 57', text: 'Built with Expo Router, TypeScript and lucide icons.' },
];

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }} style={{ backgroundColor: Colors.background }}>
      <View style={{ backgroundColor: Colors.header, borderRadius: 18, padding: 20 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: '800' }}>Task Tracker</Text>
        <Text style={{ color: '#CBD5E1', marginTop: 6, lineHeight: 20 }}>
          Local Storage tutorial · SQLite database using expo-sqlite.
        </Text>
      </View>
      {features.map(({ icon: Icon, title, text }) => (
        <View
          key={title}
          style={{
            flexDirection: 'row',
            gap: 12,
            backgroundColor: Colors.surface,
            borderRadius: 14,
            padding: 16,
            borderWidth: 1,
            borderColor: Colors.border,
          }}>
          <Icon size={22} color={Colors.primary} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: '700', color: Colors.text }}>{title}</Text>
            <Text style={{ fontSize: 14, color: Colors.textMuted, marginTop: 2 }}>{text}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
