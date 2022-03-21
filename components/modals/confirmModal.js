import styles from "../../styles/components/confirmModal.module.css";

const ConfirmModal = ({
  confirmHandler,
  selectedGig,
  resetStates,
  modalState,
}) => {
  console.log(selectedGig);

  return (
    <div className={styles.container}>
      <div className={styles.modalCard}>
        <h3>{`Confirm ${modalState}?`}</h3>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.cancel}`}
            onClick={() => resetStates()}
          >
            Cancel
          </button>
          <button
            className={`${styles.button} ${styles.confirm}`}
            onClick={() => confirmHandler(selectedGig)}
          >
            Confirm
          </button>
        </div>
      </div>
      ;
    </div>
  );
};

export default ConfirmModal;
