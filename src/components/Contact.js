// --- Core Modules ---
import React, { useEffect, useState, useRef } from "react";
// --- CSS & Images ---
import "../styles/Contact.css";
import { TweenMax } from "gsap";
// --- Icons ---
import BlockIcon from "@material-ui/icons/Block";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
// --- EmailJS ---
import emailjs from "emailjs-com";
import { serviceID, templateID, userID } from "../config/emailJS";

// Functional ReactJS component, that renders the contact page.
const Contact = () => {
  // Animation (bottom to top).
  const contactH2 = useRef(null);
  const contactForm = useRef(null);
  useEffect(() => {
    TweenMax.fromTo(
      contactH2.current,
      1,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out" }
    );
    TweenMax.fromTo(
      contactForm.current,
      1,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.3, ease: "power2.out" }
    );
  }, []);

  // React Hook (State) to follow the inputes.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // React Hook (State) to follow the operation status.
  const [sendEmailStatus, setSendEmailStatus] = useState("");
  const [submitButtonStatus, setSubmitButtonStatus] = useState("active");

  // Sending the inputes as an email.
  const sendEmail = (e) => {
    e.preventDefault(e.target);
    // Check if the submit button is disabled or not.
    if (submitButtonStatus === "disabled") {
      return;
    }
    setSubmitButtonStatus("disabled"); // <-- Prevent more clicks.
    setSendEmailStatus("loading"); // <-- Set status to loading.
    // Send the email.
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        result.text === "OK"
          ? setSendEmailStatus("succeed") // <-- Set status to succeed.
          : setSendEmailStatus("failed"); // <-- Set status to failed.
      },
      (error) => {
        setSendEmailStatus("failed"); // <-- Set status to failed.
        setSubmitButtonStatus("active"); // <-- Activate the button again.
      }
    );
  };

  // Activates the sending funcitonality if the input is changed.
  const updateSendStatus = () => {
    // Don't activate if it is loading.
    if (sendEmailStatus === "loading") {
      return;
    }
    setSendEmailStatus(""); // <-- Clear the sending status.
    if (submitButtonStatus === "disabled") {
      setSubmitButtonStatus("active"); // Activate the button.
    }
  };

  // Return the element.
  return (
    <div className="contact">
      <h3 ref={contactH2}>CONTACT ME VIA THE FORM BELOW.</h3>
      <form onSubmit={sendEmail} ref={contactForm}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            updateSendStatus();
          }}
          placeholder="Please type your name here..."
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            updateSendStatus();
          }}
          placeholder="Please type your email address here..."
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            updateSendStatus();
          }}
          placeholder="Please type your message here..."
          required
        />
        <button type="submit">
          <CheckCircleOutlineIcon
            style={{
              display: sendEmailStatus === "succeed" ? "block" : "none",
            }}
            fontSize="small"
          />
          <BlockIcon
            style={{
              display: sendEmailStatus === "failed" ? "block" : "none",
            }}
            fontSize="small"
          />
          <div className="contact__submitSpin">
            <AutorenewIcon
              style={{
                display: sendEmailStatus === "loading" ? "block" : "none",
              }}
              fontSize="small"
            />
          </div>
          <div
            style={{
              display: submitButtonStatus === "disabled" ? "block" : "none",
            }}
            className="contact__submitDisabled"
          ></div>
          Send
        </button>
      </form>
    </div>
  );
};

// Export the component.
export default Contact;
