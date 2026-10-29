import { useRouter } from 'expo-router';
import { Info } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

import { StatusFilter, Filter } from '../components/StatusFilter';
import { TaskCounter } from '../components/TaskCounter';
import { TaskInput } from '../components/TaskInput';
import { TaskItem } from '../components/TaskItem';
import { deleteTask, fetchTasks, initDatabase, insertTask, Task, TaskStatus, updateTask } from '../database/db';
import { Colors, styles } from '../styles/appStyles';

export default function HomeScreen() {
  const router = useRouter();
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  useEffect(() => {
    initDatabase().then(loadTasks);
  }, []);

  const loadTasks = async () => {
    const data = await fetchTasks('All');
    setAllTasks(data);
  };

  const handleAddTask = async (title: string) => {
    await insertTask(title);
    loadTasks();
  };

  const handleUpdateTask = async (id: number, newTitle: string, newStatus: TaskStatus) => {
    await updateTask(id, newTitle, newStatus);
    loadTasks();
  };

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    loadTasks();
  };

  const displayedTasks =
    activeFilter === 'All' ? allTasks : allTasks.filter((task) => task.status === activeFilter.toLowerCase());

  return (
    <View style={styles.container}>
      <TaskCounter tasks={allTasks} currentFilter={activeFilter} />
      <TaskInput onAddTask={handleAddTask} />
      <StatusFilter activeFilter={activeFilter} onSelectFilter={setActiveFilter} />

      <FlatList
        data={displayedTasks}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.emptyText}>No {activeFilter.toLowerCase()} tasks found.</Text>}
        renderItem={({ item }) => (
          <TaskItem task={item} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
        )}
      />

      <Pressable
        onPress={() => router.navigate('/about')}
        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 6, paddingVertical: 14 }}>
        <Info size={16} color={Colors.primary} />
        <Text style={{ color: Colors.primary, fontWeight: '700' }}>About App</Text>
      </Pressable>
    </View>
  );
}
