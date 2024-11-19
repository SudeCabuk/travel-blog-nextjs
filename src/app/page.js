"use client";
import Travel from "../Components/Travel";
import BasicDemo from "../Components/Choose";
import styles from "./page.module.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import "leaflet/dist/leaflet.css";
import MapPage from "../Components/Map";
import TemplateDemo from "../Components/Aboutme";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Contact from "../Components/Contact";
import "semantic-ui-css/semantic.min.css";
import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
    <>
      <ScrollSpy>
        <div>
          <div className={styles.home}>
            <div className={styles.container}>
              <h1 className={styles.baslik}>Where will you go next?</h1>
            </div>
          </div>
        </div>
        <div id="home"></div>

        <div>
          <TemplateDemo />
        </div>
        <div id="about-me"></div>
        <div>
          <BasicDemo />
        </div>
        <div id="category"></div>
        <div>
          <PrimeReactProvider>
            <Travel />
          </PrimeReactProvider>
        </div>
        <div id="blog"></div>

        <MapPage />
        <div id="contact-me">
          <Contact />
        </div>
      </ScrollSpy>
    </>
  );
}
