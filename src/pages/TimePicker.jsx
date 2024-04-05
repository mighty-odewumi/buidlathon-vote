import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleChangeTime = (value) => setSelectedTime(value);

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="startTime" className="text-gray-700 font-medium">
        Time
      </label>
      <DateTimePicker
        selected={selectedTime}
        onChange={handleChangeTime}
        className="text-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        dateFormat={false} // Hide the date portion
        timeFormat="h:mm a" // Set time format (hour, minutes, am/pm)
      />
    </div>
  );
};

export default TimePicker;


