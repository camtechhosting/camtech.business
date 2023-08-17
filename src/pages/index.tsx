import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Camtech Technical Services</title>
        <meta name="description" content="Camtech Technical Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
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
        <p><a href="mailto:hello@Camtech.business">hello at Camtech dot business</a></p>

      </main>
    </>
  )
}
