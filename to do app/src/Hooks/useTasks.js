import { useEffect, useContext } from 'react'
import { TodoContext } from '../context/ToDoAppContext'

export const useTasks = () => {
  const context = useContext(TodoContext)

  // Custom hook para gestionar las tareas dentro del to do app. 
  // La const context = useContext(TodoContext) usa la función para obtener el contexto 

  if (!context) {
    throw new Error('This component should be within a TodoContextProvider Component')
  // Verifica si el contexto existe. Si no existe, arroja un error
  }

  const {
    tasks,
    setTasks,
    currentFilter,
    setFilter,
    tasksToDelete,
    setTasksToDelete
  } = context

  useEffect(() => {
    window.localStorage.setItem('Tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    window.localStorage.setItem('Filter', JSON.stringify(currentFilter))
  }, [currentFilter])

// Se definen dos useEffect. 
// El primero se activa cada vez que cambian las tareas, y guarda las tareas en el almacenamiento local del navegador. 
// El segundo se activa cada vez que cambia el filtro actual (currentFilter), y guarda el filtro en el local.

  const createTasks = (taskData) => {
    const newTask = {
      id: crypto.randomUUID(),
      text: taskData.taskName,
      description: taskData.description,
      priority: taskData.priority,
      completed: false
    }
    setTasks(prevState => [...prevState, newTask])
  }

  // Una función que recibe datos de tarea (taskData) y crea una nueva tarea con un ID único generado por crypto.randomUUID(). 
  // Agrega esta tarea a la lista de tareas existentes utilizando setTasks.
  
  const hasTasks = tasks.length > 0 
  // indica si hay tareas presentes

  const handleToggle = (data) => {
    console.log(data)
    const { id, completed } = data
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        const newTask = {
          ...task,
          completed
        }
        return newTask
      }
      return task
    })
    setTasks(newTasks)
  } 

  // Maneja el cambio de estado de una tarea entre completada y no completada. 
  // Toma un objeto de datos que incluye el ID de la tarea y el nuevo estado de completado.
  // Actualiza la lista de tareas usando setTasks.

  const handleDelete = (data) => {
    console.log(data)
    const { id } = data
    const deleteTask = tasks.filter((task) => task.id !== id)
    setTasks(deleteTask)
  }

  // Maneja la eliminación de una tarea. 
  // Toma un objeto de datos que incluye el ID de la tarea a eliminar. 
  // Filtra las tareas para excluir la tarea con el ID dado y actualiza la lista de tareas utilizando setTasks.

  const handleFilterChange = (filterValue) => {
    console.log(filterValue)
    setFilter(filterValue)
  }

  // Maneja el cambio de filtro. 
  //Actualiza el filtro actual utilizando setFilter.

  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === 'completed') {
      return task.completed
    } if (currentFilter === 'pending') {
      return !task.completed
    } else {
      return task
    }
  })

  // Lista de tareas filtradas según el filtro actual.

  const completedTasks = tasks.filter(task => task.completed).length
  const allTasks = tasks.length

  // La cantidad de tareas completadas.
  // La cantidad total de tareas.

  const handleDeleteAll = () => {
    const completedTaskIds = tasks.filter((task) => task.completed).map((task) => task.id)

    const updatedTasks = tasks.map((task) => {
      if (task.completed) {
        return { ...task }
      }
      return task
    })
    setTasksToDelete(completedTaskIds)

    setTimeout(() => {
      const newTasks = updatedTasks.filter((task) => !task.completed)
      setTasks(newTasks)
    }, 500)
  }

  // Maneja la eliminación de todas las tareas completadas. 
  //Guarda los IDs de las tareas completadas a eliminar en tasksToDelete
  //Las elimina de la lista de tareas después de un cierto tiempo utilizando setTasks.
  
  return {
    currentFilter,
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
  }
}
