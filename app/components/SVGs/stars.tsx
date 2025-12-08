"use client";
import Stars from '@/app/assets/icons/home/stars.svg'
interface StarsProps {
  className?: string;
}
export default function StarsComponent({ className }: StarsProps) {
    return <Stars className={className} />
}