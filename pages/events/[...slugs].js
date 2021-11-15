import React from 'react';
import { useRouter } from 'next/dist/client/router';
import EventList from '../../components/events/EventList';

import { getFilteredEvents } from '../../dummy-data';

const EventsSlugs = () => {

    const router = useRouter();
    const filteredData = router.query.slugs;
    
    if(!filteredData){
        return <p className="center">Loading... </p>
    }

    const year = +filteredData[0];
    const month = +filteredData[1];

    if(isNaN(year) || isNaN(month) || year < 2021 || year > 2030 || month < 0 || month > 12){
        return <p className="center">Invalid filter! Adjust yout values!</p>
    }

    const filteredEvents = getFilteredEvents({year, month});

    if(!filteredEvents || filteredEvents.length === 0){
        return <p className="center">No events found to this filter! X.X</p>
    }

    return (
        <div>
            <EventList items={filteredEvents}/>
        </div>
    )
}

export default EventsSlugs;
