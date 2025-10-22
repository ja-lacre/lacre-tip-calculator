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
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Select Tip %</label>
      <div className="grid grid-cols-3 gap-3">
        {TIP_OPTIONS.map((t) => (
          <button
            key={t}
            onClick={() => onSelect(t)}
            className={`py-2 rounded-md font-semibold ${
              selectedTip === t ? "bg-[var(--accent)] text-white" : "bg-slate-100"
            }`}
          >
            {t}%
          </button>
        ))}
        <input
          value={customTip}
          onChange={(e) => onCustomChange(e.target.value)}
          placeholder="Custom"
          inputMode="numeric"
          className="p-2 rounded-md bg-slate-50 border border-slate-200"
        />
      </div>
    </div>
  );
}