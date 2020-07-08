import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const BerthSchedule = () => {
  const localizer = momentLocalizer(moment);

  const [booked, setBooked] = useState([
    {
      _id: {
        $oid: '5f0469e2ccadf729f0f126b7',
      },
      berth: 2,
      ship_name: 'Queen Mary',
      start: new Date('2020-07-08T08:00:00.000Z'),
      end: new Date('2020-07-08T22:00:00.000Z'),
      bunkers: 1,
      payment: 1032,
    },
  ]);

  const resourceMap = [
    { berthId: 1, berthName: 'LS1' },
    { berthId: 2, berthName: 'LS2' },
    { berthId: 3, berthName: 'LS3' },
    { berthId: 4, berthName: 'LS4' },
    { berthId: 5, berthName: 'LS5' },
  ];

  return (
    <Calendar
      selectable="ignoreEvents"
      events={booked}
      titleAccessor="ship_name"
      localizer={localizer}
      defaultView={Views.DAY}
      views={['day']}
      step={30}
      defaultDate={new Date()}
      resources={resourceMap}
      resourceAccessor="berth"
      resourceIdAccessor="berthId"
      resourceTitleAccessor="berthName"
    />
  );
};

export default BerthSchedule;
