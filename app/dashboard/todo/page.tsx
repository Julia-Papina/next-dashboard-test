'use client';
import clsx from 'clsx';

import { useState } from 'react';
import TodoList from '@/app/ui/todo/todo-list';
import InputFeald from '@/app/ui/todo/input-feald';

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
      <InputFeald text={text} handleInput={setText} handleSubmit={addTodo} />
    
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodoCompleted={toggleTodoCompleted} />


    </div>
  );
}
