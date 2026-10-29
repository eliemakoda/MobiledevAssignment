import { Stack, useLocalSearchParams } from 'expo-router';
import { Flame, Globe, Pill } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { PageHero } from '@/components/PageHero';
import { Colors } from '@/constants/colors';
import { fruits } from '@/services/data';

export default function FruitDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const fruit = fruits.find((f) => f.id === id);

  if (!fruit) return <Text style={{ padding: 16 }}>Fruit not found.</Text>;

  const facts = [
    { icon: Globe, label: 'Origin', value: fruit.origin },
    { icon: Flame, label: 'Energy', value: `${fruit.calories} kcal / 100 g` },
    { icon: Pill, label: 'Rich in', value: `Vitamin ${fruit.vitamin}` },
  ];

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: fruit.name }} />
      <PageHero icon={fruit.icon} title={fruit.name} text={`Route parameter id = ${id}`} color={fruit.color} soft={fruit.color + '1F'} />
      <View style={styles.card}>
        {facts.map(({ icon: Icon, label, value }) => (
          <View key={label} style={styles.row}>
            <Icon size={18} color={Colors.fruits} />
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  card: { backgroundColor: Colors.surface, borderRadius: 16, padding: 16, gap: 14, borderWidth: 1, borderColor: Colors.border },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  label: { width: 70, fontSize: 14, color: Colors.textMuted },
  value: { flex: 1, fontSize: 15, fontWeight: '600', color: Colors.text },
});
