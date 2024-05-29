import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import msg_icon from "../../assets/msg-icon.png";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9ffad481-dc04-4008-a974-0aeb8235d437");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      console.log("Success", data);
      setResult(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <p id="cont">CONTACT US </p>
      <h2 id="get">Get In Touch</h2>
      <div className="informations">
        <h2>Send us a message</h2>
        <img src={msg_icon} alt="" id="msgImg" />
        <p id="info">
          Feel free to reach out through contact form or find our contact
          information below . Your feedbacks , questions and suggestions are
          important to us as we strive to provide exceptional service to our
          university community .
        </p>
        <img src={mail_icon} alt="" id="i1" />
        <p id="web">Contact@rahulnanera.com</p>
        <img src={phone_icon} alt="" id="i2" />
        <p id="num">+1 123-456-7890</p>
        <img src={location_icon} alt="" id="i3" />
        <p id="add">
          77 Massachusetts Ave , Cambridge MA 02139 , United States
        </p>
      </div>
      <div className="form">
        <form onSubmit={onSubmit}>
          <div>
            <label id="l1">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <div>
            <label id="l2">Phone Number</label>
            <input
              type="number"
              id="number"
              placeholder="Enter your mobile number"
              name="email"
            />
          </div>
          <div>
            <label id="l3">Write your message here</label>
            <textarea
              placeholder="Enter your message"
              id="message"
              rows="10"
              cols="50"
              name="message"
            ></textarea>
          </div>
          <button id="btns">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
