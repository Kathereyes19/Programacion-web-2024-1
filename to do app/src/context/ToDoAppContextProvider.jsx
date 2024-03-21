import { createContext, useReducer, useEffect } from 'react';
import { ToDoReducer } from '../reducers/ToDoReducer';

export const TodoContext = createContext(null);

const initFilterState = JSON.parse(window.localStorage.getItem('Filter')) ?? 'all';
const initTaskState = JSON.parse(window.localStorage.getItem('Tasks')) ?? [];

const initialState = {
  tasks: initTaskState,
  currentFilter: initFilterState,
  tasksToDelete: []
};

export function TodoContextProvider ({ children }) {
  const [state, dispatch] = useReducer(ToDoReducer, initialState);

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
}
