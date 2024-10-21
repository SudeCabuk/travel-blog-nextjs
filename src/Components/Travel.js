"use client";
import React, { useRef } from "react";
import { Card } from "primereact/card";
import { SplitButton } from "primereact/splitbutton";
import { Toast } from "primereact/toast";
import styles from "./Travel.module.css";

export default function Travel() {
  const cardData = [
    {
      title: "Maldivler",
      subTitle: "Subtitle 1",
      imgSrc:
        "https://www.wts.web.tr/wp-content/uploads/2024/08/maldivler-balayi-turu-31-wts.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
    },
    {
      title: "Paris",
      subTitle: "Eiffel Tower",
      imgSrc:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=1400&s=1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
    },
    {
      title: "Hindistan",
      subTitle: "Tac Mahal",
      imgSrc:
        "https://i.tmgrup.com.tr/fikriyat//album/2018/02/05/osmanli-mimarisinin-sinir-asan-eseri-tac-mahal-1517844503356.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
    },
    {
      title: "Las Vegas",
      subTitle: "Subtitle 4",
      imgSrc:
        "https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,f_jpg,h_757,q_65,w_640/v1/clients/lasvegas/RR_LVCVA_Strip_Caesars_Bellagio_Red_White_Blue_Eiffel_Paris_SM_7a0eaeeb-7578-4bae-9659-5361fcadf20f.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
    },
    {
      title: "İstanbul",
      subTitle: "Subtitle 5",
      imgSrc:
        "https://visitturkey.in/wp-content/uploads/2024/07/beyoglu-istanbul.webp",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
    },
    {
      title: "Thailand",
      subTitle: "Subtitle 6",
      imgSrc:
        "https://peratur.com.tr/wp-content/uploads/2024/08/eyJpZGVudGlmaWVyIjoxMTc3NywidHlwZSI6ImFzc2V0In0-1.webp",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
    },
  ];
  const toast = useRef(null);
  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Updated",
          detail: "Updated",
        });
      },
    },
    {
      label: "Delete",
      icon: "pi pi-times",
      command: () => {
        toast.current.show({
          severity: "warn",
          summary: "Delete",
          detail: "Deleted",
        });
      },
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {
        window.location.href = "https://reactjs.org/";
      },
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
      command: () => {},
    },
  ];
  const save = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Saved",
    });
  };

  return (
    <div className={styles.div} id="Blog">
      {cardData.map((card, index) => (
        <Card
          key={index} // Her kart için benzersiz key
          title={card.title}
          subTitle={card.subTitle}
          header={<img alt="Card" src={card.imgSrc} className={styles.img} />}
          className={styles.card}
          footer={
            <>
              <div className="card flex justify-content-center">
                <Toast ref={toast}></Toast>
                <SplitButton
                  label="Save"
                  icon="pi pi-check"
                  dropdownIcon="pi pi-cog"
                  onClick={save}
                  model={items}
                />
              </div>
            </>
          }
        >
          <p className="m-0">{card.content}</p>
        </Card>
      ))}
    </div>
  );
}
