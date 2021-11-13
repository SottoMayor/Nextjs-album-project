import React from 'react';
import EventItem from './EventItem';
import classes from '../../styles/components/events/EventList.module.css';

const EventList = (props) => {
    return (
        <ul className={classes.list}>
            {props.items.map( item => <EventItem key={item.id} {...item} />)}
        </ul>
    )
}

export default EventList
