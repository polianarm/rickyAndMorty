import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Sobre
          </Link>
        </li>
      </ul>

      <h1 className={styles.title}>Rick and Morty</h1>
    </header>
  );
}
