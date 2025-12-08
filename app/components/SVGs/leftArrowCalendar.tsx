"use client";
import LeftArrowCalendar from '@/app/assets/icons/home/arrow-left.svg'
interface LeftArrowCalendarProps {
  className?: string;
}
export default function LeftArrowCalendarComponent({ className }: LeftArrowCalendarProps) {
    return <LeftArrowCalendar className={className} />
}