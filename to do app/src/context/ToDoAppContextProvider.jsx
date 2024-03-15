import { TodoContext } from './ToDoAppContext'
import { useState } from 'react'

// Actúa como un proveedor de contexto para la aplicación de lista de tareas

export function TodoContextProvider ({ children }) {

  // Toma un prop children, que representa los elementos secundarios que están envueltos por este proveedor de contexto.

  const initTaskState = JSON.parse(window.localStorage.getItem('Tasks')) ?? []

  // Lee el estado inicial de las tareas desde el almacenamiento local del navegador. 
  // Si no hay un estado guardado previamente, se inicializa como un array vacío.

  const initFilterState = JSON.parse(window.localStorage.getItem('Filter')) ?? 'all'

  //  Lee el estado inicial del filtro desde el almacenamiento local del navegador. 
  // Si no hay un estado guardado previamente, se inicializa como 'all'.

  const [tasks, setTasks] = useState(initTaskState) // Para array de tareas
  const [currentFilter, setFilter] = useState(initFilterState) // Para los filtros
  const [tasksToDelete, setTasksToDelete] = useState([]) // Para animar las tareas que se eliminan a la vez

  return (
    <TodoContext.Provider value={{
      tasks,
      setTasks,
      currentFilter,
      setFilter,
      tasksToDelete,
      setTasksToDelete
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}

// children: Renderiza los elementos secundarios dentro del proveedor de contexto. 
// Esto permite que los componentes secundarios accedan al contexto proporcionado por TodoContext.Provider.
