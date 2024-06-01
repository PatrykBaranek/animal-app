
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  {
    id: 1,
    title: 'Learn React',
    completed: true,
  },
  {
    id: 2,
    title: 'Learn TypeScript',
    completed: false,
  },
];

export default todos;