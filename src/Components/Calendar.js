import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calendar = () => {
  const [data, setData] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    axios.get('/public/data.json')
  .then(response => {
    const jsonData = JSON.parse(response.data);
    console.log(jsonData);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

  }, []);

  const handleDateSelection = (date) => {
    const isSelected = selectedDates.includes(date);
    if (isSelected) {
      setSelectedDates(selectedDates.filter(d => d !== date));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const handleSave = () => {
    const selectedData = data.filter(item => selectedDates.includes(item.Date));
    const jsonData = JSON.stringify(selectedData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });

 
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Data.json';
    link.click();
  };

  return (
    <div>
      <div className='container'>
        {data.map(item => (
          <div key={item.Id}>
            <p>{item.Name}</p>
            <p>Date: {item.Date}</p>
            <p>Time: {item.Time}</p>
            <input
              type="checkbox"
              checked={selectedDates.includes(item.Date)}
              onChange={() => handleDateSelection(item.Date)}
            />
          </div>
        ))}
      </div>
      <div>
        {selectedDates.map(date => (
          <div key={date}>
            <p>{date}</p>
          </div>
        ))}
      </div>
      <button onClick={handleSave} style={{
          cursor: 'pointer',
          marginLeft: '600px',
          padding: '5px'}}>Save Data</button>
    </div>
  );
};

export default Calendar;
