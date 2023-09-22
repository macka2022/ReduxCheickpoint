// Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from './actions';

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(editTask(task.id, newDescription));
    setIsEditing(false);
  };

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEditTask}>Save</button>
        </div>
      ) : (
        <div>
          <span onClick={handleToggleTask}>
            {task.isDone ? '✔️' : '❌'}
          </span>
          <span onClick={() => setIsEditing(true)}>{task.description}</span>
        </div>
      )}
    </li>
  );
}

export default Task;
