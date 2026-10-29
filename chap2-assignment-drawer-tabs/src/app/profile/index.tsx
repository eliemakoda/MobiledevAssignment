import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

export default function ProfileScreen() {
  const details = [
    { icon: Mail, value: 'student@isi.cm' },
    { icon: Phone, value: '+237 690 00 00 00' },
    { icon: GraduationCap, value: 'ISI 4 · Mobile App Development' },
    { icon: MapPin, value: 'Yaoundé, Cameroon' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>ME</Text>
        </View>
        <Text style={styles.name}>My Profile</Text>
        <Text style={styles.role}>Student developer</Text>
      </View>
      <View style={styles.card}>
        {details.map(({ icon: Icon, value }, i) => (
          <View key={value} style={[styles.row, i > 0 && styles.divider]}>
            <Icon size={20} color={Colors.primary} />
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 16 },
  header: { alignItems: 'center', gap: 4, paddingVertical: 12 },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  avatarText: { color: '#FFFFFF', fontSize: 28, fontWeight: '800' },
  name: { fontSize: 22, fontWeight: '800', color: Colors.text },
  role: { fontSize: 14, color: Colors.textMuted },
  card: { backgroundColor: Colors.surface, borderRadius: 16, borderWidth: 1, borderColor: Colors.border },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16 },
  divider: { borderTopWidth: 1, borderTopColor: Colors.border },
  value: { fontSize: 15, color: Colors.text },
});
