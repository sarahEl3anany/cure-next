"use client";
import Calendar from "@/app/assets/icons/home/calendar.svg";
interface CalendarProps {
  className?: string;
}
export default function CalendarComponent({ className }: CalendarProps) {
    return <Calendar className={className} />
} 