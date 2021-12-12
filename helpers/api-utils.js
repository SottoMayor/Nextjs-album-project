export const getAllEvents = async () => {
    const jsonResponse = await fetch('https://next-album-project-default-rtdb.firebaseio.com/events.json');
    const response = await jsonResponse.json();
    console.log(response);

    const events = [];

    for(const key in response) {
        events.push({
            id: key,
            ...response[key]
        });
    }

    return events
}

export const getFeaturedEvents = async () => {

    const allEvents = await getAllEvents();

    return allEvents.filter((event) => event.isFeatured);
}