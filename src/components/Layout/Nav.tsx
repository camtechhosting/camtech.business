import Link from "next/link";
import styles from "./Layout.module.css";

export const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li className={styles.navListItem}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.navListItem}>
        <Link href="/contact">Get a Quote</Link>
      </li>
      <li className={styles.navListItem}>
        <a href="tel:6618599820">661.859.9820</a>
      </li>
    </ul>
  </nav>
);
