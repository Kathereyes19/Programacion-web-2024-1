export const todoReducer = (state, action) => {
  // Se utiliza un switch statement para determinar qué acción se está ejecutando.
  switch (action.type) {
    // Si la acción es 'ADD_TASK', se agrega una nueva tarea al estado actual.
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    // Si la acción es 'TOGGLE_TASK', se actualiza el estado de una tarea para
    // indicar si está completada o no.
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          // Se revisa si el id de la tarea coincide con el id proporcionado en la acción.
          task.id === action.payload.id
            // Si coincide, se actualiza el estado de la tarea para indicar si está completada o no.
            ? { ...task, completed: action.payload.completed }
            // Si no coincide, se deja la tarea sin cambios.
            : task
        ),
      };
    // Si la acción es 'DELETE_TASK', se elimina una tarea del estado actual.
    case 'DELETE_TASK':
      return {
        ...state,
        // Se filtran todas las tareas excepto aquella que coincida con el id proporcionado en la acción.
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    // Si la acción es 'DELETE_ALL_TASKS', se eliminan todas las tareas del estado.
    case 'DELETE_ALL_TASKS':
      return { ...state, tasks: [] }; // Borrar todas las tareas
    // Si la acción es 'SET_FILTER', se actualiza el filtro actual en el estado.
    case 'SET_FILTER':
      return { ...state, currentFilter: action.payload };
    // Si la acción no coincide con ninguno de los casos anteriores,
    // se devuelve el estado actual sin cambios.
    default:
      return state;
  }
};
