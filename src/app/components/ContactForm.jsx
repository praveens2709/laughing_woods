"use client";

import { useState } from "react";
import "@styles/contact.scss";
import Button from './Button';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setStatus("");
  
    const formData = {
      name,
      email,
      phone,
      address,
      message,
    };
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setStatus("Message sent successfully!");
        
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setMessage("");
      } else {
        setStatus(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("An unexpected error occurred.");
    }
  };  

  const statusClass = status?.includes("success") ? "text-success" : "text-danger";

  return (
    <div>
      <form onSubmit={handleSubmit} className="contactForm">
        <div className='d-md-flex justify-content-between gap-4'>
          <input
            type="text"
            placeholder="Your Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mb-md-3 mb-4"
          />
          <input
            type="text"
            placeholder="Your Phone*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="mb-3"
          />
        </div>
        <input
          type="email"
          placeholder="Your Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-3"
        />
        <input
          type="text"
          placeholder="Your Address*"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="mb-3"
        />
        <textarea
          rows={4}
          placeholder="Your Message*"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mb-3"
        ></textarea>

        <div className="buttons d-flex gap-3 align-items-center justify-content-between">
          <Button text="Send Message" variant="primary" animate={true} />
          {status && <span className={statusClass}>{status}</span>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
