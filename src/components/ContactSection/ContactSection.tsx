"use client";
import { FormEvent, useState } from "react";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import { SiMinutemailer } from "react-icons/si";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      const data = await res.json();
      console.log(data)
      if (data.success) {
        setSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  const inputStyle: string =
    "w-full p-2 pl-4 outline-indigo-800 outline-2 rounded-md shadow-2xl";
  return (
    <div className="w-full my-20" id="contact">
      <SectionTitle>Let's Work Together</SectionTitle>
      <form
        className="md:w-[70%] w-full mx-auto p-4 flex flex-col gap-4 items-center mt-5"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-4 items-center w-full">
          <input
            type="text"
            placeholder="Your name .."
            className={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email .."
            className={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject .."
          className={inputStyle}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          rows={10}
          placeholder="Your Message .."
          className={inputStyle}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="primary" submit={true} disabled={loading}>
          <SiMinutemailer /> Send Message
        </Button>
        {loading && <p>Sending your message ...</p>}
        {success && <p>Sent Successfully!!</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default ContactSection;
