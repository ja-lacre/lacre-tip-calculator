import React from "react";
import Image from "next/image";

interface PeopleInputProps {
  people: string;
  onChange: (value: string) => void;
}

export default function PeopleInput({ people, onChange }: PeopleInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-[hsl(186,14%,43%)]">Number of People</label>
      <div className="relative">
        <Image
          src="/assets/icon-person.svg"
          alt="Person icon"
          width={14}
          height={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
        />
        <input
          value={people}
          onChange={(e) => onChange(e.target.value)}
          inputMode="numeric"
          placeholder="1"
          className="w-full text-right text-[24px] bg-[hsl(189,47%,97%)] text-[hsl(183,100%,15%)] rounded-md px-3 py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-[hsl(172,67%,45%)]"
        />
      </div>
    </div>
  );
}