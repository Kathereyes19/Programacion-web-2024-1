import { TodoContext } from './ToDoAppContext'
import { useReducer, useEffect } from 'react'
import { ToDoReducer } from '../reducers/ToDoAppReducer';

export function TodoContextProvider ({ children }) {
  const initTaskState = JSON.parse(window.localStorage.getItem('Tasks')) ?? [];
  const initFilterState = JSON.parse(window.localStorage.getItem('Filter')) ?? 'all';
  const initialState = {
    tasks: initTaskState,
    currentFilter: initFilterState,
    tasksToDelete: []
  };

  const [state, dispatch] = useReducer(ToDoReducer, initialState); // Aquí se corrige el nombre de la función

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
