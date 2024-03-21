import styles from './Filters.module.css';
import { filters } from '../../constants/filters';
import { useTasks } from '../../Hooks/useTasks'; // Importa el hook useTasks

export function Filter() {
  const { 
    currentFilter, 
    setFilter 
  } = useTasks(); // Usa el hook useTasks

  const handleChange = ({ target }) => {
    setFilter(target.value);
  }; // se utilizará para manejar los cambios en la selección de filtro.
  
  // Utiliza el hook useTasks para obtener el filtro actual (currentFilter) 
  // y la función para cambiar el filtro (handleFilterChange).

  return (
    <ul className={styles.ulFlex}>
      {filters.map(({ id, label, value }) => {
        return (
        // Por cada elemento del arreglo, se genera un elemento de lista (li) que representa una opción de filtro.
          <li key={id} className={styles.inputLi}>
            <input
              type='radio' // Indica que es un botón de radio.
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
