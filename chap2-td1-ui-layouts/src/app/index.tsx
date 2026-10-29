import { Car, Heart, Map, MousePointerClick } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, FlatList, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardView } from '@/components/CardView';
import { PlaceItem } from '@/components/PlaceItem';
import { SectionHeader } from '@/components/SectionHeader';
import { VehicleCard } from '@/components/VehicleCard';
import { Colors } from '@/constants/colors';
import { Destination, destinations, Place, places, vehicles } from '@/services/data';

export default function HomeScreen() {
  const [lastChoice, setLastChoice] = useState<string | null>(null);
  const [webDialogPlace, setWebDialogPlace] = useState<Place | null>(null);

  const confirmPlace = (place: Place) => {
    const label = `${place.address}, ${place.city}`;
    if (Platform.OS === 'web') {
      setWebDialogPlace(place);
      return;
    }
    Alert.alert('Confirm your choice', `Do you want to go to ${label}?`, [
      { text: 'Cancel', style: 'cancel', onPress: () => setLastChoice(`Cancelled → ${place.city}`) },
      { text: 'Later', onPress: () => setLastChoice(`Later → ${place.city}`) },
      { text: 'Go there', onPress: () => setLastChoice(`Go there → ${place.city}`) },
    ]);
  };

  const chooseOnWeb = (choice: string) => {
    if (webDialogPlace) setLastChoice(`${choice} → ${webDialogPlace.city}`);
    setWebDialogPlace(null);
  };

  const notify = (title: string, message: string) =>
    Platform.OS === 'web' ? window.alert(`${title}\n${message}`) : Alert.alert(title, message);

  const visit = (d: Destination) => notify('Visit', `Booking a visit to ${d.name} (${d.city}).`);
  const see = (d: Destination) => notify(d.name, d.description);

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <SectionHeader step={1} icon={Car} title="Vehicles" subtitle="Brand, model, horsepower & photo" />
        <FlatList
          horizontal
          data={vehicles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <VehicleCard vehicle={item} />}
          contentContainerStyle={{ gap: 12, paddingHorizontal: 16 }}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.block}>
          <SectionHeader step={2} icon={Heart} title="Places I like" subtitle="Address and city" />
          <View style={styles.list}>
            {places.map((place, i) => (
              <View key={place.id}>
                {i > 0 && <View style={styles.separator} />}
                <PlaceItem place={place} onPress={confirmPlace} />
              </View>
            ))}
          </View>
          <View style={styles.hint}>
            <MousePointerClick size={16} color={Colors.primaryDark} />
            <Text style={styles.hintText}>
              Block 3 · {lastChoice ?? 'Tap a place: Cancel, Go there or Later'}
            </Text>
          </View>
        </View>

        <View style={styles.block}>
          <SectionHeader step={4} icon={Map} title="Travel map" subtitle="Where to go next" />
          <View style={{ gap: 16, paddingHorizontal: 16 }}>
            {destinations.map((d) => (
              <CardView key={d.id} destination={d} onVisit={visit} onSee={see} />
            ))}
          </View>
        </View>
      </ScrollView>

      <Modal transparent visible={webDialogPlace !== null} animationType="fade" onRequestClose={() => chooseOnWeb('Cancelled')}>
        <View style={styles.backdrop}>
          <View style={styles.dialog}>
            <Text style={styles.dialogTitle}>Confirm your choice</Text>
            <Text style={styles.dialogMessage}>
              Do you want to go to {webDialogPlace?.address}, {webDialogPlace?.city}?
            </Text>
            <View style={styles.dialogActions}>
              <Pressable onPress={() => chooseOnWeb('Cancelled')} style={styles.dialogButton}>
                <Text style={styles.dialogButtonText}>Cancel</Text>
              </Pressable>
              <Pressable onPress={() => chooseOnWeb('Later')} style={styles.dialogButton}>
                <Text style={styles.dialogButtonText}>Later</Text>
              </Pressable>
              <Pressable onPress={() => chooseOnWeb('Go there')} style={styles.dialogButton}>
                <Text style={styles.dialogButtonText}>Go there</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  content: { paddingVertical: 20 },
  block: { marginTop: 28 },
  list: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  separator: { height: 1, backgroundColor: Colors.border, marginLeft: 62 },
  hint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 16,
    marginTop: 10,
    padding: 10,
    borderRadius: 12,
    backgroundColor: Colors.primarySoft,
  },
  hintText: { flex: 1, fontSize: 13, fontWeight: '600', color: Colors.primaryDark },
  backdrop: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: 'rgba(15, 23, 42, 0.4)' },
  dialog: { width: '100%', maxWidth: 360, padding: 20, borderRadius: 16, backgroundColor: Colors.surface },
  dialogTitle: { fontSize: 17, fontWeight: '700', color: Colors.text },
  dialogMessage: { marginTop: 8, fontSize: 14, color: Colors.textMuted },
  dialogActions: { flexDirection: 'row', justifyContent: 'flex-end', gap: 4, marginTop: 20 },
  dialogButton: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
  dialogButtonText: { fontSize: 14, fontWeight: '700', color: Colors.primary },
});
