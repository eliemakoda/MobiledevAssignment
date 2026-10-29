import { Pressable, Text, View } from 'react-native';

import { Colors, StatusColors, styles } from '../styles/appStyles';

export type Filter = 'All' | 'Pending' | 'Ongoing' | 'Completed';

const FILTERS: Filter[] = ['All', 'Pending', 'Ongoing', 'Completed'];

type Props = {
  activeFilter: Filter;
  onSelectFilter: (filter: Filter) => void;
};

export const StatusFilter = ({ activeFilter, onSelectFilter }: Props) => (
  <View style={styles.filterRow}>
    {FILTERS.map((filter) => {
      const active = filter === activeFilter;
      const color =
        filter === 'All' ? Colors.primary : StatusColors[filter.toLowerCase() as keyof typeof StatusColors].fg;
      return (
        <Pressable
          key={filter}
          onPress={() => onSelectFilter(filter)}
          style={[styles.filterChip, active && { backgroundColor: color, borderColor: color }]}>
          <Text style={[styles.filterText, active && { color: '#FFFFFF' }]}>{filter}</Text>
        </Pressable>
      );
    })}
  </View>
);
