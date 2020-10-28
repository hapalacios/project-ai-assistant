import React, { useState } from "react";
import Calendar from "react-calendar";

const ReactCalendar = () => {
   const [date, setDate] = useState(new Date());

   const onChange = date => {
      setDate(date);
   };

   return (
      <div className="calendar-container">
         <Calendar className="calendar" locale onChange={onChange} value={date} />
      </div>
   );
};
export default ReactCalendar;