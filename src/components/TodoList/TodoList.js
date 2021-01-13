import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import { getVisibleTodos } from '../../redux/todos/todos-selectors';
import Todo from '../Todo';
import './TodoList.scss';

const TodoList = () => {
  const todos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();

  const onDeleteTodo = id => dispatch(todosActions.deleteTodo(id));
  const onToggleCompleted = id => dispatch(todosActions.toggleCompleted(id));

  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={`TodoList__item ${
            completed ? 'TodoList__item--completed' : ''
          }`}
        >
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
