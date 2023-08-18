import { ReactNode } from "react";
import { Inter } from "next/font/google";
import styles from "./Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: { children: ReactNode }) => (
  <main className={`${styles.main} ${inter.className}`}>{children}</main>
);
