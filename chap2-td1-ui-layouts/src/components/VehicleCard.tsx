import { Image } from 'expo-image';
import { Gauge } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import { Vehicle } from '@/services/data';

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <View style={styles.card}>
      <Image source={vehicle.photo} style={styles.photo} contentFit="cover" />
      <View style={styles.body}>
        <Text style={styles.brand}>{vehicle.brand}</Text>
        <Text style={styles.model}>{vehicle.model}</Text>
        <View style={styles.badge}>
          <Gauge size={14} color={Colors.primaryDark} />
          <Text style={styles.badgeText}>{vehicle.horsepower} hp</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    backgroundColor: Colors.surface,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  photo: { width: '100%', height: 120 },
  body: { padding: 12, gap: 2 },
  brand: { fontSize: 12, fontWeight: '600', color: Colors.textMuted, textTransform: 'uppercase' },
  model: { fontSize: 16, fontWeight: '700', color: Colors.text },
  badge: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-start',
    backgroundColor: Colors.primarySoft,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: { fontSize: 12, fontWeight: '700', color: Colors.primaryDark },
});
