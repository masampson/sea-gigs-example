import styles from "../styles/components/about.module.css";

function About() {
  return (
    <section className={styles.aboutContainer}>
      <p>
        SEA GIGS is an artist owned and operated portal to the world of
        public-facing creative events in Seattle. As a democratic platform of
        information dissemination we never editorialize our listings. In a
        landscape of pay-to-play algorithm driven arts promotion, we seek to put
        the artist and consumer back on an even playing field and remove the
        influence of corporate interest in the arts community.
      </p>
      <h2>HOW IT WORKS:</h2>
      <ul>
        <li>
          Users submit event information through our form hosted on this
          website.
        </li>
        <li>
          Admins verify all information as best we can before approving the
          event to be displayed on gig list.
        </li>
        <li>
          Some listings come directly from venues or production groups, but no
          one listing is given precidence over any other, even if the source is
          a financial contributor to SEA GIGS.
        </li>
        <li>You get to the gig</li>
      </ul>
    </section>
  );
}

export default About;
