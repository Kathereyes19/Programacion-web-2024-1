export const todoReducer = (state, action) => {

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

    case 'DELETE_ALL_TASKS':
      return { ...state, tasks: [] }; 
      
    case 'SET_FILTER':
      return { ...state, currentFilter: action.payload };
    default:
      return state;
  }
};
