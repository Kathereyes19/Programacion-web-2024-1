import React from 'react';
import { Button } from '../Button/Button';
import { useTasks } from '../../Hooks/useTasks';
import { useForm } from '../../Hooks/useForm';
import styles from '../Form/Form.module.css';

export function Form() {
  const { createTasks } = useTasks();

  // Utiliza el hook useTasks para obtener la función createTasks, que se utilizará para crear una nueva tarea.

  const { inputValues, handleChange, handleSubmit } = useForm(createTasks);

  // Utiliza el hook useForm para obtener el estado y las funciones relacionadas con el formulario de entrada.
  // El hook recibe la función createTasks como argumento, que se utilizará para crear una nueva tarea cuando se envíe el formulario.

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          placeholder="Enter task name"
          className={styles.taskInput}
          value={inputValues.taskName}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter task description"
          className={styles.taskInput}
          value={inputValues.description}
          onChange={handleChange}
        />
      </div>
      <div className={styles.priorityContainer}>
        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          name="priority"
          value={inputValues.priority}
          onChange={handleChange}
          className={styles.selectInput}
        >
          <option value="">None</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <Button className="add" type="submit" />
    </form>
  );
}