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
  read_key: "Cnl81h1nXItxaSfeVIJ83Il5MAkMkWeTzNTwsoW7pzdlNk01Yc",
});

function SeaGigs({ gigs }) {
  // STATE MANAGEMENT ==========
  const [displayState, setDisplayState] = useState("gigs");
  const [filterState, setFilterState] = useState("all");

  // FUNCTIONS ===============

  // Add event to Cosmic
  async function addEvt(evt) {
    const response = await fetch("/api/sea-gigs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ evt }),
    });
    console.log(response, evt);
  }

  // Set display (Gigs, About, Submit etc.)
  function getDisplay(display) {
    setDisplayState(display);
  }

  // Filter by Month
  function filterGigs(selectedMonth) {
    if (selectedMonth === "JANUARY") {
      setFilterState("01");
      setDisplayState("gigs");
    } else if (selectedMonth === "FEBRUARY") {
      setFilterState("02");
      setDisplayState("gigs");
    } else if (selectedMonth === "MARCH") {
      setFilterState("03");
      setDisplayState("gigs");
    } else if (selectedMonth === "APRIL") {
      setFilterState("04");
      setDisplayState("gigs");
    } else if (selectedMonth === "MAY") {
      setFilterState("05");
      setDisplayState("gigs");
    } else if (selectedMonth === "JUNE") {
      setFilterState("06");
      setDisplayState("gigs");
    } else if (selectedMonth === "JULY") {
      setFilterState("07");
      setDisplayState("gigs");
    } else if (selectedMonth === "AUGUST") {
      setFilterState("08");
      setDisplayState("gigs");
    } else if (selectedMonth === "SEPTEMBER") {
      setFilterState("09");
      setDisplayState("gigs");
    } else if (selectedMonth === "OCTOBER") {
      setFilterState("10");
      setDisplayState("gigs");
    } else if (selectedMonth === "NOVEMBER") {
      setFilterState("11");
      setDisplayState("gigs");
    } else if (selectedMonth === "DECEMBER") {
      setFilterState("12");
      setDisplayState("gigs");
    }
  }

  // VARIABLES ================

  let filteredGigs =
    filterState === "all"
      ? gigs
      : gigs.filter((gig) => gig.metadata.month === filterState);

  let content = <GigList gigs={filteredGigs}></GigList>;

  // Set display content based on state
  if (displayState === "about") {
    content = <About></About>;
  } else if (displayState === "submit") {
    content = <Form addEvt={addEvt}></Form>;
  } else {
    content = <GigList gigs={filteredGigs}></GigList>;
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
        <Header getDisplay={getDisplay} filterGigs={filterGigs}></Header>
        {content}
      </section>
    </div>
  );
}

export async function getStaticProps() {
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
