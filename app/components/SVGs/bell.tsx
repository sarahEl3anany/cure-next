"use client";
import Bell from '@/app/assets/icons/home/bell.svg'
interface BellProps {
  className?: string;
}
export default function BellComponent({ className }: BellProps) {
    return <Bell className={className} />
}