import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { Form, Input, SocialIcons, Button } from "./ContactForm.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [confirmationText, setConfirmationText] = useState("");
  const [confirmationColor, setConfirmationColor] = useState("");
  const confirmationRef = useRef(undefined);

  useEffect(() => {
    setTimeout(() => {
      confirmationRef.current.style.transform = "translateY(0)";
      setTimeout(() => {
        confirmationRef.current.style.transform = "translateY(200%)";
      }, 5000);
    }, 100);
  }, [confirmationText]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service ID, template ID, and user ID
    const serviceID = "service_129crfj";
    const templateID = "template_2zxj74h";
    const userID = "54sNYMdEVGgAt2cTV";

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setConfirmationText("Mesajul a fost trimis");
        setConfirmationColor("#50C878");
        // Optionally, you can reset the form after successful submission
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        setConfirmationText(
          "A aparut o eroare, te rugam sa ne trimiti un email la contact@firstconcept.ro"
        );
        setConfirmationColor("#FF5733");
        console.error("Email could not be sent:", error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input>
        <label htmlFor="name">Nume</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Input>
      <Input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Input>
      <Input>
        <label htmlFor="phone">Telefon</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Input>
      <Input>
        <label htmlFor="message">Mesaj</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Input>
      <div className="form__bottom">
        <Button
          main="true"
          type="submit"
          style={{ padding: ".5rem", fontSize: "1rem", fontWeight: 300 }}
        >
          Trimite
        </Button>
        <SocialIcons>
          <a href="https://www.instagram.com/firstconceptinterior/">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ width: "35px", height: "35px" }}
            />
          </a>
          <a href="https://www.facebook.com/firstconceptinterior">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ width: "35px", height: "30px" }}
            />
          </a>
        </SocialIcons>
      </div>
      <div
        className="email__confirmation"
        ref={confirmationRef}
        style={{ transition: ".5s" }}
      >
        <div
          className="email__confirmation--text"
          style={{ background: confirmationColor }}
        >
          {confirmationText}
        </div>
      </div>
    </Form>
  );
};

export default ContactForm;
