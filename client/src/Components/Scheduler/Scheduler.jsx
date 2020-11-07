import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import './Scheduler.scss'

class Scheduler extends React.Component {
      render() {
            return <ScheduleComponent currentView='Month' selectedDate={new Date(2020, 10, 11)}>  
                     <Inject services ={[ Day, Week, WorkWeek, Month, Agenda]} />
                  </ScheduleComponent>
      }
}   
export default Scheduler;