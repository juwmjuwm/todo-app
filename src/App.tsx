import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import styles from './App.module.css';

export interface Todo {
  id: string;
  name: string;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string): void => {
    if (!name.trim()) {
      return;
    }
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), name }]);
  };

  const removeTodo = (id: string): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista zadań</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onRemove={removeTodo} />
    </div>
  );
}
