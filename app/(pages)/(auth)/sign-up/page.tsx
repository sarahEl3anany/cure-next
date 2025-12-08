"use client";
import { Toast } from "primereact/toast";
import { Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

import { useRef } from "react";

import PhoneInput from "@/app/components/phone-input";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAuth from "@/app/components/auth/google";

import { useSignUpForm } from "@/app/hooks/auth/useSignUpForm";

export default function SignUp() {
  const toast = useRef<Toast | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useSignUpForm(toast);

  return (
    <div>
      <Toast ref={toast} />
      <div className="max-w-md w-full mt-7">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-georgia text-3xl text-secondary-500 text-center">
            Sign up
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <InputText
                  {...field}
                  name="name"
                  className="w-full bg-neutral-50 rounded-lg border-0 text-neutral-500 font-montserrat text-base p-1.5"
                  placeholder="Full Name"

                />
              )}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
          </div> 

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <InputText
                  {...field}
                  name="email"
                  className="w-full bg-neutral-50 rounded-lg border-0 text-neutral-500 font-montserrat text-base p-1.5"
                  placeholder="Email"
                />
              )}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  name="phone"
                  defaultCountry="EG"
                  className="w-full bg-neutral-50 rounded-lg border-0 text-neutral-500 font-montserrat text-base outline-none focus:ring-0 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              )}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Password
                  {...field}
                  name="password"
                  className="w-full bg-neutral-50 rounded-lg text-neutral-500 font-montserrat text-base p-1.5"
                  inputClassName="w-full outline-none focus:ring-0 focus:outline-none bg-neutral-50 border-0"
                  placeholder="Password"
                />
              )}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <Password
                  {...field}
                  name="confirmPassword"
                  className="w-full bg-neutral-50 rounded-lg text-neutral-500 font-montserrat text-base p-1.5"
                  inputClassName="w-full outline-none focus:ring-0 focus:outline-none bg-neutral-50 border-0"
                  placeholder="Confirm Password"
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="mt-4 flex justify-center">
            <Button
              className="w-full max-w-sm flex justify-center items-center bg-primary-500 hover:bg-primary-600 
               text-white font-medium py-1 rounded-lg transition-colors text-center"
              type="submit"
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
      <div className="w-full max-w-sm">
        <Divider layout="horizontal" className="m-1 p-1">
          <span className="text-neutral-500 text-base font-montserratMedium">
            or
          </span>
        </Divider>
      </div>
      <div className="w-full text-white font-medium rounded-lg transition-colors">
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
          <GoogleAuth txt="Sign up with Google" />
        </GoogleOAuthProvider>
      </div>
      <div className="w-full text-center">
        <span className="font-montserratMedium text-neutral-500 text-base">
          Already have an account!
        </span>
        <span>
          <a
            href="/sign-in"
            className="font-montserratMedium text-primary-500 text-base ml-1"
          >
            Sign in
          </a>
        </span>
      </div>
    </div>
  );
}
