import { Check, Circle, CircleCheck, CircleDot, Pencil, Trash2 } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { Task, TaskStatus } from '../database/db';
import { Colors, StatusColors, styles } from '../styles/appStyles';

const NEXT_STATUS: Record<TaskStatus, TaskStatus> = {
  pending: 'ongoing',
  ongoing: 'completed',
  completed: 'pending',
};

const STATUS_ICON = { pending: Circle, ongoing: CircleDot, completed: CircleCheck };

type Props = {
  task: Task;
  onUpdateTask: (id: number, newTitle: string, newStatus: TaskStatus) => void;
  onDeleteTask: (id: number) => void;
};

export const TaskItem = ({ task, onUpdateTask, onDeleteTask }: Props) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(task.title);
  const color = StatusColors[task.status];
  const StatusIcon = STATUS_ICON[task.status];

  const saveTitle = () => {
    if (draft.trim()) onUpdateTask(task.id, draft.trim(), task.status);
    setEditing(false);
  };

  return (
    <View style={styles.taskItem}>
      <Pressable
        onPress={() => onUpdateTask(task.id, task.title, NEXT_STATUS[task.status])}
        accessibilityLabel={`Change status of ${task.title}`}
        hitSlop={8}>
        <StatusIcon size={26} color={color.fg} />
      </Pressable>

      <View style={{ flex: 1 }}>
        {editing ? (
          <TextInput value={draft} onChangeText={setDraft} onSubmitEditing={saveTitle} autoFocus style={styles.editInput} />
        ) : (
          <Text style={[styles.taskTitle, task.status === 'completed' && styles.taskTitleDone]}>{task.title}</Text>
        )}
        <View style={[styles.statusBadge, { backgroundColor: color.bg }]}>
          <Text style={[styles.statusBadgeText, { color: color.fg }]}>{color.label}</Text>
        </View>
      </View>

      {editing ? (
        <Pressable style={styles.iconButton} onPress={saveTitle} accessibilityLabel="Save title">
          <Check size={20} color={Colors.primary} />
        </Pressable>
      ) : (
        <Pressable style={styles.iconButton} onPress={() => setEditing(true)} accessibilityLabel="Edit task">
          <Pencil size={18} color={Colors.textMuted} />
        </Pressable>
      )}
      <Pressable style={styles.iconButton} onPress={() => onDeleteTask(task.id)} accessibilityLabel="Delete task">
        <Trash2 size={18} color={Colors.danger} />
      </Pressable>
    </View>
  );
};
