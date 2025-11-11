"use client";
import { Toast } from "primereact/toast";
import { Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { useRef } from "react";

import { useForgetPasswordForm } from "@/app/hooks/auth/useForgetPasswordForm";
export default function ForgetPassword() {
  const toast = useRef<Toast | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useForgetPasswordForm(toast);
  return (
    <div>
      <Toast ref={toast} />
      <div className="max-w-md w-full mt-10">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="font-georgia text-3xl text-secondary-500 text-center">
            Forget Password
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 mt-2 w-full"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <InputText
                  {...field}
                  name="email"
                  className="w-full bg-neutral-50 rounded-lg border-0 text-neutral-500 font-montserrat text-base p-2"
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
          <div className="mt-8 flex justify-center">
            <Button
              className="w-full max-w-sm flex justify-center items-center bg-primary-500 hover:bg-primary-600 
                       text-white font-medium py-2 rounded-lg transition-colors text-center"
              type="submit"
            >
              Get Verification Code
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
