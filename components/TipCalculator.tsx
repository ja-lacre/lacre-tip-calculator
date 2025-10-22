"use client";
import React, { useMemo, useState } from "react";
import BillInput from "./BillInput";
import TipSelector from "./TipSelector";
import PeopleInput from "./PeopleInput";
import ResultCard from "./ResultCard";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("1");
  const [customTip, setCustomTip] = useState("");
  const [selectedTip, setSelectedTip] = useState<number | null>(null);

  const billNum = parseFloat(bill || "0");
  const peopleNumRaw = Number(people || 0);
  const isPeopleZero = people !== "" && peopleNumRaw === 0;
  const peopleNum = Math.max(1, Math.floor(peopleNumRaw || 0));
  const tipPercent = selectedTip ?? (customTip ? Number(customTip) : null);

  const { tipPerPerson, totalPerPerson } = useMemo(() => {
    if (!billNum || isPeopleZero || !peopleNum || !tipPercent) {
      return { tipPerPerson: 0, totalPerPerson: 0 };
    }
    const tipTotal = billNum * (tipPercent / 100);
    const tipPerPerson = tipTotal / peopleNum;
    const totalPerPerson = (billNum + tipTotal) / peopleNum;
    return { tipPerPerson, totalPerPerson };
  }, [billNum, peopleNum, tipPercent, isPeopleZero]);

  function reset() {
    setBill("");
    setPeople("1");
    setCustomTip("");
    setSelectedTip(null);
  }

  return (
    <div
      className="
        bg-white
        w-full
        md:max-w-3xl
        grid
        grid-cols-1
        md:grid-cols-2
        gap-8
        md:gap-10
        p-8
        md:p-10
        md:rounded-2xl
        rounded-t-3xl
        shadow-xl
      "
    >
      <section className="flex flex-col justify-between gap-8 md:gap-10">
        <BillInput bill={bill} onChange={setBill} />
        <TipSelector
          selectedTip={selectedTip}
          onSelect={setSelectedTip}
          customTip={customTip}
          onCustomChange={setCustomTip}
        />
        <PeopleInput people={people} onChange={setPeople} isError={isPeopleZero} />
      </section>

      <ResultCard
        tipPerPerson={tipPerPerson}
        totalPerPerson={totalPerPerson}
        onReset={reset}
      />
    </div>
  );
}
