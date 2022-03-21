import styles from "../styles/components/gigCard.module.css";
import Link from "next/link";
import { useAuth } from "../utils/firebase";
import { useState } from "react";
import link from "next/link";

function GigCard(props) {
  const user = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  const gig = props.gig.metadata;
  const hour = parseInt(gig.time.slice(0, 2));
  const hourFormat = hour - (hour > 13 ? 12 : 0);
  const time = (
    <span>
      <p>
        {hourFormat + ":" + gig.time.slice(3)} {hour > 12 ? "PM" : "AM"}
      </p>
      {/* <p>{hour > 12 ? "PM" : "AM"}</p> */}
    </span>
  );

  const formatTime = (time) => {
    const formattedTimeNum = parseInt(time.replace(/:/g, ""));
    if (formattedTimeNum >= 1700 && formattedTimeNum <= 1799) {
      return `00${formattedTimeNum - 1700}00`;
    } else if (formattedTimeNum >= 1800) {
      return `0${formattedTimeNum - 1700}00`;
    } else if (formattedTimeNum < 1700) {
      return `${formattedTimeNum + 700}00`;
    }
  };
  const linkTitle = props.gig.slug.replace(/-/g, " ");
  const linkDate = `${gig.year.toString()}${gig.month.toString()}${gig.day.toString()}`;

  const googleLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${linkTitle}&details=Ticket+link:+${
    gig.ticketing
  }&location=${gig.venue}&dates=${linkDate}T${formatTime(
    gig.time
  ).toString()}Z%2F${linkDate}T${formatTime(gig.time).toString()}Z`;

  return (
    <div className={styles.showListing}>
      <div className={styles.showInfo}>
        <h3>
          <a href={gig.ticketing} target="_blank">
            {props.gig.title}
          </a>
        </h3>
        <p className={styles.showVenue}>
          {gig.venue} /{" "}
          <span className={styles.showAgeAccess}>
            ${gig.cost} / {gig.age} / {gig.access}
            {gig.additional && (
              <div>
                <div
                  onClick={() =>
                    !isVisible ? setIsVisible(true) : setIsVisible(false)
                  }
                >
                  <p className={styles.moreInfo}>
                    {" "}
                    {!isVisible ? " - More Info" : " - Close"}
                  </p>
                </div>
              </div>
            )}
          </span>
        </p>
        {/* <p>
          <a href={props.link} className={styles.ticketLink} target="_blank">
          Ticket Information
          </a>
        </p> */}
        <a href={googleLink} target="_blank" className={styles.googleLink}>
          Add to calendar
        </a>
      </div>
      {user && (
        <a href={`/gigs/${props.gig.slug}`} target="_blank">
          <p className={styles.editLink}>Edit</p>
        </a>
      )}
      <div className={styles.showDate}>
        <p>
          <span className={styles.showMonthDay}>
            {gig.month} / {gig.day}
          </span>
        </p>
        {time}
      </div>
      {gig.additional && isVisible && (
        <div id={styles.addText} className={styles.additionalText}>
          {gig.additional}
        </div>
      )}
    </div>
  );
}

export default GigCard;
