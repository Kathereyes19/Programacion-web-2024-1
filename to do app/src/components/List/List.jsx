import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { useTasks } from '../../Hooks/useTasks';

export function List() {
  const {
    filteredTasks,
    hasTasks,
    tasksToDelete,
    handleDelete,
    handleToggle
  } = useTasks();

  return (
    <div className="listCard">
      <ul className="taskList">
        {hasTasks ? (
          filteredTasks.map((item) => {
            const deleteAllAnimation = tasksToDelete.includes(item.id)
              ? 'animate__animated animate__fadeOutRightBig'
              : '';
            return (
              <Task
                key={item.id}
                item={item}
                onToggle={handleToggle}
                onClick={handleDelete}
                animationClass={item.animationClass || ''}
                deleteAllAnimation={deleteAllAnimation}
                taskStyles="taskItem"
                altTextStyles="noTasksText animate__animated animate__fadeIn"
                checkboxStyles="taskCheckbox"
                eraseStyles="deleteButton"
              />
            );
          })
        ) : (
          <p className="noTasksText animate__animated animate__fadeIn">
            There are no tasks to show
          </p>
        )}
      </ul>
    </div>
  );
}

function Task({ item, onToggle, onClick, deleteAllAnimation, taskStyles, altTextStyles, checkboxStyles, eraseStyles }) {
  const [animationClass, setAnimationClass] = useState('');

  const { id, text, completed } = item;

  const handleCheckboxChange = ({ target }) => {
    const { checked } = target;
    onToggle({
      id,
      completed: checked
    });
  };

  const handleDelete = () => {
    setAnimationClass('animate__animated animate__fadeOutRightBig');

    setTimeout(() => {
      onClick({ id });
    }, 500);
  };

  return (
    <div
      key={id}
      className={`taskItem animate__animated animate__backInDown ${animationClass} ${deleteAllAnimation}`}
    >
      <input
        type='checkbox'
        id='check'
        checked={completed}
        className="taskCheckbox"
        onChange={handleCheckboxChange}
      />
      <label htmlFor='check' data-content={text}>{text}</label> 
      <Button className="deleteButton" onClick={handleDelete} />
    </div>
  );
}
