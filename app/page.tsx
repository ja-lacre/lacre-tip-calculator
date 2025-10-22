import Image from "next/image";
import TipCalculator from "@/components/TipCalculator";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen w-full bg-[hsl(185,41%,84%)] md:p-6">
      <div className="w-[80px] md:w-[100px] mt-10 mb-10">
        <Image
          src="/assets/logo.svg"
          alt="Splitter Logo"
          width={100}
          height={100}
          className="w-full h-auto mx-auto"
          priority
        />
      </div>

      <div className="w-full md:max-w-3xl md:rounded-2xl md:overflow-hidden">
        <TipCalculator />
      </div>
    </div>
  );
}
