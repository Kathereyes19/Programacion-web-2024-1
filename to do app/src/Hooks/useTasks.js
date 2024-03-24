import { useContext } from 'react';
import { TodoContext } from '../context/ToDoAppContext';

const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const useTasks = () => {
  const { state, dispatch, handleDeleteAll } = useContext(TodoContext); 
  const { tasks, currentFilter } = state;

  const createTask = (taskData) => {
    const newTask = {
      id: generateId(), 
      ...taskData,
      completed: false
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };

  const toggleTask = (taskId, completed) => {
    dispatch({ type: 'TOGGLE_TASK', payload: { id: taskId, completed } });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === 'completed') {
      return task.completed;
    } else if (currentFilter === 'pending') {
      return !task.completed;
    } else {
      return true;
    }
  });

  const completedTasks = tasks.filter((task) => task.completed).length;
  const allTasks = tasks.length;

  return {
    tasks: filteredTasks,
    createTask,
    toggleTask,
    deleteTask,
    setFilter,
    completedTasks,
    allTasks,
    handleDeleteAll 
  };
};

