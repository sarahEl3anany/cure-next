import Image from "next/image";
import l1 from "@/public/assets/img/sign-in/1.svg";
import l2 from "@/public/assets/img/sign-in/2.svg";
import Heart from "@/public/assets/img/sign-in/heart.svg";
export default function Login() {
  return (
    <div className="relative min-h-screen flex bg-white overflow-hidden">
      {/* Left side – form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-10 md:px-20 z-10">
        <div className="w-full flex justify-start absolute top-0 left-0 p-5 md:p-10">
          <Image
            src={Heart}
            alt="Heart"
            className="absolute left-7 top-5 w-8 h-8 object-contain"
          />
        </div>
        <div className="max-w-md w-full mt-16">
          <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="font-georgia text-3xl text-secondary-500 text-center">
              Create new account
            </h1>
            <span className="text-center text-neutral-700 font-montserrat text-xs">
              Please provide all information required to create your account
            </span>
          </div>
          <form className="space-y-4 mt-5 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <div className="flex items-center rounded-lg py-2 px-4 border border-neutral-500 bg-white">
                {/* <InputText
                  placeholder="Name"
                  name="name"
                  className="w-full font-montserratMedium border-none text-neutral-500 bg-white outline-none focus:ring-0 focus:outline-none"
                /> */}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="flex items-center rounded-lg py-2 px-4 border border-neutral-500 bg-white">
                {/* <InputText
                  placeholder="Email"
                  name="email"
                  className="w-full font-montserratMedium border-none text-neutral-500 bg-white outline-none focus:ring-0 focus:outline-none"
                /> */}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="flex items-center rounded-lg py-2 px-4 border border-neutral-500 bg-white">
                {/* <Password
                  placeholder="Password"
                  name="password"
                  className="w-full font-montserratMedium border-none text-neutral-500 bg-white"
                  inputClassName="w-full outline-none focus:ring-0 focus:outline-none"
                /> */}
              </div>
            </div>
            <span className="text-neutral-700 font-montserrat text-xs">
              Must be at least eight characters
            </span>

            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 rounded-lg transition-colors"
            >
              Create an account
            </button>
          </form>
        </div>
      </div>

      {/* Right side – images */}
      <div className="hidden md:flex w-1/2 relative items-center justify-center">
        <Image
          src={l2}
          alt="l2"
          className="absolute right-0 top-0 h-full w-auto object-contain pointer-events-none select-none"
        />
        <Image
          src={l1}
          alt="l1"
          className="absolute right-0 top-0 h-full w-auto object-contain pointer-events-none select-none"
        />
      </div>
    </div>
  );
}
