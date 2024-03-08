import styles from '../Footer/Footer.module.css'
import { Button } from '../Button/Button';
import { useTasks } from '../../Hooks/useTasks'

export function Footer() {
  const {
    completedTasks,
    allTasks,
    handleDeleteAll
  } = useTasks();

  return (
    <div className={styles.divStyle}>
      <p><strong>{completedTasks} completed</strong> out of <strong>{allTasks}</strong></p>
      <Button className='clearAll' onClick={handleDeleteAll} />
    </div>
  );
}

    
  

