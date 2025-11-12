import Image from "next/image";
import Heart from "@/app/assets/img/sign-in/heart.svg";
import UserAvatar from "@/app/assets/img/home/defaultUser.png";
import { InputText } from "primereact/inputtext";
import Bell from '@/app/assets/icons/home/bell.svg'
import Settings from '@/app/assets/icons/home/settings.svg'

function Header() {
  return (
    <div className="w-full flex items-center justify-between px-5 md:px-10 py-5 absolute top-0 left-0 z-50">
      <Image
        src={Heart}
        alt="Heart"
        loading="eager"
        className="w-8 h-8 object-contain"
      />
      <div className="flex justify-center items-center w-[568px]">
        <div className="flex items-center w-full rounded-lg bg-neutral-50 px-4 py-2 shadow-sm">
          <a href="/search">
            <i className="pi pi-search text-neutral-500 mr-2 border-none"></i>
          </a>
          <InputText
            placeholder="Search about specialty, doctor "
            name="search"
            className="w-full text-sm font-montserratMedium border-none text-neutral-700 bg-neutral-50 outline-none focus:ring-0 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-end items-center"> 
        <a href="/settings">
            <div className="bg-neutral-50 p-3 rounded-xl">
                <Image src={Settings} className="w-5 h-5 text-black" alt="Settings" />
            </div>
        </a>
        <a href="/notifications">
            <div className="bg-neutral-50 p-3 rounded-xl">
                <Image src={Bell} className="w-5 h-5 text-black" alt="Bell" />
            </div>
        </a>
        <a href="/user/profile">
            <Image src={UserAvatar} className="w-10 h-10 rounded-full" 
             alt="User avatar" />
        </a>
      </div>
    </div>
  );
}

export default Header;
