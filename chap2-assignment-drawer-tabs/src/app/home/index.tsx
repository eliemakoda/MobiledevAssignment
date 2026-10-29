import { useRouter } from 'expo-router';
import { Apple, ChevronRight, House, Users } from 'lucide-react-native';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { PageHero } from '@/components/PageHero';
import { Colors } from '@/constants/colors';
import { fruits, people } from '@/services/data';

export default function HomeTab() {
  const router = useRouter();

  const shortcuts = [
    { title: 'People', count: people.length, icon: Users, color: Colors.people, soft: Colors.peopleSoft, href: '/home/people' as const },
    { title: 'Fruits', count: fruits.length, icon: Apple, color: Colors.fruits, soft: Colors.fruitsSoft, href: '/home/fruits' as const },
  ];

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <PageHero
        icon={House}
        title="Welcome back!"
        text="Use the tabs below to switch between People and Fruits, or open the left menu for Preferences, My Profile and About."
      />

      <Text style={styles.section}>Quick access</Text>
      <View style={styles.grid}>
        {shortcuts.map(({ title, count, icon: Icon, color, soft, href }) => (
          <Pressable key={title} style={[styles.tile, { backgroundColor: soft }]} onPress={() => router.navigate(href)}>
            <Icon size={28} color={color} />
            <Text style={[styles.tileCount, { color }]}>{count}</Text>
            <View style={styles.tileFooter}>
              <Text style={[styles.tileTitle, { color }]}>{title}</Text>
              <ChevronRight size={16} color={color} />
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
  section: { fontSize: 16, fontWeight: '700', color: Colors.text, marginTop: 12 },
  grid: { flexDirection: 'row', gap: 12 },
  tile: { flex: 1, borderRadius: 18, padding: 16, gap: 6 },
  tileCount: { fontSize: 30, fontWeight: '800' },
  tileFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  tileTitle: { fontSize: 15, fontWeight: '700' },
});
