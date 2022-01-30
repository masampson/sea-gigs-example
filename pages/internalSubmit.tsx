import styles from "../styles/pages/Home.module.css";
import Head from "next/head";
import Form from "../components/form";

function SeaGigsInternal() {
  async function addEvt(evt: {}) {
    const response = await fetch("/api/sea-gigs-internal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ evt }),
    });
  }

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>SEAGIGS</title>
      </Head>

      <section className={styles.bodyContainer}>
        <Form addEvt={addEvt}></Form>
      </section>
    </div>
  );
}

export default SeaGigsInternal;
