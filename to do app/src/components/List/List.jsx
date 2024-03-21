import React from 'react';
import styles from './List.module.css';
import { Button } from '../Button/Button'; // Importamos el componente Button
import { useTasks } from '../../Hooks/useTasks'; // Importamos el hook useTasks

// Componente funcional List que muestra una lista de tareas
export function List() {
  // Usamos el hook useTasks para obtener las tareas y las funciones para cambiarlas
  const {
    tasks,
    toggleTask,
    deleteTask
  } = useTasks();

  return (
    <div className={styles.card}>
      <ul className={styles.list}>
        {tasks.length > 0 ? ( // Si hay tareas, las mostramos
          tasks.map((item) => (
            <Task
              key={item.id}
              taskName={item.taskName} // Pasamos el nombre de la tarea como prop
              item={item}
              onToggle={toggleTask} // Pasamos la función para cambiar el estado de una tarea como prop
              onDelete={deleteTask} // Pasamos la función para eliminar una tarea como prop
            />
          ))
        ) : (
          // Si no hay tareas, mostramos un mensaje alternativo
          <p className={styles.altText}>There are no tasks to show</p>
        )}
      </ul>
    </div>
  );
}

// Componente funcional Task que representa una tarea en la lista
function Task({ taskName, item, onToggle, onDelete }) {
  const { id, description, priority, completed } = item; // Extraemos propiedades de la tarea

  // Función para manejar el cambio de estado de completado/no completado de la tarea
  const handleCheckboxChange = () => {
    onToggle(id, !completed); // Llamamos a la función para cambiar el estado de la tarea
  };

  // Función para manejar la eliminación de la tarea
  const handleDelete = () => {
    onDelete(id); // Llamamos a la función para eliminar la tarea
  };

  return (
    <div className={styles.task}>
      <div className={styles.taskTop}>
        <input
          type="checkbox"
          checked={completed}
          className={styles.checkbox}
          onChange={handleCheckboxChange} // Llamamos a la función para manejar el cambio de estado
        />
        <p className={`${styles.taskText} ${completed ? styles.completed : ''}`}>
          {taskName} {/* Mostramos el nombre de la tarea */}
        </p>
      </div>
      <div className={styles.taskBottom}>
        <p>Description: {description}</p> {/* Mostramos la descripción de la tarea */}
        {priority !== 'None' && <p>Priority: {priority}</p>} {/* Mostramos la prioridad si no es 'None' */}
        <Button className="erase" onClick={handleDelete} /> {/* Botón para eliminar la tarea */}
      </div>
    </div>
  );
}
