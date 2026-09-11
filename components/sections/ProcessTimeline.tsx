import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  const stages = [
    {
      num: 1,
      stage: "Stage 01",
      title: "Inspection & Assessment",
      desc: "Every piece is reviewed for substrate integrity, laser scale, sharp corners, weld spatter, and oil contamination prior to chemical immersion.",
      highlight: false,
    },
    {
      num: 2,
      stage: "Stage 02",
      title: "Surface Preparation",
      desc: "Alkaline degreasing, rinse baths, mechanical abrasive profiling (sand/grit blast), and application of zinc-phosphate or chromate-free conversion coats.",
      highlight: false,
    },
    {
      num: 3,
      stage: "Stage 03",
      title: "Electrostatic Application",
      desc: "Powder particles receive up to 100kV charge via fluidised bed guns, wrapping evenly around tubular shapes and intricate louvres without runs or drips.",
      highlight: true,
    },
    {
      num: 4,
      stage: "Stage 04",
      title: "Controlled Thermal Curing",
      desc: "Loaded into our 8m batch oven. Cured at 180°C - 200°C for exact manufacturer duration to trigger full thermoset cross-linking and rock-hard molecular bond.",
      highlight: false,
    },
    {
      num: 5,
      stage: "Stage 05",
      title: "Micron QA Inspection",
      desc: "Post-cool inspection testing dry film thickness (DFT 60–90µm standard), cross-hatch adhesion, gloss retention, and pinhole porosity.",
      highlight: false,
    },
    {
      num: 6,
      stage: "Stage 06",
      title: "Protective Pack & Dispatch",
      desc: "High-density foam interleaving, stretch-wrap protection, and timber dunnage ready for direct site delivery or customer pickup from Campbellfield.",
      highlight: false,
    },
  ];

  return (
    <section className="w-full py-margin-lg bg-surface-container-low" id="process">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label text-label-sm uppercase tracking-widest text-primary font-bold block mb-space-xs">
            Engineered Workflow
          </span>
          <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tight">
            The 6-Stage Coating & Curing Protocol
          </h2>
          <p className="font-body text-body-md text-on-surface-variant mt-space-sm">
            A superior powder coating finish depends 80% on preparation and thermal accuracy. Here is how we guarantee factory-spec adhesion on every run.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {stages.map((stg) => (
            <div
              key={stg.num}
              className="p-space-lg rounded-xl bg-surface-container flex flex-col relative group border border-outline-variant/30 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-space-md">
                <span
                  className={`w-8 h-8 rounded-full font-label text-label-md flex items-center justify-center font-bold ${
                    stg.highlight
                      ? "bg-secondary-container text-on-secondary-container"
                      : "bg-surface-container-highest text-primary"
                  }`}
                >
                  {stg.num}
                </span>
                <span
                  className={`font-label text-label-sm uppercase tracking-widest ${
                    stg.highlight ? "text-secondary font-bold" : "text-tertiary"
                  }`}
                >
                  {stg.stage}
                </span>
              </div>
              <h3 className="font-headline text-headline-sm text-on-surface uppercase font-bold mb-space-xs">
                {stg.title}
              </h3>
              <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
                {stg.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Oven Capacity Callout Box */}
        <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container-highest flex flex-col md:flex-row items-center justify-between gap-space-md border border-outline-variant/50">
          <div className="flex items-center gap-space-md">
            <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
              <MoveRight className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="font-headline text-headline-sm text-on-surface uppercase font-bold">
                Have Long Lengths or Oversized Steelwork?
              </h4>
              <p className="font-body text-body-sm text-on-surface-variant">
                Our batch curing oven accommodates structural steel elements and gates up to 8.0m in length x 2.4m height.
              </p>
            </div>
          </div>
          <Link
            href="/contact#quote"
            className="px-space-md py-space-sm bg-surface text-primary font-label text-label-md uppercase font-bold rounded-lg hover:bg-surface-container-low transition-colors whitespace-nowrap"
          >
            Check Part Dimensions
          </Link>
        </div>
      </div>
    </section>
  );
};
