import { LucideIcon } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

type Props = {
  icon: LucideIcon;
  title: string;
  text: string;
  color?: string;
  soft?: string;
};

export function PageHero({ icon: Icon, title, text, color = Colors.primary, soft = Colors.primarySoft }: Props) {
  return (
    <View style={[styles.hero, { backgroundColor: soft }]}>
      <View style={[styles.iconBox, { backgroundColor: color }]}>
        <Icon size={26} color="#FFFFFF" />
      </View>
      <Text style={[styles.title, { color }]}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { borderRadius: 20, padding: 20, gap: 8 },
  iconBox: { width: 52, height: 52, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '800', marginTop: 4 },
  text: { fontSize: 14, lineHeight: 20, color: Colors.text },
});
