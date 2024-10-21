import React from "react";

export default function Contact() {
  return (
    <div
      id="contact-me"
      className="ui inverted segment"
      style={{ height: "1000px", padding: "300px" }}
    >
      <h1
        style={{
          color: " #FFD43B",
          textAlign: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          marginBottom: "80px",
        }}
      >
        CONTACT ME
      </h1>
      <div className="ui inverted form">
        <div className="field">
          <label>First Name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Last Name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>E-mail:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Your Message:</label>
          <textarea style={{ height: "100px" }} />
        </div>

        <div className="inline field"></div>
        <div className="ui submit button">Submit</div>
      </div>
    </div>
  );
}
