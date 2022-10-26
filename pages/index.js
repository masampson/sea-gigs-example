import styles from "../styles/pages/Home.module.css";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/header";
import GigList from "../components/gigList";
import About from "../components/about";
import Form from "../components/form";
import Login from "../components/login";
import { useAuth } from "../utils/firebase";
const Cosmic = require("cosmicjs");
const api = Cosmic();

const bucket = api.bucket({
  slug: "sea-gigs-production",
  read_key: process.env.COSMIC_READ_KEY,
});

const fakeGigs = [
  {
    content: "",
    metadata: {
      access: "Handicap Accessible",
      additional:
        "Camel Van, (noun): An indie rock ensemble who haven't figured out their exact genre yet but are trying, kinda. Their music sounds like dream vibes with slight hints of shoegaze and an after-taste of bedroom pop, served on the rock(s) as a blend of Hispanic and US musicians who are also good friends.",
      age: "21+",
      approved: "yes",
      cost: 10,
      day: 25,
      email: "goseagigs@gmail.com",
      gig: "Camel Van // supernowhere // Half Tail",
      key: 0.8386937249291238,
      month: 10,
      ticketing:
        "https://www.ticketweb.com/event/camel-van-supernowhere-half-tractor-tickets/12551325?pl=tractor&REFID=clientsitewp",
      time: "20:00",
      venue: "Tractor Tavern",
      year: 2030,
    },
    slug: "camel-van-supernowhere-half-tail",
    title: "Camel Van // supernowhere // Half Tail",
  },
  {
    content: "",
    metadata: {
      access: "Handicap Accessible",
      additional:
        "Rejecting the influence of fleeting scenes and encroaching developers; the Laurelthirst Public House has always stayed in tune with its generations of muddy patrons carving out lives as blue-collar artists. 'The Thirst' -- Portland, Oregon's oldest independent venue -- has always been a sort of misfit stronghold -- a sanctuary for the same kind of spirit that sustained local punk legends Dead Moon and outsider folk hero Michael Hurley. It's also become a lifeblood for working-class musicians like Taylor Kingman. Most nights, you'll likely find the TK & The Holy Know-Nothings songwriter and lead vocalist on stage (or at the bar). Ask around the place and you'll quickly uncover Kingman's reputation as the sort of songwriter who makes other songwriters jealous, even angry. You'll also hear about his hustle as both a player and writer, as those same songwriters line up to play with him. It's led to countless projects, exploring myriad concepts and styles, and making the sort of honest music that stands starkly, alongside the Laurelthirst, against the backdrop of a city quickly fading under the lacquer of gentrification. TK & The Holy Know-Nothings is perhaps Kingmans most beloved project. Half-dutifully and half-facetiously self-dubbed psychedelic doom boogie, the group was born out of Kingmans desire to create a loose, groove-heavy bar band that never sacrifices the importance of good, honest songwriting. Doing so required pulling together a local supergroup of friends, neighbors, and fellow Laurelthirst royalty, including drummer Tyler Thompson and multi-instrumentalists Jay Cobb Anderson (lead guitar, harmonica), Lewi Longmire (bass, guitar, pedal steel, flugelhorn, mellotron, lap steel) and Sydney Nash (keys, bass, slide guitar, cornet). It's a band of deeply contrasting styles buoyed by a sincere and palpable mutual trust -- one that allows them to find and lose the groove with the same ease. They build graceful, spaced-out landscapes around Kingman's storytelling -- his voice ragged and broken one moment and raging the next -- only to deconstruct them through a fit of manic and often dissonant rabbit holes. And Kingmans equally irreverent, delicate, and cerebral first-person narratives somehow merge seamlessly with it all.",
      age: "21+",
      approved: "yes",
      cost: 17,
      day: 26,
      email: "m.andresampson@gmail.com",
      gig: "Tk and the Holy Know-Nothings // Smoker Dad",
      key: 0.3004244880029574,
      month: 10,
      ticketing:
        "https://www.ticketweb.com/event/tk-and-the-holy-know-tractor-tickets/12497185?pl=tractor&REFID=clientsitewp",
      time: "20:00",
      venue: "Tractor Tavern",
      year: 2030,
    },
    slug: "tk-and-the-holy-know-nothings-smoker-dad",
    title: "Tk and the Holy Know-Nothings // Smoker Dad",
  },
  {
    content: "",
    metadata: {
      access: "Handicap Accessible",
      additional: "",
      age: "21+",
      approved: "yes",
      cost: 12,
      day: "03",
      email: "m.andresampson@gmail.com",
      gig: "MAITA // Tomo Nakayama",
      key: 0.45597191452681707,
      month: 11,
      ticketing:
        "https://www.ticketweb.com/event/maita-tomo-nakayama-sunset-tavern-tickets/12478225?pl=sunset&REFID=clientsitewp",
      time: "20:00",
      venue: "Sunset Tavern",
      year: 2030,
    },
    slug: "maita-tomo-nakayama",
    title: "MAITA // Tomo Nakayama",
  },
  {
    content: "",
    metadata: {
      access: "Handicap Accessible",
      additional: "",
      age: "21+",
      approved: "yes",
      cost: 15,
      day: 30,
      email: "m.andresampson@gmail.com",
      gig: "The Heavy Heavy // Valley Queen // Small Paul",
      key: 0.6180213710373752,
      month: 10,
      ticketing:
        "https://www.ticketweb.com/event/the-heavy-heavy-w-valley-tractor-tickets/12198045?pl=tractor&REFID=clientsitewp",
      time: "20:00",
      venue: "Tractor Tavern",
      year: 2030,
    },
    slug: "the-heavy-heavy-valley-queen-small-paul",
    title: "The Heavy Heavy // Valley Queen // Small Paul",
  },
  {
    content: "",
    metadata: {
      access: "Handicap Accessible",
      additional: "",
      age: "21+",
      approved: "yes",
      cost: 12,
      day: "04",
      email: "m.andresampson@gmail.com",
      gig: "Fluung, Soft Boiled // Dead Family Dog // Fell Off",
      key: 0.30019398328615887,
      month: 12,
      ticketing:
        "https://www.ticketweb.com/event/ks-b-day-bash-featuring-sunset-tavern-tickets/12599125?pl=sunset&REFID=clientsitewp",
      time: "20:00",
      venue: "Sunset Tavern",
      year: 2030,
    },
    slug: "fluung-soft-boiled-dead-family-dog-fell-off",
    title: "Fluung, Soft Boiled // Dead Family Dog // Fell Off",
  },
];

