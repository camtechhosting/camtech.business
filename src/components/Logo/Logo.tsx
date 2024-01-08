import Image from "next/image";
import styles from "./Logo.module.css";

export const Logo = ({ width = 400, height = 100, alt = "Camtech Logo" }) => (
  <Image
    src="/camtech.svg"
    alt={alt}
    className={styles.mainLogo}
    width={width}
    height={height}
    priority
  />
);
