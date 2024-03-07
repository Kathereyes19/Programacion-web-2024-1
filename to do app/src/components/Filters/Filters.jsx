
import { filters } from '../../const/filters'
import { useTasks } from '../../Hooks/useTasks'

export function Filter () {
  const {
    currentFilter,
    handleFilterChange
  } = useTasks()

  const handleChange = ({ target }) => {
    handleFilterChange(target.value)
  }

  return (
    <ul className="ulFlex">
      {
        filters.map(({ id, label, value }) => {
          return (
            <li key={id} className="inputLi">
              <input
                type='radio'
                id={id}
                value={value}
                name='filter'
                onChange={handleChange}
                checked={(currentFilter === value)}
                className={styles.radioInput}
              />
              <label htmlFor={id} className="inputLabel">{label}</label>
            </li>
          )
        })
      }
    </ul>
  )
}