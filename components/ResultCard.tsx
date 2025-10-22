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
    <section className="bg-gray-50 p-4 rounded-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-slate-500">Tip Amount</div>
            <div className="text-xs text-slate-400">/ person</div>
          </div>
          <div className="text-2xl font-bold">${tipPerPerson.toFixed(2)}</div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-slate-500">Total</div>
            <div className="text-xs text-slate-400">/ person</div>
          </div>
          <div className="text-2xl font-bold">${totalPerPerson.toFixed(2)}</div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="mt-4 w-full py-2 rounded-md bg-slate-200 font-semibold hover:bg-slate-300"
      >
        Reset
      </button>
    </section>
  );
}