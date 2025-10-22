import React from "react";

interface PeopleInputProps {
  people: string;
  onChange: (value: string) => void;
}

export default function PeopleInput({ people, onChange }: PeopleInputProps) {
  return (
    <div>
      <label className="block mb-2 font-semibold">Number of People</label>
      <input
        value={people}
        onChange={(e) => onChange(e.target.value)}
        inputMode="numeric"
        placeholder="1"
        className="w-full p-3 rounded-md bg-slate-50 border border-slate-200"
      />
    </div>
  );
}