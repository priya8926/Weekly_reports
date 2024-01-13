import React, { useState, useEffect } from 'react';
// import Navbar from "./Components/Navbar";
import './App.css';
import WeeklySchedule from './Components/WeeklySchedule';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// function App() {
//   return (
//     <>
//       <WeeklySchedule />
//       <Calendar />
//     </>
//   )
// }
// export default App;
const localizer = momentLocalizer(moment);
const App = () => {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const initialData = [
      { Date: '2023-07-20', Time: '22:30' },
      { Date: '2023-07-1', Time: '09:00' },
      { Date: '2023-06-21', Time: '015:00' },
      { Date: '2023-05-08', Time: '06:20' },
      { Date: '2023-11-21', Time: '09:40' },
      { Date: '2023-12-31', Time: '04:13' },

    ];

    setData(initialData);
  }, []);
  useEffect(() => {
   
    const formattedEvents = data.map((item) => ({
      id: item.Id,
      title: item.Name,
      start: new Date(item.Date + ' ' + item.Time),
      end: new Date(item.Date + ' ' + item.Time),
    }));

    setEvents(formattedEvents);
  }, [data]);

  return (
    <div>
        <WeeklySchedule />
        {/* <Calendar /> */}
      <h1>Weekly Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400 }}
      />
    </div>
  );
};

export default App;
