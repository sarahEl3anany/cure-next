"use client";
import MapPin from "@/app/assets/icons/home/mapPin.svg";
interface MapPinProps {
  className?: string;
}
export default function MapPinComponent({ className }: MapPinProps) {
    return <MapPin className={className} />
}