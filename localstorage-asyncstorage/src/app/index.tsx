import {
  Bell,
  Database,
  Download,
  Eraser,
  KeyRound,
  Languages,
  RefreshCw,
  Save,
  SlidersHorizontal,
  Trash2,
  UserRound,
  UsersRound,
} from 'lucide-react-native';
import { useCallback, useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { Colors } from '@/constants/colors';
import * as Storage from '@/utils/AsyncStorage';

type Preferences = { notifications: boolean; french: boolean };
type User = { name?: string; email?: string };

const DEFAULT_PREFS: Preferences = { notifications: true, french: false };

export default function StorageScreen() {
  const [username, setUsername] = useState('');
  const [storedUsername, setStoredUsername] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [prefs, setPrefs] = useState<Preferences>(DEFAULT_PREFS);
  const [items, setItems] = useState<Record<string, unknown>>({});

  const refresh = useCallback(async () => {
    setItems(await Storage.getAllItems());
  }, []);

  useEffect(() => {
    (async () => {
      setStoredUsername(await Storage.getItem<string>('username'));
      setUser(await Storage.getItem<User>('user'));
      setPrefs((await Storage.getItem<Preferences>('preferences')) ?? DEFAULT_PREFS);
      await refresh();
    })();
  }, [refresh]);

  const saveUsername = async () => {
    if (!username.trim()) return;
    await Storage.setItem('username', username.trim());
    setStoredUsername(await Storage.getItem<string>('username'));
    setUsername('');
    refresh();
  };

  const loadUsername = async () => setStoredUsername(await Storage.getItem<string>('username'));

  const removeUsername = async () => {
    await Storage.removeItem('username');
    setStoredUsername(null);
    refresh();
  };

  const mergeUser = async () => {
    const patch: User = {};
    if (name.trim()) patch.name = name.trim();
    if (email.trim()) patch.email = email.trim();
    if (!Object.keys(patch).length) return;
    await Storage.mergeItem('user', patch);
    setUser(await Storage.getItem<User>('user'));
    setName('');
    setEmail('');
    refresh();
  };

  const togglePref = async (key: keyof Preferences, value: boolean) => {
    const next = { ...prefs, [key]: value };
    setPrefs(next);
    await Storage.setItem('preferences', next);
    refresh();
  };

  const removeKey = async (key: string) => {
    await Storage.removeItem(key);
    if (key === 'username') setStoredUsername(null);
    if (key === 'user') setUser(null);
    if (key === 'preferences') setPrefs(DEFAULT_PREFS);
    refresh();
  };

  const clearAll = async () => {
    await Storage.clear();
    setStoredUsername(null);
    setUser(null);
    setPrefs(DEFAULT_PREFS);
    refresh();
  };

  const keys = Object.keys(items).sort();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Section icon={UserRound} title="Username" method="setItem · getItem · removeItem">
        <TextInput
          value={username}
          onChangeText={setUsername}
          onSubmitEditing={saveUsername}
          placeholder="e.g. tytembe"
          placeholderTextColor={Colors.textMuted}
          autoCapitalize="none"
          style={styles.input}
        />
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Button label="Save" icon={Save} onPress={saveUsername} />
          </View>
          <View style={{ flex: 1 }}>
            <Button label="Load" icon={Download} onPress={loadUsername} variant="outline" />
          </View>
          <Button label="" icon={Trash2} onPress={removeUsername} variant="danger" />
        </View>
        <Text style={styles.result}>
          Stored value: <Text style={styles.value}>{storedUsername ?? 'null'}</Text>
        </Text>
      </Section>

      <Section icon={UsersRound} title="User profile" method="mergeItem">
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor={Colors.textMuted}
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={Colors.textMuted}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />
        <Button label="Merge into 'user'" icon={RefreshCw} onPress={mergeUser} />
        <Text style={styles.code}>{JSON.stringify(user ?? null, null, 2)}</Text>
      </Section>

      <Section icon={SlidersHorizontal} title="Preferences" method="JSON object">
        {(
          [
            { key: 'notifications', label: 'Notifications', icon: Bell },
            { key: 'french', label: 'French language', icon: Languages },
          ] as const
        ).map(({ key, label, icon: Icon }) => (
          <View key={key} style={styles.prefRow}>
            <Icon size={18} color={Colors.primary} />
            <Text style={styles.prefLabel}>{label}</Text>
            <Switch
              value={prefs[key]}
              onValueChange={(v) => togglePref(key, v)}
              trackColor={{ true: Colors.primary, false: Colors.border }}
              thumbColor="#FFFFFF"
            />
          </View>
        ))}
      </Section>

      <Section icon={Database} title="Storage inspector" method="getAllKeys · multiGet · clear">
        {keys.length === 0 ? (
          <Text style={styles.empty}>Local storage is empty.</Text>
        ) : (
          keys.map((key) => (
            <View key={key} style={styles.entry}>
              <View style={styles.entryHeader}>
                <KeyRound size={14} color={Colors.key} />
                <Text style={styles.entryKey}>{key}</Text>
                <Pressable onPress={() => removeKey(key)} hitSlop={8} accessibilityLabel={`Remove ${key}`}>
                  <Trash2 size={16} color={Colors.danger} />
                </Pressable>
              </View>
              <Text style={styles.entryValue}>{JSON.stringify(items[key])}</Text>
            </View>
          ))
        )}
        <Button label="Clear all" icon={Eraser} onPress={clearAll} variant="danger" />
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  content: { padding: 16, gap: 16 },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: Colors.text,
    backgroundColor: Colors.surface,
  },
  row: { flexDirection: 'row', gap: 8 },
  result: { fontSize: 14, color: Colors.textMuted },
  value: { fontWeight: '700', color: Colors.primaryDark },
  code: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: Colors.primaryDark,
    backgroundColor: Colors.code,
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  prefRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  prefLabel: { flex: 1, fontSize: 15, color: Colors.text },
  empty: { fontSize: 14, color: Colors.textMuted, textAlign: 'center', paddingVertical: 8 },
  entry: { backgroundColor: Colors.code, borderRadius: 12, padding: 12, gap: 4, borderWidth: 1, borderColor: Colors.border },
  entryHeader: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  entryKey: { flex: 1, fontWeight: '700', color: Colors.key, fontSize: 14 },
  entryValue: { fontFamily: 'monospace', fontSize: 12, color: Colors.text },
});
