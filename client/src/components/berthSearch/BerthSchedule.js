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
      start: new Date('2020-07-09T08:00:00.000Z'),
      end: new Date('2020-07-09T22:00:00.000Z'),
      bunkers: 1,
      payment: 1032,
    },
    {
      _id: {
        $oid: '5f1469e2ccadf729f0f126b7',
      },
      berth: 2,
      ship_name: 'Queen Mary',
      start: new Date('2020-07-10T08:00:00.000Z'),
      end: new Date('2020-07-10T22:00:00.000Z'),
      bunkers: 1,
      payment: 1032,
    },
    {
      _id: {
        $oid: '5f2469e2ccadf729f0f126b7',
      },
      berth: 1,
      ship_name: 'Squall',
      start: new Date('2020-07-09T04:00:00.000Z'),
      end: new Date('2020-07-09T12:00:00.000Z'),
      bunkers: 1,
      payment: 1032,
    },
    {
      _id: {
        $oid: '5f3469e2ccadf729f0f126b7',
      },
      berth: 1,
      ship_name: 'Flock of Seagulls',
      start: new Date('2020-07-10T04:00:00.000Z'),
      end: new Date('2020-07-10T08:00:00.000Z'),
      bunkers: 1,
      payment: 1032,
    },
    {
      _id: {
        $oid: '5f4469e2ccadf729f0f126b7',
      },
      berth: 3,
      ship_name: 'Flotsom',
      start: new Date('2020-07-09T16:00:00.000Z'),
      end: new Date('2020-07-09T22:00:00.000Z'),
      bunkers: 1,
      payment: 1032,
    },
    {
      _id: {
        $oid: '5f5469e2ccadf729f0f126b7',
      },
      berth: 3,
      ship_name: 'Jetsom',
      start: new Date('2020-07-02T08:00:00.000Z'),
      end: new Date('2020-07-06T22:00:00.000Z'),
      bunkers: 1,
      payment: 1032,
    },
    {
      _id: {
        $oid: '5f6469e2ccadf729f0f126b7',
      },
      berth: 4,
      ship_name: 'Black Jack',
      start: new Date('2020-07-09T08:00:00.000Z'),
      end: new Date('2020-07-09T12:00:00.000Z'),
      bunkers: 1,
      payment: 1032,
    },
    {
      _id: {
        $oid: '5f7469e2ccadf729f0f126b7',
      },
      berth: 4,
      ship_name: 'Bluebeard',
      start: new Date('2020-07-09T12:00:00.000Z'),
      end: new Date('2020-07-09T22:00:00.000Z'),
      bunkers: 1,
      payment: 1032,
    },
    {
      _id: {
        $oid: '5f8469e2ccadf729f0f126b7',
      },
      berth: 5,
      ship_name: 'Seamonster',
      start: new Date('2020-07-09T08:00:00.000Z'),
      end: new Date('2020-07-09T22:00:00.000Z'),
      bunkers: 1,
      payment: 1032,
    },
    {
      _id: {
        $oid: '5f9469e2ccadf729f0f126b7',
      },
      berth: 5,
      ship_name: 'Figureheed',
      start: new Date('2020-07-09T01:00:00.000Z'),
      end: new Date('2020-07-09T08:00:00.000Z'),
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
