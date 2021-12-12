import styles from '../styles/Home.module.css';
import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/EventList'

export default function Home(props) {

  const { featuredEvents } = props

  return (
    <div className={styles.container}>
      <EventList items={featuredEvents} />
    </div>
  )
}

export const getStaticProps = async () => {

  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents
    }
  }
}
