"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export default function ApplyPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from("applications")
      .insert([{ name, email, message }]);

    if (!error) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <main style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Apply Now</h1>

      {submitted ? (
        <p style={{ color: "green" }}>Thank you! Your application has been submitted.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Full Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </label>

          <label style={{ display: "block", marginBottom: "10px" }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </label>

          <label style={{ display: "block", marginBottom: "10px" }}>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </label>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </form>
      )}
    </main>
  );
}
