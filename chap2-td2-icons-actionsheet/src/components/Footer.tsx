import { Copyright } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AUTHOR_NAME, Colors } from '@/constants/colors';

export function Footer() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.footer, { paddingBottom: insets.bottom + 12 }]}>
      <Copyright size={14} color={Colors.primaryDark} />
      <Text style={styles.text}>Copyright 2025 · {AUTHOR_NAME}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingTop: 12,
    backgroundColor: Colors.primarySoft,
    borderTopWidth: 1,
    borderTopColor: '#C7D2FE',
  },
  text: { fontSize: 13, fontWeight: '600', color: Colors.primaryDark },
});
