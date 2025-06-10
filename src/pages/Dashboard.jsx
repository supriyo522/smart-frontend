// import React from 'react';
// import CreateTask from '../components/Task/CreateTask';
// import TaskList from '../components/Task/TaskList';
// import CalendarView from '../components/Task/CalendarView';

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <CreateTask onTaskCreated={() => window.location.reload()} />
//       <TaskList />
//       <CalendarView />
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import CreateTask from '../components/Task/CreateTask';
import TaskList from '../components/Task/TaskList';
import CalendarView from '../components/Task/CalendarView';
import './Dashboard.css'; // 👈 Import CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      
      <section className="dashboard-section">
        <CreateTask onTaskCreated={() => window.location.reload()} />
      </section>

      <section className="dashboard-section">
        <TaskList />
      </section>

      <section className="dashboard-calendar">
        <CalendarView />
      </section>
    </div>
  );
};

export default Dashboard;
