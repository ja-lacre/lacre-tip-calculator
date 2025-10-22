import React from "react";

interface TipSelectorProps {
  selectedTip: number | null;
  onSelect: (value: number) => void;
  customTip: string;
  onCustomChange: (value: string) => void;
}

const TIP_OPTIONS = [5, 10, 15, 25, 50];

export default function TipSelector({
  selectedTip,
  onSelect,
  customTip,
  onCustomChange,
}: TipSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-[hsl(186,14%,43%)]">Select Tip %</label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {TIP_OPTIONS.map((t) => (
          <button
            key={t}
            onClick={() => onSelect(t)}
            className={`py-3 rounded-md text-[20px] md:text-[22px] font-bold ${
              selectedTip === t
                ? "bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)]"
                : "bg-[hsl(183,100%,15%)] text-white"
            } hover:bg-[hsl(172,67%,45%)] hover:text-[hsl(183,100%,15%)] transition`}
          >
            {t}%
          </button>
        ))}
        <input
          value={customTip}
          onChange={(e) => onCustomChange(e.target.value)}
          placeholder="Custom"
          className="
            text-[20px] md:text-[22px]
            text-center
            bg-[hsl(189,47%,97%)]
            text-[hsl(183,100%,15%)]
            rounded-md
            py-3
            placeholder:text-[hsl(186,14%,43%)]
            focus:outline-none
            focus:ring-2
            focus:ring-[hsl(172,67%,45%)]
          "
        />
      </div>
    </div>
  );
}