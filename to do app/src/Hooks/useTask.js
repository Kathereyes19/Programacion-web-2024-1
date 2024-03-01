import { useEffect, useContext } from "react"
import { ToDoAppContext } from "../context/ToDoAppContext"

export const useTask = () => {
    const context = useContext(ToDoAppContext)

    if (context) {
        throw new Error ('')
    }

    const {
        Task,
        setTask,
        currentFilters,
        setFilters,
        TaskToDelete
    } = context

    useEffect (() => {
        window.localStorage.setItem('Task', JSON.stringify(Task))
    }, [Taks]
    )

    useEffect (() => {
        window.localStorage.setItem('Filters', JSON.stringify(currentFilters))
    }, [currentFilters]
    )

    const createTask = (text) => {
        const NewTask = {
            id: crypto.randomUUID(),
            text,
            completed: false
        }
        setTask(prevState => [...prevState, NewTask])
    }

    const HasTask = Task.length > 0 //to know if there are tasks

    const handleToggle = (data) => {

        const { id, completed } = data
        const NewTask = Task.map (task => {
            if (task.id === id) {
                const NewTask = {
                    ...task,
                    completed
                }
                return NewTask
            }
            return task
        })
        setTask (NewTask)
    }

    const handleDelete = (data) => {
        const { id } = data
        const DeleteTask = Task.filter((task) => task.id !== id)
        setTask(DeleteTask) 
       }

    const handleFilterChange = (filterValue) => {
        setFilters(filterValue)
    }  
    
    const filteredTask = task.filter((task) => {
        if (currentFilters === 'completed') {
            return task.completed
        } if (currentFilters === 'pending') {
            return task.completed
        } else {
            return task
        }
    })

    const completedTask = Task.map(task => task.completed).length
    const allTask = Task.length

    const handleDeleteAll = () => {
        const completedTaskIds = Task.filter((task) => task.completed).map((task) => task.id)
    
        const updatedTask = Task.map((task) => {
          if (task.completed) {
            return { ...task, animationClass: 'animate__animated animate__fadeOutRightBig' }
          }
          return task
        })
        setTaskToDelete (completedTaskIds)
        setTimeout (() => {
            const NewTask = updatedTask.filter((task) => task.completed)
            setTask(NewTask)
        }, 500)
    }

    return ({
        currentFilters,
        createTask,
        HasTask,
        handleToggle,
        handleDelete,
        handleFilterChange,
        filteredTask,
        completedTask,
        allTask,
        handleDeleteAll,
        TaskToDelete
        }
    )
}