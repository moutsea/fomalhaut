"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyCodeButtonProps {
  code: string;
}

export function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="absolute top-2 right-2 inline-flex items-center gap-1 rounded bg-gray-700 px-2 py-1 text-xs font-medium text-white transition-colors hover:bg-gray-600"
      aria-label={copied ? "Code copied" : "Copy code to clipboard"}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-300" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
