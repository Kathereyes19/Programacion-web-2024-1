import React from 'react';
import { Button } from '../Button/Button';
import { useTasks } from '../../Hooks/useTasks';
import styles from '../Footer/Footer.module.css';

export function Footer() {
  const {
    completedTasks,
    allTasks,
    handleDeleteAll
  } = useTasks();

  return (
    <div className={styles.divStyle}>
      <p><strong>{completedTasks} completed</strong> out of <strong>{allTasks}</strong></p> 
      <Button className='clearAll' onClick={handleDeleteAll}>Clear All</Button> 
      <p><strong>Katherine Reyes</strong> & <strong> Sebastian Gonzalez</strong></p> 

    </div>
  );
}
