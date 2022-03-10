import GigCard from "./gigCard";
import SearchFilter from "./searchFilter";
import styles from "../styles/components/gigList.module.css";
import { useState, MouseEvent } from "react";

export interface Gig {
  content?: string;
  metadata: {
    gig: string;
    title: string;
    key: number;
    approved: string;
    venue: string;
    cost: string;
    year: number;
    month: string;
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
}

export interface GigListProps {
  gigs: Gig[];
  nextYearGigs: Gig[];
  getDisplay: (display: string) => void;
}

function GigList(props: GigListProps) {
  // SORT GIGS CHRONOLOGICALLY

  function dateSort(month: string | number, array: Gig[]) {
    let sortedMonth = array
      .filter((gig) => gig.metadata.month === month)
      .sort(function (a, b) {
        return parseInt(a.metadata.day) - parseInt(b.metadata.day);
      });
    return sortedMonth;
  }

  // THIS YEAR SORT
  let januaryArray = dateSort("01", props.gigs);
  let februaryArray = dateSort("02", props.gigs);
  let marchArray = dateSort("03", props.gigs);
  let aprilArray = dateSort("04", props.gigs);
  let mayArray = dateSort("05", props.gigs);
  let juneArray = dateSort("06", props.gigs);
  let julyArray = dateSort("07", props.gigs);
  let augustArray = dateSort("08", props.gigs);
  let septemberArray = dateSort("09", props.gigs);
  let octoberArray = dateSort(10, props.gigs);
  let novemberArray = dateSort(11, props.gigs);
  let decemberArray = dateSort(12, props.gigs);

  // NEXT YEAR SORT
  let nextJanuaryArray = dateSort("01", props.nextYearGigs);
  let nextFebruaryArray = dateSort("02", props.nextYearGigs);
  let nextMarchArray = dateSort("03", props.nextYearGigs);
  let nextAprilArray = dateSort("04", props.nextYearGigs);
  let nextMayArray = dateSort("05", props.nextYearGigs);
  let nextJuneArray = dateSort("06", props.nextYearGigs);
  let nextJulyArray = dateSort("07", props.nextYearGigs);
  let nextAugustArray = dateSort("08", props.nextYearGigs);
  let nextSeptemberArray = dateSort("09", props.nextYearGigs);
  let nextOctoberArray = dateSort(10, props.nextYearGigs);
  let nextNovemberArray = dateSort(11, props.nextYearGigs);
  let nextDecemberArray = dateSort(12, props.nextYearGigs);

  // Combine Arrays
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
    ...nextJanuaryArray,
    ...nextFebruaryArray,
    ...nextMarchArray,
    ...nextAprilArray,
    ...nextMayArray,
    ...nextJuneArray,
    ...nextJulyArray,
    ...nextAugustArray,
    ...nextSeptemberArray,
    ...nextOctoberArray,
    ...nextNovemberArray,
    ...nextDecemberArray,
  ];

  // GIGS TO BE FILTERED LATER, LEAVING MONTHS ARRAY INTACT
  let sortedGigs = monthsArray;

  // SET STATE FOR SEARCH AND FILTER
  const [searchState, setSearchState] = useState(sortedGigs);
  const [monthState, setMonthState] = useState<string | number>("all");

  let filteredGigs =
    monthState === "all"
      ? searchState
      : searchState.filter((gig) => gig.metadata.month === monthState);

  interface monthID {
    ALL: "all";
    GIGS: "all";
    JANUARY: "01";
    FEBRUARY: "02";
    MARCH: "03";
    APRIL: "04";
    MAY: "05";
    JUNE: "06";
    JULY: "07";
    AUGUST: "08";
    SEPTEMBER: "09";
    OCTOBER: 10;
    NOVEMBER: 11;
    DECEMBER: 12;
  }

  const monthIdentifiers = {
    ALL: "all",
    GIGS: "all",
    JANUARY: "01",
    FEBRUARY: "02",
    MARCH: "03",
    APRIL: "04",
    MAY: "05",
    JUNE: "06",
    JULY: "07",
    AUGUST: "08",
    SEPTEMBER: "09",
    OCTOBER: 10,
    NOVEMBER: 11,
    DECEMBER: 12,
  };

  // MONTH FILTER
  function filterGigMonth(selectedData: keyof monthID) {
    setMonthState(monthIdentifiers[selectedData]);
    props.getDisplay("gigs");
  }

  // SEARCH FUNCTION
  function searchGigs() {
    let searchBar = document.getElementById("searchBar") as HTMLInputElement;

    searchBar.addEventListener("keyup", (e) => {
      const target = e.target as HTMLInputElement;
      const searchString = target.value.toLowerCase();
      filteredGigs = monthsArray.filter((gig) => {
        return (
          gig.metadata.gig.toLowerCase().includes(searchString) ||
          gig.metadata.venue.toLowerCase().includes(searchString)
        );
      });

      setSearchState(filteredGigs);
    });
  }

  // DEFINE CONTENT BASED ON FILTERS AND SEARCH
  console.log("before the map", filteredGigs.length, filteredGigs);

  let content =
    filteredGigs.length >= 1 ? (
      filteredGigs.map((gig) => (
        <GigCard
          gig={gig}
          key={gig.slug.toString() + gig.metadata.day.toString()}
          link={gig.metadata.ticketing}
        ></GigCard>
      ))
    ) : (
      <h2 className={styles.noGigPlaceholder}>No gigs :( ... yet :)</h2>
    );

  // MONTH FILTER FUNCTION
  function selectMonth(e: MouseEvent) {
    const target = e.target as HTMLInputElement;
    let month = target.innerHTML as keyof monthID;
    filterGigMonth(month);
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
