import React from "react";
import Image from "next/image";

interface PeopleInputProps {
  people: string;
  onChange: (value: string) => void;
  isError?: boolean;
}

export default function PeopleInput({ people, onChange, isError = false }: PeopleInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm text-[hsl(186,14%,43%)]">Number of People</label>
        {isError ? (
          <span className="text-sm text-red-500 font-bold">Can't be zero</span>
        ) : null}
      </div>

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
          onChange={(e) => {
            const v = e.target.value;
            if (v === "" || /^[0-9\b]+$/.test(v)) {
              onChange(v);
            } else {
              onChange(v);
            }
          }}
          inputMode="numeric"
          placeholder="1"
          className={`w-full text-right text-[24px] bg-[hsl(189,47%,97%)] text-[hsl(183,100%,15%)] rounded-md px-3 py-2 pl-8 focus:outline-none ${
            isError
              ? "border-2 border-red-500 focus:ring-2 focus:ring-red-200"
              : "border border-[hsl(185,41%,84%)] focus:ring-2 focus:ring-[hsl(172,67%,45%)]"
          }`}
        />
      </div>
    </div>
  );
}