"use client";
import Heart from "@/app/assets/img/sign-in/heart.svg";
interface HeartProps {
  className?: string;
}
export default function HeartComponent({ className }: HeartProps) {
    return <Heart className={className} />
}