import React from 'react';
import EventList from '../../components/events/EventList';

import { getAllEvents } from '../../dummy-data';

const index = () => {

    const allEvents = getAllEvents();

    return (
        <div>
                <EventList items={allEvents} />
        </div>
    )
}

export default index
