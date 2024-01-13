import React, { useState } from 'react';

const WeeklySchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [timezone, setTimezone] = useState('UTC');
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [clickedButton, setClickedButton] = useState(null);

  const weeklyTime = [
    {
      day: 'Monday', times: ['8AM', '8:30AM', '9AM', '9:30AM', '10AM', '10:30AM', '11AM', '11:30AM',
        '12PM', '12:30PM', '1PM', '1:30PM', '2PM', '2:30PM', '3PM', '3:30PM', '4PM', '4:30PM', '5PM', '5:30PM',
        '6PM', '6:30PM', '7PM', '7:30PM', '8PM', '8:30PM', '9PM', '9:30PM', '10PM', '10:30PM', '11PM']
    },
    { day: 'Tuesday', times: ['8AM', '8:30AM', '9AM', '9:30AM', '10AM', '10:30AM', '11AM', '11:30AM', '12PM', '12:30PM', '1PM', '1:30PM', '2PM', '2:30PM', '3PM', '3:30PM', '4PM', '4:30PM', '5PM', '5:30PM', '6PM', '6:30PM', '7PM', '7:30PM', '8PM', '8:30PM', '9PM', '9:30PM', '10PM', '10:30PM', '11PM'] },
    { day: 'Wednesday', times: ['8AM', '8:30AM', '9AM', '9:30AM', '10AM', '10:30AM', '11AM', '11:30AM', '12PM', '12:30PM', '1PM', '1:30PM', '2PM', '2:30PM', '3PM', '3:30PM', '4PM', '4:30PM', '5PM', '5:30PM', '6PM', '6:30PM', '7PM', '7:30PM', '8PM', '8:30PM', '9PM', '9:30PM', '10PM', '10:30PM', '11PM'] },
    { day: 'Thursday', times: ['8AM', '8:30AM', '9AM', '9:30AM', '10AM', '10:30AM', '11AM', '11:30AM', '12PM', '12:30PM', '1PM', '1:30PM', '2PM', '2:30PM', '3PM', '3:30PM', '4PM', '4:30PM', '5PM', '5:30PM', '6PM', '6:30PM', '7PM', '7:30PM', '8PM', '8:30PM', '9PM', '9:30PM', '10PM', '10:30PM', '11PM'] },
    { day: 'Friday', times: ['8AM', '8:30AM', '9AM', '9:30AM', '10AM', '10:30AM', '11AM', '11:30AM', '12PM', '12:30PM', '1PM', '1:30PM', '2PM', '2:30PM', '3PM', '3:30PM', '4PM', '4:30PM', '5PM', '5:30PM', '6PM', '6:30PM', '7PM', '7:30PM', '8PM', '8:30PM', '9PM', '9:30PM', '10PM', '10:30PM', '11PM'] },
  ];

  const displayData = () => {
    return weeklyTime.map(day => (
      <div key={day.day} style={{ marginTop: '20px', marginLeft: '50px' }}>
        <strong>{day.day}:</strong>
        <div style={{ marginLeft: '10px', marginTop: '5px', color: 'black' }}>
          {currentDate.toLocaleString('en-US', { month: 'numeric', day: 'numeric' })}
        </div>
        {day.times.map(time => (
          <label key={time} style={{ padding: '5px' }}>
            <input
              type="checkbox"
              checked={selectedTimes.includes(`${day.day}_${time}`)}
              onChange={() => toggleTime(`${day.day}_${time}`)}

            />
            {time}
          </label>

        ))}
      </div>
    ));
  };

  const displayCurrentDate = () => {
    return currentDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: timezone });
  };

  const PreviousWeek = () => {
    setCurrentDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
    setSelectedTimes([]);
  };

  const NextWeek = () => {
    setCurrentDate(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000));
    setSelectedTimes([]);
  };
  const handlePreviousClick = () => {
    setClickedButton('previous');
    PreviousWeek();
  };

  const handleNextClick = () => {
    setClickedButton('next');
    NextWeek();
  };
  const toggleTime = (time) => {
    setSelectedTimes((prevSelectedTimes) => {
      if (prevSelectedTimes.includes(time)) {
        return prevSelectedTimes.filter((selectedTime) => selectedTime !== time);
      } else {
        return [...prevSelectedTimes, time];
      }
    });
  };

  const changeTimezone = (event) => {
    setTimezone(event.target.value);
    setSelectedTimes([]); 
  };

  return (
    <div>
      <div>
        <span onClick={handlePreviousClick} style={{
          cursor: 'pointer',
          marginLeft: '5px',
          padding: '5px',
          backgroundColor: clickedButton === 'previous' ? '#ddd' : 'inherit',
        }}> Previous Week </span>
        <span id="date" style={{ marginLeft: '400px' }}>{displayCurrentDate()}</span>
        <span onClick={handleNextClick} style={{
          cursor: 'pointer',
          marginLeft: '500px',
          padding: '5px',
          backgroundColor: clickedButton === 'next' ? '#ddd' : 'inherit',
        }}>Next Week</span>


      </div>
      <div>
        <label htmlFor="timezone">Select Timezone:</label>
        <select id="timezone" value={timezone} onChange={changeTimezone}>
          <option value="UTC">UTC</option>
          <option value="America/New_York">America/New_York</option>
        </select>
      </div>
      <div id="schedule">{displayData()}</div>

    </div>
  );
};

export default WeeklySchedule;
