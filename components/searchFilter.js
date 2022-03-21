import { KeyboardEvent, MouseEvent } from "react";
import styles from "../styles/components/searchFilter.module.css";

function SearchFilter(props) {
  const dropdownMonthArray = [
    "ALL",
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const monthDropdownList = dropdownMonthArray.map((gig) => (
    <a href="#" onClick={(e) => props.selectMonth(e)} key={Math.random()}>
      {gig}
    </a>
  ));

  return (
    <div className={styles.searchAndFilterContainer}>
      <div className={styles.searchWrap}>
        <input
          type="text"
          className={styles.searchBar}
          id={"searchBar"}
          onKeyUp={props.searchGigs}
          placeholder="Search bands or venues"
        ></input>
      </div>
      <div className={styles.dropdownLink}>
        <a href="#" className={styles.monthButton}>
          MONTH +
        </a>
        <div className={styles.dropdownContent} id="dropdownContent">
          {monthDropdownList}
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
