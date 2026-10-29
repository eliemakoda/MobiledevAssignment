import { MapPin } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { PlaceColors } from '@/constants/colors';
import { Place } from '@/services/data';

export function PlaceItem({ place, index }: { place: Place; index: number }) {
  const color = PlaceColors[index % PlaceColors.length];
  return (
    <View style={[styles.item, { backgroundColor: color.bg }]}>
      <MapPin size={18} color={color.fg} />
      <View style={{ flex: 1 }}>
        <Text style={[styles.name, { color: color.fg }]}>{place.name}</Text>
        <Text style={[styles.city, { color: color.fg }]}>{place.city}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 14,
  },
  name: { fontSize: 15, fontWeight: '700' },
  city: { fontSize: 13, opacity: 0.85 },
});
