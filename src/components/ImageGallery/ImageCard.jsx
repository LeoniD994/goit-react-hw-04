import PropTypes from "prop-types";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <li className={styles.item} onClick={() => onClick(image)}>
      <div className={styles.card}>
        <img
          src={image.urls.small}
          alt={image.alt_description}
          className={styles.image}
        />
      </div>
    </li>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
