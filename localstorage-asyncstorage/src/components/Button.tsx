import { LucideIcon } from 'lucide-react-native';
import { Pressable, StyleSheet, Text } from 'react-native';

import { Colors } from '@/constants/colors';

type Props = {
  label: string;
  icon: LucideIcon;
  onPress: () => void;
  variant?: 'primary' | 'outline' | 'danger';
};

export function Button({ label, icon: Icon, onPress, variant = 'primary' }: Props) {
  const fg = variant === 'primary' ? '#FFFFFF' : variant === 'danger' ? Colors.danger : Colors.primary;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.base, styles[variant], pressed && { opacity: 0.8 }]}>
      <Icon size={16} color={fg} />
      <Text style={[styles.label, { color: fg }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  primary: { backgroundColor: Colors.primary },
  outline: { borderWidth: 1.5, borderColor: Colors.primary },
  danger: { backgroundColor: Colors.dangerSoft },
  label: { fontWeight: '700', fontSize: 14 },
});
