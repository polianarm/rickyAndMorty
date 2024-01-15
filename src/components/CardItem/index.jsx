import styles from "./CardItem.module.css";
import { GiDiamonds } from "react-icons/gi";

export default function CardItem({ name, image, status, species, type }) {
  return (
    <>
      <div className={styles.cardItem}>
        <img src={image} alt="" />
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

        {/* <p>Status:</p><span>{status} </span>
        <p>Espécie:</p><span>{species} </span>
        <p>Tipo:</p><span>{type} </span> */}

        <button className={styles.button}></button>
      </div>
    </>
  );
}
