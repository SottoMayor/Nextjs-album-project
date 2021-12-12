import React, { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../helpers/api-utils';

const index = (props) => {

    const { allEvents } = props;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const captureYearMonthHandler = (data) => {
        const { month, year } = data;
        router.push(`/events/${year}/${month}`);
    }

    return (
        <Fragment>
            <EventSearch onCaptureYearMonth={captureYearMonthHandler}/>
            <EventList items={allEvents} />
        </Fragment>
    )
}

export const getStaticProps = async () => {

    const allEvents = await getAllEvents();

    return {
        props: {
            allEvents
        },
        revalidate: 60
    }

}

export default index
