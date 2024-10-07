import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Generate all the days of the current month
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  });

  // Handle date selection
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col justify-center items-center h-fit mt-8">
      <div className="overflow-x-auto w-screen no-scrollbar">
        <div className={`flex space-x-4 px-4 py-2  `} >
          {daysInMonth.map((day) => (
            <div
              key={day}
              onClick={() => handleDateClick(day)}
              className={`cursor-pointer px-4 py-2 rounded-lg ${format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'

                }
              `}
            >
              {format(day, 'dd')}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8  w-screen mx-auto">
        <p>Selected Date: {format(selectedDate, 'yyyy-MM-dd')}</p>
      </div>
    </div>
  );
};

export default MyCalendar;
