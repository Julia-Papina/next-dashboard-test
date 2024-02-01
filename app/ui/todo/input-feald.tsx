import styles from '@/app/ui/todo/home.module.css';

export default function InputFeald({ text, handleInput, handleSubmit }) {
    return (
        <label>

        <input
            className={styles.todo__input}
            value={text}
            onChange={(e) => handleInput(e.target.value)}
            placeholder='ToDo'
          />
          <button className={styles.todo__button} onClick={handleSubmit}>
            Add ToDo
          </button>
          
        </label>
    )
}