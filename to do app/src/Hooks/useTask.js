import { useEffect, useState, useContext } from "react";
import { ToDoAppContext } from "../context/ToDoAppContext";
import { v4 as uuidv4 } from 'uuid';

export const useTask = () => {
    const context = useContext(ToDoAppContext);
    const [task, setTask] = useState(context.Task);
    const [currentFilters, setFilters] = useState(context.currentFilters);
    const [taskToDelete, setTaskToDelete] = useState(context.TaskToDelete);

    useEffect(() => {
        window.localStorage.setItem('Task', JSON.stringify(task));
    }, [task]);

    useEffect(() => {
        window.localStorage.setItem('Filters', JSON.stringify(currentFilters));
    }, [currentFilters]);

    const createTask = (text) => {
        const newTask = {
            id: uuidv4(),
            text,
            completed: false
        };
        setTask(prevState => [...prevState, newTask]);
    };

    const handleToggle = (id, completed) => {
        const newTask = task.map(task => {
            if (task.id === id) {
                return { ...task, completed };
            }
            return task;
        });
        setTask(newTask);
    };

    const handleDelete = (id) => {
        const updatedTask = task.filter(task => task.id !== id);
        setTask(updatedTask);
    };

    const handleFilterChange = (filterValue) => {
        setFilters(filterValue);
    };

    const filteredTask = task.filter(task => {
        if (currentFilters === 'completed') {
            return task.completed;
        } else if (currentFilters === 'pending') {
            return !task.completed;
        } else {
            return true;
        }
    });

    const completedTask = task.filter(task => task.completed).length;
    const allTask = task.length;

    const handleDeleteAll = () => {
        const completedTaskIds = task.filter(task => task.completed).map(task => task.id);

        const updatedTask = task.map(task => {
            if (task.completed) {
                return { ...task, animationClass: 'animate__animated animate__fadeOutRightBig' };
            }
            return task;
        });
        setTaskToDelete(completedTaskIds);
        setTimeout(() => {
            const newTask = updatedTask.filter(task => !task.completed);
            setTask(newTask);
        }, 500);
    };

    return {
        currentFilters,
        createTask,
        hasTask: task.length > 0,
        handleToggle,
        handleDelete,
        handleFilterChange,
        filteredTask,
        completedTask,
        allTask,
        handleDeleteAll,
        taskToDelete
    };
};
