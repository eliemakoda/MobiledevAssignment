import { Image } from 'expo-image';
import { Compass, Eye, MapPin } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import { Destination } from '@/services/data';

type Props = {
  destination: Destination;
  onVisit: (d: Destination) => void;
  onSee: (d: Destination) => void;
};

export function CardView({ destination, onVisit, onSee }: Props) {
  return (
    <View style={styles.card}>
      <Image source={destination.image} style={styles.image} contentFit="cover" />
      <View style={styles.body}>
        <Text style={styles.name}>{destination.name}</Text>
        <View style={styles.locationRow}>
          <MapPin size={14} color={Colors.primary} />
          <Text style={styles.location}>
            {destination.city}, {destination.country}
          </Text>
        </View>
        <Text style={styles.description}>{destination.description}</Text>
        <View style={styles.actions}>
          <Pressable style={[styles.button, styles.primary]} onPress={() => onVisit(destination)}>
            <Compass size={16} color="#FFFFFF" />
            <Text style={styles.primaryText}>Visit</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.outline]} onPress={() => onSee(destination)}>
            <Eye size={16} color={Colors.primary} />
            <Text style={styles.outlineText}>See the place</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#0E7490',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  image: { width: '100%', height: 170 },
  body: { padding: 14, gap: 6 },
  name: { fontSize: 18, fontWeight: '700', color: Colors.text },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  location: { fontSize: 13, fontWeight: '600', color: Colors.primary },
  description: { fontSize: 14, lineHeight: 20, color: Colors.textMuted },
  actions: { flexDirection: 'row', gap: 10, marginTop: 8 },
  button: {
    flex: 1,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
  },
  primary: { backgroundColor: Colors.primary },
  primaryText: { color: '#FFFFFF', fontWeight: '700' },
  outline: { borderWidth: 1.5, borderColor: Colors.primary },
  outlineText: { color: Colors.primary, fontWeight: '700' },
});
