import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { ListRow } from '@/components/ListRow';
import { Colors } from '@/constants/colors';
import { people } from '@/services/data';

export default function PeopleScreen() {
  const router = useRouter();
  return (
    <FlatList
      data={people}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => (
        <ListRow
          title={item.name}
          subtitle={`${item.role} · ${item.city}`}
          onPress={() => router.navigate({ pathname: '/home/people/[id]', params: { id: item.id } })}
          leading={
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.name[0]}</Text>
            </View>
          }
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 10 },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.peopleSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontSize: 17, fontWeight: '700', color: Colors.people },
});
