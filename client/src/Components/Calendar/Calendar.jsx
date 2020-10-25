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
         {/* {console.log(date)} */}
         {/* {date.toString()} */}
      </div>
   );
};
export default ReactCalendar;

// render(<ReactCalendar />, document.querySelector("#root"));