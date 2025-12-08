"use client";
import Magnifer from "@/app/assets/icons/home/magnifer.svg";
interface MagniferProps {
  className?: string;
}
export default function MagniferComponent({ className }: MagniferProps) {
    return <Magnifer className={className} />
}