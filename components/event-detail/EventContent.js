import classes from '../../styles/components/event-details/event-content.module.css';

function EventContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
