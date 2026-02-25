import styles from './TodoItem.module.css';
import type { Todo } from '../App';

interface TodoItemProps {
  todo: Todo;
  onRemove: (id: string) => void;
}

export default function TodoItem({ todo, onRemove }: TodoItemProps) {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{todo.name}</span>
      <button
        className={styles.deleteButton}
        onClick={() => onRemove(todo.id)}
        aria-label="Delete todo"
      >
        <span className="material-icons">delete</span>
      </button>
    </li>
  );
}
