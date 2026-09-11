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
      "We coat mild steel, structural steel, galvanised iron, aluminium profiles, stainless steel, and cast metals. Each substrate receives dedicated surface preparation—from high-pressure degreasing to abrasive sandblasting and multi-stage chemical pretreatment wash.",
  },
  {
    id: "faq-2",
    question: "What is the maximum part size your batch oven can accommodate?",
    answer:
      "Our large-capacity batch curing oven accommodates structural metalwork, architectural louvre assemblies, posts, and commercial frames up to 8.0 metres in length, 2.4 metres in height, and 2.2 metres in width.",
  },
  {
    id: "faq-3",
    question: "Is abrasive sandblasting included in the powder coating process?",
    answer:
      "Yes. Surface preparation is a fundamental step of our powder coating service at 179 Barry Road. We perform abrasive grit sandblasting to remove rust, mill scale, and old coatings, creating a clean mechanical anchor profile for maximum powder paint adhesion.",
  },
  {
    id: "faq-4",
    question: "How durable is powder coating compared to traditional wet spray paint?",
    answer:
      "Powder coating creates a cross-linked thermoset polymer barrier that is significantly harder, thicker (60–90µm vs 25–35µm), and far more resistant to chipping, scratching, UV degradation, and corrosion than standard liquid spray paints.",
  },
  {
    id: "faq-5",
    question: "What is your typical turnaround timeframe for powder coating jobs?",
    answer:
      "Standard powder coating runs typically take 3 to 5 business days. Rapid turnaround options are available upon request depending on batch oven scheduling and powder inventory.",
  },
  {
    id: "faq-6",
    question: "Do you match custom architectural colours like Colorbond & RAL?",
    answer:
      "Yes. We stock and apply the full Dulux and Interpon powder matrices, including all standard Colorbond shades (Monument, Surfmist, Woodland Grey, Deep Ocean, etc.) in Gloss, Satin, Matt, and textured finishes.",
  },
];
