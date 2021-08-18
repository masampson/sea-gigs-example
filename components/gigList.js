import GigCard from "./gigCard";
import styles from "../styles/components/gigList.module.css";

function GigList(props) {
  let januaryArray = props.gigs
    .filter((gig) => gig.metadata.month === "01")
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });
  let februaryArray = props.gigs
    .filter((gig) => gig.metadata.month === "02")
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });
  let marchArray = props.gigs
    .filter((gig) => gig.metadata.month === "03")
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });
  let aprilArray = props.gigs
    .filter((gig) => gig.metadata.month === "04")
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });
  let mayArray = props.gigs
    .filter((gig) => gig.metadata.month === "05")
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });
  let juneArray = props.gigs
    .filter((gig) => gig.metadata.month === "06")
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });
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
  let octoberArray = props.gigs
    .filter((gig) => gig.metadata.month === 10)
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });
  let novemberArray = props.gigs
    .filter((gig) => gig.metadata.month === 11)
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });
  let decemberArray = props.gigs
    .filter((gig) => gig.metadata.month === 12)
    .sort(function (a, b) {
      return parseInt(a.metadata.day) - parseInt(b.metadata.day);
    });

  let monthsArray = [
    ...januaryArray,
    ...februaryArray,
    ...marchArray,
    ...aprilArray,
    ...mayArray,
    ...juneArray,
    ...julyArray,
    ...augustArray,
    ...septemberArray,
    ...octoberArray,
    ...novemberArray,
    ...decemberArray,
  ];

  console.log(props.gigs);

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
