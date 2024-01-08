import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Header } from "./Header";
import { Nav } from "./Nav";
import styles from "./Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header>
      <Nav />
    </Header>
    <main className={`${styles.main} ${inter.className}`}>{children}</main>
  </>
);
