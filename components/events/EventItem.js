import React from 'react';
import Image from 'next/image';
import classes from '../../styles/components/events/EventItem.module.css';
import Button from '../UI/Button';
import DateIcon from '../icons/dateIcon';
import LocationIcon from '../icons/locationIcon';
import ArrowRightIcon from '../icons/arrowRightIcon';

const EventItem = (props) => {

    const formattedDate = new Date(props.date).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedLocation = props.location.replace(',', '\n')

    return (
        <li className={classes.item}>
            <Image height="225" width="250" src={'/' + props.image} alt={props.title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{props.title}</h2>
                    <div className={classes.date}>
                        <DateIcon/>
                        <time>{formattedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <LocationIcon/>
                        <address>{formattedLocation}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${props.id}`} >
                        <span>Explore the event!</span>
                        <span className={classes.icon}><ArrowRightIcon/></span>
                        </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem
