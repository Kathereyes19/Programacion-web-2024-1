import React from 'react';
import { Button } from '../Button/Button'; // Importamos el componente Button
import { useTasks } from '../../Hooks/useTasks'; // Importamos el hook useTasks
import { useForm } from '../../Hooks/useForm'; // Importamos el hook useForm
import styles from '../Form/Form.module.css'; // Importamos los estilos CSS del formulario

// Componente funcional Form que muestra un formulario para agregar una nueva tarea
export function Form() {
    const { createTask } = useTasks(); // Obtenemos la función createTask del hook useTasks

    // Obtenemos el estado y las funciones relacionadas con el formulario del hook useForm
    const { inputValues, handleChange, handleSubmit } = useForm(createTask);

    return (
        // Formulario que se envía al hacer submit y que llama a la función handleSubmit
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            {/* Campo para ingresar el nombre de la tarea */}
            <div className={styles.inputContainer}>
                <label htmlFor="taskName">Task Name:</label>
                <input
                    type="text"
                    id="taskName"
                    name="taskName"
                    placeholder="Enter task name"
                    className={styles.taskInput}
                    value={inputValues.taskName} // Valor del campo obtenido del estado
                    onChange={handleChange} // Función para manejar cambios en el campo
                />
            </div>
            {/* Campo para ingresar la descripción de la tarea */}
            <div className={styles.inputContainer}>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Enter task description"
                    className={styles.taskInput}
                    value={inputValues.description} // Valor del campo obtenido del estado
                    onChange={handleChange} // Función para manejar cambios en el campo
                />
            </div>
            {/* Selector para elegir la prioridad de la tarea */}
            <div className={styles.priorityContainer}>
                <label htmlFor="priority">Priority:</label>
                <select
                    id="priority"
                    name="priority"
                    value={inputValues.priority} // Valor del campo obtenido del estado
                    onChange={handleChange} // Función para manejar cambios en el campo
                    className={styles.selectInput}
                >
                    {/* Opciones para la prioridad */}
                    <option value="">None</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            {/* Botón para enviar el formulario */}
            <Button className="add" type="submit" /> {/* Tipo de botón es submit */}
        </form>
    );
}
