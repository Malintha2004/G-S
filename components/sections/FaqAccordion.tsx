"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "@/lib/data/faqs";
import { ChevronDown } from "lucide-react";

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-margin-lg bg-surface-container-low" id="faq">
      <div className="max-w-4xl mx-auto px-gutter">
        <div className="text-center mb-space-xl">
          <span className="font-label text-label-sm uppercase tracking-widest text-primary font-bold block mb-space-xs">
            Industrial Specs & Answers
          </span>
          <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-space-sm">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-surface-container overflow-hidden border border-outline-variant/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-space-md text-left flex items-center justify-between gap-space-sm hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <span className="font-headline text-headline-sm text-on-surface font-semibold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-space-md pb-space-md pt-0 text-on-surface-variant font-body text-body-md leading-relaxed border-t border-outline-variant/20">
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
