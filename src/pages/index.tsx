import styles from "./index.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h2>What we do:</h2>
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
