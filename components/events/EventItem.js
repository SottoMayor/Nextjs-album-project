import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import classes from '../../styles/components/events/EventItem.module.css';

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
                        <time>{formattedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{formattedLocation}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={`/events/${props.id}`} >Explore the event!</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem
