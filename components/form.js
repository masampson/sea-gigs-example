import { FormEvent } from "react";
import styles from "../styles/components/form.module.css";

function Form({ addEvt, user }) {
  // Form Reset
  const formReset = function () {
    const titleInput = document.getElementById("gigTitle");
    const venueInput = document.getElementById("venue");
    const costInput = document.getElementById("cost");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const agesInput = document.getElementById("ages");
    const accessibilityInput = document.getElementById("accessibility");
    const emailInput = document.getElementById("email");
    const ticketingInput = document.getElementById("ticketing");
    const extraInfoInput = document.getElementById("extraInfo");
    titleInput.value = "";
    venueInput.value = "";
    costInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
    agesInput.value = "21+";
    accessibilityInput.value = "Handicap Accessible";
    emailInput.value = user ? user?.email : "";
    ticketingInput.value = "";
    extraInfoInput.value = "";
  };

  // Submit Handler
  const submitHandler = async function (e) {
    const target = e.target;
    e.preventDefault();
    const dateArray = target.date.value.split("-");

    const gigPost = {
      title: target.gigTitle.value,
      key: Math.random(),
      venue: target.venue.value,
      cost: target.cost.value,
      year: dateArray[0],
      month: dateArray[1],
      day: dateArray[2],
      time: target.time.value,
      age: target.ages.value,
      access: target.accessibility.value,
      email: target.email.value,
      ticketing: target.ticketing.value,
      additional: target.extraInfo.value,
    };

    addEvt(gigPost);
    formReset();
    alert("Gig Submitted!");
  };

  const standardEmail = (
    <div className={styles.formInput}>
      <label htmlFor="email">Your Email:</label>
      <input type="email" id="email" name="email" required />
    </div>
  );

  const adminEmail = (
    <div className={styles.formInput}>
      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={user?.email}
        required
        disabled
      />
    </div>
  );

  return (
    <div className={styles.formContainer}>
      <form className={styles.gigForm} id="gigForm" onSubmit={submitHandler}>
        {user && <h1>Internal Submission Form</h1>}
        <div className={styles.formInput}>
          <label htmlFor="gigTitle">Gig:</label>
          <input
            type="text"
            id="gigTitle"
            name="title"
            placeholder="eg. Limp Bizkit // Bjork // Donna Summer"
            required
          />
        </div>
        <div className={styles.halfFormInput} id="venueInput">
          <label htmlFor="venue">Venue:</label>
          <input type="text" id="venue" name="venue" required />
        </div>
        <div className={styles.halfFormInput} id="costInput">
          <label htmlFor="cost">Cost:</label>
          <input type="text" id="cost" name="cost" required />
        </div>
        <div className={styles.dropFormInput}>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className={styles.dropFormInput}>
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />
        </div>
        <div className={styles.dropFormInput}>
          <label htmlFor="ages">Ages:</label>
          <select name="ages" id="ages">
            <option value="21+">21+</option>
            <option value="18">18+</option>
            <option value="All Ages">All Ages</option>
          </select>
        </div>
        <div className={styles.dropFormInput}>
          <label htmlFor="accessibility">Access:</label>
          <select name="accessibility" id="accessibility">
            <option value="Handicap Accessible">Handicap Accessible</option>
            <option value="NOT Handicap Accessible">
              NOT Handicap Accessible
            </option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        {user ? adminEmail : standardEmail}
        <div className={styles.formInput}>
          <label htmlFor="ticketing">Venue/Ticketing link:</label>
          <input type="text" id="ticketing" name="ticketing" required />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="extraInfo">Additional Information:</label>
          <textarea
            id="extraInfo"
            name="extraInfo"
            placeholder="Any additional info: Band links, pertinent details, safety/accessibility concerns etc."
          ></textarea>
        </div>
        <div className={styles.submitContainer}>
          <input
            type="submit"
            value="Send Gig"
            className={styles.submitInput}
          />
        </div>
      </form>
      {!user && (
        <div className={styles.bookerNotice}>
          <p>
            Are you a booker or promoter and need to submit many gigs at once?
            Please get in touch at{" "}
            <span>
              <a href="mailto: goseagigs@gmail.com">goseagigs@gmail.com</a>
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Form;
