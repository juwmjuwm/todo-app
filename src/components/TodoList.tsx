import type { Todo } from '../App';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: Todo[];
  onRemove: (id: string) => void;
}

export default function TodoList({ todos, onRemove }: TodoListProps) {
  if (todos.length === 0) {
    return <p className={styles.empty}>Brak zadań. :) Dodaj jakieś powyżej!</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </ul>
  );
}
