'use client';
import Image from "next/image";
import l1 from "@/public/assets/img/sign-in/1.svg";
import l2 from "@/public/assets/img/sign-in/2.svg";
import Heart from "@/public/assets/img/sign-in/heart.svg";
    
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

// import PhoneInput from "@/app/components/phone-input";
import GoogleAuth from "@/app/components/auth/google";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
export default function Login() {
  const router = useRouter();
  
  async function handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    // const phone = formData.get("phone");
    const username = formData.get("username");
    const password = formData.get("password");
    debugger
    const response = await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password  }),
    });
    
    if (response.ok) {
      // router.push("/verify");
    } else {
      // Handle error (e.g., show a message to the user)
      console.error("Failed to sign in");
    }
  }



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
              Sign in
            </h1>
            <span className="text-center text-neutral-700 font-montserrat text-xs">
              Please Enter your phone number
            </span>
          </div>
          <form className="space-y-6 mt-5 w-full">
            {/* <PhoneInput
              name="phone"
              className="w-full bg-neutral-50 rounded-lg border-0 text-neutral-500 font-montserrat text-base"
              placeholder="Enter your phone number"
            /> */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
            <InputText 
              name="username"
              className="w-full bg-neutral-50 rounded-lg border-0 text-neutral-500 font-montserrat text-base p-3"
              placeholder="Username"
            />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
            <Password name="password"
              className="w-full bg-neutral-50 rounded-lg border-0 text-neutral-500 font-montserrat text-base p-3"
              inputClassName="w-full outline-none focus:ring-0 focus:outline-none"
              placeholder="Password"
            />
            </div>
            <div className="mt-8 flex justify-center">
              <Button
                className="w-full max-w-sm flex justify-center items-center bg-primary-500 hover:bg-primary-600 
               text-white font-medium py-3 rounded-lg transition-colors text-center"
                onClick={(event) => handleSubmit(event as FormEvent<HTMLFormElement>)}
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
        <div className="w-full max-w-sm">
          <Divider layout="horizontal">
            <span className="text-neutral-500 text-base font-montserratMedium">or</span>
          </Divider>
        </div>
        <div className="w-full text-white font-medium py-2 rounded-lg transition-colors">
          <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            <GoogleAuth />
          </GoogleOAuthProvider>
        </div>
        <div className="w-full text-center">
          <span className="font-montserratMedium text-neutral-500 text-base">Don’t have an account?</span>
          <span>
            <a href="/sign-up" className="font-montserratMedium text-primary-500 text-base ml-1">Sign up</a>
          </span>
        </div>
      </div>

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
