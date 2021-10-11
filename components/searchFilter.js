import styles from "../styles/components/searchFilter.module.css";

function SearchFilter(props) {
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
          <a href="#" onClick={props.selectMonth}>
            ALL
          </a>
          <a href="#" onClick={props.selectMonth}>
            JANUARY
          </a>
          <a href="#" onClick={props.selectMonth}>
            FEBRUARY
          </a>
          <a href="#" onClick={props.selectMonth}>
            MARCH
          </a>
          <a href="#" onClick={props.selectMonth}>
            APRIL
          </a>
          <a href="#" onClick={props.selectMonth}>
            MAY
          </a>
          <a href="#" onClick={props.selectMonth}>
            JUNE
          </a>
          <a href="#" onClick={props.selectMonth}>
            JULY
          </a>
          <a href="#" onClick={props.selectMonth}>
            AUGUST
          </a>
          <a href="#" onClick={props.selectMonth}>
            SEPTEMBER
          </a>
          <a href="#" onClick={props.selectMonth}>
            OCTOBER
          </a>
          <a href="#" onClick={props.selectMonth}>
            NOVEMBER
          </a>
          <a href="#" onClick={props.selectMonth}>
            DECEMBER
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
