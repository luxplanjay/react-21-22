import Todo from '../Todo';
import { useSelector, useDispatch } from 'react-redux';
import { todosOperations, todosSelectors } from '../../redux/todos';
import styles from './TodoList.module.css';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelectors.getVisibleTodos);

  const onDeleteTodo = id => dispatch(todosOperations.deleteTodo(id));
  const onToggleCompleted = id => dispatch(todosOperations.toggleCompleted(id));

  return (
    <ul className={styles.list}>
      {todos.map(({ id, description, completed }) => (
        <li key={id} className={completed ? styles.completed : styles.item}>
          <Todo
            text={description}
            completed={completed}
            onToggleCompleted={() =>
              onToggleCompleted({ id, completed: !completed })
            }
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
}
