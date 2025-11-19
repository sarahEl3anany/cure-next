import StarsComponent from "@/app/components/SVGs/stars";
import MapPinComponent from "@/app/components/SVGs/mapPin";
import ArrowComponent from "@/app/components/SVGs/arrow";
import Image from "next/image";
import UserAvatar from "@/app/assets/img/home/defaultUser.png";
import U1 from "@/app/assets/img/home/u1.png";
import U2 from "@/app/assets/img/home/u2.png";
function Opening() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center pt-22">
        <div className="absolute inset-0 z-1000 w-full h-screen flex items-center justify-center">
        <div className="absolute w-[900px] h-[900px] border border-neutral-800 rounded-full opacity-10"></div>
        <div className="absolute w-[700px] h-[700px] border border-neutral-800 rounded-full opacity-10"></div>
        <div className="absolute w-[500px] h-[500px] border border-neutral-800 rounded-full opacity-10"></div>
      </div>
      <div className="flex items-center rounded-3xl bg-primary-50 px-4 py-1 gap-2 shadow-sm">
        <StarsComponent className="h-4 w-4 text-primary-500" />
        <span className="text-secondary-500 font-montserrat">
          Upgrade your account
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-georgia text-secondary-500 mt-6 max-w-3xl">
        Find and book top doctors near you
      </h1>
      <p className="mt-4 text-neutral-700 text-lg mx-auto max-w-2xl leading-relaxed">
        Easily find top-rated specialists near you and book appointments in just
        a few clicks. Whether you need an in-person visit consultation, we&apos;re
        here to connect you with the right care—fast, simple, and secure.
      </p>
      <div className="absolute left-20 top-[55%] flex flex-col items-center gap-1 animate-fade">
        <MapPinComponent className="h-12 w-12" />
        <span className="font-georgia text-sm text-secondary-500 bg-neutral-50 px-4 py-1 rounded-full shadow">
          Doctors near you
        </span>
      </div>
      <div className="absolute right-24 -bottom-10 rotate-18 flex items-center gap-2">
        <ArrowComponent className="h-12 w-12 -rotate-10" />
        
        <div className="bg-neutral-50 px-5 py-2 rounded-full shadow text-secondary-500 font-montserrat">
          Book Now
        </div>
      </div>
      <div className="flex items-center gap-3 bg-primary-50 rounded-full px-6 py-2 shadow-md mt-10">
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
        <span className="text-secondary-500 font-montserrat">
          10k+ happy patients
        </span>
      </div>

    </section>
  );
}

export default Opening;
