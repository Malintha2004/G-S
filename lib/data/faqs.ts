export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "What materials can you powder coat at Campbellfield?",
    answer:
      "We coat mild steel, structural steel, galvanised iron, aluminium profiles, stainless steel, and cast metals. Each substrate receives dedicated surface preparation—from high-pressure degreasing to abrasive grit blasting and chemical conversion.",
  },
  {
    id: "faq-2",
    question: "What is the maximum part size your oven can accommodate?",
    answer:
      "Our large-capacity batch curing oven accommodates structural steel elements, louvre assemblies, and gates up to 8.0 metres in length, 2.4 metres in height, and 2.2 metres in width.",
  },
  {
    id: "faq-3",
    question: "Can G & S fabricate the metal components before coating?",
    answer:
      "Yes! Full in-house manufacturing is our core strength. We provide certified MIG & TIG welding, sheet plate bending, punching, drilling, and custom assembly at 179 Barry Road prior to coating.",
  },
  {
    id: "faq-4",
    question: "How durable is powder coating compared to traditional wet spray paint?",
    answer:
      "Powder coating creates a cross-linked thermoset plastic skin that is significantly harder, thicker (60-90µm vs 25-35µm), and far more resistant to chipping, scratching, UV degradation, and corrosion than standard industrial spray paints.",
  },
  {
    id: "faq-5",
    question: "What is your typical turnaround timeframe?",
    answer:
      "Standard coating runs typically take 3 to 5 business days. Urgent or priority job turnaround (24 to 48 hours) is available upon request subject to bay scheduling and powder availability.",
  },
  {
    id: "faq-6",
    question: "Do you match custom architectural colors like Colorbond?",
    answer:
      "Yes. We stock and apply the complete Dulux and Interpon architectural palettes, including all standard Colorbond shades (Monument, Surfmist, Woodland Grey, Deep Ocean) in Gloss, Satin, and Matt finishes.",
  },
];
