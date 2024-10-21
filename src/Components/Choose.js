"use client";
import React, { useState, useEffect } from "react";

import { Carousel } from "primereact/carousel";

export default function BasicDemo() {
  const [products, setProducts] = useState([
    {
      img: "https://www.volunteerforever.com/wp-content/uploads/2019/04/Cheap-Travel-to-Europe-Section-Header.jpg",
      name: "City Travel",
    },
    {
      img: "https://colorwhistle.com/wp-content/uploads/2019/09/Tourism-Types-Culinary_Tourism.webp",
      name: "Culinary Travel",
    },
    {
      img: "https://d3d5bpai12ti8.cloudfront.net/wp-content/uploads/20180629130251/solo-traveller-woman.jpg",
      name: "Solo Travel",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUapQk7k-rm33559vNAjIobuMDOPd6FaqVwg&s",
      name: "Jungle Travel",
    },
    {
      img: "https://travelpro.ca/cdn/shop/articles/shutterstock_1463319173_1024x1024.jpg?v=1680553278",
      name: "Cultural Travel",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGY1LU5PGvZ-8QcDUhT6BJR_OPr0xn-I_3w&s",
      name: "Adventure Travel",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtp34mrS2asjFkcMTK9DoYw4u1BD90Fsbpqw&s",
      name: "Cruise Travel",
    },
  ]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const productTemplate = (product) => {
    return (
      <div
        style={{
          borderRadius: "5px",
          margin: "20px",
          textAlign: "center",
          padding: "20px",
          paddingTop: "100px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <img
            style={{
              height: "200px",

              boxShadow: " 3px 3px 5px #ccc",
              borderRadius: "5px",
            }}
            src={product.img}
            alt={product.name}
          />
        </div>
        <div>
          <h4>{product.name}</h4>
        </div>
      </div>
    );
  };

  return (
    <div className="card" id="Category">
      <Carousel
        value={products}
        numVisible={4}
        numScroll={4}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
