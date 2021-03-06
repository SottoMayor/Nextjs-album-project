import React, { Fragment } from 'react';
import EventContent from '../../components/event-detail/EventContent';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventSummary from '../../components/event-detail/EventSummary';
import AlertError from '../../components/UI/AlertError';
import Spinner from '../../components/UI/Spinner';

import { getEventById, getFeaturedEvents } from '../../helpers/api-utils';

const EventId = (props) => {

    const { eventData } = props;

    if(!eventData) {
        return (
           //<Spinner /> 
            <AlertError>  
                <p>Event not found!</p>
            </AlertError>
        )
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

export const getStaticProps = async (context) => {

    const eventId = context.params.eventid;

    const eventData = await getEventById(eventId);

    return {
        props: {
            eventData,
        },
        revalidate: 60
    }

}

export const getStaticPaths = async () => {

    const allEvents = await getFeaturedEvents();

    const mappedPaths = allEvents.map(event => {
        return { params: {eventid: event.id} }
    })

    return {
        paths: mappedPaths,
        fallback: 'blocking',
        //fallback: true

    }

}

export default EventId
