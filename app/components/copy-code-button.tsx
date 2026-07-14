"use client";

import { useState } from "react";

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
    >
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9.75A1.75 1.75 0 0 1 10.75 8h6.5A1.75 1.75 0 0 1 19 9.75v6.5A1.75 1.75 0 0 1 17.25 18h-6.5A1.75 1.75 0 0 1 9 16.25v-6.5Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 15.5H5.75A1.75 1.75 0 0 1 4 13.75v-6.5A1.75 1.75 0 0 1 5.75 5.5h6.5A1.75 1.75 0 0 1 14 7.25V8"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
    >
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.5 9.5 17 19 7"
      />
    </svg>
  );
}

export function CopyCodeButton({ code }: { code: string }) {
  let [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch {
      // Clipboard API can be unavailable (e.g. insecure context or denied
      // permission) — fail silently rather than throwing in the UI.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied!" : "Copy code"}
      className="code-copy-button absolute top-2 right-2 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity rounded-md p-1.5"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}
