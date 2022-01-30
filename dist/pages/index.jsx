"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const Home_module_css_1 = __importDefault(require("../styles/pages/Home.module.css"));
const head_1 = __importDefault(require("next/head"));
const react_1 = require("react");
const header_1 = __importDefault(require("../components/header"));
const gigList_1 = __importDefault(require("../components/gigList"));
const about_1 = __importDefault(require("../components/about"));
const form_1 = __importDefault(require("../components/form"));
const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
    slug: "sea-gigs-production",
    read_key: process.env.COSMIC_READ_KEY,
});
function SeaGigs({ gigs }) {
    // STATE MANAGEMENT ==========
    const [displayState, setDisplayState] = (0, react_1.useState)("gigs");
    // const [gigsFilteredMonthState, setGigsFilteredMonthState] = useState(gigs);
    // console.log(gigsFilteredMonthState);
    // FUNCTIONS ===============
    // Add event to Cosmic
    function addEvt(evt) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("/api/sea-gigs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ evt }),
            });
            // console.log(response, evt);
        });
    }
    // DATE TURNOVER ================
    let today = new Date();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();
    let currentYear = today.getFullYear();
    let currentYearGigs = gigs.filter((gig) => parseInt(gig.metadata.year, 10) === currentYear);
    let futureYearGigs = gigs.filter((gig) => gig.metadata.year > currentYear);
    let thisMonthGigs = currentYearGigs.filter((gig) => parseInt(gig.metadata.month) === currentMonth &&
        parseInt(gig.metadata.day) >= currentDay);
    let futureMonthGigs = currentYearGigs.filter((gig) => parseInt(gig.metadata.month) > currentMonth);
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
    function getDisplay(display) {
        setDisplayState(display);
    }
    let content = (<gigList_1.default gigs={currentGigs} nextYearGigs={futureYearGigs} getDisplay={getDisplay}></gigList_1.default>);
    // Set display content based on state
    if (displayState === "about") {
        content = <about_1.default></about_1.default>;
    }
    else if (displayState === "submit") {
        content = <form_1.default addEvt={addEvt}></form_1.default>;
    }
    else {
        content = (<gigList_1.default gigs={currentGigs} nextYearGigs={futureYearGigs} getDisplay={getDisplay}></gigList_1.default>);
    }
    console.log(gigs);
    return (<div>
      <head_1.default>
        <meta charSet="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Unica+One:ital,wght@0,100;0,200;0,400;0,700;1,100;1,200;1,400;1,700&family=Shrikhand&display=swap"
          rel="stylesheet"
        /> */}

        <title>SEAGIGS</title>
      </head_1.default>

      <section className={Home_module_css_1.default.bodyContainer}>
        <header_1.default getDisplay={getDisplay}></header_1.default>
        {content}
      </section>
    </div>);
}
function getServerSideProps() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield bucket.getObjects({
            query: {
                type: "gigs",
                "metadata.approved": {
                    $eq: "yes",
                },
            },
            props: "slug,title,content,metadata", // Limit the API response data by props
        });
        const gigs = yield data.objects;
        return {
            props: {
                gigs,
            },
        };
    });
}
exports.getServerSideProps = getServerSideProps;
exports.default = SeaGigs;
