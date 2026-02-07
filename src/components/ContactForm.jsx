import { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Form submitted successfully!");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
      />

      <select name="service" onChange={handleChange} required>
        <option value="">Select Service</option>
        <option>Project Loan</option>
        <option>Machinery Loan</option>
        <option>Subsidy Consultancy</option>
        <option>Insurance</option>
      </select>

      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        onChange={handleChange}
      ></textarea>

      <Button text="Submit Enquiry" type="submit" />
    </form>
  );
};

export default ContactForm;
