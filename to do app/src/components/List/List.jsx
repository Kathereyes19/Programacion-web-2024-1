import React from 'react';
import styles from './List.module.css';
import { Button } from '../Button/Button'; 
import { useTasks } from '../../Hooks/useTasks'; 

export function List() {
  const {
    tasks,
    toggleTask,
    deleteTask
  } = useTasks();

  return (
    <div className={styles.card}>
      <ul className={styles.list}>
        {tasks.length > 0 ? ( 
          tasks.map((item) => (
            <Task
              key={item.id}
              taskName={item.taskName} 
              item={item}
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          ))
        ) : (
          <p className={styles.altText}>There are no tasks to show</p>
        )}
      </ul>
    </div>
  );
}

function Task({ taskName, item, onToggle, onDelete }) {
  const { id, description, priority, completed } = item; 

  const handleCheckboxChange = () => {
    onToggle(id, !completed); 
  };

  const handleDelete = () => {
    onDelete(id); 
  };

  return (
    <div className={styles.task}>
      <div className={styles.taskTop}>
        <input
          type="checkbox"
          checked={completed}
          className={styles.checkbox}
          onChange={handleCheckboxChange} 
        />
        <p className={`${styles.taskText} ${completed ? styles.completed : ''}`}>
          {taskName}
        </p>
      </div>
      <div className={styles.taskBottom}>
        <p>Description: {description}</p> 
        {priority !== 'None' && <p>Priority: {priority}</p>} 
        <Button className="erase" onClick={handleDelete} /> 
      </div>
    </div>
  );
}
