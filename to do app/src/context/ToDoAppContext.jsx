import { createContext, useEffect, useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer'
// Se crea un contexto para manejar el estado global de las tareas.
export const TodoContext = createContext();

// Este hook personalizado se utiliza para acceder al contexto de TodoContext.
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoContextProvider');
  }
  return context;
};

// Este componente proporciona el contexto de las tareas a toda la aplicación.
export const TodoContextProvider = ({ children }) => {
  // Definición de los valores por defecto para las tareas y el filtro.
  const defaultTasks = [];
  const defaultFilter = 'all';

  // Función para inicializar el estado de las tareas desde el localStorage.
  const initTaskState = () => {
    try {
      const tasks = JSON.parse(window.localStorage.getItem('Tasks')) || defaultTasks;
      return tasks;
    } catch (error) {
      console.error('Error parsing tasks from localStorage:', error);
      return defaultTasks;
    }
  };

  // Función para inicializar el estado del filtro desde el localStorage.
  const initFilterState = () => {
    try {
      const filter = JSON.parse(window.localStorage.getItem('Filter')) || defaultFilter;
      return filter;
    } catch (error) {
      console.error('Error parsing filter from localStorage:', error);
      return defaultFilter;
    }
  };

  // Se utiliza el hook useReducer para manejar el estado de las tareas y el filtro,
  // utilizando el reducer todoReducer importado.
  const [state, dispatch] = useReducer(todoReducer, {
    tasks: initTaskState(),
    currentFilter: initFilterState(),
  });

  // Efecto para guardar las tareas en el localStorage cada vez que cambian.
  useEffect(() => {
    window.localStorage.setItem('Tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  // Efecto para guardar el filtro en el localStorage cada vez que cambia.
  useEffect(() => {
    window.localStorage.setItem('Filter', JSON.stringify(state.currentFilter));
  }, [state.currentFilter]);

  // Función para manejar la acción de eliminar todas las tareas.
  const handleDeleteAll = () => {
    dispatch({ type: 'DELETE_ALL_TASKS' });
  };

  // Se provee el contexto de las tareas a los componentes hijos.
  return (
    <TodoContext.Provider value={{ state, dispatch, handleDeleteAll }}>
      {children}
    </TodoContext.Provider>
  );
};
