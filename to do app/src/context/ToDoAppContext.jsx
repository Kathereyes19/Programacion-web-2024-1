import { createContext, useEffect, useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer'

export const TodoContext = createContext();

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoContextProvider');
  }
  return context;
};

export const TodoContextProvider = ({ children }) => {
  const defaultTasks = [];
  const defaultFilter = 'all';

  const initTaskState = () => {
    try {
      const tasks = JSON.parse(window.localStorage.getItem('Tasks')) || defaultTasks;
      return tasks;
    } catch (error) {
      console.error('Error parsing tasks from localStorage:', error);
      return defaultTasks;
    }
  };

  const initFilterState = () => {
    try {
      const filter = JSON.parse(window.localStorage.getItem('Filter')) || defaultFilter;
      return filter;
    } catch (error) {
      console.error('Error parsing filter from localStorage:', error);
      return defaultFilter;
    }
  };

  const [state, dispatch] = useReducer(todoReducer, {
    tasks: initTaskState(),
    currentFilter: initFilterState(),
  });

  useEffect(() => {
    window.localStorage.setItem('Tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  useEffect(() => {
    window.localStorage.setItem('Filter', JSON.stringify(state.currentFilter));
  }, [state.currentFilter]);

  const handleDeleteAll = () => {
    dispatch({ type: 'DELETE_ALL_TASKS' });
  };

  return (
    <TodoContext.Provider value={{ state, dispatch, handleDeleteAll }}>
      {children}
    </TodoContext.Provider>
  );
};
 