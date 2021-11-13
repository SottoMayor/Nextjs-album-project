import React from 'react';
import EventItem from './EventItem';

const EventList = (props) => {
    return (
        <ul>
            {props.items.map( item => <EventItem key={item.id} {...item} />)}
        </ul>
    )
}

export default EventList
