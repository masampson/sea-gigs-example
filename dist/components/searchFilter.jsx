"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const searchFilter_module_css_1 = __importDefault(require("../styles/components/searchFilter.module.css"));
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
    const monthDropdownList = dropdownMonthArray.map((gig) => (<a href="#" onClick={(e) => props.selectMonth(e)} key={Math.random()}>
      {gig}
    </a>));
    return (<div className={searchFilter_module_css_1.default.searchAndFilterContainer}>
      <div className={searchFilter_module_css_1.default.searchWrap}>
        <input type="text" className={searchFilter_module_css_1.default.searchBar} id={"searchBar"} onKeyUp={props.searchGigs} placeholder="Search bands or venues"></input>
      </div>
      <div className={searchFilter_module_css_1.default.dropdownLink}>
        <a href="#" className={searchFilter_module_css_1.default.monthButton}>
          MONTH +
        </a>
        <div className={searchFilter_module_css_1.default.dropdownContent} id="dropdownContent">
          {monthDropdownList}
        </div>
      </div>
    </div>);
}
exports.default = SearchFilter;
