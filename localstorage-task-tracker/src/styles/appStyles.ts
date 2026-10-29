import { StyleSheet } from 'react-native';

import { TaskStatus } from '../database/db';

export const Colors = {
  primary: '#4338CA',
  primarySoft: '#E0E7FF',
  header: '#1E293B',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  text: '#0F172A',
  textMuted: '#64748B',
  placeholder: '#94A3B8',
  border: '#E2E8F0',
  danger: '#DC2626',
};

export const StatusColors: Record<TaskStatus, { fg: string; bg: string; label: string }> = {
  pending: { fg: '#B45309', bg: '#FEF3C7', label: 'Pending' },
  ongoing: { fg: '#1D4ED8', bg: '#DBEAFE', label: 'Ongoing' },
  completed: { fg: '#15803D', bg: '#DCFCE7', label: 'Completed' },
};

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, paddingHorizontal: 16, paddingTop: 16 },

  counterContainer: {
    backgroundColor: Colors.header,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },
  counterText: { color: '#FFFFFF', fontSize: 22, fontWeight: '800' },
  counterBreakdown: { flexDirection: 'row', gap: 8, marginTop: 12 },
  counterPill: { flex: 1, borderRadius: 12, paddingVertical: 8, alignItems: 'center' },
  counterPillValue: { fontSize: 18, fontWeight: '800' },
  counterPillLabel: { fontSize: 11, fontWeight: '600' },

  inputRow: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  input: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 15,
    color: Colors.text,
  },
  addButton: {
    width: 48,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterRow: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  filterChip: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 999,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  filterText: { fontSize: 13, fontWeight: '700', color: Colors.textMuted },

  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  taskTitle: { fontSize: 15, fontWeight: '600', color: Colors.text },
  taskTitleDone: { textDecorationLine: 'line-through', color: Colors.placeholder },
  statusBadge: { alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 999, marginTop: 6 },
  statusBadgeText: { fontSize: 11, fontWeight: '700' },
  editInput: {
    fontSize: 15,
    color: Colors.text,
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.primary,
    paddingVertical: 2,
  },
  iconButton: { padding: 6 },

  emptyText: { textAlign: 'center', color: Colors.placeholder, marginTop: 20 },
});
