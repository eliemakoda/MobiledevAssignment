import * as SQLite from 'expo-sqlite';

export type TaskStatus = 'pending' | 'ongoing' | 'completed';

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};

let dbPromise: Promise<SQLite.SQLiteDatabase> | null = null;
const getDb = () => (dbPromise ??= SQLite.openDatabaseAsync('todoApp.db'));

export const initDatabase = async () => {
  const db = await getDb();
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending'
    );
  `);

  const row = await db.getFirstAsync<{ count: number }>('SELECT COUNT(*) AS count FROM tasks;');
  if (row?.count === 0) {
    const samples: [string, TaskStatus][] = [
      ['Read the expo-sqlite documentation', 'completed'],
      ['Create the tasks table', 'completed'],
      ['Build the TaskItem component', 'ongoing'],
      ['Add the status filter', 'ongoing'],
      ['Write the About screen', 'pending'],
      ['Prepare the TD presentation', 'pending'],
    ];
    for (const [title, status] of samples) {
      await db.runAsync('INSERT INTO tasks (title, status) VALUES (?, ?);', [title, status]);
    }
  }
};

export const fetchTasks = async (status: 'All' | TaskStatus = 'All'): Promise<Task[]> => {
  const db = await getDb();
  if (status === 'All') return db.getAllAsync<Task>('SELECT * FROM tasks ORDER BY id DESC;');
  return db.getAllAsync<Task>('SELECT * FROM tasks WHERE status = ? ORDER BY id DESC;', [status]);
};

export const insertTask = async (title: string) => {
  const db = await getDb();
  const result = await db.runAsync(
    'INSERT INTO tasks (title, status) VALUES (?, ?);',
    [title, 'pending'],
  );
  return result.lastInsertRowId;
};

export const updateTask = async (id: number, newTitle: string, newStatus: TaskStatus) => {
  const db = await getDb();
  await db.runAsync('UPDATE tasks SET title = ?, status = ? WHERE id = ?;', [newTitle, newStatus, id]);
};

export const deleteTask = async (id: number) => {
  const db = await getDb();
  await db.runAsync('DELETE FROM tasks WHERE id = ?;', [id]);
};
