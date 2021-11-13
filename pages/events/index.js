import React, { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';

import { getAllEvents } from '../../dummy-data';

const index = () => {

    const allEvents = getAllEvents();

    return (
        <Fragment>
            <EventSearch/>
            <EventList items={allEvents} />
        </Fragment>
    )
}

export default index
