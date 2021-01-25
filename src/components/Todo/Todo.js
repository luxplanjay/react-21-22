import styles from './Todo.module.css';
export default function Todo({ text, completed, onToggleCompleted, onDelete }) {
  return (
    <>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className={styles.text}>{text}</p>
      <button type="button" className={styles.button} onClick={onDelete}>
        Удалить
      </button>
    </>
  );
}
