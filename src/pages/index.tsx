import Image from "next/image";
import styles from "./index.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <Image
        src="/camtech.svg"
        alt="Camtech Logo"
        className={styles.mainLogo}
        width={400}
        height={100}
        priority
      />

      <h1>Camtech Technical Services</h1>
      <ul>
        <li>Computer Repair</li>
        <li>PC &amp; Apple</li>
        <li>System Upgrades</li>
        <li>Setup/Installation</li>
        <li>Networking</li>
        <li>Video Surveillance</li>
        <li>Web Design &amp; Hosting</li>
      </ul>
      <p>
        <a href="mailto:hello@Camtech.business">
          hello at Camtech dot business
        </a>
      </p>
    </div>
  );
}
