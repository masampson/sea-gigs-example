import GigCard from "./gigCard";
import SearchFilter from "./searchFilter";
import styles from "../styles/components/gigList.module.css";
import { useState } from "react";

function GigList(props) {
  // SORT GIGS CHRONOLOGICALLY
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

  // GIGS TO BE FILTERED LATER, LEAVING MONTHS ARRAY INTACT
  let sortedGigs = monthsArray;

  // SET STATE FOR SEARCH AND FILTER
  const [searchState, setSearchState] = useState(sortedGigs);
  const [monthState, setMonthState] = useState("all");

  let filteredGigs =
    monthState === "all"
      ? searchState
      : searchState.filter((gig) => gig.metadata.month === monthState);

  // MONTH FILTER
  function filterGigMonth(selectedData) {
    if (selectedData === "ALL") {
      setMonthState("all");
      props.getDisplay("gigs");
    } else if (selectedData === "GIGS") {
      setMonthState("all");
      props.getDisplay("gigs");
    } else if (selectedData === "JANUARY") {
      setMonthState("01");
      props.getDisplay("gigs");
    } else if (selectedData === "FEBRUARY") {
      setMonthState("02");
      props.getDisplay("gigs");
    } else if (selectedData === "MARCH") {
      setMonthState("03");
      props.getDisplay("gigs");
    } else if (selectedData === "APRIL") {
      setMonthState("04");
      props.getDisplay("gigs");
    } else if (selectedData === "MAY") {
      setMonthState("05");
      props.getDisplay("gigs");
    } else if (selectedData === "JUNE") {
      setMonthState("06");
      props.getDisplay("gigs");
    } else if (selectedData === "JULY") {
      setMonthState("07");
      props.getDisplay("gigs");
    } else if (selectedData === "AUGUST") {
      setMonthState("08");
      props.getDisplay("gigs");
    } else if (selectedData === "SEPTEMBER") {
      setMonthState("09");
      props.getDisplay("gigs");
    } else if (selectedData === "OCTOBER") {
      setMonthState(10);
      props.getDisplay("gigs");
    } else if (selectedData === "NOVEMBER") {
      setMonthState(11);
      props.getDisplay("gigs");
    } else if (selectedData === "DECEMBER") {
      setMonthState(12);
      props.getDisplay("gigs");
    }
  }

  // SEARCH FUNCTION
  function searchGigs() {
    let searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("keyup", (e) => {
      const searchString = e.target.value.toLowerCase();
      filteredGigs = monthsArray.filter((gig) => {
        return (
          gig.metadata.gig.toLowerCase().includes(searchString) ||
          gig.metadata.venue.toLowerCase().includes(searchString)
        );
      });
      // console.log(filteredGigs);
      setSearchState(filteredGigs);
    });
  }

  // DEFINTE CONTENT BASED ON FILTERS AND SEARCH
  let content =
    filteredGigs.length >= 1 ? (
      filteredGigs.map((gig) => (
        <GigCard gig={gig} key={Math.random()}></GigCard>
      ))
    ) : (
      <h2 className={styles.noGigPlaceholder}>No gigs :( ... yet :)</h2>
    );

  function selectMonth(e) {
    let month = e.target.innerHTML;
    filterGigMonth(month);
    console.log(month);
  }

  return (
    <section className={styles.showContainer}>
      <SearchFilter
        selectMonth={selectMonth}
        searchGigs={searchGigs}
      ></SearchFilter>
      <div className={styles.showWrap}>{content}</div>
    </section>
  );
}

export default GigList;
