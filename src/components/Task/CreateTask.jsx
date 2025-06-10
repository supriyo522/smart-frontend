// import React, { useState } from 'react';
// import api from '../../utils/api';

// const CreateTask = ({ onTaskCreated }) => {
//   const [task, setTask] = useState({
//     title: '', description: '', duration: 30, priority: 'low',
//     isFlexible: false, reminder: false, reminderTime: '', constraints: []
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await api.post('/tasks', task);
//     onTaskCreated();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Create Task</h3>
//       <input placeholder="Title" onChange={e => setTask({ ...task, title: e.target.value })} />
//       <textarea placeholder="Description" onChange={e => setTask({ ...task, description: e.target.value })} />
//       <input type="number" placeholder="Duration (min)" onChange={e => setTask({ ...task, duration: e.target.value })} />
//       <select onChange={e => setTask({ ...task, priority: e.target.value })}>
//         <option>low</option>
//         <option>medium</option>
//         <option>high</option>
//       </select>
//       <label>
//         <input type="checkbox" onChange={e => setTask({ ...task, isFlexible: e.target.checked })} /> Flexible?
//       </label>
//       <label>
//         <input type="checkbox" onChange={e => setTask({ ...task, reminder: e.target.checked })} /> Reminder?
//       </label>
//       <input type="datetime-local" onChange={e => setTask({ ...task, reminderTime: e.target.value })} />
//       <button type="submit">Create</button>
//     </form>
//   );
// };

// export default CreateTask;

import React, { useState } from 'react';
import api from '../../utils/api';
import './CreateTask.css'; // CSS file

const CreateTask = ({ onTaskCreated }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    duration: 30,
    priority: 'low',
    isFlexible: false,
    reminder: false,
    reminderTime: '',
    constraints: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks', task);
      onTaskCreated();
    } catch (err) {
      alert('Task creation failed');
    }
  };

  return (
    <div className="task-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <h3>Create Task</h3>

        <input
          type="text"
          placeholder="Title"
          onChange={e => setTask({ ...task, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          onChange={e => setTask({ ...task, description: e.target.value })}
        />

        <input
          type="number"
          placeholder="Duration (min)"
          onChange={e => setTask({ ...task, duration: e.target.value })}
        />

        <select onChange={e => setTask({ ...task, priority: e.target.value })}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label>
          <input
            type="checkbox"
            onChange={e => setTask({ ...task, isFlexible: e.target.checked })}
          />
          Flexible?
        </label>

        <label>
          <input
            type="checkbox"
            onChange={e => setTask({ ...task, reminder: e.target.checked })}
          />
          Reminder?
        </label>

        <input
          type="datetime-local"
          onChange={e => setTask({ ...task, reminderTime: e.target.value })}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTask;
