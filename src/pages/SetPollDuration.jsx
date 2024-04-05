{/* import { useState } from 'react';
import { Select } from '@headlessui/react';
import TimePicker from './TimePicker'; // Import custom Time Picker component

const durations = [
  { value: '1 hour', label: '1 Hour' },
  { value: '2 hours', label: '2 Hours' },
  { value: '4 hours', label: '4 Hours' },
  { value: '8 hours', label: '8 Hours' },
  { value: '1 day', label: '1 Day' },
  { value: '2 days', label: '2 Days' },
  { value: '3 days', label: '3 Days' },
];

const SetPollDuration = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);

  const handleChangeDuration = (value) => setSelectedDuration(value);

  return (
    <div className="flex flex-col space-y-4 bg-white rounded-md shadow-sm p-4">
      <label htmlFor="pollDuration" className="text-xl font-medium text-gray-700">
        Poll Duration
      </label>
      <div className="flex items-center space-x-4">
        <Select
          value={selectedDuration}
          onChange={handleChangeDuration}
          className="bg-white rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <Select.Menu className="rounded-md shadow-sm bg-white z-50">
            {durations.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select.Menu>
        </Select>
        <TimePicker /> 
      </div>
    </div>
  );
};

export default SetPollDuration;
*/}


import { useState } from 'react';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
      />
      <input
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
        className="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default DateTimePicker;
