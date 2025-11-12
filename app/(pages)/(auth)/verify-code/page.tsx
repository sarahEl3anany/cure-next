
"use client";
import { InputOtp } from 'primereact/inputotp';
import { Toast } from "primereact/toast";
import { Controller } from "react-hook-form";
import { Button } from "primereact/button";

import { useRef, useState } from "react";

import { useVerifyCodeForm } from "@/app/hooks/auth/useVerifyCodeForm";

export default function VerifyCode() {
    const toast = useRef<Toast | null>(null);
    const {
        control,
        handleSubmit,
        formState: { errors },
        onSubmit,
    } = useVerifyCodeForm(toast);
    return (
        <div>
            <Toast ref={toast} />
            <div className="max-w-md w-full mt-10">
                <div className="flex flex-col justify-center items-center space-y-5">
                    <h1 className="font-georgia text-3xl text-secondary-500 text-center">
                        Verify Code
                    </h1>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" mt-2 w-full"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Code
                        </label>
                        <Controller
                            control={control}
                            name="code"
                            render={({ field }) => (
                            <InputOtp
                                {...field}
                                name="code"
                                className="w-full bg-neutral-50 border-neutral-200 rounded-lg border text-neutral-500 font-montserrat text-base p-2"
                                length={6}
                                integerOnly
                                onChange={(e) => field.onChange(e.value)}
                            />
                            )}
                        />
                        {errors.code && (
                            <p className="mt-1 text-sm text-red-600">
                            {errors.code.message}
                            </p>
                        )}
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Button
                        className="w-full max-w-sm flex justify-center items-center bg-primary-500 hover:bg-primary-600 
                        text-white font-medium py-2 rounded-lg transition-colors text-center"
                        type="submit"
                        >
                        Verify
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}