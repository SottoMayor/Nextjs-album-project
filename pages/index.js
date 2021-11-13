import styles from '../styles/Home.module.css';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/EventList'

export default function Home() {

  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <h1>Hello from NextJs!</h1>
      <EventList items={featuredEvents} />
    </div>
  )
}
