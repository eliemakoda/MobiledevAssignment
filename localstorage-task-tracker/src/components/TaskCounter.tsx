import { Text, View } from 'react-native';

import { Task, TaskStatus } from '../database/db';
import { StatusColors, styles } from '../styles/appStyles';
import { Filter } from './StatusFilter';

type Props = {
  tasks: Task[];
  currentFilter: Filter;
};

export const TaskCounter = ({ tasks, currentFilter }: Props) => {
  const count = (status: TaskStatus) => tasks.filter((t) => t.status === status).length;

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>
        {currentFilter === 'All' ? 'Total Tasks' : `${currentFilter} Tasks`}:{' '}
        {currentFilter === 'All' ? tasks.length : count(currentFilter.toLowerCase() as TaskStatus)}
      </Text>
      <View style={styles.counterBreakdown}>
        {(Object.keys(StatusColors) as TaskStatus[]).map((status) => {
          const c = StatusColors[status];
          return (
            <View key={status} style={[styles.counterPill, { backgroundColor: c.bg }]}>
              <Text style={[styles.counterPillValue, { color: c.fg }]}>{count(status)}</Text>
              <Text style={[styles.counterPillLabel, { color: c.fg }]}>{c.label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
