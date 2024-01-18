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
      </ul>

      <Link to="/" className={styles.linkImg}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
          alt="logo da animação"
          className={styles.image}
        />
      </Link>
    </header>
  );
}
