import StarsComponent from "@/app/components/SVGs/stars";
import MapPinComponent from "@/app/components/SVGs/mapPin";
import Image from "next/image";
function Opening() {
    return (
        <section className="space-y-5">
            <div className="flex justify-center text-center mx-auto gap-2 items-center">
                <div className="flex items-center rounded-3xl bg-primary-50 px-3 py-1 gap-4">
                    <StarsComponent className="h-4 w-4 text-primary-500 " />
                    <span className="text-secondary-500 font-montserrat">Upgrade your account</span>
                </div>
            </div>
            <div>
                <div className="text-4xl md:text-5xl font-georgia text-secondary-500 flex justify-center text-center">
                    Find and book top doctors near you
                </div>
                <p className="mt-4 text-neutral-700 text-lg flex justify-center text-center mx-auto max-w-2xl">
                    Easily find top-rated specialists near you and book appointments in just a few clicks. Whether you need an in-person visit consultation, we're here to connect you with the right care—fast, simple, and secure.
                </p>
            </div>
            <div className="flex justify-items-start">
                <div className="flex flex-col items-center gap-1">
                    <MapPinComponent className="h-14 w-14 text-white" />
                    <span className="font-georgia text-sm text-secondary-500">Doctors near you</span>
                </div>
            </div>
            <div className="bg-white rounded-full px-5 py-2 shadow text-gray-700 text-sm flex items-center gap-3">
                <div className="flex -space-x-3">
                    {/* <StarsComponent className="h-4 w-4 text-primary-500 " /> */}
                    {/* w-8 h-8 rounded-full border-2 border-white z-10 */}
                    {/* <Image src="/img/home/doctor1.png" alt="Doctor 1" width={40} height={40} className="w-8 h-8 rounded-full border-2 border-white z-10" />
                    <Image src="/img/home/doctor2.png" alt="Doctor 2" width={40} height={40} className="w-8 h-8 rounded-full border-2 border-white z-20" />
                    <Image src="/img/home/doctor3.png" alt="Doctor 3" width={40} height={40} className="w-8 h-8 rounded-full border-2 border-white z-30" />  */}
                    <span className="text-secondary-500 font-montserrat">10k+ happy patients</span>
                </div>
            </div>
        </section>
        
    )
}

export default Opening