function SeaGigs({ gigs }) {
  const user = useAuth();
  console.log(gigs);

  // STATE MANAGEMENT ==========
  const [displayState, setDisplayState] = useState("gigs");
  const [isLogIn, setIsLogIn] = useState(false);

  // FUNCTIONS ===============

  // Add event to Cosmic
  async function addEvt(evt) {
    console.log(evt);
  }

  async function addEvtInternal(evt) {
    console.log(evt);
  }

  //Show/hide login card
  const loginToggle = () => {
    setIsLogIn(!isLogIn);
  };

  // DATE TURNOVER ================

  let today = new Date();
  let currentMonth = today.getMonth() + 1;
  let currentDay = today.getDate();
  let currentYear = today.getFullYear();

  let approvedGigs = fakeGigs.filter((gig) => gig.metadata.approved === "yes");
  let currentYearGigs = approvedGigs.filter(
    (gig) => parseInt(gig.metadata.year, 10) === currentYear
  );

  let futureYearGigs = fakeGigs.filter(
    (gig) => gig.metadata.year > currentYear
  );

  let thisMonthGigs = currentYearGigs.filter(
    (gig) =>
      parseInt(gig.metadata.month) === currentMonth &&
      parseInt(gig.metadata.day) >= currentDay
  );

  let futureMonthGigs = currentYearGigs.filter(
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
    content = <Form addEvt={user ? addEvtInternal : addEvt} user={user} />;
  } else {
    content = (
      <GigList
        gigs={currentGigs}
        nextYearGigs={futureYearGigs}
        getDisplay={getDisplay}
      ></GigList>
    );
  }

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="SeaGigs - Seattle's premier show calendar."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&family=Unica+One&display=swap"
          rel="stylesheet"
        />

        <title>SEAGIGS</title>
      </Head>

      <section className={styles.bodyContainer}>
        <Header
          loginToggle={loginToggle}
          getDisplay={getDisplay}
          display={displayState}
        ></Header>
        {isLogIn && <Login loginToggle={loginToggle} />}
        {content}
      </section>
    </div>
  );
}

// export async function getServerSideProps() {
//   const data = await bucket.getObjects({
//     query: {
//       type: "gigs",
//     },
//     props: "slug,title,content,metadata", // Limit the API response data by props
//   });
//   const gigs = await data.objects;
//   return {
//     props: {
//       gigs,
//     },
//   };
// }
export default SeaGigs;
