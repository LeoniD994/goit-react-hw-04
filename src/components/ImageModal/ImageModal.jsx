import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.Image}
      />
      <button className={styles.CloseButton} onClick={onRequestClose}>
        &times;
      </button>
    </Modal>
  );
};

export default ImageModal;
