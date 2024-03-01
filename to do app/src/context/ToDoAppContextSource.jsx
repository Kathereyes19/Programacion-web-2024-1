import { ToDoAppContext } from './ToDoAppContext'
import {useState} from 'react'

export function ToDoAppContextSource ({ children }) {
    const initTaskState = JSON.parse(window.localStorage.getItem('Task')) ?? []
    const initFilterState = JSON.parse(window.localStorage.getItem('Filters')) ?? 'all'

    const [Task, setTask] = useState(initTaskState)
    const [currentFilters, setFilters] = useState(initFilterState)
    const [TaskToDelete, setTaskToDelete] = useState ([])

    return (
        <ToDoAppContext.Provider value = {{
            Task,
            setTask,
            currentFilters,
            setFilters,
            TaskToDelete,
            setTaskToDelete
        }}
        >
            {children}
        </ToDoAppContext.Provider>
    )
}