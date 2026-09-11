import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-space-md">
      <Loader2 className="w-10 h-10 text-primary animate-spin" />
      <span className="font-label text-label-md uppercase tracking-widest text-on-surface-variant">
        Loading G & S Industrial Specification...
      </span>
    </div>
  );
}
