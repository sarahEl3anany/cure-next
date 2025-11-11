"use client";
import { Toast } from "primereact/toast";
import { Controller } from "react-hook-form";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

import { useRef } from "react";

import { useChangePassword } from "@/app/hooks/auth/useChangePassword";

export default function ChangePassword() {
  const toast = useRef<Toast | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useChangePassword(toast);
  return (
    <div>
      <Toast ref={toast} />
      <div className="max-w-md w-full mt-10">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="font-georgia text-3xl text-secondary-500 text-center">
            Sign up
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 mt-2 w-full"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Password
                  {...field}
                  name="password"
                  className="w-full bg-neutral-50 rounded-lg text-neutral-500 font-montserrat text-base p-2"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <Password
                  {...field}
                  name="confirmPassword"
                  className="w-full bg-neutral-50 rounded-lg text-neutral-500 font-montserrat text-base p-2 "
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
          <div className="mt-8 flex justify-center">
            <Button
              className="w-full max-w-sm flex justify-center items-center bg-primary-500 hover:bg-primary-600 
               text-white font-medium py-2 rounded-lg transition-colors text-center"
              type="submit"
            >
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
