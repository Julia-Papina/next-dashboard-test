'use client';
import clsx from 'clsx';

import { useState } from 'react';
import styles from '@/app/ui/todo/home.module.css';

export default function Todo() {
  type Todo = {
    id: string;
    text: string;
    completed: boolean;
  };

  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toString(),
          text,
          completed: false,
        },
      ]);
      setText('');
    }
  };

  const removeTodo = (todoId: string) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoCompleted = (todoId: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      }),
    );
  };

  return (
    <div className="App">
      <label>
        <input
          className={styles.todo__input}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.todo__button} onClick={addTodo}>
          Add ToDo
        </button>
      </label>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              className={styles.input__checkbox}
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoCompleted(todo.id)}
            />
            <span className={styles.checkbox__span}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
