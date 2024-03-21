import React, { createContext, useEffect, useReducer } from 'react';

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: action.payload.completed }
            : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'SET_FILTER':
      return { ...state, currentFilter: action.payload };
    default:
      return state;
  }
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

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
