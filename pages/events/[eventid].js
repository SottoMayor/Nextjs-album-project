import React, { Fragment } from 'react';
import { useRouter } from 'next/dist/client/router';
import EventContent from '../../components/event-detail/EventContent';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventSummary from '../../components/event-detail/EventSummary';

import { getEventById } from '../../dummy-data';

const EventId = () => {

    const router = useRouter();
    const eventId = router.query.eventid;
    
    const eventData = getEventById(eventId);

    if(!eventData) {
        return <p>Event not found!</p>
    }

    return (
        <Fragment>
            <EventSummary title={eventData.title}/>
            <EventLogistics date={eventData.date} address={eventData.location} image={eventData.image} imageAlt={eventData.title}/>
            <EventContent>
                {eventData.description}
            </EventContent>
        </Fragment>
    )
}

export default EventId
