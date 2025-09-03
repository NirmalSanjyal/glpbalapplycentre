"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export default function ApplyPage() {
  return (
    <main style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Apply Now</h1>

      <form>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Full Name:
          <input
            type="text"
            name="name"
            required
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Email:
          <input
            type="email"
            name="email"
            required
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Message:
          <textarea
            name="message"
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
    </main>
  );
}
