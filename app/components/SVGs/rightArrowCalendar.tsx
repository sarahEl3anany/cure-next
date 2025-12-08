"use client";
import RightArrowCalendar from '@/app/assets/icons/home/arrow-right.svg'
interface RightArrowCalendarProps {
  className?: string;
}
export default function RightArrowCalendarComponent({ className }: RightArrowCalendarProps) {
    return <RightArrowCalendar className={className} />
}