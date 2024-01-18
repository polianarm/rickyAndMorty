import CardItem from "../CardItem";
import styles from "./Cards.module.css";

export default function Cards({ personagens }) {
  return (
    <section>
      <div className={styles.grid}>
        {personagens?.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
