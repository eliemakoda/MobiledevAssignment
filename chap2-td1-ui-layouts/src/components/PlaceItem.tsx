import { ChevronRight, MapPin } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import { Place } from '@/services/data';

type Props = {
  place: Place;
  onPress: (place: Place) => void;
};

export function PlaceItem({ place, onPress }: Props) {
  return (
    <Pressable
      onPress={() => onPress(place)}
      style={({ pressed }) => [styles.item, pressed && { backgroundColor: Colors.primarySoft }]}>
      <View style={styles.pin}>
        <MapPin size={18} color={Colors.accent} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.address}>{place.address}</Text>
        <Text style={styles.city}>{place.city}</Text>
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
  pin: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  address: { fontSize: 15, fontWeight: '600', color: Colors.text },
  city: { fontSize: 13, color: Colors.textMuted },
});
