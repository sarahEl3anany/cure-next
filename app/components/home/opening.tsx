import StarsComponent from "@/app/components/SVGs/stars";
import MapPinComponent from "@/app/components/SVGs/mapPin";
import ArrowComponent from "@/app/components/SVGs/arrow";
import CalendarComponent from "@/app/components/SVGs/calendar";
import Image from "next/image";
import UserAvatar from "@/app/assets/img/home/defaultUser.png";
import U1 from "@/app/assets/img/home/u1.png";
import U2 from "@/app/assets/img/home/u2.png";
import { Button } from "primereact/button";
import Link from "next/link";
function Opening() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center">
      <div className="flex items-center rounded-3xl bg-primary-50 px-4 py-1 gap-2 shadow-sm">
        <StarsComponent className="h-4 w-4 text-primary-500" />
        <span className="text-secondary-500 font-montserrat">
          Upgrade your account
        </span>
      </div>
      <h2 className="text-base md:text-3xl font-georgia text-secondary-500 mt-6 mx-4">
        Find and book top doctors near you
      </h2>
      <p className="mt-4 text-neutral-700 text-sm md:text-lg mx-4 max-w-[600px] leading-relaxed">
        Easily find top-rated specialists near you and book appointments in just
        a few clicks. Whether you need an in-person visit consultation, we&apos;re
        here to connect you with the right care—fast, simple, and secure.
      </p>
      <div className="absolute left-[15%] top-[30%] flex-col items-center gap-1 animate-fade hidden md:flex">
        <MapPinComponent className="h-12 w-12" />
        <Link href="/search-doctors" className="font-georgia text-sm text-secondary-500 bg-neutral-50 px-4 py-1 rounded-full shadow">
          Doctors near you
        </Link>
      </div>
      <div className="absolute right-36 -bottom-[30%] rotate-[20deg] items-center gap-2 hidden md:flex">
        <ArrowComponent className="h-12 w-12 -rotate-[10deg]" />
        <Link href="/book" className="bg-neutral-50 px-5 py-2 rounded-full shadow text-secondary-500 font-montserrat">
          Book Now
        </Link>
      </div>
      <div className="flex items-center gap-3 bg-primary-50 rounded-full md:px-6 md:py-2 px-3 py-1 shadow-md mt-4">
        <div className="flex -space-x-5">
          <Image
            src={UserAvatar}
            width={40}
            height={40}
            alt="Doctor 1"
            className="w-10 h-10 rounded-full border-2 border-white z-10 object-cover"
          />
          <Image
            src={U1}
            width={40}
            height={40}
            alt="Doctor 2"
            className="w-10 h-10 rounded-full border-2 border-white z-20 object-cover"
          />
          <Image
            src={U2}
            width={40}
            height={40}
            alt="Doctor 3"
            className="w-10 h-10 rounded-full border-2 border-white z-30 object-cover"
          />
        </div>
        <span className="text-secondary-500 font-montserrat md:text-base text-sm">
          10k+ happy patients
        </span>
      </div>
      <div className="flex items-center gap-5 mt-3">
        <Button className="bg-primary-500 border-none 
        hover:bg-primary-600 font-normal justify-center items-center font-montserrat text-white 
        md:px-6 md:py-3 px-1 py-2 rounded-xl 
        shadow-lg md:text-sm text-xs md:w-40 w-30 md:h-12 h-8">Get Started</Button>
        <Button className="gap-2 bg-transparent border border-primary-500
        hover:bg-primary-50 font-montserrat text-primary-500 md:px-6 md:py-3 px-1 py-2 rounded-xl shadow-lg 
        md:text-sm text-xs md:w-40 w-30 md:h-12 h-8 font-normal justify-center items-center" 
         icon={<CalendarComponent className="h-4 w-4 text-primary-500" />}
         iconPos="left">Book Appointment</Button>
      </div>
    </section>
  );
}

export default Opening;
