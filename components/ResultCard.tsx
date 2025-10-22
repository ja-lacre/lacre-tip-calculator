import React from "react";

interface ResultCardProps {
  tipPerPerson: number;
  totalPerPerson: number;
  onReset: () => void;
}

export default function ResultCard({
  tipPerPerson,
  totalPerPerson,
  onReset,
}: ResultCardProps) {
  return (
    <section
      className="
        bg-[hsl(183,100%,15%)]
        text-white
        rounded-xl
        p-6
        md:p-8
        flex
        flex-col
        justify-between
      "
    >
      <div className="space-y-6 md:space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[hsl(184,14%,56%)]">Tip Amount</p>
            <p className="text-xs text-[hsl(184,14%,56%)]">/ person</p>
          </div>
          <p className="text-[32px] md:text-[48px] text-[hsl(172,67%,45%)] leading-none">
            ${tipPerPerson.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[hsl(184,14%,56%)]">Total</p>
            <p className="text-xs text-[hsl(184,14%,56%)]">/ person</p>
          </div>
          <p className="text-[32px] md:text-[48px] text-[hsl(172,67%,45%)] leading-none">
            ${totalPerPerson.toFixed(2)}
          </p>
        </div>
      </div>

      <button
        onClick={onReset}
        className="
          mt-8
          md:mt-10
          w-full
          py-3
          rounded-md
          bg-[hsl(172,67%,45%)]
          text-[hsl(183,100%,15%)]
          text-[18px]
          uppercase
          tracking-wider
          hover:bg-[hsl(172,67%,60%)]
          transition
        "
      >
        Reset
      </button>
    </section>
  );
}