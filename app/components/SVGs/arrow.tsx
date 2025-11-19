"use client";
import Arrow from "@/app/assets/icons/home/arrow.svg";
interface ArrowProps {
  className?: string;
}
export default function ArrowComponent({ className }: ArrowProps) {
    return <Arrow className={className} />
} 