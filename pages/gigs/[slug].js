import Head from "next/head";
import styles from "../../styles/pages/gigPage.module.css";
import EditForm from "../../components/editForm";
import ConfirmModal from "../../components/modals/confirmModal";
import { useAuth } from "../../utils/firebase";
import { useState } from "react";
const Cosmic = require("cosmicjs");
const api = Cosmic();

const bucket = api.bucket({
  slug: "sea-gigs-production",
  read_key: process.env.COSMIC_READ_KEY,
});

export async function getStaticPaths() {
  const data = await bucket.getObjects({
    query: {
      type: "gigs",
      "metadata.approved": {
        $eq: "yes",
      },
    },
    props: "slug", // Limit the API response data by props
  });
  const gigs = await data.objects;
  const paths = gigs.map((gig) => {
    return {
      params: { slug: gig.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await bucket.getObjects({
    query: {
      type: "gigs",
      slug: {
        $eq: slug,
      },
    },
  });
  const gigData = await data.objects;
  return {
    props: {
      gigData,
    },
  };
}

export default function GigPage({ gigData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalState, setModalState] = useState(null);
  const [selectedGig, setSelectedGig] = useState(null);
  const [formView, setFormView] = useState(true);
  const gig = gigData[0];
  console.log(selectedGig);

  const editEvt = (evt) => {
    console.log(evt);

    setSelectedGig(evt);
    setModalState("edit");
    setModalIsOpen(true);
  };
  const deleteEvt = (evt) => {
    setSelectedGig(evt);
    setModalState("delete");
    setModalIsOpen(true);
  };

  const resetStates = () => {
    setModalIsOpen(false);
    setSelectedGig(null);
    setModalState(null);
    setFormView(false);
  };

  async function confirmEditEvt(evt) {
    const response = await fetch("/api/sea-gigs-edit", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ evt }),
    });
    resetStates();
  }

  async function confirmDeleteEvt(evt) {
    console.log(evt);

    const response = await fetch("/api/sea-gigs-delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ evt }),
    });
    resetStates();
  }

  const modalFunction =
    modalState === "edit" ? confirmEditEvt : confirmDeleteEvt;

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>SEAGIGS</title>
      </Head>

      <div className={styles.bodyContainer}>
        {formView ? (
          <EditForm gig={gig} editEvt={editEvt} deleteEvt={deleteEvt} />
        ) : (
          <div>Action Complete.</div>
        )}
        {modalIsOpen && (
          <ConfirmModal
            confirmHandler={modalFunction}
            selectedGig={selectedGig}
            resetStates={resetStates}
            modalState={modalState}
          />
        )}
      </div>
    </div>
  );
}
