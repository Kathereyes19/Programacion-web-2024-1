import React, { useState } from 'react';
import styles from './List.module.css';
import { Button } from '../Button/Button';
import { useTasks } from '../../Hooks/useTasks';

export function List () {
    const {
      filteredTasks,
      hasTasks,
      tasksToDelete,
      handleDelete,
      handleToggle
    } = useTasks()
  
  // Utiliza el hook useTasks para obtener el estado y las funciones relacionadas con las tareas.

    return (
      // Dentro de esta lista, se muestran las tareas.
      <div className={styles.card}>
        <ul className={styles.list}>
          {hasTasks
            ? filteredTasks.map((item) => {
              const deleteAllAnimation = tasksToDelete.includes(item.id)
                ? 'animate__animated animate__fadeOutRightBig'
                : ''
              // Se utiliza un operador ternario para verificar si hay tareas presentes.
              return (
                <Task
                  key={item.id}
                  item={item}
                  onToggle={handleToggle} // función para manejar el cambio de estado de la tarea.
                  onClick={handleDelete}
                  animationClass={item.animationClass || ''}
                  deleteAllAnimation={deleteAllAnimation}
                />
              )
            })
          
            : <p className={`${styles.altText}`}>There are no tasks to show</p>}
        </ul>
  
      </div>
    )
  }
  
  function Task ({ item, onToggle, onClick, deleteAllAnimation }) {
    const [animationClass, setAnimationClass] = useState('');
  
    const { id, text, description, priority, completed } = item;
  
    const handleCheckboxChange = ({ target }) => {
      const { checked } = target;
      onToggle({
        id,
        completed: checked
      });
    };
  
    const handleDelete = () => {  
      setTimeout(() => {
        onClick({ id });
      }, 500);
    };
  
    return (
      <div
        key={id}
        className={`${styles.task} ${animationClass} ${deleteAllAnimation} `}
      >
        <div className={styles.taskTop}>
          <input
            type='checkbox'
            id='check'
            checked={completed}
            className={styles.checkbox}
            onChange={handleCheckboxChange}
          />
        <p className={`${styles.taskText} ${completed ? styles.completed : ''}`}>{text}</p>
        </div>
        <div className={styles.taskBottom}>
          <p>Description: {description}</p>
          {priority !== 'None' && <p>Priority: {priority}</p>}
          <Button className='erase' onClick={handleDelete} />
        </div>
      </div>
    );
  }
  
  