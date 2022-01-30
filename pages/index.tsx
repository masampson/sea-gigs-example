import styles from "../styles/pages/Home.module.css";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/header";
import GigList, { GigListProps } from "../components/gigList";
import About from "../components/about";
import Form from "../components/form";
const Cosmic = require("cosmicjs");
const api = Cosmic();

const bucket = api.bucket({
  slug: "sea-gigs-production",
  read_key: process.env.COSMIC_READ_KEY,
});

function SeaGigs({ gigs }: GigListProps) {
  // STATE MANAGEMENT ==========
  const [displayState, setDisplayState] = useState("gigs");
  // const [gigsFilteredMonthState, setGigsFilteredMonthState] = useState(gigs);
  // console.log(gigsFilteredMonthState);

  // FUNCTIONS ===============

  // Add event to Cosmic
  async function addEvt(evt: {}) {
    const response = await fetch("/api/sea-gigs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ evt }),
    });
    // console.log(response, evt);
  }

  // DATE TURNOVER ================

  let today = new Date();
  let currentMonth = today.getMonth() + 1;
  let currentDay = today.getDate();
  let currentYear = today.getFullYear();

  let currentYearGigs = gigs.filter(
    (gig) => parseInt(gig.metadata.year as any, 10) === currentYear
  );

  let futureYearGigs = gigs.filter((gig) => gig.metadata.year > currentYear);

  let thisMonthGigs = currentYearGigs.filter(
    (gig) =>
      parseInt(gig.metadata.month) === currentMonth &&
      parseInt(gig.metadata.day) >= currentDay
  );

  let futureMonthGigs = currentYearGigs.filter(
    (gig) => parseInt(gig.metadata.month) > currentMonth
  );
  console.log({
    currentYearGigs,
    futureYearGigs,
    thisMonthGigs,
    futureMonthGigs,
  });

  let currentGigs = [...thisMonthGigs, ...futureMonthGigs];

  // let filteredGigs =
  //   filterState === "all"
  //     ? currentGigs
  //     : currentGigs.filter((gig) => gig.metadata.month === filterState);

  // Set display (Gigs, About, Submit etc.)
  function getDisplay(display: string) {
    setDisplayState(display);
  }

  let content = (
    <GigList
      gigs={currentGigs}
      nextYearGigs={futureYearGigs}
      getDisplay={getDisplay}
    ></GigList>
  );

  // Set display content based on state
  if (displayState === "about") {
    content = <About></About>;
  } else if (displayState === "submit") {
    content = <Form addEvt={addEvt}></Form>;
  } else {
    content = (
      <GigList
        gigs={currentGigs}
        nextYearGigs={futureYearGigs}
        getDisplay={getDisplay}
      ></GigList>
    );
  }

  console.log(gigs);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Unica+One:ital,wght@0,100;0,200;0,400;0,700;1,100;1,200;1,400;1,700&family=Shrikhand&display=swap"
          rel="stylesheet"
        /> */}

        <title>SEAGIGS</title>
      </Head>

      <section className={styles.bodyContainer}>
        <Header getDisplay={getDisplay}></Header>
        {content}
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await bucket.getObjects({
    query: {
      type: "gigs",
      "metadata.approved": {
        $eq: "yes",
      },
    },
    props: "slug,title,content,metadata", // Limit the API response data by props
  });
  const gigs = await data.objects;
  return {
    props: {
      gigs,
    },
  };
}
export default SeaGigs;
