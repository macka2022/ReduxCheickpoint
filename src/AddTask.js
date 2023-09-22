// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ description }));
    setDescription('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
