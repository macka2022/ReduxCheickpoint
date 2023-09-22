// ListTask.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTask() {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = filter === 'all'
    ? tasks
    : filter === 'done'
    ? tasks.filter((task) => task.isDone)
    : tasks.filter((task) => !task.isDone);

  return (
    <div>
      <div>
        <label>
          Filter:
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="notDone">Not Done</option>
          </select>
        </label>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default ListTask;
