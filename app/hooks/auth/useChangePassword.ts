"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Toast } from "primereact/toast";

export const changePasswordSchema = z.object({
    password: z
      .string()
      .min(8, { message: "Enter more than 8 chars." })
      .max(256, { message: "Enter less than 256 chars." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Enter more than 8 chars." })
      .max(256, { message: "Enter less than 256 chars." }),
});

export type ChangePasswordForm = z.infer<typeof changePasswordSchema>;

export function useChangePassword(toastRef: React.RefObject<Toast | null>) {
    const router = useRouter();

    const form = useForm<ChangePasswordForm>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: { password: "", confirmPassword: "" },
        mode: "onChange",
    });

    const onSubmit = async (data: ChangePasswordForm) => {
        try {
            const res = await fetch("/api/auth/change-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password: data.password, confirmPassword: data.confirmPassword }),
            });
            const result = await res.json();
            if (result.status == 200) {
                toastRef.current?.show({
                    severity: "success",
                    summary: result.message,
                    detail: `Password changed successfully`,
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
