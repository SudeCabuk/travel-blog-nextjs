"use client";

import Box from "@mui/material/Box";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFD43B",
    },
  },
});

export default function ScrollableTabsButtonPrevent() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Saved" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  const save = () => {
    const newItem = {};

    setSavedItems((prevItems) => [...prevItems, newItem]);

    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Saved",
    });
  };

  const handleClick = (url) => {
    window.open(url, "_blank"); // Yeni bir sekmede açar
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box className={styles.navbar}>
          <Button style={{ fontWeight: "bold" }} onClick={toggleDrawer(true)}>
            Open Drawer
          </Button>

          {/* Navigation Links */}
          <div>
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
          </div>

          <div className={styles.icon} style={{ display: "flex", gap: "10px" }}>
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

        {/* Drawer Component */}
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </ThemeProvider>
    </div>
  );
}
