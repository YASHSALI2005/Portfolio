import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

import { profile } from "./data";

// Same EmailJS env vars as the old site — set them in .env / Vercel project settings.
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const field =
  "w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm outline-none transition placeholder:text-neutral-500 focus:border-neutral-500";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      // Template variable names match the existing EmailJS template.
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.get("name"),
          from_email: data.get("email"),
          message: data.get("message"),
          to_name: profile.name,
          to_email: profile.email,
        },
        publicKey
      );
      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" aria-label="Your name" className={field} />
        <input name="email" type="email" required placeholder="Your email" aria-label="Your email" className={field} />
      </div>
      <textarea name="message" required rows={5} placeholder="What's on your mind?" aria-label="Message" className={field} />
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-white disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" className="text-sm text-neutral-400">
          {status === "sent" && "Thanks — I'll get back to you soon."}
          {status === "error" && (
            <>
              Couldn't send. Email me at{" "}
              <a href={`mailto:${profile.email}`} className="underline">
                {profile.email}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
};
