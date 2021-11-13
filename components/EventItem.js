import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const EventItem = (props) => {

    const formattedDate = new Date(props.date).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedLocation = props.location.replace(',', '\n')

    return (
        <li>
            <Image height="125" width="150" src={'/' + props.image} alt={props.title} />
            <div>
                <div>
                    <h2>{props.title}</h2>
                    <div>
                        <time>{formattedDate}</time>
                    </div>
                    <div>
                        <address>{props.location}</address>
                    </div>
                </div>
                <div>
                    <Link href={`/events/${props.id}`} >Explore the event!</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem
