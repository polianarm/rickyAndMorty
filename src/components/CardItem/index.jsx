import styles from "./CardItem.module.css";

export default function CardItem( { name, image, status, species, type}) {
  return (
    <>
      <div className={styles.cardItem}>
      <img src={image} alt="" />
        <h1> {name} </h1>
        <p>{status} </p>
        <p>{species}</p>
        <p>{type}</p>

        <button className={styles.button}></button>
      </div>
    </>
  );
}
