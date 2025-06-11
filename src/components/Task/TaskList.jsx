import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import './TaskList.css'; 

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await api.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAutoSchedule = async () => {
    await api.post('/tasks/auto-schedule');
    loadTasks();
  };

  return (
    <div className="tasklist-container">
      <h2 className="tasklist-title">My Tasks</h2>
      <button className="tasklist-button" onClick={handleAutoSchedule}>
        Auto Schedule
      </button>
      <ul className="tasklist-list">
        {tasks.map(t => (
          <li key={t._id} className={`tasklist-item status-${t.status}`}>
            <strong>{t.title}</strong> <span className="status">{t.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

