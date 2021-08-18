import GigCard from "./gigCard";
import styles from "../styles/components/gigList.module.css";

function GigList(props) {
  let julyArray = props.gigs
    .filter((gig) => gig.metadata.month === "07")
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });
  let augustArray = props.gigs
    .filter((gig) => gig.metadata.month === "08")
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });
  let septemberArray = props.gigs
    .filter((gig) => gig.metadata.month === "09")
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });

  let monthsArray = [...julyArray, ...augustArray, ...septemberArray];

  let content =
    monthsArray.length >= 1 ? (
      monthsArray.map((gig) => (
        <GigCard gig={gig} key={Math.random()}></GigCard>
      ))
    ) : (
      <h2 className={styles.noGigPlaceholder}>No gigs :( ... yet :)</h2>
    );

  return (
    <section className={styles.showContainer}>
      <div className={styles.showWrap}>{content}</div>
    </section>
  );
}

export default GigList;
