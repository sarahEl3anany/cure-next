"use client"
import Opening from "@/app/components/home/opening";
import ExplainWork from "@/app/components/home/explainWork";
export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center text-center mt-20">
        <Opening />
        <ExplainWork />
        <div className="mt-20"></div>
    </div>
  )
}
