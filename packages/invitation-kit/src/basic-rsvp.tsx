import { useState, type FormEvent } from "react";

type RsvpChoice = "yes" | "no" | null;

type BasicRsvpProps = {
  coupleNames: string;
};

/** Signature-tier RSVP: attending Yes / No only. */
export function BasicRsvp({ coupleNames }: BasicRsvpProps) {
  const [choice, setChoice] = useState<RsvpChoice>(null);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!choice || !name.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center space-y-4 py-6">
        <div className="sig-rule" />
        <p className="font-display text-[1.85rem] font-light italic text-[var(--sig-oxblood)]">
          Thank you, {name.trim()}
        </p>
        <p className="text-[var(--sig-ink-soft)] leading-relaxed">
          {choice === "yes"
            ? `We're so glad you'll celebrate with ${coupleNames}.`
            : `We'll miss you — thank you for letting us know.`}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-10">
      <div>
        <label htmlFor="rsvp-name" className="sig-eyebrow block mb-3">
          Your name
        </label>
        <input
          id="rsvp-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Full name"
          className="sig-input"
        />
      </div>

      <div>
        <p className="sig-eyebrow mb-4">Attendance</p>
        <div className="grid grid-cols-2 gap-6">
          {(
            [
              { id: "yes" as const, label: "Joyfully yes" },
              { id: "no" as const, label: "With regret" },
            ] as const
          ).map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setChoice(opt.id)}
              data-active={choice === opt.id}
              className="sig-choice text-left"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" disabled={!choice || !name.trim()} className="sig-btn">
        Send reply
      </button>
    </form>
  );
}
