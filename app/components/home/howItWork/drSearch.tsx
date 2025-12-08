import Link from "next/link";
import StartSearchDoctor from "@/app/components/home/starsDoctor";
import MagniferComponent from "@/app/components/SVGs/magnifer";
import { InputText } from "primereact/inputtext";
import CardFooter from "@/app/components/home/howItWork/cardFooter";
function DrSearch() {
  return (
    <div className="border border-neutral-500 rounded-3xl p-0 mx-3 w-full max-w-[420px]">
      <div className="py-3 px-3">
        <StartSearchDoctor />
        <div className="border mx-auto border-primary-500 rounded-xl shadow-[0_0_2px_2px_#3333331A]">
          <div className="flex items-center rounded-lg px-2 py-2 shadow-sm">
            <Link href="/search-doctors">
              <MagniferComponent className="text-[#333333] mr-2 border-none h-4 w-4" />
            </Link>
            <InputText
              placeholder="Search by specialty"
              name="search"
              className="w-3/4 text-sm font-montserratMedium border-none text-[#333333] 
              placeholder:text-[#333333] outline-none focus:ring-0 focus:outline-none"
            />
          </div>
        </div>
        <StartSearchDoctor />
      </div>
      <CardFooter
        headP="Search for a Doctor"
        bodyP="Easily browse by specialty, location, or doctor name to find the right healthcare provider for your needs."
      />
    </div>
  );
}
export default DrSearch;
