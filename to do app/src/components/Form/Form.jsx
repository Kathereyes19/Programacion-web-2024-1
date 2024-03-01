import { Button } from '../Button/Button';
import { useTask } from '../../Hooks/useTask';
import { useForm } from '../../Hooks/useForm';
import styles from './Form.css'; 

export function Form() {
    const { createTask } = useTask();

    const {
        inputValue,
        disableBtn,
        handleChange,
        handleSubmit
    } = useForm(createTask);

    return (
        <form onSubmit={handleSubmit} className={styles.addDiv}> 
            <input
                type='text'
                placeholder='Write your tasks here'
                className={styles.taskInput} 
                value={inputValue}
                onChange={handleChange}
            />
            <Button className='add' onClick={handleSubmit} disabled={disableBtn} />
        </form>
    );
}
