export const ToDoReducer = (state, action) => {
    switch (action.type) {
      case 'SET_TASKS':
        return { ...state, tasks: action.payload };
      case 'SET_FILTER':
        return { ...state, currentFilter: action.payload };
      case 'SET_TASKS_TO_DELETE':
        return { ...state, tasksToDelete: action.payload };
      default:
        return state;
    }
  };
  