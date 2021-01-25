import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.todos.loading;

const getFilter = state => state.todos.filter;

const getAllTodos = state => state.todos.items;

const getTotalTodoCount = state => {
  const todos = getAllTodos(state);
  return todos.length;
};

const getCompletedTodoCount = createSelector([getAllTodos], todos => {
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
});

const getVisibleTodos = createSelector(
  [getAllTodos, getFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter),
    );
  },
);

const todosSelectors = {
  getLoading,
  getFilter,
  getVisibleTodos,
  getTotalTodoCount,
  getCompletedTodoCount,
};
export default todosSelectors;
