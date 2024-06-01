import { Todo } from '../data/todos';

interface TodoItemProps {
  todo: Todo;
  setTodoCompleted: (id: number, completed: boolean) => void;
}

function TodoItem({ todo, setTodoCompleted }: TodoItemProps) {
  return (
    <div className="py-2">
      <label className="flex cursor-pointer items-center gap-3 rounded-md border border-gray-400 bg-white p-2 hover:bg-slate-50">
        <input
          type="checkbox"
          className="scale-125"
          checked={todo.completed}
          onChange={() => setTodoCompleted(todo.id, !todo.completed)}
        />
        <span className={todo.completed ? 'text-gray-400 line-through' : ''}>
          {todo.title}
        </span>
      </label>
    </div>
  );
}

export default TodoItem;
