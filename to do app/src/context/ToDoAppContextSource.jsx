import { ToDoAppContext } from './ToDoAppContext'
import {useState} from 'react'

export function ToDoAppContextSource ({ children }) {
    const initTaskState = JSON.parse(window.localStorage.getItem('Task')) ?? []
    const initFilterState = JSON.parse(window.localStorage.getItem('Filters')) ?? 'all'

    const [Task, setTask] = useState(initTaskState)
    const [currentFilter, setFilter] = useState(initFilterState)
    const [TaskToDelete, setTaskToDelete] = useState ([])

    return (
        <ToDoAppContext.Source value = {{
            Task,
            setTask,
            currentFilter,
            setFilter,
            TaskToDelete,
            setTaskToDelete
        }}
        >
            {children}
        </ToDoAppContext.Source>
    )
}