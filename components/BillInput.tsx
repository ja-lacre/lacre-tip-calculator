import React from "react";

interface BillInputProps {
  bill: string;
  onChange: (value: string) => void;
}

export default function BillInput({ bill, onChange }: BillInputProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Bill</label>
      <input
        inputMode="decimal"
        value={bill}
        onChange={(e) => onChange(e.target.value)}
        placeholder="0.00"
        className="w-full p-3 rounded-md bg-slate-50 border border-slate-200"
      />
    </div>
  );
}