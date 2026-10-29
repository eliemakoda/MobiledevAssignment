import { ChevronRight, Phone } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import { Person } from '@/services/data';

type Props = {
  person: Person;
  onPress: (person: Person) => void;
};

const initials = (name: string) =>
  name
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

export function PersonItem({ person, onPress }: Props) {
  return (
    <Pressable
      onPress={() => onPress(person)}
      style={({ pressed }) => [styles.item, pressed && { backgroundColor: Colors.primarySoft }]}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials(person.name)}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{person.name}</Text>
        <View style={styles.phoneRow}>
          <Phone size={12} color={Colors.textMuted} />
          <Text style={styles.phone}>{person.phone}</Text>
        </View>
      </View>
      <ChevronRight size={18} color={Colors.textMuted} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: Colors.surface,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: '#FFFFFF', fontWeight: '700' },
  name: { fontSize: 15, fontWeight: '600', color: Colors.text },
  phoneRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 },
  phone: { fontSize: 13, color: Colors.textMuted },
});
