import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: firstName,
      surname: lastName,
      email,
      message,
    };

    axios
      .post("http://localhost:8080/api/user/contact", formData)
      .then((response) => {
        console.log("Success:", response.data);
        alert("Form successfully submitted!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
      <form className="ui inverted form" onSubmit={handleSubmit}>
        <div className="field">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>Your Message:</label>
          <textarea
            style={{ height: "100px" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="inline field"></div>
        <button type="submit" className="ui submit button">
          Submit
        </button>
      </form>
    </div>
  );
}
