import React, { useState } from 'react';
import styles from './TodoInput.module.css';

interface TodoInputProps {
  onAdd: (name: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onAdd(value);
    setValue('');
  };

  return (
    <form className={styles.row} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="Dodaj nowe zadanie..."
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
