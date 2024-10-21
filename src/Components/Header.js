"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFD43B",
    },
  },
});

export default function ScrollableTabsButtonPrevent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (url) => {
    window.open(url, "_blank"); // Yeni bir sekmede açar
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className={styles.navbar}
        sx={{
          width: "100%",
        }}
      >
        <a href="/" data-to-scrollspy-id="home" className={styles.nav}>
          Home
        </a>
        <a
          href="#about-me"
          data-to-scrollspy-id="about-me"
          className={styles.nav}
        >
          About Me
        </a>
        <a
          href="#category"
          data-to-scrollspy-id="category"
          className={styles.nav}
        >
          Category
        </a>
        <a href="#blog" data-to-scrollspy-id="blog" className={styles.nav}>
          Blog
        </a>
        <a
          href="#contact-me"
          data-to-scrollspy-id="contact-me"
          className={styles.nav}
        >
          Contact Me
        </a>

        <div className={styles.icon}>
          <FontAwesomeIcon
            icon={faFacebook}
            onClick={() => handleClick("https://www.facebook.com")}
            className={styles.face}
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            onClick={() => handleClick("https://www.twitter.com")}
            className={styles.face}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            onClick={() => handleClick("https://www.instagram.com")}
            className={styles.face}
          />
          <FontAwesomeIcon
            icon={faYoutube}
            onClick={() => handleClick("https://www.youtube.com")}
            className={styles.face}
          />
        </div>
      </Box>
    </ThemeProvider>
  );
}
