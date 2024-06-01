import React from 'react';
import TodoItem from '../components/TodoItem';
import dummyData from '../data/todos';
import { useForm } from 'react-hook-form';

interface FormData {
  completed: boolean;
  description: string;
}

function App() {
  const [todos, setTodos] = React.useState(() => dummyData);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) => {
        if (prevTodo.id === id) {
          return { ...prevTodo, completed };
        }
        return prevTodo;
      });
    });
  }

  function onSubmit({ completed, description }: FormData) {
    if (!isValid) {
      return;
    }

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: prevTodos.length + 1,
          completed,
          title: description,
        },
      ];
    });
  }

  return (
    <main className="h-screen bg-slate-600 py-12">
      <h1 className="text-center text-3xl font-bold text-cyan-50">
        Your Todos
      </h1>
      <form
        className="mx-auto mt-5 flex max-w-xl flex-col justify-around gap-4 rounded-md bg-slate-200 p-4 md:flex-row"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex items-center gap-2 font-bold text-cyan-800">
          Done
          <input
            type="checkbox"
            className="scale-125"
            {...register('completed')}
          />
        </label>
        <label
          className={`flex items-center gap-2 font-bold text-cyan-800 ${errors.description ? 'text-red-500' : ''}`}
        >
          Description:
          <input
            className={`resize-none rounded-md border border-gray-400 p-1 focus:border-cyan-400 focus:outline-none ${errors.description ? 'border-red-500' : ''}`}
            {...register('description', { required: true })}
          />
        </label>
        {errors.description && (
          <span className="text-red-500">This field is required</span>
        )}
        <button
          type="submit"
          className="rounded-full bg-cyan-400 p-3 text-center font-bold text-white outline-none hover:bg-cyan-600 focus:outline-blue-300"
        >
          Add Todo
        </button>
      </form>
      <div className="mx-auto mt-5 max-w-lg rounded-md bg-slate-100 p-5">
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              setTodoCompleted={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
