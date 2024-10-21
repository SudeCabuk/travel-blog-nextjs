"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt6YO7jwAIIatcDQp8rgWlYNYNScxG-luxw&s", // Görselinizin yolu (public klasörü içinde olabilir)
  iconSize: [38, 38], // İkonun boyutu
  iconAnchor: [19, 38], // İkonun haritadaki konum noktası
  popupAnchor: [0, -38], // Popup'ın konum noktası
});

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function MyMap() {
  const position = { lat: 48.8584, lng: 2.2945 };

  return (
    <div
      style={{
        marginBottom: "100px",
        marginTop: "100px",
        position: "relative",
        zIndex: "1",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontFamily: " Arial, Helvetica, sans-serif",
        }}
      >
        World's Best Places To Visit
      </h1>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "400px",
          width: "800px",
          marginLeft: "540px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
