import { Button } from '../Button/Button'
import { useTasks } from '../../Hooks/useTasks'
import { useForm } from '../../Hooks/useForm'

export function Form () {
  const { createTasks } = useTasks()

  const {
    inputValue,
    disableBtn,
    handleChange,
    handleSubmit
  } = useForm(createTasks)

  return (
    <form onSubmit={handleSubmit} className={styles.addDiv}>
      <input
        type='text'
        placeholder='Name your task'
        className={styles.taskInput}
        value={inputValue}
        onChange={handleChange}
      />
      <Button className='add' type='submit' disabled={disableBtn} />
    </form>
  )
}
