import styles from "../styles/components/gigCard.module.css";

interface GigCardProps {
  gig: {
    content?: string;
    metadata: {
      title: string;
      key: number;
      venue: string;
      cost: string;
      year: number;
      month: string | number;
      day: string;
      time: string;
      age: string;
      access: string;
      email: string;
      ticketing: string;
      additional?: string;
    };
    slug: string;
    title: string;
  };
  key: number;
}

function GigCard(props: GigCardProps) {
  const gig = props.gig.metadata;
  const hour = parseInt(gig.time.slice(0, 2));
  const hourFormat = hour - (hour > 13 ? 12 : 0);
  const time = (
    <span>
      <p>{hourFormat + ":" + gig.time.slice(3)}</p>
      <p>{hour > 12 ? "PM" : "AM"}</p>
    </span>
  );

  return (
    <div className={styles.showListing}>
      <div className={styles.showInfo}>
        <h3>{props.gig.title}</h3>
        <p className={styles.showVenue}>{gig.venue}</p>
        <p className={styles.showAgeAccess}>
          ${gig.cost} / {gig.age} / {gig.access}
        </p>
        <p>
          <a href={gig.ticketing} className={styles.ticketLink} target="_blank">
            Ticket Information
          </a>
        </p>
      </div>
      <div className={styles.showDate}>
        <p>
          <span className={styles.showMonthDay}>
            {gig.month} / {gig.day}
          </span>
        </p>
        {time}
      </div>
    </div>
  );
}

export default GigCard;
