import { Plus } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';

import { Colors, styles } from '../styles/appStyles';

export const TaskInput = ({ onAddTask }: { onAddTask: (title: string) => void }) => {
  const [title, setTitle] = useState('');

  const submit = () => {
    if (!title.trim()) return;
    onAddTask(title.trim());
    setTitle('');
  };

  return (
    <View style={styles.inputRow}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={submit}
        placeholder="What needs to be done?"
        placeholderTextColor={Colors.placeholder}
        style={styles.input}
      />
      <Pressable style={styles.addButton} onPress={submit} accessibilityLabel="Add task">
        <Plus size={22} color="#FFFFFF" />
      </Pressable>
    </View>
  );
};
