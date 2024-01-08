import { Logo } from "../Logo/Logo";
import styles from "./Layout.module.css";

export const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <Logo width={200} alt="Camtech Technical Services" />
      {children}
    </header>
  );
};
