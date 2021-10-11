import styles from "../styles/pages/Home.module.css";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/header";
import GigList from "../components/gigList";
import About from "../components/about";
import Form from "../components/Form";
const Cosmic = require("cosmicjs");
const api = Cosmic();

const bucket = api.bucket({
  slug: "sea-gigs-production",
  read_key: process.env.COSMIC_READ_KEY,
});

function SeaGigs({ gigs }) {
  // STATE MANAGEMENT ==========
  const [displayState, setDisplayState] = useState("gigs");
  // const [gigsFilteredMonthState, setGigsFilteredMonthState] = useState(gigs);
  // console.log(gigsFilteredMonthState);

  // FUNCTIONS ===============

  // Add event to Cosmic
  async function addEvt(evt) {
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

  let thisMonthGigs = gigs.filter(
    (gig) =>
      parseInt(gig.metadata.month) === currentMonth &&
      parseInt(gig.metadata.day) >= currentDay
  );

  let futureMonthGigs = gigs.filter(
    (gig) => parseInt(gig.metadata.month) > currentMonth
  );

  let currentGigs = [...thisMonthGigs, ...futureMonthGigs];

  // let filteredGigs =
  //   filterState === "all"
  //     ? currentGigs
  //     : currentGigs.filter((gig) => gig.metadata.month === filterState);

  // Set display (Gigs, About, Submit etc.)
  function getDisplay(display) {
    setDisplayState(display);
  }
  // REPLACE SEPARATE FUNCTIONS ONCE MONTH THING IS FIGURED OUT
  // function updateGigListUI(filter, display) {
  //   setFilterState(filter)
  //   setDisplayState(display)
  // }

  // Filter by Month
  // function filterGigMonth(selectedData) {
  //   if (selectedData === "ALL") {
  //     setFilterState("all");
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "GIGS") {
  //     setFilterState("all");
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "JANUARY") {
  //     setFilterState("01");
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "FEBRUARY") {
  //     setFilterState("02");
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "MARCH") {
  //     setFilterState("03");
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "APRIL") {
  //     setFilterState("04");
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "MAY") {
  //     setFilterState("05");
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "JUNE") {
  //     setFilterState("06");
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "JULY") {
  //     setFilterState("07");
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "AUGUST") {
  //     setFilterState("08");
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "SEPTEMBER") {
  //     setFilterState("09");
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "OCTOBER") {
  //     setFilterState(10);
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "NOVEMBER") {
  //     setFilterState(11);
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   } else if (selectedData === "DECEMBER") {
  //     setFilterState(12);
  //     setDisplayState("gigs");
  //     console.log(filterState);
  //   }
  // }

  let content = <GigList gigs={currentGigs}></GigList>;

  // Set display content based on state
  if (displayState === "about") {
    content = <About></About>;
  } else if (displayState === "submit") {
    content = <Form addEvt={addEvt}></Form>;
  } else {
    content = <GigList gigs={currentGigs} getDisplay={getDisplay}></GigList>;
  }

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Unica+One:ital,wght@0,100;0,200;0,400;0,700;1,100;1,200;1,400;1,700&family=Shrikhand&display=swap"
          rel="stylesheet"
        />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>

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
