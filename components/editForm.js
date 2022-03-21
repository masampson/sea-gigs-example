import { async } from "@firebase/util";
import { FormEvent } from "react";
import styles from "../styles/components/editForm.module.css";
import { useAuth } from "../utils/firebase";

function EditForm({ editEvt, deleteEvt, gig }) {
  const user = useAuth();
  console.log(gig);

  // Submit Handler
  const submitHandler = async function (e) {
    const target = e.target;
    e.preventDefault();
    const dateArray = target.date.value.split("-");

    const gigPost = {
      id: gig.id,
      title: target.gigTitle.value,
      key: gig.metadata.key,
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

    editEvt(gigPost);
  };

  const defaultDateValue = `${gig.metadata.year}-${gig.metadata.month}-${gig.metadata.day}`;

  return (
    <div className={styles.formContainer}>
      <form className={styles.gigForm} id="gigForm" onSubmit={submitHandler}>
        {user && <h1>{`Editing ${gig.title}`}</h1>}
        <div className={styles.formInput}>
          <label htmlFor="gigTitle">Gig:</label>
          <input
            type="text"
            id="gigTitle"
            name="title"
            defaultValue={gig.title}
            required
          />
        </div>
        <div className={styles.halfFormInput} id="venueInput">
          <label htmlFor="venue">Venue:</label>
          <input
            type="text"
            id="venue"
            name="venue"
            defaultValue={gig.metadata.venue}
            required
          />
        </div>
        <div className={styles.halfFormInput} id="costInput">
          <label htmlFor="cost">Cost:</label>
          <input
            type="text"
            id="cost"
            name="cost"
            defaultValue={gig.metadata.cost}
            required
          />
        </div>
        <div className={styles.dropFormInput}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={defaultDateValue}
            required
          />
        </div>
        <div className={styles.dropFormInput}>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            defaultValue={gig.metadata.time}
            required
          />
        </div>
        <div className={styles.dropFormInput}>
          <label htmlFor="ages">Ages:</label>
          <select name="ages" id="ages" defaultValue={gig.metadata.age}>
            <option value="21+">21+</option>
            <option value="18">18+</option>
            <option value="All Ages">All Ages</option>
          </select>
        </div>
        <div className={styles.dropFormInput}>
          <label htmlFor="accessibility">Access:</label>
          <select
            name="accessibility"
            id="accessibility"
            defaultValue={gig.metadata.access}
          >
            <option value="Handicap Accessible">Handicap Accessible</option>
            <option value="NOT Handicap Accessible">
              NOT Handicap Accessible
            </option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div className={styles.formInput}>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user?.email}
            required
            disabled
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="ticketing">Venue/Ticketing link:</label>
          <input
            type="text"
            id="ticketing"
            name="ticketing"
            defaultValue={gig.metadata.ticketing}
            required
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="extraInfo">Additional Information:</label>
          <textarea
            id="extraInfo"
            name="extraInfo"
            defaultValue={gig.metadata.additional}
          ></textarea>
        </div>
        <div className={styles.submitContainer}>
          <button
            className={styles.delete}
            type="button"
            onClick={() => deleteEvt(gig.id)}
          >
            Delete
          </button>
          <input
            type="submit"
            value="Submit Edits"
            className={styles.submitInput}
          />
        </div>
      </form>
    </div>
  );
}

export default EditForm;
