"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import { Toast } from "primereact/toast";

import GoogleAuth from "@/app/components/auth/google";

const loginSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Min email length is 3 cheracters" })
    .max(100, { message: "Max email length is 100 cheracters" })
    .email({ message: "You must enter correct email." }),
  password: z
    .string()
    .min(1, { message: "Password is required!" })
    .min(8, { message: "Enter more than 8 chars." })
    .max(256, { message: "Enter less than 256 chars." }),
});
type LoginFormValues = z.infer<typeof loginSchema>;
export default function Login() {
  const router = useRouter();
  const toast = useRef<Toast | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });
  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });
      const result = await res.json();
      if (result.status === 200) {
        toast.current?.show({
          severity: "success",
          summary: result.message,
          detail: `Hello ${result.user.email}`,
          life: 3000,
        });
        router.push("/home");
      } else {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: result.message,
          life: 4000,
        });
      }
      // register token
    } catch (err: unknown) {
      let msg = "Something went wrong"
      if (err instanceof Error) {
        msg = err.message
      } 
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: msg,
          life: 4000,
        });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Toast ref={toast} />
      <div className="max-w-md w-full mt-10">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="font-georgia text-3xl text-secondary-500 text-center">
            Sign in
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
                  className="w-full bg-neutral-50 rounded-lg border-0 text-neutral-500 font-montserrat text-base p-2"
                  inputClassName="w-full outline-none focus:ring-0 focus:outline-none"
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
          <div className="mt-8 flex justify-center">
            <Button
              className="w-full max-w-sm flex justify-center items-center bg-primary-500 hover:bg-primary-600 
               text-white font-medium py-2 rounded-lg transition-colors text-center"
              type="submit"
              disabled={loading}
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
      <div className="w-full max-w-sm">
        <Divider layout="horizontal">
          <span className="text-neutral-500 text-base font-montserratMedium">
            or
          </span>
        </Divider>
      </div>
      <div className="w-full text-white font-medium py-2 rounded-lg transition-colors">
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
          <GoogleAuth />
        </GoogleOAuthProvider>
      </div>
      <div className="w-full text-center">
        <span className="font-montserratMedium text-neutral-500 text-base">
          Don’t have an account?
        </span>
        <span>
          <a
            href="/sign-up"
            className="font-montserratMedium text-primary-500 text-base ml-1"
          >
            Sign up
          </a>
        </span>
      </div>
    </div>
  );
}
