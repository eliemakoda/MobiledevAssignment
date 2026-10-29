import { LucideIcon } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

type Props = {
  step: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

export function SectionHeader({ step, title, subtitle, icon: Icon }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.iconBox}>
        <Icon size={20} color={Colors.primary} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.step}>BLOCK {step}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, marginBottom: 12 },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: { fontSize: 11, fontWeight: '700', letterSpacing: 1, color: Colors.accent },
  title: { fontSize: 18, fontWeight: '700', color: Colors.text },
  subtitle: { fontSize: 13, color: Colors.textMuted },
});
