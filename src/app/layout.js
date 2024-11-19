"use client";

import ScrollableTabsButtonPrevent from "../Components/Header";
import styles from "./global.module.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <ScrollableTabsButtonPrevent />

        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
