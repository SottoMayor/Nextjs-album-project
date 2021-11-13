import React from 'react';
import { useRouter } from 'next/dist/client/router';

const EventsSlugs = () => {

    const router = useRouter();
    const slugs = router.query.slugs;
    console.log(slugs)

    return (
        <div>
            <h1>List of slugs: {slugs}</h1>
        </div>
    )
}

export default EventsSlugs;
