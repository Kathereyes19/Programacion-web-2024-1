import { useEffect, useContext, useReducer } from 'react';
import { TodoContext } from '../context/ToDoAppContextProvider';
import { ToDoReducer } from '../reducers/ToDoReducer';
import crypto from 'crypto'; // Asegúrate de importar crypto si no lo has hecho

export const useTasks = () => {
  // Obtener el contexto de TodoContextProvider
  const context = useContext(TodoContext);

  // Verificar si el contexto existe
  if (!context) {
    throw new Error('This component should be within a TodoContextProvider Component');
  }

  // Extraer valores del contexto
  const {
    tasks,
    setTasks,
    currentFilter,
    setFilter,
    tasksToDelete,
    setTasksToDelete
  } = context;

  // Reducer para el estado local del hook
  const [state, dispatch] = useReducer(ToDoReducer, {
    tasks: tasks || [], // Valor predeterminado para tasks
    currentFilter: 'all',
    tasksToDelete: []
  });

  // Efecto para guardar las tareas en el almacenamiento local cuando cambian
  useEffect(() => {
    window.localStorage.setItem('Tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Efecto para guardar el filtro actual en el almacenamiento local cuando cambia
  useEffect(() => {
    window.localStorage.setItem('Filter', JSON.stringify(currentFilter));
  }, [currentFilter]);

  // Función para crear nuevas tareas
  const createTasks = (taskData) => {
    const newTask = {
      id: crypto.randomUUID(),
      text: taskData.taskName,
      description: taskData.description,
      priority: taskData.priority,
      completed: false
    };
    setTasks(prevState => [...prevState, newTask]);
  };

  // Verificar si hay tareas
  const hasTasks = state.tasks.length > 0;

  // Función para cambiar el estado de completitud de una tarea
  const handleToggle = (data) => {
    const { id, completed } = data;
    const newTasks = state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // Función para eliminar una tarea
  const handleDelete = (data) => {
    const { id } = data;
    const deleteTask = state.tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
  };

  // Función para cambiar el filtro actual
  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  // Filtrar tareas según el filtro actual
  const filteredTasks = state.tasks.filter((task) => {
    if (state.currentFilter === 'completed') {
      return task.completed;
    } 
    if (state.currentFilter === 'pending') {
      return !task.completed;
    }
    return true;
  });

  // Contar tareas completadas
  const completedTasks = state.tasks.filter(task => task.completed).length;

  // Contar todas las tareas
  const allTasks = state.tasks.length;

  // Función para eliminar todas las tareas completadas
  const handleDeleteAll = () => {
    const completedTaskIds = state.tasks.filter((task) => task.completed).map((task) => task.id);

    setTasksToDelete(completedTaskIds);

    setTimeout(() => {
      const newTasks = state.tasks.filter((task) => !task.completed);
      setTasks(newTasks);
    }, 500);
  };

  // Devolver los valores y funciones necesarios
  return {
    tasks: state.tasks,
    currentFilter: state.currentFilter,
    createTasks,
    hasTasks,
    handleToggle,
    handleDelete,
    handleFilterChange,
    filteredTasks,
    completedTasks,
    allTasks,
    handleDeleteAll, 
    tasksToDelete
  };
};
