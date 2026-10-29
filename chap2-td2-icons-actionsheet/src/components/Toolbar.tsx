import { EllipsisVertical, Users } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '@/constants/colors';

type Props = {
  title: string;
  onMenuPress?: () => void;
};

export function Toolbar({ title, onMenuPress }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.bar, { paddingTop: insets.top + 12 }]}>
      <View style={styles.titleRow}>
        <Users size={22} color="#FFFFFF" />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Pressable onPress={onMenuPress} hitSlop={10} style={styles.menu} accessibilityLabel="More options">
        <EllipsisVertical size={22} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 14,
    backgroundColor: Colors.primary,
  },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  title: { fontSize: 20, fontWeight: '700', color: '#FFFFFF' },
  menu: { padding: 6, borderRadius: 999 },
});
