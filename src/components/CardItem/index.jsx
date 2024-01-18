import { Link } from "react-router-dom";
import styles from "./CardItem.module.css";
import { GiDiamonds } from "react-icons/gi";

export default function CardItem({ name, image, status, species, type, id }) {
  return (
    <>
      <div className={styles.cardItem}>
        <Link to={`/personagem/${id}`} className={styles.linkImg}>
          <img src={image} alt="" />
        </Link>

        <h1> {name} </h1>
        <div className={styles.info}>
          <GiDiamonds size={12} />
          <p>{status}</p>
        </div>

        <div className={styles.info}>
          <GiDiamonds size={12} />
          <p>{species}</p>
        </div>

        {type && (
          <div className={styles.info}>
            <GiDiamonds size={12} />
            <p>{type}</p>
          </div>
        )}

        <Link to={`/personagem/${id}`} className={styles.link}></Link>
      </div>
    </>
  );
}
