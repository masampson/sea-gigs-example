"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const about_module_css_1 = __importDefault(require("../styles/components/about.module.css"));
function About() {
    return (<section className={about_module_css_1.default.aboutContainer}>
      <p>
        SEA GIGS is an artist owned and operated portal to the world of
        public-facing creative events in Seattle. As a democratic platform of
        information dissemination we never editorialize our listings. In a
        landscape of pay-to-play algorithm driven arts promotion, we seek to put
        the artist and consumer back on an even playing field and remove the
        influence of corporate interest in the arts community.
      </p>
      <section className={about_module_css_1.default.faqSection}>
        <h2>Disclaimer:</h2>
        <h3>
          All information on SEA GIGS was the most accurate at the time it was
          listed. We are not responsible for any incorrect information, please
          refer to the venue websites for the most up to date information.
        </h3>
        <h2>FAQ:</h2>
        <h3>How does it work?</h3>
        <p>
          <ul>
            <li>
              Users submit event information through our form hosted on this
              website.
            </li>
            <li>
              Admins verify all information as best we can before approving the
              event to be displayed on gig list.
            </li>
            <li>Gigs are listed chronologically, not ranked in any way.</li>
            <li>You can filter by month or by select venues</li>
            <li>You get to the gig</li>
          </ul>
        </p>
        <h3>Can I pay to promote my show?</h3>
        <p>
          The intention with SEA GIGS is to avoid the influence of money on the
          ability to engage with our local arts scene. To that end we do not
          accept any payment, financial or otherwise, to place more importance
          on one listing over another.{" "}
          <b>All events are listed chronologically.</b>
        </p>
        <h3>What if my show is at a house or some other nonstandard venue?</h3>
        <p>
          As a rule we won't publish addresses of private venues. Please do
          include some way for site visitors to find out more information,
          whether it's submitted in lieu of a ticket link or in the "More Info"
          section.{" "}
          <b>
            Let us know what you do and do not want shared publicly, and let us
            know who you are in relation to the show.
          </b>
          If there's no way for people to find out more about the show, we won't
          list it. If you aren't associated with the house or bands, we won't
          list it.
        </p>
        <h3>
          I'm a venue booker or promoter, do I have to submit all my events
          individually?
        </h3>
        <p>
          Get in touch with us at{" "}
          <span>
            <a href="mailto: goseagigs@gmail.com"> goseagigs@gmail.com</a>
          </span>{" "}
          and we can tailor a system directly to your needs in order to make
          submitting your schedule as painless as possible.
        </p>
        <h3>
          I submitted a gig that I need to change or cancel, how should I do
          that?
        </h3>
        <p>
          Shoot us an email at{" "}
          <span>
            <a href="mailto: goseagigs@gmail.com"> goseagigs@gmail.com</a>
          </span>{" "}
          with the information you submitted and we can change or delete your
          listing.
        </p>
        <h3>I want to help! What can I do?</h3>
        <p>
          We try to keep our team small in order to keep communication orderly,
          but get in touch and we can see what we might need!
        </p>
      </section>
      {/* <ul>
          <li>
            Users submit event information through our form hosted on this
            website.
          </li>
          <li>
            Admins verify all information as best we can before approving the
            event to be displayed on gig list.
          </li>
          <li>
            Some listings come directly from venues or production groups, but no
            one listing is given precidence over any other, even if the source is
            a financial contributor to SEA GIGS.
          </li>
          <li>Gigs are listed chronologically, not ranked in any way.</li>
          <li>You get to the gig</li>
        </ul>
        <h2>Contact:</h2>
        <p>
          Questions? Concerns about a listing? Want to be involved? Please don't
          hesitate to get in touch at
          <span>
            <a href="mailto: goseagigs@gmail.com"> goseagigs@gmail.com</a>
          </span>
        </p> */}
    </section>);
}
exports.default = About;
