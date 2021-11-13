import React from 'react';
import { useRouter } from 'next/dist/client/router';

const EventId = () => {

    const router = useRouter();
    const eventName = router.query.eventid;
    
    console.log(eventName)

    return (
        <div>
            <h1>Some {eventName} here!</h1>
        </div>
    )
}

export default EventId
