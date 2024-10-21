import React from "react";
import { Fieldset } from "primereact/fieldset";
import { Avatar } from "primereact/avatar";

export default function TemplateDemo() {
  const legendTemplate = (
    <div className="flex align-items-center gap-2 px-2">
      <Avatar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt6YO7jwAIIatcDQp8rgWlYNYNScxG-luxw&s"
        shape="circle"
      />
      <span className="font-bold" style={{ paddingLeft: "10px" }}>
        Recep İvedik
      </span>
    </div>
  );

  return (
    <div
      className="card"
      style={{
        height: "200px",
        width: "800px",
        paddingTop: "100px",
        marginLeft: "550px",
        marginBottom: "300px",
      }}
    >
      <Fieldset legend={legendTemplate} style={{ marginTop: "0" }}>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Fieldset>
    </div>
  );
}
