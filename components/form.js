import styles from "../styles/components/form.module.css";

function Form(props) {
  // Form Reset
  const formReset = function () {
    document.getElementById("title").value = "";
    document.getElementById("venue").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("ages").value = "21+";
    document.getElementById("accessibility").value = "Handicap Accessible";
    document.getElementById("email").value = "";
    document.getElementById("ticketing").value = "";
    document.getElementById("extraInfo").value = "";
  };

  // Submit Handler
  const submitHandler = async function (e) {
    e.preventDefault();
    const dateArray = e.target.date.value.split("-");

    const gigPost = {
      title: e.target.title.value,
      key: Math.random(),
      venue: e.target.venue.value,
      cost: e.target.cost.value,
      year: dateArray[0],
      month: dateArray[1],
      day: dateArray[2],
      time: e.target.time.value,
      age: e.target.ages.value,
      access: e.target.accessibility.value,
      email: e.target.email.value,
      ticketing: e.target.ticketing.value,
      additional: e.target.extraInfo.value,
    };

    props.addEvt(gigPost);
    formReset();
    alert("Gig Submitted!");
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.gigForm} id="gigForm" onSubmit={submitHandler}>
        <div className={styles.formInput}>
          <label htmlFor="title">Gig:</label>
          <input
            type="text"
            id="title"
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
    </div>
  );
}

export default Form;
