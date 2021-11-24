"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gigCard_module_css_1 = __importDefault(require("../styles/components/gigCard.module.css"));
function GigCard(props) {
    const gig = props.gig.metadata;
    const hour = parseInt(gig.time.slice(0, 2));
    const hourFormat = hour - (hour > 13 ? 12 : 0);
    const time = (<span>
      <p>{hourFormat + ":" + gig.time.slice(3)}</p>
      <p>{hour > 12 ? "PM" : "AM"}</p>
    </span>);
    return (<div className={gigCard_module_css_1.default.showListing}>
      <div className={gigCard_module_css_1.default.showInfo}>
        <h3>{props.gig.title}</h3>
        <p className={gigCard_module_css_1.default.showVenue}>{gig.venue}</p>
        <p className={gigCard_module_css_1.default.showAgeAccess}>
          ${gig.cost} / {gig.age} / {gig.access}
        </p>
        <p>
          <a href={gig.ticketing} className={gigCard_module_css_1.default.ticketLink} target="_blank">
            Ticket Information
          </a>
        </p>
      </div>
      <div className={gigCard_module_css_1.default.showDate}>
        <p>
          <span className={gigCard_module_css_1.default.showMonthDay}>
            {gig.month} / {gig.day}
          </span>
        </p>
        {time}
      </div>
    </div>);
}
exports.default = GigCard;
