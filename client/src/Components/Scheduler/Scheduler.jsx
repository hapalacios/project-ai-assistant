import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import './Scheduler.scss'

class Scheduler extends React.Component {
      // private localData: EventSettingsModel = {
      //    dataSource: [{
      //          EndTime: new Date(2020, 0, 11, 6, 30),
      //          StartTime: new Date(2020, 0, 11, 4, 0)
      //    }]
      // };
      // private remoteData = newDataManager({
      //       url: 'htt'
      // })   
      render() {
            return <ScheduleComponent currentView='Month' selectedDate={new Date(2020, 9, 28)}>  
                     <Inject services ={[ Day, Week, WorkWeek, Month, Agenda]} />
                  </ScheduleComponent>
      }
}   
export default Scheduler;