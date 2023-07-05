import React, { useState } from "react";
import "./contact.css";
import Subheading from "../../components/subheading/Subheading";
import emailjs from "emailjs-com";
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    suject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation and other logic can be added here
    // ...

    // Send the email using EmailJS
    const emailParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      firstName: formData.firstName, // Include the first name in emailParams
      lastName: formData.lastName, // Include the last name in emailParams
    };

    emailjs
      .send(
        "service_caxh899",
        "template_qnuw74n",
        emailParams,
        "cHIgtR0FcPpjwrk3b"
      )
      .then((response) => {
        // Handle success here (e.g., show a success message to the user)
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        // Handle error here (e.g., show an error message to the user)
      });
  };

  return (
    <section className="contact padding_x">
      <Subheading subheading={"#Contact Me"} />
      <p>Get in touch and let's create something amazing together</p>
      <div className="contact-container">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="row1">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleInputChange}
              />
            </div>
            <div className="row2">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Addersh"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleInputChange}
              />
            </div>
            <div className="row3">
              <textarea
                name="message"
                placeholder="Type Your Message"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="row4">
              <button id="submit">
                Send Message
                <div className="overlay"></div>
              </button>
            </div>
          </form>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1749.6848287664216!2d77.28409390304148!3d28.708496787334177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1688194245735!5m2!1sen!2sin"
            width="560px"
            height="530"
            title="embeded map"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
