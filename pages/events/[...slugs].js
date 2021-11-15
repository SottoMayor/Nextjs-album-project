import React, { Fragment } from 'react';
import { useRouter } from 'next/dist/client/router';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import AlertError from '../../components/UI/AlertError'

import { getFilteredEvents } from '../../dummy-data';
import Button from '../../components/UI/Button';

const EventsSlugs = () => {

    const router = useRouter();
    const filteredData = router.query.slugs;
    
    if(!filteredData){
        return <AlertError><p className="center">Loading... </p></AlertError>
    }

    const year = +filteredData[0];
    const month = +filteredData[1];

    if(isNaN(year) || isNaN(month) || year < 2021 || year > 2030 || month < 0 || month > 12){
        return (
            <Fragment>
                <AlertError><p className="center">Invalid filter! Adjust yout values!</p></AlertError>
                <div className="center">
                    <Button link="/events">Back to all events</Button>
                </div>
            </Fragment>
        )
    }

    const filteredEvents = getFilteredEvents({year, month});

    if(!filteredEvents || filteredEvents.length === 0){
        return(
            <Fragment>
                <AlertError><p className="center">No events found to this filter! X.X</p></AlertError>
                <div className="center">
                    <Button link="/events">Back to all events</Button>
                </div>
            </Fragment>
            ) 
    }

    const date = new Date(year, month);

    return (
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </Fragment>
    )
}

export default EventsSlugs;
