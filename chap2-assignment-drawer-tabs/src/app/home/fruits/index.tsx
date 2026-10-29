import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';

import { ListRow } from '@/components/ListRow';
import { fruits } from '@/services/data';

export default function FruitsScreen() {
  const router = useRouter();
  return (
    <FlatList
      data={fruits}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => {
        const Icon = item.icon;
        return (
          <ListRow
            title={item.name}
            subtitle={`${item.calories} kcal / 100 g · Vitamin ${item.vitamin}`}
            onPress={() => router.navigate({ pathname: '/home/fruits/[id]', params: { id: item.id } })}
            leading={
              <View style={[styles.iconBox, { backgroundColor: item.color + '1F' }]}>
                <Icon size={22} color={item.color} />
              </View>
            }
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 10 },
  iconBox: { width: 42, height: 42, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
});
