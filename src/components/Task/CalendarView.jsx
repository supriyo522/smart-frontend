import React, { useEffect, useState } from 'react';
import { Calendar, Views, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import api from '../../utils/api';


const localizer = dayjsLocalizer(dayjs);

const statusColors = {
  scheduled: '#28a745',
  conflict: '#dc3545',
  pending: '#ffc107',
};

const CalendarView = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await api.get('/tasks');
    const mapped = res.data.map(task => ({
      id: task._id,
      title: task.title,
      start: new Date(task.startTime),
      end: new Date(task.endTime),
      status: task.status,
    }));
    setEvents(mapped);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: statusColors[event.status] || '#6c757d',
      color: 'white',
      borderRadius: '5px',
      padding: '4px',
      border: 'none',
    },
  });

  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh' }}
        views={[Views.MONTH, Views.WEEK]}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default CalendarView;
