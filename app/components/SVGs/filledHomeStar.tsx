"use client";
import FilledHomeStar from "@/app/assets/icons/home/filledHomeStar.svg";
interface FilledHomeStarProps {
  className?: string;
}
export default function FilledHomeStarComponent({ className }: FilledHomeStarProps) {
    return <FilledHomeStar className={className} />
} 