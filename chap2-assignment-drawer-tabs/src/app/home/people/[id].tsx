import { Stack, useLocalSearchParams } from 'expo-router';
import { Briefcase, MapPin, UserRound } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { PageHero } from '@/components/PageHero';
import { Colors } from '@/constants/colors';
import { people } from '@/services/data';

export default function PersonDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const person = people.find((p) => p.id === id);

  if (!person) return <Text style={{ padding: 16 }}>Person not found.</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: person.name }} />
      <PageHero icon={UserRound} title={person.name} text={`Route parameter id = ${id}`} color={Colors.people} soft={Colors.peopleSoft} />
      <View style={styles.card}>
        <View style={styles.row}>
          <Briefcase size={18} color={Colors.people} />
          <Text style={styles.value}>{person.role}</Text>
        </View>
        <View style={styles.row}>
          <MapPin size={18} color={Colors.people} />
          <Text style={styles.value}>{person.city}, Cameroon</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  card: { backgroundColor: Colors.surface, borderRadius: 16, padding: 16, gap: 12, borderWidth: 1, borderColor: Colors.border },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  value: { fontSize: 15, color: Colors.text },
});
