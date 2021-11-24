import { FormEvent, useState } from "react";
import styles from "../styles/components/form.module.css";
import { Gig, GigListProps } from "./gigList";

interface FormSubmitFormat {
  title: string;
  key: number;
  venue: string;
  cost: string;
  year: number;
  month: number;
  day: number;
  time: string;
  age: string;
  access: string;
  email: string;
  ticketing: string;
  additional: string;
}

interface FormProps {
  addEvt: (evt: FormSubmitFormat) => void;
}

function Form(props: FormProps) {
  // Form Reset
  const formReset = function () {
    const titleInput = document.getElementById("gigTitle") as HTMLInputElement;
    const venueInput = document.getElementById("venue") as HTMLInputElement;
    const costInput = document.getElementById("cost") as HTMLInputElement;
    const dateInput = document.getElementById("date") as HTMLInputElement;
    const timeInput = document.getElementById("time") as HTMLInputElement;
    const agesInput = document.getElementById("ages") as HTMLInputElement;
    const accessibilityInput = document.getElementById(
      "accessibility"
    ) as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const ticketingInput = document.getElementById(
      "ticketing"
    ) as HTMLInputElement;
    const extraInfoInput = document.getElementById(
      "extraInfo"
    ) as HTMLInputElement;
    titleInput.value = "";
    venueInput.value = "";
    costInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
    agesInput.value = "21+";
    accessibilityInput.value = "Handicap Accessible";
    emailInput.value = "";
    ticketingInput.value = "";
    extraInfoInput.value = "";
  };

  // Submit Handler
  const submitHandler = async function (e: FormEvent) {
    const target = e.target as HTMLFormElement;
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

    props.addEvt(gigPost);
    formReset();
    alert("Gig Submitted!");
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.gigForm} id="gigForm" onSubmit={submitHandler}>
        <div className={styles.formInput}>
          <label htmlFor="gigTitle">Gig:</label>
          <input
            type="text"
            id="gigTitle"
            name="title"
            placeholder="eg. Limp Bizkit // Bjork // Donna Summer"
          />
        </div>
        <div className={styles.halfFormInput} id="venueInput">
          <label htmlFor="venue">Venue:</label>
          <input type="text" id="venue" name="venue" />
        </div>
        <div className={styles.halfFormInput} id="costInput">
          <label htmlFor="cost">Cost:</label>
          <input type="text" id="cost" name="cost" />
        </div>
        <div className={styles.dropFormInput}>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" />
        </div>
        <div className={styles.dropFormInput}>
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" />
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
        <div className={styles.formInput}>
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="ticketing">Venue/Ticketing link:</label>
          <input type="text" id="ticketing" name="ticketing" />
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
      <div className={styles.bookerNotice}>
        <p>
          Are you a booker or promoter and need to submit many gigs at once?
          Please get in touch at{" "}
          <span>
            <a href="mailto: goseagigs@gmail.com">goseagigs@gmail.com</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Form;
