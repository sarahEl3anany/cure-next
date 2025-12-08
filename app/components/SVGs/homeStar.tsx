"use client";
import HomeStar from "@/app/assets/icons/home/homeStar.svg";
interface HomeStarProps {
  className?: string;
}
export default function HomeStarComponent({ className }: HomeStarProps) {
    return <HomeStar className={className} />
} 