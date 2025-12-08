"use client";
import Settings from '@/app/assets/icons/home/settings.svg'
interface SettingsProps {
  className?: string;
}
export default function SettingsComponent({ className }: SettingsProps) {
    return <Settings className={className} />
}