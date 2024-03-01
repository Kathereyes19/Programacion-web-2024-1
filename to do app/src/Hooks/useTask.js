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
}