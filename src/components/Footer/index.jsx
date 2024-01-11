import styles from "./Footer.module.css";
// import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>© 2024</h3>
      {/* <div>
        <ul className={styles.lista}>
          <li>
            <SiLinkedin size={21} />
          </li>
        </ul>
      </div> */}
    </footer>
  );
}
