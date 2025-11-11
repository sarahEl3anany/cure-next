"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Toast } from "primereact/toast";

export const forgetPasswordSchema = z.object({
    email: z
        .string()
        .min(3, { message: "Min email length is 3 characters" })
        .max(100, { message: "Max email length is 100 characters" })
        .email({ message: "You must enter correct email." }),
});

export type ForgetPasswordFormValues = z.infer<typeof forgetPasswordSchema>;

export function useForgetPasswordForm(toastRef: React.RefObject<Toast | null>) {
    const router = useRouter();

    const form = useForm<ForgetPasswordFormValues>({
        resolver: zodResolver(forgetPasswordSchema),
        defaultValues: { email: "" },
        mode: "onChange",
    }); 

    const onSubmit = async (data: ForgetPasswordFormValues) => {
        try {
            const res = await fetch("/api/auth/forget-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: data.email }),
            });
            const result = await res.json();
            if (result.status == 200) {
                toastRef.current?.show({
                    severity: "success",
                    summary: result.message,
                    detail: `Hello ${data.email}, ${result.message}`,
                    life: 4000,
                });
                router.push("/verify-code");
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

    return {
        ...form,
        onSubmit,
    };
}