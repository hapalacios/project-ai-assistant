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


// import * as React from 'react';
// import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
// import './schedule-component.css';
// import { extend } from '@syncfusion/ej2-base';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { SampleBase } from '../common/sample-base';
// import { PropertyPane } from '../common/property-pane';
// import * as dataSource from './datasource.json';
// /**
//  * Schedule Default sample
//  */
// export class Default extends SampleBase {
//    constructor() {
//       super(...arguments);
//       this.data = extend([], dataSource.scheduleData, null, true);
//    }
//    change(args) {
//       this.scheduleObj.selectedDate = args.value;
//       this.scheduleObj.dataBind();
//    }
//    onDragStart(args) {
//       args.navigation.enable = true;
//    }
//    render() {
//       return (<div className='schedule-control-section'>
//          <div className='col-lg-9 control-section'>
//             <div className='control-wrapper'>
//                <ScheduleComponent height='650px' ref={schedule => this.scheduleObj = schedule} selectedDate={new Date(2019, 0, 10)} eventSettings={{ dataSource: this.data }} dragStart={(this.onDragStart.bind(this))}>
//                   <ViewsDirective>
//                      <ViewDirective option='Day' />
//                      <ViewDirective option='Week' />
//                      <ViewDirective option='WorkWeek' />
//                      <ViewDirective option='Month' />
//                      <ViewDirective option='Agenda' />
//                   </ViewsDirective>
//                   <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
//                </ScheduleComponent>
//             </div>
//          </div>
//          <div className='col-lg-3 property-section'>
//             <PropertyPane title='Properties'>
//                <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
//                   <tbody>
//                      <tr style={{ height: '50px' }}>
//                         <td style={{ width: '30%' }}>
//                            <div className='col-md-4' style={{ paddingTop: '8px' }}>Current Date</div>
//                         </td>
//                         <td style={{ width: '70%' }}>
//                            <div className='datepicker-control-section'>
//                               <DatePickerComponent value={new Date(2019, 0, 10)} showClearButton={false} change={this.change.bind(this)}></DatePickerComponent>
//                            </div>
//                         </td>
//                      </tr>
//                   </tbody>
//                </table>
//             </PropertyPane>
//          </div>
//       </div>);
//    }
// }