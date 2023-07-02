import React from "react";
import "./contact.css";
import Subheading from "../../components/subheading/Subheading";

export default function Contact() {
  return (
    <section className="contact padding_x">
      <Subheading subheading={"#Contact Me"} />
      <p>Get in touch and let's create something amazing together</p>
      <div className="contact-container">
        <div className="contact-form-container">
          <form>
            <div className="row1">
              <input type="text" name="fname" placeholder="First Name" />
              <input type="text" name="lname" placeholder="Last Name" />
            </div>
            <div className="row2">
              <input
                type="email"
                name="userEmail"
                placeholder="Enter Your Email Addersh"
              />
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="row3">
              <textarea name="message"  placeholder="Type Your Message"></textarea>
            </div>
            <div className="row4">
              <button id="submit">Send Message</button>
            </div>
          </form>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1749.6848287664216!2d77.28409390304148!3d28.708496787334177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1688194245735!5m2!1sen!2sin"
            width="560px"
            height="530"
            title="embeded map"
            style={{border:'0'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
