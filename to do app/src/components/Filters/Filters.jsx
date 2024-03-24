import styles from './Filters.module.css';
import { filters } from '../../constants/filters';
import { useTasks } from '../../Hooks/useTasks'; 

export function Filter() {
  const { 
    currentFilter, 
    setFilter 
  } = useTasks();

  const handleChange = ({ target }) => {
    setFilter(target.value);
  }; 
  
  return (
    <ul className={styles.ulFlex}>
      {filters.map(({ id, label, value }) => {
        return (
          <li key={id} className={styles.inputLi}>
            <input
              type='radio' 
              id={id}
              value={value}
              name='filter'
              onChange={handleChange}
              checked={currentFilter === value}
              className={styles.radioInput}
            />
            <label htmlFor={id} className={styles.inputLabel}>
              {label}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
