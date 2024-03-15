import styles from '../Footer/Footer.module.css'
import { Button } from '../Button/Button';
import { useTasks } from '../../Hooks/useTasks'

export function Footer() {
  const {
    completedTasks,
    allTasks,
    handleDeleteAll
  } = useTasks();

  // Utiliza el hook useTasks para obtener la cantidad de tareas completadas (completedTasks), la cantidad total de tareas (allTasks) y la función para eliminar todas las tareas completadas (handleDeleteAll).
  
  return (
    <div className={styles.divStyle}>
      <p><strong>{completedTasks} completed</strong> out of <strong>{allTasks}</strong></p> 
      <Button className='clearAll' onClick={handleDeleteAll} />
    </div>
  );
}

    
  

