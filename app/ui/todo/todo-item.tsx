import styles from '@/app/ui/todo/home.module.css';

export default function TodoItem({ id, text, completed, removeTodo, toggleTodoCompleted }) {
  return (
    <li>
      <input
        className={styles.input__checkbox}
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCompleted(id)}
      />
      <span className={styles.checkbox__span}>{text}</span>
      <button onClick={() => removeTodo(id)}>&times;</button>
    </li>
  );
}