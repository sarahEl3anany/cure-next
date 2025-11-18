import Image from "next/image";
import UserAvatar from "@/app/assets/img/home/defaultUser.png";
import { InputText } from "primereact/inputtext";
import HeartComponent from "../SVGs/heart";
import BellComponent from "../SVGs/bell";
import MagniferComponent from "../SVGs/magnifer";
import SettingsComponent from "../SVGs/settings";
import Link from "next/link";
function Header() {
  return (
    <nav className="w-full fixed top-0 left-0 flex items-center justify-between px-5 md:px-10 py-5 z-50 bg-white">
      <Link href="/">
        <HeartComponent className="w-10 h-10 object-contain cursor-pointer" />
      </Link>
      <div className="flex justify-center items-center w-[568px]">
        <div className="flex items-center w-full rounded-lg bg-neutral-50 px-4 py-2 shadow-sm">
          <Link href="/search">
            <MagniferComponent className="text-neutral-500 mr-2 border-none h-4 w-4" />
          </Link>
          <InputText
            placeholder="Search about specialty, doctor "
            name="search"
            className="w-full text-sm font-montserratMedium border-none text-neutral-700 bg-neutral-50 outline-none focus:ring-0 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-end items-center"> 
        <Link href="/settings">
            <div className="bg-neutral-50 p-3 rounded-xl hover:bg-gray-300 transition-transform duration-200 hover:scale-105">
                <SettingsComponent className="h-4 w-4 text-black" />
            </div>
        </Link>
        <Link href="/notifications">
            <div className="bg-neutral-50 p-3 rounded-xl hover:bg-gray-300 transition-transform duration-200 hover:scale-105">
                <BellComponent className="h-4 w-4 text-black" />
            </div>
        </Link>
        <Link href="/user/profile">
            <Image src={UserAvatar} className="w-10 h-10 rounded-full hover:shadow-md hover:border border-primary-700 transition-transform duration-300 hover:scale-108" 
             alt="User avatar" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
