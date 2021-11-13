import React, { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';

const index = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const allEvents = getAllEvents();

    const captureYearMonthHandler = (data) => {
        const { month, year } = data;
        router.push(`/events/${year}/${month}`);
    }

    return (
        <Fragment>
            <EventSearch onCaptureYearMonth={captureYearMonthHandler}/>
            <EventList items={allEvents} />
        </Fragment>
    )
}

export default index
