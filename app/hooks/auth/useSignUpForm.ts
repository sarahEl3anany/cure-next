"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Toast } from "primereact/toast";

export const loginSchema = z
  .object({
    name: z.string().min(1, { message: "Full name is required!" }),
    email: z
      .string()
      .min(3, { message: "Min email length is 3 characters" })
      .max(100, { message: "Max email length is 100 characters" })
      .email({ message: "You must enter correct email." }),
    password: z
      .string()
      .min(8, { message: "Enter more than 8 chars." })
      .max(256, { message: "Enter less than 256 chars." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Enter more than 8 chars." })
      .max(256, { message: "Enter less than 256 chars." }),
    phone: z
      .string()
      .min(1, { message: "Phone is required!" })
      .min(9, { message: "Phone length must be more than 9 chars." })
      .max(15, { message: "Phone length must be less than 15" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginFormValues = z.infer<typeof loginSchema>;

export function useSignUpForm(toastRef: React.RefObject<Toast | null>) {
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { name : "", email: "", password: "", confirmPassword: "", phone: "" },
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: data.name, 
            email: data.email, 
            password: data.password,
            confirmPassword: data.confirmPassword,
            phone: data.phone
        }),
      });
      const result = await res.json();
      if (result.status == 200) {
        toastRef.current?.show({
          severity: "success",
          summary: result.message,
          detail: `Hello ${result.user.email}`,
          life: 3000,
        });
        router.push("/");
      } else {
        toastRef.current?.show({
          severity: "error",
          summary: "Error",
          detail: result.message,
          life: 4000,
        });
      }
    } catch (err: unknown) {
      let msg = "Something went wrong";
      if (err instanceof Error) msg = err.message;
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: msg,
        life: 4000,
      });
    }
  };

  return { ...form, onSubmit };
}
