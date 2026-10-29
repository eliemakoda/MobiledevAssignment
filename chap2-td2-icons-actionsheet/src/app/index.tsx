import { useActionSheet } from '@expo/react-native-action-sheet';
import { Info, MapPinned, Phone, Share2, Trash2, UserPlus, Users, X } from 'lucide-react-native';
import { useState } from 'react';
import {
  Alert,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Footer } from '@/components/Footer';
import { PersonItem } from '@/components/PersonItem';
import { PlaceItem } from '@/components/PlaceItem';
import { Toolbar } from '@/components/Toolbar';
import { Colors } from '@/constants/colors';
import { initialPeople, Person, places } from '@/services/data';

const notify = (title: string, message: string) =>
  Platform.OS === 'web' ? window.alert(`${title}\n\n${message}`) : Alert.alert(title, message);

export default function ContactsScreen() {
  const { showActionSheetWithOptions } = useActionSheet();
  const [people, setPeople] = useState<Person[]>(initialPeople);
  const [newName, setNewName] = useState('');

  const addPerson = () => {
    const name = newName.trim();
    if (!name) return;
    setPeople((prev) => [...prev, { id: Date.now().toString(), name, phone: '+237 600 00 00 00', email: '' }]);
    setNewName('');
  };

  const displayActionSheet = (person: Person) => {
    const options = ['Call', 'Info', 'Share', 'Delete', 'Cancel'];
    const destructiveButtonIndex = 3;
    const cancelButtonIndex = 4;
    const icons = [
      <Phone key="call" size={20} color={Colors.primary} />,
      <Info key="info" size={20} color={Colors.primary} />,
      <Share2 key="share" size={20} color={Colors.primary} />,
      <Trash2 key="delete" size={20} color={Colors.danger} />,
      <X key="cancel" size={20} color={Colors.textMuted} />,
    ];

    showActionSheetWithOptions(
      {
        title: person.name,
        message: person.phone,
        options,
        icons,
        cancelButtonIndex,
        destructiveButtonIndex,
        titleTextStyle: { fontWeight: '700', fontSize: 16, color: Colors.text },
        textStyle: { color: Colors.text },
        containerStyle: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 0:
            Linking.openURL(`tel:${person.phone.replace(/\s/g, '')}`);
            break;
          case 1:
            notify(person.name, `Phone: ${person.phone}\nEmail: ${person.email || '—'}`);
            break;
          case 2:
            Share.share({ message: `${person.name} — ${person.phone}` });
            break;
          case destructiveButtonIndex:
            setPeople((prev) => prev.filter((p) => p.id !== person.id));
            break;
          case cancelButtonIndex:
            break;
        }
      },
    );
  };

  return (
    <View style={styles.screen}>
      <Toolbar title="My Contacts" onMenuPress={() => notify('Menu', 'More options coming soon.')} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.sectionHeader}>
          <Users size={18} color={Colors.primary} />
          <Text style={styles.sectionTitle}>People ({people.length})</Text>
        </View>

        <View style={styles.addRow}>
          <TextInput
            value={newName}
            onChangeText={setNewName}
            onSubmitEditing={addPerson}
            placeholder="Add a person…"
            placeholderTextColor={Colors.textMuted}
            style={styles.input}
          />
          <Pressable style={styles.addButton} onPress={addPerson} accessibilityLabel="Add person">
            <UserPlus size={20} color="#FFFFFF" />
          </Pressable>
        </View>

        <View style={styles.list}>
          {people.map((person, i) => (
            <View key={person.id}>
              {i > 0 && <View style={styles.separator} />}
              <PersonItem person={person} onPress={displayActionSheet} />
            </View>
          ))}
        </View>

        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <MapPinned size={18} color={Colors.primary} />
          <Text style={styles.sectionTitle}>Places</Text>
        </View>
        <View style={{ gap: 10 }}>
          {places.map((place, i) => (
            <PlaceItem key={place.id} place={place} index={i} />
          ))}
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  content: { padding: 16, paddingBottom: 24 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: Colors.text },
  addRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  input: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: Colors.text,
  },
  addButton: {
    width: 46,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  separator: { height: 1, backgroundColor: Colors.border, marginLeft: 68 },
});
