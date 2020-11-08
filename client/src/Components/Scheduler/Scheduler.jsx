import React, { useState, useEffect } from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import './Scheduler.scss'

class Scheduler extends React.Component {
      constructor() {
            super(...arguments);
            this.data = [{
                  Id: 2,
                  Subject: 'Meeting',
                  StartTime: new Date(2020, 10, 15, 10, 0),
                  EndTime: new Date(2020, 10, 15, 12, 30),
                  IsAllDay: false,
                  RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
            }];
      }
      render() {
      return <ScheduleComponent currentView='Month' 
                                selectedDate={new Date(2020, 11, 12)}
                                eventSettings={{ dataSource: this.data }}
             >  
                  <Inject services ={[ Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
      }
}   
export default Scheduler;

// var dataTest =
// [{
//       Id: 2,
//       Subject: 'Meeting',
//       StartTime: new Date(2020, 10, 12, 10, 0),
//       EndTime: new Date(2020, 10, 12, 12, 30),
//       IsAllDay: false,
//       RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
// }];